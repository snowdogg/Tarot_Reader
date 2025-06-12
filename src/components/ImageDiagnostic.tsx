import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TAROT_CARDS } from "@/lib/tarot-data";
import { WIKIMEDIA_TAROT_IMAGES } from "@/lib/tarot-images";
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react";

interface ImageStatus {
  cardId: string;
  cardName: string;
  imageUrl: string;
  status: "loading" | "success" | "error" | "missing";
}

/**
 * Diagnostic component to check which tarot card images are working
 */
const ImageDiagnostic = () => {
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const checkImages = async () => {
    setIsChecking(true);

    const statuses: ImageStatus[] = TAROT_CARDS.map((card) => ({
      cardId: card.id,
      cardName: card.name,
      imageUrl: card.imageUrl,
      status: "loading" as const,
    }));

    setImageStatuses(statuses);

    // Check each image
    const updatedStatuses = await Promise.all(
      statuses.map(async (status) => {
        try {
          if (!status.imageUrl) {
            return { ...status, status: "missing" as const };
          }

          const response = await fetch(status.imageUrl, { method: "HEAD" });
          return {
            ...status,
            status: response.ok ? ("success" as const) : ("error" as const),
          };
        } catch (error) {
          return { ...status, status: "error" as const };
        }
      }),
    );

    setImageStatuses(updatedStatuses);
    setIsChecking(false);
  };

  useEffect(() => {
    checkImages();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "missing":
        return <AlertCircle className="h-4 w-4 text-orange-600" />;
      default:
        return (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        );
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-50 text-green-800 border-green-200";
      case "error":
        return "bg-red-50 text-red-800 border-red-200";
      case "missing":
        return "bg-orange-50 text-orange-800 border-orange-200";
      default:
        return "bg-blue-50 text-blue-800 border-blue-200";
    }
  };

  const successCount = imageStatuses.filter(
    (status) => status.status === "success",
  ).length;
  const errorCount = imageStatuses.filter(
    (status) => status.status === "error",
  ).length;
  const missingCount = imageStatuses.filter(
    (status) => status.status === "missing",
  ).length;

  return (
    <Card className="max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6" />
            Tarot Card Image Diagnostic
          </CardTitle>
          <Button onClick={checkImages} disabled={isChecking} variant="outline">
            <RefreshCw
              className={`h-4 w-4 mr-2 ${isChecking ? "animate-spin" : ""}`}
            />
            Recheck Images
          </Button>
        </div>

        {imageStatuses.length > 0 && (
          <div className="flex gap-4 text-sm">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              ✓ Working: {successCount}
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-700">
              ✗ Failed: {errorCount}
            </Badge>
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              ⚠ Missing: {missingCount}
            </Badge>
            <Badge variant="outline">Total: {imageStatuses.length}</Badge>
          </div>
        )}
      </CardHeader>

      <CardContent>
        {imageStatuses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">
              Click "Recheck Images" to start diagnosis
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {imageStatuses.map((status) => (
              <div
                key={status.cardId}
                className={`p-3 rounded-lg border ${getStatusColor(
                  status.status,
                )}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {status.cardName}
                    </p>
                    <p className="text-xs opacity-75 font-mono">
                      {status.cardId}
                    </p>
                  </div>
                  {getStatusIcon(status.status)}
                </div>

                {status.status === "error" && (
                  <div className="mt-2">
                    <p className="text-xs opacity-75">
                      URL: {status.imageUrl.slice(0, 50)}...
                    </p>
                  </div>
                )}

                {status.status === "missing" && (
                  <div className="mt-2">
                    <p className="text-xs opacity-75">No image URL found</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Problem Cards Section */}
        {errorCount > 0 || missingCount > 0 ? (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">
              Cards with Image Issues:
            </h3>
            <div className="space-y-1 text-sm">
              {imageStatuses
                .filter(
                  (status) =>
                    status.status === "error" || status.status === "missing",
                )
                .map((status) => (
                  <div key={status.cardId} className="flex items-center gap-2">
                    {getStatusIcon(status.status)}
                    <span className="font-medium">{status.cardName}</span>
                    <code className="text-xs bg-yellow-100 px-1 rounded">
                      {status.cardId}
                    </code>
                    {status.status === "error" && (
                      <span className="text-xs text-yellow-700">
                        (URL exists but image failed to load)
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm">
              🎉 All tarot card images are loading successfully!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageDiagnostic;
