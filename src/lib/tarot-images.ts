/**
 * Tarot card image mapping for Rider-Waite deck
 * Images are sourced from Wikimedia Commons (Public Domain)
 */

export interface TarotImageMap {
  [key: string]: string;
}

// Base URL for Wikimedia Commons Rider-Waite images
const BASE_URL = "https://upload.wikimedia.org/wikipedia/commons";

// Local asset paths (will be populated as images are downloaded)
const LOCAL_BASE = "/assets/tarot";

export const WIKIMEDIA_TAROT_IMAGES: TarotImageMap = {
  // Major Arcana
  fool: `${BASE_URL}/9/90/RWS_Tarot_00_Fool.jpg`,
  magician: `${BASE_URL}/d/de/RWS_Tarot_01_Magician.jpg`,
  "high-priestess": `${BASE_URL}/8/88/RWS_Tarot_02_High_Priestess.jpg`,
  empress: `${BASE_URL}/d/d2/RWS_Tarot_03_Empress.jpg`,
  emperor: `${BASE_URL}/c/c3/RWS_Tarot_04_Emperor.jpg`,
  hierophant: `${BASE_URL}/8/8d/RWS_Tarot_05_Hierophant.jpg`,
  lovers: `${BASE_URL}/3/3a/RWS_Tarot_06_Lovers.jpg`,
  chariot: `${BASE_URL}/9/9b/RWS_Tarot_07_Chariot.jpg`,
  strength: `${BASE_URL}/f/f5/RWS_Tarot_08_Strength.jpg`,
  hermit: `${BASE_URL}/4/4d/RWS_Tarot_09_Hermit.jpg`,
  "wheel-of-fortune": `${BASE_URL}/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg`,
  justice: `${BASE_URL}/e/e0/RWS_Tarot_11_Justice.jpg`,
  "hanged-man": `${BASE_URL}/2/2b/RWS_Tarot_12_Hanged_Man.jpg`,
  death: `${BASE_URL}/d/d7/RWS_Tarot_13_Death.jpg`,
  temperance: `${BASE_URL}/f/f8/RWS_Tarot_14_Temperance.jpg`,
  devil: `${BASE_URL}/5/55/RWS_Tarot_15_Devil.jpg`,
  tower: `${BASE_URL}/5/53/RWS_Tarot_16_Tower.jpg`,
  star: `${BASE_URL}/d/db/RWS_Tarot_17_Star.jpg`,
  moon: `${BASE_URL}/7/7f/RWS_Tarot_18_Moon.jpg`,
  sun: `${BASE_URL}/1/17/RWS_Tarot_19_Sun.jpg`,
  judgement: `${BASE_URL}/d/dd/RWS_Tarot_20_Judgement.jpg`,
  world: `${BASE_URL}/f/ff/RWS_Tarot_21_World.jpg`,

  // Minor Arcana - Wands
  "ace-wands": `${BASE_URL}/1/11/Wands01.jpg`,
  "two-wands": `${BASE_URL}/0/0f/Wands02.jpg`,
  "three-wands": `${BASE_URL}/f/ff/Wands03.jpg`,
  "four-wands": `${BASE_URL}/a/a4/Wands04.jpg`,
  "five-wands": `${BASE_URL}/9/9d/Wands05.jpg`,
  "six-wands": `${BASE_URL}/3/3b/Wands06.jpg`,
  "seven-wands": `${BASE_URL}/e/e4/Wands07.jpg`,
  "eight-wands": `${BASE_URL}/6/6b/Wands08.jpg`,
  "nine-wands": `${BASE_URL}/4/4d/Wands09.jpg`,
  "ten-wands": `${BASE_URL}/0/0b/Wands10.jpg`,
  "page-wands": `${BASE_URL}/6/6a/Wands11.jpg`,
  "knight-wands": `${BASE_URL}/1/16/Wands12.jpg`,
  "queen-wands": `${BASE_URL}/0/0d/Wands13.jpg`,
  "king-wands": `${BASE_URL}/c/ce/Wands14.jpg`,

  // Minor Arcana - Cups
  "ace-cups": `${BASE_URL}/3/36/Cups01.jpg`,
  "two-cups": `${BASE_URL}/f/f8/Cups02.jpg`,
  "three-cups": `${BASE_URL}/7/7a/Cups03.jpg`,
  "four-cups": `${BASE_URL}/3/35/Cups04.jpg`,
  "five-cups": `${BASE_URL}/d/d7/Cups05.jpg`,
  "six-cups": `${BASE_URL}/1/17/Cups06.jpg`,
  "seven-cups": `${BASE_URL}/a/ae/Cups07.jpg`,
  "eight-cups": `${BASE_URL}/6/60/Cups08.jpg`,
  "nine-cups": `${BASE_URL}/2/24/Cups09.jpg`,
  "ten-cups": `${BASE_URL}/8/84/Cups10.jpg`,
  "page-cups": `${BASE_URL}/a/ad/Cups11.jpg`,
  "knight-cups": `${BASE_URL}/f/fa/Cups12.jpg`,
  "queen-cups": `${BASE_URL}/6/62/Cups13.jpg`,
  "king-cups": `${BASE_URL}/0/04/Cups14.jpg`,

  // Minor Arcana - Swords
  "ace-swords": `${BASE_URL}/1/1a/Swords01.jpg`,
  "two-swords": `${BASE_URL}/9/9e/Swords02.jpg`,
  "three-swords": `${BASE_URL}/0/02/Swords03.jpg`,
  "four-swords": `${BASE_URL}/b/bf/Swords04.jpg`,
  "five-swords": `${BASE_URL}/2/23/Swords05.jpg`,
  "six-swords": `${BASE_URL}/2/29/Swords06.jpg`,
  "seven-swords": `${BASE_URL}/3/34/Swords07.jpg`,
  "eight-swords": `${BASE_URL}/a/a7/Swords08.jpg`,
  "nine-swords": `${BASE_URL}/2/2f/Swords09.jpg`,
  "ten-swords": `${BASE_URL}/d/d4/Swords10.jpg`,
  "page-swords": `${BASE_URL}/4/4c/Swords11.jpg`,
  "knight-swords": `${BASE_URL}/b/b0/Swords12.jpg`,
  "queen-swords": `${BASE_URL}/1/1e/Queen_of_Swords.jpg`,
  "king-swords": `${BASE_URL}/3/33/Swords14.jpg`,

  // Minor Arcana - Pentacles
  "ace-pentacles": `${BASE_URL}/f/fd/Pents01.jpg`,
  "two-pentacles": `${BASE_URL}/9/9f/Pents02.jpg`,
  "three-pentacles": `${BASE_URL}/4/42/Pents03.jpg`,
  "four-pentacles": `${BASE_URL}/3/35/Pents04.jpg`,
  "five-pentacles": `${BASE_URL}/9/96/Pents05.jpg`,
  "six-pentacles": `${BASE_URL}/a/a6/Pents06.jpg`,
  "seven-pentacles": `${BASE_URL}/6/6a/Pents07.jpg`,
  "eight-pentacles": `${BASE_URL}/4/49/Pents08.jpg`,
  "nine-pentacles": `${BASE_URL}/f/f0/Pents09.jpg`,
  "ten-pentacles": `${BASE_URL}/4/42/Pents10.jpg`,
  "page-pentacles": `${BASE_URL}/e/ec/Pents11.jpg`,
  "knight-pentacles": `${BASE_URL}/d/d5/Pents12.jpg`,
  "queen-pentacles": `${BASE_URL}/8/87/Pents13.jpg`,
  "king-pentacles": `${BASE_URL}/1/1c/Pents14.jpg`,
};

