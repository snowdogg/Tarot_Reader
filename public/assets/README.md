# Tarot Card Images

This directory contains the Rider-Waite tarot card images used by the Mystic Tarot application.

## Image Sources

All images are sourced from **Wikimedia Commons** and are in the **public domain**. The original Rider-Waite tarot deck was first published in 1909, with artwork by Pamela Colman Smith under the direction of Arthur Edward Waite.

## Directory Structure

```
public/assets/tarot/
├── major-arcana/          # 22 Major Arcana cards (0-21)
│   ├── 00-fool.jpg
│   ├── 01-magician.jpg
│   ├── 02-high-priestess.jpg
│   └── ... (and so on)
│
└── minor-arcana/          # 56 Minor Arcana cards
    ├── wands/             # 14 Wands cards
    │   ├── ace.jpg
    │   ├── 02.jpg
    │   ├── 03.jpg
    ��   ├── ...
    │   ├── page.jpg
    │   ├── knight.jpg
    │   ├── queen.jpg
    │   └── king.jpg
    │
    ├── cups/              # 14 Cups cards (same structure as wands)
    ├── swords/            # 14 Swords cards (same structure as wands)
    └── pentacles/         # 14 Pentacles cards (same structure as wands)
```

## How to Download Images

1. **Visit the Download Page**: Go to `/download` in the application
2. **Automatic Download**: Click "Download All Images" to download all 78 cards
3. **Manual Organization**: After downloading, organize the files according to the directory structure above
4. **Automatic Fallback**: The application will use Wikimedia URLs if local images are not available

## Image Details

- **Format**: JPEG (.jpg)
- **Source**: Wikimedia Commons
- **License**: Public Domain
- **Total Count**: 78 cards (22 Major + 56 Minor Arcana)
- **Deck**: Traditional Rider-Waite-Smith

## Legal Information

These images are in the public domain and can be used for any purpose without restriction. The original deck was published in 1909 and the copyright has expired.

**Attribution (optional but appreciated):**

- Original artwork: Pamela Colman Smith (1909)
- Direction: Arthur Edward Waite
- Source: Wikimedia Commons

## Technical Implementation

The application uses a progressive image loading strategy:

1. **Local First**: Attempts to load images from `/assets/tarot/` directory
2. **Fallback**: Falls back to Wikimedia Commons URLs if local images are unavailable
3. **Error Handling**: Graceful degradation with placeholder backgrounds

## File Naming Convention

### Major Arcana

- Format: `{number}-{name}.jpg`
- Examples: `00-fool.jpg`, `01-magician.jpg`, `21-world.jpg`

### Minor Arcana

- Format: `{rank}.jpg` within suit directories
- Numbers: `ace.jpg`, `02.jpg`, `03.jpg`, ..., `10.jpg`
- Court Cards: `page.jpg`, `knight.jpg`, `queen.jpg`, `king.jpg`

This standardized naming ensures reliable image loading and easy maintenance.
