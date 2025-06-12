import ImageDownloader from "@/components/ImageDownloader";
import ImageDiagnostic from "@/components/ImageDiagnostic";
import QueenOfSwordsTest from "@/components/QueenOfSwordsTest";
import LocalSetupHelper from "@/components/LocalSetupHelper";

/**
 * Download page for tarot card images
 * Provides an interface to download all Rider-Waite tarot images
 */
const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mystical-900 via-cosmic-900 to-mystical-800 py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gold-200 mb-4">
            Tarot Card Images
          </h1>
          <p className="text-mystical-200 text-lg max-w-2xl mx-auto">
            Download the complete collection of Rider-Waite tarot card images
            for your local use. All images are sourced from Wikimedia Commons
            and are in the public domain.
          </p>
        </div>

        <ImageDownloader />

        {/* Local Setup Guide */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gold-200 mb-4">
              Local Setup Guide
            </h2>
            <p className="text-mystical-200 text-lg max-w-2xl mx-auto">
              Step-by-step instructions for setting up downloaded images in your
              project for faster loading and offline usage.
            </p>
          </div>

          <LocalSetupHelper />
        </div>

        {/* Image Diagnostic Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gold-200 mb-4">
              Image Status Checker
            </h2>
            <p className="text-mystical-200 text-lg max-w-2xl mx-auto">
              Verify which tarot card images are loading correctly and identify
              any missing or broken image links.
            </p>
          </div>

          <ImageDiagnostic />
        </div>

        {/* Queen of Swords Specific Test */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gold-200 mb-4">
              Queen of Swords Test
            </h2>
            <p className="text-mystical-200 text-lg max-w-2xl mx-auto">
              Specific test for the Queen of Swords card image to verify if it's
              loading correctly.
            </p>
          </div>

          <QueenOfSwordsTest />
        </div>
      </div>
    </div>
  );
};

export default Download;