// Local asset paths (use these when images are downloaded locally)
export const LOCAL_TAROT_IMAGES: TarotImageMap = {
  // Major Arcana
  fool: `${LOCAL_BASE}/major-arcana/00-fool.jpg`,
  magician: `${LOCAL_BASE}/major-arcana/01-magician.jpg`,
  "high-priestess": `${LOCAL_BASE}/major-arcana/02-high-priestess.jpg`,
  empress: `${LOCAL_BASE}/major-arcana/03-empress.jpg`,
  emperor: `${LOCAL_BASE}/major-arcana/04-emperor.jpg`,
  hierophant: `${LOCAL_BASE}/major-arcana/05-hierophant.jpg`,
  lovers: `${LOCAL_BASE}/major-arcana/06-lovers.jpg`,
  chariot: `${LOCAL_BASE}/major-arcana/07-chariot.jpg`,
  strength: `${LOCAL_BASE}/major-arcana/08-strength.jpg`,
  hermit: `${LOCAL_BASE}/major-arcana/09-hermit.jpg`,
  "wheel-of-fortune": `${LOCAL_BASE}/major-arcana/10-wheel-of-fortune.jpg`,
  justice: `${LOCAL_BASE}/major-arcana/11-justice.jpg`,
  "hanged-man": `${LOCAL_BASE}/major-arcana/12-hanged-man.jpg`,
  death: `${LOCAL_BASE}/major-arcana/13-death.jpg`,
  temperance: `${LOCAL_BASE}/major-arcana/14-temperance.jpg`,
  devil: `${LOCAL_BASE}/major-arcana/15-devil.jpg`,
  tower: `${LOCAL_BASE}/major-arcana/16-tower.jpg`,
  star: `${LOCAL_BASE}/major-arcana/17-star.jpg`,
  moon: `${LOCAL_BASE}/major-arcana/18-moon.jpg`,
  sun: `${LOCAL_BASE}/major-arcana/19-sun.jpg`,
  judgement: `${LOCAL_BASE}/major-arcana/20-judgement.jpg`,
  world: `${LOCAL_BASE}/major-arcana/21-world.jpg`,

  // Minor Arcana - Wands
  "ace-wands": `${LOCAL_BASE}/minor-arcana/wands/ace.jpg`,
  "two-wands": `${LOCAL_BASE}/minor-arcana/wands/02.jpg`,
  "three-wands": `${LOCAL_BASE}/minor-arcana/wands/03.jpg`,
  "four-wands": `${LOCAL_BASE}/minor-arcana/wands/04.jpg`,
  "five-wands": `${LOCAL_BASE}/minor-arcana/wands/05.jpg`,
  "six-wands": `${LOCAL_BASE}/minor-arcana/wands/06.jpg`,
  "seven-wands": `${LOCAL_BASE}/minor-arcana/wands/07.jpg`,
  "eight-wands": `${LOCAL_BASE}/minor-arcana/wands/08.jpg`,
  "nine-wands": `${LOCAL_BASE}/minor-arcana/wands/09.jpg`,
  "ten-wands": `${LOCAL_BASE}/minor-arcana/wands/10.jpg`,
  "page-wands": `${LOCAL_BASE}/minor-arcana/wands/page.jpg`,
  "knight-wands": `${LOCAL_BASE}/minor-arcana/wands/knight.jpg`,
  "queen-wands": `${LOCAL_BASE}/minor-arcana/wands/queen.jpg`,
  "king-wands": `${LOCAL_BASE}/minor-arcana/wands/king.jpg`,

  // Minor Arcana - Cups
  "ace-cups": `${LOCAL_BASE}/minor-arcana/cups/ace.jpg`,
  "two-cups": `${LOCAL_BASE}/minor-arcana/cups/02.jpg`,
  "three-cups": `${LOCAL_BASE}/minor-arcana/cups/03.jpg`,
  "four-cups": `${LOCAL_BASE}/minor-arcana/cups/04.jpg`,
  "five-cups": `${LOCAL_BASE}/minor-arcana/cups/05.jpg`,
  "six-cups": `${LOCAL_BASE}/minor-arcana/cups/06.jpg`,
  "seven-cups": `${LOCAL_BASE}/minor-arcana/cups/07.jpg`,
  "eight-cups": `${LOCAL_BASE}/minor-arcana/cups/08.jpg`,
  "nine-cups": `${LOCAL_BASE}/minor-arcana/cups/09.jpg`,
  "ten-cups": `${LOCAL_BASE}/minor-arcana/cups/10.jpg`,
  "page-cups": `${LOCAL_BASE}/minor-arcana/cups/page.jpg`,
  "knight-cups": `${LOCAL_BASE}/minor-arcana/cups/knight.jpg`,
  "queen-cups": `${LOCAL_BASE}/minor-arcana/cups/queen.jpg`,
  "king-cups": `${LOCAL_BASE}/minor-arcana/cups/king.jpg`,

  // Minor Arcana - Swords
  "ace-swords": `${LOCAL_BASE}/minor-arcana/swords/ace.jpg`,
  "two-swords": `${LOCAL_BASE}/minor-arcana/swords/02.jpg`,
  "three-swords": `${LOCAL_BASE}/minor-arcana/swords/03.jpg`,
  "four-swords": `${LOCAL_BASE}/minor-arcana/swords/04.jpg`,
  "five-swords": `${LOCAL_BASE}/minor-arcana/swords/05.jpg`,
  "six-swords": `${LOCAL_BASE}/minor-arcana/swords/06.jpg`,
  "seven-swords": `${LOCAL_BASE}/minor-arcana/swords/07.jpg`,
  "eight-swords": `${LOCAL_BASE}/minor-arcana/swords/08.jpg`,
  "nine-swords": `${LOCAL_BASE}/minor-arcana/swords/09.jpg`,
  "ten-swords": `${LOCAL_BASE}/minor-arcana/swords/10.jpg`,
  "page-swords": `${LOCAL_BASE}/minor-arcana/swords/page.jpg`,
  "knight-swords": `${LOCAL_BASE}/minor-arcana/swords/knight.jpg`,
  "queen-swords": `${LOCAL_BASE}/minor-arcana/swords/queen.jpg`,
  "king-swords": `${LOCAL_BASE}/minor-arcana/swords/king.jpg`,

  // Minor Arcana - Pentacles
  "ace-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/ace.jpg`,
  "two-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/02.jpg`,
  "three-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/03.jpg`,
  "four-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/04.jpg`,
  "five-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/05.jpg`,
  "six-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/06.jpg`,
  "seven-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/07.jpg`,
  "eight-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/08.jpg`,
  "nine-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/09.jpg`,
  "ten-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/10.jpg`,
  "page-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/page.jpg`,
  "knight-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/knight.jpg`,
  "queen-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/queen.jpg`,
  "king-pentacles": `${LOCAL_BASE}/minor-arcana/pentacles/king.jpg`,
};

// Fallback URLs for problematic cards
const FALLBACK_URLS: TarotImageMap = {
  "queen-swords": `${BASE_URL}/d/d4/Swords13.jpg`, // Alternative URL
};

/**
 * Get the image URL for a tarot card
 * Prefers local assets, falls back to Wikimedia Commons, then fallback URLs
 */
export function getTarotCardImage(cardId: string): string {
  // Try local first, then Wikimedia, then fallback
  return (
    LOCAL_TAROT_IMAGES[cardId] ||
    WIKIMEDIA_TAROT_IMAGES[cardId] ||
    FALLBACK_URLS[cardId] ||
    ""
  );
}

/**
 * Check if local image exists (for progressive enhancement)
 */
export function hasLocalImage(cardId: string): boolean {
  return cardId in LOCAL_TAROT_IMAGES;
}
