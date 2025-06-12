import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Download, Check, AlertCircle } from "lucide-react";
import { WIKIMEDIA_TAROT_IMAGES } from "@/lib/tarot-images";

interface DownloadStatus {
  [key: string]: "pending" | "downloading" | "success" | "error";
}

/**
 * ImageDownloader component for downloading Rider-Waite tarot images
 * This component helps users download the complete set of tarot card images
 * from Wikimedia Commons to use locally in the application.
 */
const ImageDownloader = () => {
  const [downloadStatus, setDownloadStatus] = useState<DownloadStatus>({});
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const imageEntries = Object.entries(WIKIMEDIA_TAROT_IMAGES);
  const totalImages = imageEntries.length;

  const downloadImage = async (cardId: string, url: string): Promise<void> => {
    setDownloadStatus((prev) => ({ ...prev, [cardId]: "downloading" }));

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      // Create a download link
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${cardId}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

      setDownloadStatus((prev) => ({ ...prev, [cardId]: "success" }));
    } catch (error) {
      console.error(`Failed to download ${cardId}:`, error);
      setDownloadStatus((prev) => ({ ...prev, [cardId]: "error" }));
    }
  };

  const downloadAllImages = async () => {
    setIsDownloading(true);
    setProgress(0);

    for (let i = 0; i < imageEntries.length; i++) {
      const [cardId, url] = imageEntries[i];
      await downloadImage(cardId, url);
      setProgress(((i + 1) / totalImages) * 100);

      // Small delay to be respectful to the server
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    setIsDownloading(false);
  };

  const downloadSingleImage = async (cardId: string, url: string) => {
    await downloadImage(cardId, url);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "downloading":
        return (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        );
      case "success":
        return <Check className="h-4 w-4 text-green-600" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Download className="h-4 w-4 text-gray-400" />;
    }
  };

  const successCount = Object.values(downloadStatus).filter(
    (status) => status === "success",
  ).length;

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-6 w-6" />
          Rider-Waite Tarot Images Downloader
        </CardTitle>
        <p className="text-muted-foreground">
          Download all {totalImages} Rider-Waite tarot card images from
          Wikimedia Commons. These images are in the public domain and free to
          use.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Download Progress</span>
            <Badge
              variant={successCount === totalImages ? "default" : "secondary"}
            >
              {successCount} / {totalImages} completed
            </Badge>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Download Controls */}
        <div className="flex gap-4">
          <Button
            onClick={downloadAllImages}
            disabled={isDownloading}
            className="flex-1"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download All Images
              </>
            )}
          </Button>
        </div>

        {/* Individual Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {imageEntries.map(([cardId, url]) => (
            <div
              key={cardId}
              className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                {getStatusIcon(downloadStatus[cardId])}
                <span className="text-sm font-mono">{cardId}</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => downloadSingleImage(cardId, url)}
                disabled={
                  downloadStatus[cardId] === "downloading" || isDownloading
                }
              >
                Download
              </Button>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">
            Instructions for Local Usage:
          </h4>
          <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
            <li>
              Click "Download All Images" to download all tarot card images to
              your downloads folder
            </li>
            <li>
              Create the following folder structure in your public directory:
              <code className="bg-blue-100 px-1 rounded text-xs ml-1">
                public/assets/tarot/major-arcana/
              </code>
              and
              <code className="bg-blue-100 px-1 rounded text-xs ml-1">
                public/assets/tarot/minor-arcana/[suit]/
              </code>
            </li>
            <li>
              Move the downloaded images to the appropriate folders according to
              the naming convention
            </li>
            <li>
              The app will automatically use local images when available,
              falling back to Wikimedia URLs
            </li>
          </ol>
        </div>

        {/* Legal Notice */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-800 mb-2">Legal Notice:</h4>
          <p className="text-sm text-gray-600">
            These Rider-Waite tarot card images are sourced from Wikimedia
            Commons and are in the public domain. The original deck was
            published in 1909 and designed by Pamela Colman Smith under the
            direction of Arthur Edward Waite. You are free to use these images
            for any purpose without restriction.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageDownloader;
