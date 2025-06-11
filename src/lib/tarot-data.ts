export interface TarotCard {
  id: string;
  name: string;
  type: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  number?: number;
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  description: string;
  imageUrl: string;
}

export interface TarotSpread {
  id: string;
  name: string;
  description: string;
  positions: Array<{
    id: string;
    name: string;
    description: string;
    x: number;
    y: number;
    rotation?: number;
  }>;
}

// Complete Rider-Waite Tarot Deck Data
export const TAROT_CARDS: TarotCard[] = [
  // Major Arcana
  {
    id: "fool",
    name: "The Fool",
    type: "major",
    number: 0,
    keywords: ["beginnings", "innocence", "spontaneity", "free spirit"],
    uprightMeaning:
      "New beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation, believing in the universe.",
    reversedMeaning:
      "Gullibility, recklessness, risk-taking, foolishness, lack of direction, poor judgment, chaos.",
    description:
      "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "magician",
    name: "The Magician",
    type: "major",
    number: 1,
    keywords: ["manifestation", "resourcefulness", "power", "inspired action"],
    uprightMeaning:
      "Manifestation, resourcefulness, power, inspired action, creativity, confidence, skill, concentration, taking action.",
    reversedMeaning:
      "Manipulation, poor planning, latent talents, untapped potential, lack of focus, scattered energy.",
    description:
      "The Magician represents manifestation, resourcefulness, power and inspired action. You have the tools and abilities to make your dreams come true.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    type: "major",
    number: 2,
    keywords: ["intuition", "mystery", "subconscious mind", "higher power"],
    uprightMeaning:
      "Intuitive, unconscious, inner voice, higher power, spiritual insight, divine feminine, sacred knowledge.",
    reversedMeaning:
      "Secrets, paranoia, disconnected from intuition, withdrawal and silence, repressed feelings.",
    description:
      "The High Priestess represents intuition, mystery and the subconscious mind. Trust your inner voice and spiritual insights.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "empress",
    name: "The Empress",
    type: "major",
    number: 3,
    keywords: ["abundance", "nurturing", "fertility", "femininity"],
    uprightMeaning:
      "Abundance, nurturing, fertility, femininity, beauty, nature, creativity, motherhood, pregnancy.",
    reversedMeaning:
      "Creative block, dependence on others, smothering, emptiness, nosiness, lack of growth.",
    description:
      "The Empress represents abundance, nurturing and fertility. She encourages creativity and connection with nature.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "emperor",
    name: "The Emperor",
    type: "major",
    number: 4,
    keywords: ["authority", "stability", "structure", "control"],
    uprightMeaning:
      "Authority, structure, control, fatherhood, stability, power, discipline, rules and regulations.",
    reversedMeaning:
      "Tyranny, rigidity, coldness, loss of authority, lack of discipline, chaos, rebellion.",
    description:
      "The Emperor represents authority, stability and structure. He brings order and discipline to your life.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "hierophant",
    name: "The Hierophant",
    type: "major",
    number: 5,
    keywords: ["tradition", "conformity", "spiritual guidance", "institutions"],
    uprightMeaning:
      "Tradition, conformity, morality, ethics, spiritual guidance, institutions, seeking knowledge from a guru.",
    reversedMeaning:
      "Personal beliefs, freedom, challenging the status quo, inner guidance, non-conformity.",
    description:
      "The Hierophant represents tradition, conformity and spiritual guidance. Seek wisdom from established institutions or mentors.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "lovers",
    name: "The Lovers",
    type: "major",
    number: 6,
    keywords: ["love", "relationships", "choices", "values"],
    uprightMeaning:
      "Love, relationships, choices, values alignment, partnerships, duality, union, finding balance.",
    reversedMeaning:
      "Disharmony, imbalance, misalignment of values, relationship problems, inner conflicts.",
    description:
      "The Lovers represents love, relationships and important choices. Consider your values when making decisions.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "chariot",
    name: "The Chariot",
    type: "major",
    number: 7,
    keywords: ["determination", "control", "victory", "willpower"],
    uprightMeaning:
      "Determination, control, victory, willpower, success, mastery, focus, hard work, ambition.",
    reversedMeaning:
      "Lack of control, lack of direction, aggression, forcing outcomes, scattered energy.",
    description:
      "The Chariot represents determination, control and victory. You have the focus and willpower to succeed.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "strength",
    name: "Strength",
    type: "major",
    number: 8,
    keywords: ["inner strength", "courage", "patience", "compassion"],
    uprightMeaning:
      "Inner strength, courage, patience, control, compassion, gentle power, overcoming challenges.",
    reversedMeaning:
      "Self-doubt, weakness, insecurity, lack of confidence, abuse of power, raw emotion.",
    description:
      "Strength represents inner strength, courage and patience. Overcome challenges with compassion and gentle power.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "hermit",
    name: "The Hermit",
    type: "major",
    number: 9,
    keywords: ["soul-searching", "introspection", "solitude", "wisdom"],
    uprightMeaning:
      "Soul-searching, introspection, solitude, seeking inner guidance, spiritual enlightenment, wisdom.",
    reversedMeaning:
      "Isolation, loneliness, withdrawal, paranoia, refusing guidance, anti-social behavior.",
    description:
      "The Hermit represents soul-searching, introspection and solitude. Take time for inner reflection and spiritual growth.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    type: "major",
    number: 10,
    keywords: ["destiny", "change", "luck", "karma"],
    uprightMeaning:
      "Destiny, change, luck, karma, life cycles, fate, fortune, unexpected events, turning point.",
    reversedMeaning:
      "Bad luck, lack of control, external forces, setbacks, breaking cycles.",
    description:
      "The Wheel of Fortune represents destiny, change and luck. Embrace the natural cycles of life and fortune.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "justice",
    name: "Justice",
    type: "major",
    number: 11,
    keywords: ["fairness", "balance", "truth", "accountability"],
    uprightMeaning:
      "Fairness, balance, truth, accountability, legal matters, karma, moral responsibility.",
    reversedMeaning:
      "Unfairness, lack of accountability, dishonesty, bias, corruption, legal troubles.",
    description:
      "Justice represents fairness, balance and truth. Take responsibility for your actions and seek what is right.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "hanged-man",
    name: "The Hanged Man",
    type: "major",
    number: 12,
    keywords: ["surrender", "suspension", "letting go", "sacrifice"],
    uprightMeaning:
      "Surrender, suspension, letting go, sacrifice, martyrdom, patience, new perspective.",
    reversedMeaning:
      "Delays, resistance, stalling, indecision, lack of sacrifice, false martyrdom.",
    description:
      "The Hanged Man represents surrender, suspension and letting go. Sometimes you must sacrifice to gain new perspective.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "death",
    name: "Death",
    type: "major",
    number: 13,
    keywords: ["endings", "transformation", "new beginnings", "rebirth"],
    uprightMeaning:
      "Endings, transformation, new beginnings, rebirth, letting go, major change, transition.",
    reversedMeaning:
      "Resistance to change, fear of change, stagnation, decay, inability to move on.",
    description:
      "Death represents endings, transformation and new beginnings. Embrace change as a natural part of life.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "temperance",
    name: "Temperance",
    type: "major",
    number: 14,
    keywords: ["balance", "harmony", "moderation", "patience"],
    uprightMeaning:
      "Balance, harmony, moderation, patience, purpose, meaning, connecting with others.",
    reversedMeaning:
      "Imbalance, excess, extremes, discord, lack of long-term vision, conflicts.",
    description:
      "Temperance represents balance, harmony and moderation. Find the middle path and blend opposing forces.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "devil",
    name: "The Devil",
    type: "major",
    number: 15,
    keywords: ["materialism", "bondage", "temptation", "addiction"],
    uprightMeaning:
      "Materialism, bondage, temptation, addiction, sexuality, powerlessness, obsession.",
    reversedMeaning:
      "Freedom, release, restoring control, overcoming addiction, detachment.",
    description:
      "The Devil represents materialism, bondage and temptation. Recognize what enslaves you and break free.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "tower",
    name: "The Tower",
    type: "major",
    number: 16,
    keywords: ["upheaval", "chaos", "revelation", "sudden change"],
    uprightMeaning:
      "Upheaval, chaos, revelation, sudden change, disruption, awakening, breaking point.",
    reversedMeaning:
      "Averting disaster, delaying the inevitable, resistance to change, internal transformation.",
    description:
      "The Tower represents upheaval, chaos and revelation. Sometimes destruction is necessary for rebuilding.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "star",
    name: "The Star",
    type: "major",
    number: 17,
    keywords: ["hope", "inspiration", "renewal", "spirituality"],
    uprightMeaning:
      "Hope, inspiration, renewal, spirituality, healing, faith, purpose, guidance.",
    reversedMeaning:
      "Despair, lack of faith, disconnection, discouragement, insecurity.",
    description:
      "The Star represents hope, inspiration and renewal. Have faith in the future and trust in divine guidance.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "moon",
    name: "The Moon",
    type: "major",
    number: 18,
    keywords: ["illusion", "fear", "intuition", "subconscious"],
    uprightMeaning:
      "Illusion, fear, intuition, subconscious, confusion, deception, dreams, psychic abilities.",
    reversedMeaning:
      "Clarity, overcoming fear, finding truth, intuition blocked, deception revealed.",
    description:
      "The Moon represents illusion, fear and intuition. Trust your instincts but beware of deception.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "sun",
    name: "The Sun",
    type: "major",
    number: 19,
    keywords: ["joy", "success", "vitality", "positivity"],
    uprightMeaning:
      "Joy, success, vitality, positivity, happiness, optimism, enlightenment, achievement.",
    reversedMeaning:
      "Temporary setbacks, lack of success, pessimism, sadness, delays.",
    description:
      "The Sun represents joy, success and vitality. Embrace happiness and celebrate your achievements.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "judgement",
    name: "Judgement",
    type: "major",
    number: 20,
    keywords: ["rebirth", "inner calling", "absolution", "second chances"],
    uprightMeaning:
      "Rebirth, inner calling, absolution, second chances, spiritual awakening, redemption.",
    reversedMeaning:
      "Self-doubt, harsh judgment, lack of self-awareness, missed opportunities.",
    description:
      "Judgement represents rebirth, inner calling and absolution. Answer your spiritual calling and embrace second chances.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "world",
    name: "The World",
    type: "major",
    number: 21,
    keywords: ["completion", "fulfillment", "wholeness", "achievement"],
    uprightMeaning:
      "Completion, fulfillment, wholeness, achievement, success, travel, accomplishment.",
    reversedMeaning:
      "Incomplete goals, lack of closure, stagnation, delays, unfulfilled dreams.",
    description:
      "The World represents completion, fulfillment and wholeness. You have achieved a major life goal.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },

  // Minor Arcana - Wands
  {
    id: "ace-wands",
    name: "Ace of Wands",
    type: "minor",
    suit: "wands",
    number: 1,
    keywords: ["inspiration", "new beginnings", "potential", "creativity"],
    uprightMeaning:
      "Inspiration, new beginnings, potential, creativity, opportunity, passion, enthusiasm, motivation.",
    reversedMeaning:
      "Lack of energy, delays, creative blocks, missed opportunities, lack of direction.",
    description:
      "The Ace of Wands represents inspiration and new creative beginnings. A spark of passion ignites new possibilities.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
  {
    id: "two-wands",
    name: "Two of Wands",
    type: "minor",
    suit: "wands",
    number: 2,
    keywords: ["planning", "progress", "decisions", "future planning"],
    uprightMeaning:
      "Planning, progress, decisions, future planning, personal power, overseas expansion.",
    reversedMeaning:
      "Fear of unknown, lack of planning, bad planning, restriction, playing it safe.",
    description:
      "The Two of Wands represents planning and future decisions. You hold the power to shape your destiny.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },

  // Minor Arcana - Cups
  {
    id: "ace-cups",
    name: "Ace of Cups",
    type: "minor",
    suit: "cups",
    number: 1,
    keywords: ["love", "new relationships", "compassion", "creativity"],
    uprightMeaning:
      "Love, new relationships, compassion, creativity, new feelings, spirituality, intuition.",
    reversedMeaning:
      "Emotional loss, blocked creativity, emptiness, lack of love, sadness.",
    description:
      "The Ace of Cups represents new emotional beginnings and love. Your heart is open to new experiences.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },

  // Minor Arcana - Swords
  {
    id: "ace-swords",
    name: "Ace of Swords",
    type: "minor",
    suit: "swords",
    number: 1,
    keywords: ["clarity", "breakthrough", "new ideas", "mental clarity"],
    uprightMeaning:
      "Clarity, breakthrough, new ideas, mental clarity, intellectual power, communication.",
    reversedMeaning:
      "Confusion, mental blocks, lack of clarity, miscommunication, chaos.",
    description:
      "The Ace of Swords represents mental clarity and breakthrough moments. Cut through confusion with sharp insight.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },

  // Minor Arcana - Pentacles
  {
    id: "ace-pentacles",
    name: "Ace of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 1,
    keywords: [
      "opportunity",
      "prosperity",
      "new ventures",
      "material manifestation",
    ],
    uprightMeaning:
      "Opportunity, prosperity, new ventures, material manifestation, abundance, new job.",
    reversedMeaning:
      "Lost opportunity, lack of planning, poor financial decisions, scarcity mindset.",
    description:
      "The Ace of Pentacles represents new material opportunities and prosperity. A seed of abundance is planted.",
    imageUrl:
      "https://images.pexels.com/photos/26891744/pexels-photo-26891744.jpeg",
  },
];

// Tarot Spreads
export const TAROT_SPREADS: TarotSpread[] = [
  {
    id: "three-card",
    name: "Three Card Spread",
    description:
      "A simple yet powerful spread focusing on past, present, and future influences.",
    positions: [
      {
        id: "past",
        name: "Past",
        description: "Past influences affecting the situation",
        x: 10,
        y: 50,
      },
      {
        id: "present",
        name: "Present",
        description: "Current circumstances and energies",
        x: 50,
        y: 50,
      },
      {
        id: "future",
        name: "Future",
        description: "Potential outcomes and future influences",
        x: 90,
        y: 50,
      },
    ],
  },
  {
    id: "celtic-cross",
    name: "Celtic Cross",
    description:
      "The most comprehensive spread offering detailed insight into all aspects of your situation.",
    positions: [
      {
        id: "present",
        name: "Present Situation",
        description: "The heart of the matter",
        x: 50,
        y: 50,
      },
      {
        id: "challenge",
        name: "Challenge",
        description: "What crosses you or challenges you",
        x: 50,
        y: 50,
        rotation: 90,
      },
      {
        id: "past",
        name: "Past",
        description: "Distant past or basis of the situation",
        x: 30,
        y: 50,
      },
      {
        id: "future",
        name: "Future",
        description: "Possible outcome if nothing changes",
        x: 70,
        y: 50,
      },
      {
        id: "crown",
        name: "Crown",
        description: "Possible outcome or what you're moving toward",
        x: 50,
        y: 20,
      },
      {
        id: "foundation",
        name: "Foundation",
        description: "Recent past or foundation",
        x: 50,
        y: 80,
      },
      {
        id: "yourself",
        name: "Your Approach",
        description: "How you see yourself in this situation",
        x: 85,
        y: 80,
      },
      {
        id: "external",
        name: "External Influences",
        description: "How others see you or external influences",
        x: 85,
        y: 60,
      },
      {
        id: "hopes",
        name: "Hopes & Fears",
        description: "Your hopes and fears about the situation",
        x: 85,
        y: 40,
      },
      {
        id: "outcome",
        name: "Final Outcome",
        description: "The ultimate outcome",
        x: 85,
        y: 20,
      },
    ],
  },
  {
    id: "relationship",
    name: "Relationship Spread",
    description:
      "Explore the dynamics between you and another person in any type of relationship.",
    positions: [
      {
        id: "you",
        name: "You",
        description: "Your energy and feelings in this relationship",
        x: 25,
        y: 30,
      },
      {
        id: "them",
        name: "Them",
        description: "Their energy and feelings in this relationship",
        x: 75,
        y: 30,
      },
      {
        id: "connection",
        name: "Connection",
        description: "The connection between you both",
        x: 50,
        y: 50,
      },
      {
        id: "advice-you",
        name: "Advice for You",
        description: "What you should focus on",
        x: 25,
        y: 70,
      },
      {
        id: "advice-them",
        name: "Advice for Them",
        description: "What they should focus on",
        x: 75,
        y: 70,
      },
      {
        id: "outcome",
        name: "Relationship Outcome",
        description: "Where this relationship is heading",
        x: 50,
        y: 85,
      },
    ],
  },
  {
    id: "horseshoe",
    name: "Horseshoe Spread",
    description:
      "A seven-card spread that provides guidance and shows how to approach your situation.",
    positions: [
      {
        id: "past",
        name: "Past",
        description: "Past influences on the situation",
        x: 15,
        y: 75,
      },
      {
        id: "present",
        name: "Present",
        description: "Current circumstances",
        x: 30,
        y: 45,
      },
      {
        id: "hidden",
        name: "Hidden Influences",
        description: "Hidden factors affecting the situation",
        x: 45,
        y: 25,
      },
      {
        id: "obstacles",
        name: "Obstacles",
        description: "Challenges to overcome",
        x: 60,
        y: 25,
      },
      {
        id: "environment",
        name: "Environment",
        description: "External influences and people around you",
        x: 75,
        y: 45,
      },
      {
        id: "action",
        name: "Best Course of Action",
        description: "What you should do",
        x: 90,
        y: 75,
      },
      {
        id: "outcome",
        name: "Likely Outcome",
        description: "Most probable result",
        x: 52.5,
        y: 85,
      },
    ],
  },
];

// Utility functions
export function shuffleCards(): TarotCard[] {
  const deck = [...TAROT_CARDS];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function getRandomCards(count: number): TarotCard[] {
  const shuffled = shuffleCards();
  return shuffled.slice(0, count);
}

export function getCardById(id: string): TarotCard | undefined {
  return TAROT_CARDS.find((card) => card.id === id);
}

export function getSpreadById(id: string): TarotSpread | undefined {
  return TAROT_SPREADS.find((spread) => spread.id === id);
}
