import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WIKIMEDIA_TAROT_IMAGES } from "@/lib/tarot-images";
import { TAROT_CARDS } from "@/lib/tarot-data";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

/**
 * Quick test component specifically for Queen of Swords image
 */
const QueenOfSwordsTest = () => {
  const [imageStatus, setImageStatus] = useState<
    "loading" | "success" | "error" | "not-tested"
  >("not-tested");
  const [testUrl, setTestUrl] = useState<string>("");

  const queenOfSwords = TAROT_CARDS.find((card) => card.id === "queen-swords");
  const directUrl = WIKIMEDIA_TAROT_IMAGES["queen-swords"];

  const testImage = async () => {
    setImageStatus("loading");
    setTestUrl(directUrl);

    try {
      const response = await fetch(directUrl, { method: "HEAD" });
      setImageStatus(response.ok ? "success" : "error");
    } catch (error) {
      setImageStatus("error");
    }
  };

  const getStatusIcon = () => {
    switch (imageStatus) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-600" />;
      case "loading":
        return (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
        );
      default:
        return <RefreshCw className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Queen of Swords Image Test
          {getStatusIcon()}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Card Info */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Card Information:</h4>
          <div className="space-y-1 text-sm">
            <p>
              <strong>ID:</strong> {queenOfSwords?.id}
            </p>
            <p>
              <strong>Name:</strong> {queenOfSwords?.name}
            </p>
            <p>
              <strong>Type:</strong> {queenOfSwords?.type} arcana
            </p>
            <p>
              <strong>Suit:</strong> {queenOfSwords?.suit}
            </p>
          </div>
        </div>

        {/* URL Info */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold mb-2">Image URL:</h4>
          <code className="text-xs break-all bg-white p-2 rounded border">
            {directUrl}
          </code>
        </div>

        {/* Test Button */}
        <div className="flex items-center gap-4">
          <Button
            onClick={testImage}
            disabled={imageStatus === "loading"}
            variant="outline"
          >
            {imageStatus === "loading" ? "Testing..." : "Test Image URL"}
          </Button>

          {imageStatus !== "not-tested" && (
            <Badge
              variant={imageStatus === "success" ? "default" : "destructive"}
            >
              {imageStatus === "success"
                ? "✓ Image loads successfully"
                : "✗ Image failed to load"}
            </Badge>
          )}
        </div>

        {/* Actual Image Test */}
        {testUrl && (
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Visual Test:</h4>
            <div className="flex items-center gap-4">
              <img
                src={testUrl}
                alt="Queen of Swords"
                className="w-32 h-48 object-cover border rounded-lg"
                onLoad={() => console.log("Queen of Swords image loaded")}
                onError={() => console.log("Queen of Swords image failed")}
              />
              <div className="text-sm text-gray-600">
                <p>
                  If you can see the Queen of Swords card image here, it's
                  working correctly.
                </p>
                <p className="mt-2">
                  If you see a broken image icon, there's an issue with the URL
                  or the image file.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Debug Info */}
        <details className="text-xs">
          <summary className="cursor-pointer font-medium">
            Debug Information
          </summary>
          <div className="mt-2 p-3 bg-gray-100 rounded">
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(
                {
                  cardFound: !!queenOfSwords,
                  imageUrlFromMap: directUrl,
                  imageUrlFromCard: queenOfSwords?.imageUrl,
                  urlsMatch: directUrl === queenOfSwords?.imageUrl,
                },
                null,
                2,
              )}
            </pre>
          </div>
        </details>
      </CardContent>
    </Card>
  );
};

export default QueenOfSwordsTest;
