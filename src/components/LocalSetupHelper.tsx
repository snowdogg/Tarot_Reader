import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TAROT_CARDS } from "@/lib/tarot-data";
import {
  Copy,
  FolderOpen,
  Download,
  CheckCircle,
  ArrowRight,
  FileText,
} from "lucide-react";

/**
 * Helper component to guide users through local image setup
 */
const LocalSetupHelper = () => {
  const [copiedScript, setCopiedScript] = useState(false);

  // Generate the complete file mapping for user reference
  const generateFileMapping = () => {
    const mapping: { [key: string]: string } = {};

    TAROT_CARDS.forEach((card) => {
      if (card.type === "major") {
        const number = card.number?.toString().padStart(2, "0");
        mapping[`${card.id}.jpg`] = `major-arcana/${number}-${card.id}.jpg`;
      } else {
        const suitFolder = card.suit;
        let fileName: string;

        if (card.id.includes("ace")) {
          fileName = "ace.jpg";
        } else if (card.id.includes("page")) {
          fileName = "page.jpg";
        } else if (card.id.includes("knight")) {
          fileName = "knight.jpg";
        } else if (card.id.includes("queen")) {
          fileName = "queen.jpg";
        } else if (card.id.includes("king")) {
          fileName = "king.jpg";
        } else {
          // Extract number from card names like "two-wands", "ten-cups"
          const cardName = card.id.split("-")[0];
          const numberMap: { [key: string]: string } = {
            two: "02",
            three: "03",
            four: "04",
            five: "05",
            six: "06",
            seven: "07",
            eight: "08",
            nine: "09",
            ten: "10",
          };
          fileName = `${numberMap[cardName] || cardName}.jpg`;
        }

        mapping[`${card.id}.jpg`] = `minor-arcana/${suitFolder}/${fileName}`;
      }
    });

    return mapping;
  };

  const fileMapping = generateFileMapping();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const folderStructureScript = `
# Create the folder structure in your project's public directory
mkdir -p public/assets/tarot/major-arcana
mkdir -p public/assets/tarot/minor-arcana/wands
mkdir -p public/assets/tarot/minor-arcana/cups
mkdir -p public/assets/tarot/minor-arcana/swords
mkdir -p public/assets/tarot/minor-arcana/pentacles
`;

  const downloadScript = `
# Download all images to Downloads folder first, then use this script
# Run this from your project root directory after downloading all images

# Create folders
mkdir -p public/assets/tarot/major-arcana
mkdir -p public/assets/tarot/minor-arcana/{wands,cups,swords,pentacles}

# Move and rename Major Arcana
mv ~/Downloads/fool.jpg public/assets/tarot/major-arcana/00-fool.jpg
mv ~/Downloads/magician.jpg public/assets/tarot/major-arcana/01-magician.jpg
mv ~/Downloads/high-priestess.jpg public/assets/tarot/major-arcana/02-high-priestess.jpg
# ... (continue for all 22 major arcana)

# Move and rename Minor Arcana - Wands
mv ~/Downloads/ace-wands.jpg public/assets/tarot/minor-arcana/wands/ace.jpg
mv ~/Downloads/two-wands.jpg public/assets/tarot/minor-arcana/wands/02.jpg
# ... (continue for all suits)

echo "Local tarot images setup complete!"
`;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-6 w-6" />
            Local Image Setup Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Download */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-600 text-white">Step 1</Badge>
              <h3 className="font-semibold">Download All Images</h3>
            </div>
            <p className="text-sm text-gray-600">
              Use the "Download All Images" button above. Images will go to your
              browser's Downloads folder.
            </p>
          </div>

          <Separator />

          {/* Step 2: Create Folders */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-600 text-white">Step 2</Badge>
              <h3 className="font-semibold">Create Folder Structure</h3>
            </div>
            <p className="text-sm text-gray-600">
              Create this folder structure in your project's{" "}
              <code className="bg-gray-100 px-1 rounded">public</code>{" "}
              directory:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg border">
              <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">
                {`public/assets/tarot/
├── major-arcana/
└── minor-arcana/
    ├── wands/
    ├── cups/
    ├── swords/
    └── pentacles/`}
              </pre>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(folderStructureScript)}
              >
                <Copy className="h-4 w-4 mr-2" />
                {copiedScript ? "Copied!" : "Copy Commands"}
              </Button>
            </div>
          </div>

          <Separator />

          {/* Step 3: Move and Rename */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-600 text-white">Step 3</Badge>
              <h3 className="font-semibold">Move & Rename Files</h3>
            </div>
            <p className="text-sm text-gray-600">
              Move files from Downloads to the public folder and rename them
              according to this mapping:
            </p>

            {/* Example mappings */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">
                Example File Mappings:
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <code className="bg-white px-2 py-1 rounded text-blue-700">
                    fool.jpg
                  </code>
                  <ArrowRight className="h-3 w-3 text-blue-600" />
                  <code className="bg-white px-2 py-1 rounded text-green-700">
                    major-arcana/00-fool.jpg
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-white px-2 py-1 rounded text-blue-700">
                    queen-swords.jpg
                  </code>
                  <ArrowRight className="h-3 w-3 text-blue-600" />
                  <code className="bg-white px-2 py-1 rounded text-green-700">
                    minor-arcana/swords/queen.jpg
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-white px-2 py-1 rounded text-blue-700">
                    ace-wands.jpg
                  </code>
                  <ArrowRight className="h-3 w-3 text-blue-600" />
                  <code className="bg-white px-2 py-1 rounded text-green-700">
                    minor-arcana/wands/ace.jpg
                  </code>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Complete Mapping */}
          <details className="space-y-3">
            <summary className="cursor-pointer font-semibold flex items-center gap-2">
              <FileText className="h-4 w-4" />
              View Complete File Mapping (78 cards)
            </summary>
            <div className="bg-gray-50 p-4 rounded-lg border max-h-64 overflow-y-auto">
              <div className="grid grid-cols-1 gap-1 text-xs font-mono">
                {Object.entries(fileMapping).map(
                  ([downloadName, targetPath]) => (
                    <div key={downloadName} className="flex items-center gap-2">
                      <span className="text-blue-700 min-w-0 flex-1">
                        {downloadName}
                      </span>
                      <ArrowRight className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      <span className="text-green-700 min-w-0 flex-1">
                        {targetPath}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </details>

          {/* Final Step */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-800">When Complete</h3>
            </div>
            <p className="text-sm text-green-700">
              Once files are in place, the app will automatically use local
              images instead of loading from the web. This means faster loading
              and offline capability!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocalSetupHelper;
