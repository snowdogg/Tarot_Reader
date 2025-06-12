#!/usr/bin/env node

/**
 * Download script for Rider-Waite Tarot images from Wikimedia Commons
 * All images are in the public domain
 */

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://upload.wikimedia.org/wikipedia/commons";
const OUTPUT_DIR = path.join(__dirname, "..", "public", "assets", "tarot");

// Wikimedia Commons URLs for Rider-Waite Tarot cards
const TAROT_IMAGES = {
  // Major Arcana
  "major-arcana": {
    "00-fool": `${BASE_URL}/9/90/RWS_Tarot_00_Fool.jpg`,
    "01-magician": `${BASE_URL}/d/de/RWS_Tarot_01_Magician.jpg`,
    "02-high-priestess": `${BASE_URL}/8/88/RWS_Tarot_02_High_Priestess.jpg`,
    "03-empress": `${BASE_URL}/d/d2/RWS_Tarot_03_Empress.jpg`,
    "04-emperor": `${BASE_URL}/c/c3/RWS_Tarot_04_Emperor.jpg`,
    "05-hierophant": `${BASE_URL}/8/8d/RWS_Tarot_05_Hierophant.jpg`,
    "06-lovers": `${BASE_URL}/3/3a/RWS_Tarot_06_Lovers.jpg`,
    "07-chariot": `${BASE_URL}/9/9b/RWS_Tarot_07_Chariot.jpg`,
    "08-strength": `${BASE_URL}/f/f5/RWS_Tarot_08_Strength.jpg`,
    "09-hermit": `${BASE_URL}/4/4d/RWS_Tarot_09_Hermit.jpg`,
    "10-wheel-of-fortune": `${BASE_URL}/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg`,
    "11-justice": `${BASE_URL}/e/e0/RWS_Tarot_11_Justice.jpg`,
    "12-hanged-man": `${BASE_URL}/2/2b/RWS_Tarot_12_Hanged_Man.jpg`,
    "13-death": `${BASE_URL}/d/d7/RWS_Tarot_13_Death.jpg`,
    "14-temperance": `${BASE_URL}/f/f8/RWS_Tarot_14_Temperance.jpg`,
    "15-devil": `${BASE_URL}/5/55/RWS_Tarot_15_Devil.jpg`,
    "16-tower": `${BASE_URL}/5/53/RWS_Tarot_16_Tower.jpg`,
    "17-star": `${BASE_URL}/d/db/RWS_Tarot_17_Star.jpg`,
    "18-moon": `${BASE_URL}/7/7f/RWS_Tarot_18_Moon.jpg`,
    "19-sun": `${BASE_URL}/1/17/RWS_Tarot_19_Sun.jpg`,
    "20-judgement": `${BASE_URL}/d/dd/RWS_Tarot_20_Judgement.jpg`,
    "21-world": `${BASE_URL}/f/ff/RWS_Tarot_21_World.jpg`,
  },

  // Minor Arcana - Wands
  "minor-arcana/wands": {
    ace: `${BASE_URL}/1/11/Wands01.jpg`,
    "02": `${BASE_URL}/0/0f/Wands02.jpg`,
    "03": `${BASE_URL}/f/ff/Wands03.jpg`,
    "04": `${BASE_URL}/a/a4/Wands04.jpg`,
    "05": `${BASE_URL}/9/9d/Wands05.jpg`,
    "06": `${BASE_URL}/3/3b/Wands06.jpg`,
    "07": `${BASE_URL}/e/e4/Wands07.jpg`,
    "08": `${BASE_URL}/6/6b/Wands08.jpg`,
    "09": `${BASE_URL}/4/4d/Wands09.jpg`,
    10: `${BASE_URL}/0/0b/Wands10.jpg`,
    page: `${BASE_URL}/6/6a/Wands11.jpg`,
    knight: `${BASE_URL}/1/16/Wands12.jpg`,
    queen: `${BASE_URL}/0/0d/Wands13.jpg`,
    king: `${BASE_URL}/c/ce/Wands14.jpg`,
  },

  // Minor Arcana - Cups
  "minor-arcana/cups": {
    ace: `${BASE_URL}/3/36/Cups01.jpg`,
    "02": `${BASE_URL}/f/f8/Cups02.jpg`,
    "03": `${BASE_URL}/7/7a/Cups03.jpg`,
    "04": `${BASE_URL}/3/35/Cups04.jpg`,
    "05": `${BASE_URL}/d/d7/Cups05.jpg`,
    "06": `${BASE_URL}/1/17/Cups06.jpg`,
    "07": `${BASE_URL}/a/ae/Cups07.jpg`,
    "08": `${BASE_URL}/6/60/Cups08.jpg`,
    "09": `${BASE_URL}/2/24/Cups09.jpg`,
    10: `${BASE_URL}/8/84/Cups10.jpg`,
    page: `${BASE_URL}/a/ad/Cups11.jpg`,
    knight: `${BASE_URL}/f/fa/Cups12.jpg`,
    queen: `${BASE_URL}/6/62/Cups13.jpg`,
    king: `${BASE_URL}/0/04/Cups14.jpg`,
  },

  // Minor Arcana - Swords
  "minor-arcana/swords": {
    ace: `${BASE_URL}/1/1a/Swords01.jpg`,
    "02": `${BASE_URL}/9/9e/Swords02.jpg`,
    "03": `${BASE_URL}/0/02/Swords03.jpg`,
    "04": `${BASE_URL}/b/bf/Swords04.jpg`,
    "05": `${BASE_URL}/2/23/Swords05.jpg`,
    "06": `${BASE_URL}/2/29/Swords06.jpg`,
    "07": `${BASE_URL}/3/34/Swords07.jpg`,
    "08": `${BASE_URL}/a/a7/Swords08.jpg`,
    "09": `${BASE_URL}/2/2f/Swords09.jpg`,
    10: `${BASE_URL}/d/d4/Swords10.jpg`,
    page: `${BASE_URL}/4/4c/Swords11.jpg`,
    knight: `${BASE_URL}/b/b0/Swords12.jpg`,
    queen: `${BASE_URL}/d/d4/Swords13.jpg`,
    king: `${BASE_URL}/3/33/Swords14.jpg`,
  },

  // Minor Arcana - Pentacles
  "minor-arcana/pentacles": {
    ace: `${BASE_URL}/f/fd/Pents01.jpg`,
    "02": `${BASE_URL}/9/9f/Pents02.jpg`,
    "03": `${BASE_URL}/4/42/Pents03.jpg`,
    "04": `${BASE_URL}/3/35/Pents04.jpg`,
    "05": `${BASE_URL}/9/96/Pents05.jpg`,
    "06": `${BASE_URL}/a/a6/Pents06.jpg`,
    "07": `${BASE_URL}/6/6a/Pents07.jpg`,
    "08": `${BASE_URL}/4/49/Pents08.jpg`,
    "09": `${BASE_URL}/f/f0/Pents09.jpg`,
    10: `${BASE_URL}/4/42/Pents10.jpg`,
    page: `${BASE_URL}/e/ec/Pents11.jpg`,
    knight: `${BASE_URL}/d/d5/Pents12.jpg`,
    queen: `${BASE_URL}/8/87/Pents13.jpg`,
    king: `${BASE_URL}/1/1c/Pents14.jpg`,
  },
};

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(`Failed to download ${url}: ${response.statusCode}`),
          );
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });

        file.on("error", (err) => {
          fs.unlink(filepath, () => {}); // Delete the file on error
          reject(err);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function downloadTarotImages() {
  console.log("📥 Starting Rider-Waite Tarot images download...\n");

  // Ensure all directories exist
  for (const category of Object.keys(TAROT_IMAGES)) {
    const dir = path.join(OUTPUT_DIR, category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  let totalFiles = 0;
  let downloadedFiles = 0;

  for (const [category, images] of Object.entries(TAROT_IMAGES)) {
    console.log(
      `\n📂 Downloading ${category.replace("-", " ").toUpperCase()}:`,
    );

    for (const [filename, url] of Object.entries(images)) {
      totalFiles++;
      const filepath = path.join(OUTPUT_DIR, category, `${filename}.jpg`);

      try {
        // Skip if file already exists
        if (fs.existsSync(filepath)) {
          console.log(`⏭️  Skipping: ${filename}.jpg (already exists)`);
          downloadedFiles++;
          continue;
        }

        await downloadFile(url, filepath);
        downloadedFiles++;

        // Small delay to be respectful to the server
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`❌ Failed to download ${filename}.jpg:`, error.message);
      }
    }
  }

  console.log(
    `\n🎉 Download complete! ${downloadedFiles}/${totalFiles} images downloaded.`,
  );
  console.log(`📁 Images saved to: ${OUTPUT_DIR}`);
}

// Run the download if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  downloadTarotImages().catch(console.error);
}

export { downloadTarotImages, TAROT_IMAGES };
