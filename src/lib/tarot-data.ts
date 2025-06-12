import { WIKIMEDIA_TAROT_IMAGES } from "./tarot-images";

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

// Complete Rider-Waite Tarot Deck Data (78 cards)
export const TAROT_CARDS: TarotCard[] = [
  // MAJOR ARCANA (22 cards)
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["fool"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["magician"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["high-priestess"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["empress"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["emperor"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["hierophant"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["lovers"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["chariot"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["strength"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["hermit"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["wheel-of-fortune"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["justice"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["hanged-man"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["death"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["temperance"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["devil"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["tower"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["star"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["moon"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["sun"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["judgement"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["world"],
  },

  // MINOR ARCANA - WANDS (14 cards)
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ace-wands"],
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["two-wands"],
  },
  {
    id: "three-wands",
    name: "Three of Wands",
    type: "minor",
    suit: "wands",
    number: 3,
    keywords: [
      "expansion",
      "foresight",
      "overseas opportunities",
      "leadership",
    ],
    uprightMeaning:
      "Expansion, foresight, overseas opportunities, leadership, progress, long-distance trade.",
    reversedMeaning:
      "Playing it safe, lack of foresight, unexpected delays, frustration.",
    description:
      "The Three of Wands represents expansion and long-term planning. Look toward the horizon for new opportunities.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["three-wands"],
  },
  {
    id: "four-wands",
    name: "Four of Wands",
    type: "minor",
    suit: "wands",
    number: 4,
    keywords: ["celebration", "harmony", "homecoming", "community"],
    uprightMeaning:
      "Celebration, harmony, homecoming, community, marriage, graduation, achievement.",
    reversedMeaning:
      "Personal celebration, inner harmony, conflict with others, canceled celebration.",
    description:
      "The Four of Wands represents celebration and harmony. A time of joy and community gathering.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["four-wands"],
  },
  {
    id: "five-wands",
    name: "Five of Wands",
    type: "minor",
    suit: "wands",
    number: 5,
    keywords: ["conflict", "competition", "tension", "disagreement"],
    uprightMeaning:
      "Conflict, competition, tension, disagreement, struggle, rivalry, creative differences.",
    reversedMeaning:
      "Inner conflict, avoiding conflict, release of tension, cooperation.",
    description:
      "The Five of Wands represents conflict and competition. Channel competitive energy constructively.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["five-wands"],
  },
  {
    id: "six-wands",
    name: "Six of Wands",
    type: "minor",
    suit: "wands",
    number: 6,
    keywords: ["victory", "success", "public recognition", "progress"],
    uprightMeaning:
      "Victory, success, public recognition, progress, self-confidence, achievement.",
    reversedMeaning:
      "Private achievement, personal definition of success, fall from grace, egotism.",
    description:
      "The Six of Wands represents victory and success. Your efforts are being recognized and celebrated.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["six-wands"],
  },
  {
    id: "seven-wands",
    name: "Seven of Wands",
    type: "minor",
    suit: "wands",
    number: 7,
    keywords: ["challenge", "competition", "perseverance", "defensive"],
    uprightMeaning:
      "Challenge, competition, perseverance, defensive, maintaining control, standing up for beliefs.",
    reversedMeaning: "Giving up, lack of self-belief, overwhelmed, exhaustion.",
    description:
      "The Seven of Wands represents challenge and perseverance. Stand your ground and defend your position.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["seven-wands"],
  },
  {
    id: "eight-wands",
    name: "Eight of Wands",
    type: "minor",
    suit: "wands",
    number: 8,
    keywords: ["rapid action", "movement", "quick decisions", "progress"],
    uprightMeaning:
      "Rapid action, movement, quick decisions, progress, excitement, sudden progress.",
    reversedMeaning:
      "Delays, frustration, resisting change, internal alignment.",
    description:
      "The Eight of Wands represents rapid action and movement. Things are moving quickly in your favor.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["eight-wands"],
  },
  {
    id: "nine-wands",
    name: "Nine of Wands",
    type: "minor",
    suit: "wands",
    number: 9,
    keywords: ["resilience", "courage", "persistence", "test of faith"],
    uprightMeaning:
      "Resilience, courage, persistence, test of faith, boundaries, nearly there.",
    reversedMeaning:
      "Inner resources, struggle, overwhelm, defensive, paranoia.",
    description:
      "The Nine of Wands represents resilience and persistence. You're almost at the finish line.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["nine-wands"],
  },
  {
    id: "ten-wands",
    name: "Ten of Wands",
    type: "minor",
    suit: "wands",
    number: 10,
    keywords: ["burden", "hard work", "responsibility", "achievement"],
    uprightMeaning:
      "Burden, hard work, responsibility, achievement, carrying the load, success through effort.",
    reversedMeaning: "Doing it all, delegation, release, working smarter.",
    description:
      "The Ten of Wands represents burden and hard work. Success comes with responsibility.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ten-wands"],
  },
  {
    id: "page-wands",
    name: "Page of Wands",
    type: "minor",
    suit: "wands",
    number: 11,
    keywords: ["inspiration", "ideas", "discovery", "limitless potential"],
    uprightMeaning:
      "Inspiration, ideas, discovery, limitless potential, free spirit, emerging talents.",
    reversedMeaning:
      "Lack of direction, no follow-through, disappointing news, creative blocks.",
    description:
      "The Page of Wands represents inspiration and new ideas. A messenger of creative potential.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["page-wands"],
  },
  {
    id: "knight-wands",
    name: "Knight of Wands",
    type: "minor",
    suit: "wands",
    number: 12,
    keywords: ["action", "adventure", "fearlessness", "confidence"],
    uprightMeaning:
      "Action, adventure, fearlessness, confidence, impulsiveness, energy, heroics.",
    reversedMeaning:
      "Recklessness, haste, scattered energy, delays, frustration.",
    description:
      "The Knight of Wands represents action and adventure. Bold action leads to exciting opportunities.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["knight-wands"],
  },
  {
    id: "queen-wands",
    name: "Queen of Wands",
    type: "minor",
    suit: "wands",
    number: 13,
    keywords: ["courage", "confidence", "independence", "social butterfly"],
    uprightMeaning:
      "Courage, confidence, independence, social butterfly, determination, joy, friendliness.",
    reversedMeaning:
      "Self-respect, self-confidence, introverted, re-establish sense of self.",
    description:
      "The Queen of Wands represents courage and confidence. She radiates warmth and attracts others.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["queen-wands"],
  },
  {
    id: "king-wands",
    name: "King of Wands",
    type: "minor",
    suit: "wands",
    number: 14,
    keywords: ["natural leader", "vision", "entrepreneur", "honour"],
    uprightMeaning:
      "Natural leader, vision, entrepreneur, honour, country, cultural interests.",
    reversedMeaning:
      "Impulsiveness, haste, ruthless, high expectations, forceful.",
    description:
      "The King of Wands represents natural leadership and vision. A charismatic leader who inspires others.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["king-wands"],
  },

  // MINOR ARCANA - CUPS (14 cards)
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ace-cups"],
  },
  {
    id: "two-cups",
    name: "Two of Cups",
    type: "minor",
    suit: "cups",
    number: 2,
    keywords: [
      "unified love",
      "partnership",
      "mutual attraction",
      "relationships",
    ],
    uprightMeaning:
      "Unified love, partnership, mutual attraction, relationships, cooperation, balance.",
    reversedMeaning:
      "Self-love, break-up, disharmony, distrust, unbalanced relationship.",
    description:
      "The Two of Cups represents unified love and partnership. A deep connection with another person.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["two-cups"],
  },
  {
    id: "three-cups",
    name: "Three of Cups",
    type: "minor",
    suit: "cups",
    number: 3,
    keywords: ["celebration", "friendship", "creativity", "community"],
    uprightMeaning:
      "Celebration, friendship, creativity, community, group activities, social events.",
    reversedMeaning:
      "Independence, alone time, hardcore partying, 'three's a crowd'.",
    description:
      "The Three of Cups represents celebration and friendship. Joy shared with others multiplies.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["three-cups"],
  },
  {
    id: "four-cups",
    name: "Four of Cups",
    type: "minor",
    suit: "cups",
    number: 4,
    keywords: ["meditation", "contemplation", "apathy", "reevaluation"],
    uprightMeaning:
      "Meditation, contemplation, apathy, reevaluation, boredom, indifference.",
    reversedMeaning:
      "Retreat, withdrawal, checking in for spiritual self, stillness.",
    description:
      "The Four of Cups represents meditation and contemplation. Sometimes we need to look within for answers.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["four-cups"],
  },
  {
    id: "five-cups",
    name: "Five of Cups",
    type: "minor",
    suit: "cups",
    number: 5,
    keywords: ["regret", "failure", "disappointment", "loss"],
    uprightMeaning:
      "Regret, failure, disappointment, loss, grief, bereavement, focusing on negative.",
    reversedMeaning:
      "Personal setbacks, self-forgiveness, moving on, releasing regret.",
    description:
      "The Five of Cups represents regret and disappointment. Focus on what remains, not what is lost.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["five-cups"],
  },
  {
    id: "six-cups",
    name: "Six of Cups",
    type: "minor",
    suit: "cups",
    number: 6,
    keywords: ["revisiting the past", "childhood memories", "innocence", "joy"],
    uprightMeaning:
      "Revisiting the past, childhood memories, innocence, joy, reunion, goodwill.",
    reversedMeaning:
      "Living in the past, naivety, unrealistic, lack of progress.",
    description:
      "The Six of Cups represents revisiting the past and childhood memories. Innocence and nostalgia bring comfort.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["six-cups"],
  },
  {
    id: "seven-cups",
    name: "Seven of Cups",
    type: "minor",
    suit: "cups",
    number: 7,
    keywords: ["opportunities", "choices", "wishful thinking", "illusion"],
    uprightMeaning:
      "Opportunities, choices, wishful thinking, illusion, fantasy, scattered energy.",
    reversedMeaning:
      "Alignment, personal values, overwhelmed by choices, lack of choice.",
    description:
      "The Seven of Cups represents opportunities and choices. Don't get lost in dreams - take action.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["seven-cups"],
  },
  {
    id: "eight-cups",
    name: "Eight of Cups",
    type: "minor",
    suit: "cups",
    number: 8,
    keywords: ["disappointment", "abandonment", "withdrawal", "escapism"],
    uprightMeaning:
      "Disappointment, abandonment, withdrawal, escapism, searching for truth, leaving behind.",
    reversedMeaning:
      "Trying one more time, indecision, aimless drifting, fear of change.",
    description:
      "The Eight of Cups represents disappointment and withdrawal. Sometimes walking away is the brave choice.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["eight-cups"],
  },
  {
    id: "nine-cups",
    name: "Nine of Cups",
    type: "minor",
    suit: "cups",
    number: 9,
    keywords: ["contentment", "satisfaction", "gratitude", "wish fulfilled"],
    uprightMeaning:
      "Contentment, satisfaction, gratitude, wish fulfilled, luxury, self-sufficiency.",
    reversedMeaning:
      "Inner happiness, materialism, dissatisfaction, indulgence.",
    description:
      "The Nine of Cups represents contentment and satisfaction. Your wishes are coming true.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["nine-cups"],
  },
  {
    id: "ten-cups",
    name: "Ten of Cups",
    type: "minor",
    suit: "cups",
    number: 10,
    keywords: ["divine love", "blissful relationships", "harmony", "alignment"],
    uprightMeaning:
      "Divine love, blissful relationships, harmony, alignment, happy families.",
    reversedMeaning:
      "Disconnection, misaligned values, struggling relationships, disharmony.",
    description:
      "The Ten of Cups represents divine love and harmony. Perfect emotional fulfillment and family bliss.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ten-cups"],
  },
  {
    id: "page-cups",
    name: "Page of Cups",
    type: "minor",
    suit: "cups",
    number: 11,
    keywords: [
      "creative opportunities",
      "intuitive messages",
      "curiosity",
      "possibility",
    ],
    uprightMeaning:
      "Creative opportunities, intuitive messages, curiosity, possibility, dreamer, sensitivity.",
    reversedMeaning:
      "New ideas, doubting intuition, creative blocks, emotional immaturity.",
    description:
      "The Page of Cups represents creative opportunities and intuitive messages. Trust your inner voice.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["page-cups"],
  },
  {
    id: "knight-cups",
    name: "Knight of Cups",
    type: "minor",
    suit: "cups",
    number: 12,
    keywords: ["creativity", "romance", "charm", "imagination"],
    uprightMeaning:
      "Creativity, romance, charm, imagination, beauty, artistic ability, refined behavior.",
    reversedMeaning: "Overemotional, jealousy, moodiness, disappointment.",
    description:
      "The Knight of Cups represents creativity and romance. Follow your heart's desires with artistic flair.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["knight-cups"],
  },
  {
    id: "queen-cups",
    name: "Queen of Cups",
    type: "minor",
    suit: "cups",
    number: 13,
    keywords: ["compassionate", "caring", "emotionally stable", "intuitive"],
    uprightMeaning:
      "Compassionate, caring, emotionally stable, intuitive, in flow, empathy.",
    reversedMeaning: "Inner feelings, self-care, self-love, co-dependency.",
    description:
      "The Queen of Cups represents compassion and emotional stability. She offers healing and understanding.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["queen-cups"],
  },
  {
    id: "king-cups",
    name: "King of Cups",
    type: "minor",
    suit: "cups",
    number: 14,
    keywords: [
      "emotionally balanced",
      "compassionate",
      "generous",
      "diplomatic",
    ],
    uprightMeaning:
      "Emotionally balanced, compassionate, generous, diplomatic, wisdom, calmness.",
    reversedMeaning:
      "Self-compassion, inner feelings, moodiness, emotional manipulation.",
    description:
      "The King of Cups represents emotional balance and compassion. Mastery over emotions and intuition.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["king-cups"],
  },

  // MINOR ARCANA - SWORDS (14 cards)
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ace-swords"],
  },
  {
    id: "two-swords",
    name: "Two of Swords",
    type: "minor",
    suit: "swords",
    number: 2,
    keywords: [
      "difficult decisions",
      "weighing options",
      "indecision",
      "blocked emotions",
    ],
    uprightMeaning:
      "Difficult decisions, weighing options, indecision, blocked emotions, stalemate.",
    reversedMeaning:
      "Indecision, confusion, information overload, lack of information.",
    description:
      "The Two of Swords represents difficult decisions and indecision. Gather information before choosing.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["two-swords"],
  },
  {
    id: "three-swords",
    name: "Three of Swords",
    type: "minor",
    suit: "swords",
    number: 3,
    keywords: ["heartbreak", "emotional pain", "sorrow", "grief"],
    uprightMeaning:
      "Heartbreak, emotional pain, sorrow, grief, loss, trauma, separation.",
    reversedMeaning:
      "Negative self-talk, releasing pain, optimism, forgiveness.",
    description:
      "The Three of Swords represents heartbreak and emotional pain. Healing comes with time and understanding.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["three-swords"],
  },
  {
    id: "four-swords",
    name: "Four of Swords",
    type: "minor",
    suit: "swords",
    number: 4,
    keywords: ["rest", "relaxation", "meditation", "contemplation"],
    uprightMeaning:
      "Rest, relaxation, meditation, contemplation, recuperation, passive action.",
    reversedMeaning: "Restlessness, burnout, stress, lack of progress.",
    description:
      "The Four of Swords represents rest and meditation. Take time to recharge and reflect.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["four-swords"],
  },
  {
    id: "five-swords",
    name: "Five of Swords",
    type: "minor",
    suit: "swords",
    number: 5,
    keywords: ["conflict", "disagreements", "competition", "defeat"],
    uprightMeaning:
      "Conflict, disagreements, competition, defeat, winning at all costs, betrayal.",
    reversedMeaning:
      "Reconciliation, making amends, past resentment, desire to resolve.",
    description:
      "The Five of Swords represents conflict and disagreements. Consider if winning is worth the cost.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["five-swords"],
  },
  {
    id: "six-swords",
    name: "Six of Swords",
    type: "minor",
    suit: "swords",
    number: 6,
    keywords: ["transition", "change", "rite of passage", "moving on"],
    uprightMeaning:
      "Transition, change, rite of passage, moving on, travel, healing.",
    reversedMeaning:
      "Personal transition, resistance to change, unfinished business.",
    description:
      "The Six of Swords represents transition and moving on. You're heading toward calmer waters.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["six-swords"],
  },
  {
    id: "seven-swords",
    name: "Seven of Swords",
    type: "minor",
    suit: "swords",
    number: 7,
    keywords: [
      "betrayal",
      "deception",
      "getting away with something",
      "strategic action",
    ],
    uprightMeaning:
      "Betrayal, deception, getting away with something, strategic action, cunning.",
    reversedMeaning:
      "Imposter syndrome, self-deceit, keeping secrets, coming clean.",
    description:
      "The Seven of Swords represents betrayal and deception. Be wary of dishonest behavior.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["seven-swords"],
  },
  {
    id: "eight-swords",
    name: "Eight of Swords",
    type: "minor",
    suit: "swords",
    number: 8,
    keywords: [
      "negative thinking",
      "restricted freedom",
      "imprisonment",
      "victim mentality",
    ],
    uprightMeaning:
      "Negative thinking, restricted freedom, imprisonment, victim mentality, trapped.",
    reversedMeaning:
      "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives.",
    description:
      "The Eight of Swords represents negative thinking and feeling trapped. The chains that bind you may be of your own making.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["eight-swords"],
  },
  {
    id: "nine-swords",
    name: "Nine of Swords",
    type: "minor",
    suit: "swords",
    number: 9,
    keywords: ["anxiety", "worry", "fear", "depression"],
    uprightMeaning:
      "Anxiety, worry, fear, depression, nightmares, negative thinking, despair.",
    reversedMeaning:
      "Inner turmoil, deep-seated fears, secrets, releasing worry.",
    description:
      "The Nine of Swords represents anxiety and worry. Don't let fear control your thoughts.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["nine-swords"],
  },
  {
    id: "ten-swords",
    name: "Ten of Swords",
    type: "minor",
    suit: "swords",
    number: 10,
    keywords: ["painful endings", "deep wounds", "betrayal", "crisis"],
    uprightMeaning:
      "Painful endings, deep wounds, betrayal, crisis, hitting rock bottom, victimization.",
    reversedMeaning:
      "Recovery, regeneration, resisting an inevitable end, surviving disaster.",
    description:
      "The Ten of Swords represents painful endings and crisis. This is rock bottom - the only way is up.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ten-swords"],
  },
  {
    id: "page-swords",
    name: "Page of Swords",
    type: "minor",
    suit: "swords",
    number: 11,
    keywords: [
      "new ideas",
      "curiosity",
      "thirst for knowledge",
      "new ways of communicating",
    ],
    uprightMeaning:
      "New ideas, curiosity, thirst for knowledge, new ways of communicating, vigilance.",
    reversedMeaning:
      "Self-expression, all talk and no action, haste, scattered thoughts.",
    description:
      "The Page of Swords represents new ideas and curiosity. Stay alert and ready to learn.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["page-swords"],
  },
  {
    id: "knight-swords",
    name: "Knight of Swords",
    type: "minor",
    suit: "swords",
    number: 12,
    keywords: [
      "ambitious",
      "action-oriented",
      "driven to succeed",
      "fast-thinking",
    ],
    uprightMeaning:
      "Ambitious, action-oriented, driven to succeed, fast-thinking, impulsive.",
    reversedMeaning:
      "Restless, unfocused, impulsive, burn-out, scattered energy.",
    description:
      "The Knight of Swords represents ambition and fast action. Channel your energy with focus and purpose.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["knight-swords"],
  },
  {
    id: "queen-swords",
    name: "Queen of Swords",
    type: "minor",
    suit: "swords",
    number: 13,
    keywords: [
      "independent",
      "unbiased judgement",
      "clear boundaries",
      "direct communication",
    ],
    uprightMeaning:
      "Independent, unbiased judgement, clear boundaries, direct communication, thinking with your head.",
    reversedMeaning:
      "Overly-emotional, easily influenced, bitchy, cold-hearted.",
    description:
      "The Queen of Swords represents independence and clear thinking. Make decisions with your head, not your heart.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["queen-swords"],
  },
  {
    id: "king-swords",
    name: "King of Swords",
    type: "minor",
    suit: "swords",
    number: 14,
    keywords: ["mental clarity", "intellectual power", "authority", "truth"],
    uprightMeaning:
      "Mental clarity, intellectual power, authority, truth, structured thinking, high standards.",
    reversedMeaning: "Quiet power, inner truth, misuse of power, manipulation.",
    description:
      "The King of Swords represents mental clarity and intellectual authority. Lead with wisdom and fairness.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["king-swords"],
  },

  // MINOR ARCANA - PENTACLES (14 cards)
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
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ace-pentacles"],
  },
  {
    id: "two-pentacles",
    name: "Two of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 2,
    keywords: [
      "multiple priorities",
      "time management",
      "prioritisation",
      "adaptability",
    ],
    uprightMeaning:
      "Multiple priorities, time management, prioritisation, adaptability, juggling resources.",
    reversedMeaning:
      "Over-committed, disorganisation, reprioritisation, overwhelm.",
    description:
      "The Two of Pentacles represents multiple priorities and adaptability. Find balance in the juggling act.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["two-pentacles"],
  },
  {
    id: "three-pentacles",
    name: "Three of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 3,
    keywords: ["teamwork", "collaboration", "learning", "implementation"],
    uprightMeaning:
      "Teamwork, collaboration, learning, implementation, shared goals, apprenticeship.",
    reversedMeaning:
      "Disharmony, misalignment, working alone, lack of teamwork.",
    description:
      "The Three of Pentacles represents teamwork and collaboration. Success comes through shared effort.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["three-pentacles"],
  },
  {
    id: "four-pentacles",
    name: "Four of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 4,
    keywords: ["saving money", "security", "conservatism", "scarcity"],
    uprightMeaning:
      "Saving money, security, conservatism, scarcity, control, frugality.",
    reversedMeaning:
      "Over-spending, greed, self-protection, financial security.",
    description:
      "The Four of Pentacles represents saving and security. Balance financial caution with generous living.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["four-pentacles"],
  },
  {
    id: "five-pentacles",
    name: "Five of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 5,
    keywords: ["financial loss", "poverty", "lack mindset", "isolation"],
    uprightMeaning:
      "Financial loss, poverty, lack mindset, isolation, worry, unemployment.",
    reversedMeaning:
      "Recovery from financial loss, spiritual poverty, inner resources.",
    description:
      "The Five of Pentacles represents financial hardship and isolation. Help is available if you ask for it.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["five-pentacles"],
  },
  {
    id: "six-pentacles",
    name: "Six of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 6,
    keywords: ["giving", "receiving", "sharing wealth", "generosity"],
    uprightMeaning:
      "Giving, receiving, sharing wealth, generosity, charity, community, support.",
    reversedMeaning:
      "Self-care, unpaid debts, one-sided charity, strings attached.",
    description:
      "The Six of Pentacles represents giving and receiving. Share your abundance with others.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["six-pentacles"],
  },
  {
    id: "seven-pentacles",
    name: "Seven of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 7,
    keywords: [
      "long-term view",
      "sustainable results",
      "perseverance",
      "investment",
    ],
    uprightMeaning:
      "Long-term view, sustainable results, perseverance, investment, planning ahead.",
    reversedMeaning:
      "Lack of long-term vision, limited success, disappointment, impatience.",
    description:
      "The Seven of Pentacles represents long-term investment and patience. Good things take time to grow.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["seven-pentacles"],
  },
  {
    id: "eight-pentacles",
    name: "Eight of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 8,
    keywords: [
      "apprenticeship",
      "repetitive tasks",
      "mastery",
      "skill development",
    ],
    uprightMeaning:
      "Apprenticeship, repetitive tasks, mastery, skill development, dedication, craftsmanship.",
    reversedMeaning:
      "Lack of focus, perfectionism, misdirected activity, low quality.",
    description:
      "The Eight of Pentacles represents apprenticeship and skill development. Master your craft through dedicated practice.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["eight-pentacles"],
  },
  {
    id: "nine-pentacles",
    name: "Nine of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 9,
    keywords: [
      "abundance",
      "luxury",
      "self-sufficiency",
      "financial independence",
    ],
    uprightMeaning:
      "Abundance, luxury, self-sufficiency, financial independence, enjoying wealth.",
    reversedMeaning:
      "Self-worth, over-investment in work, hustling, self-value.",
    description:
      "The Nine of Pentacles represents abundance and luxury. Enjoy the fruits of your labor.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["nine-pentacles"],
  },
  {
    id: "ten-pentacles",
    name: "Ten of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 10,
    keywords: ["wealth", "financial security", "family", "long-term success"],
    uprightMeaning:
      "Wealth, financial security, family, long-term success, contribution, permanence.",
    reversedMeaning:
      "The dark side of wealth, financial failure, loneliness, loss.",
    description:
      "The Ten of Pentacles represents wealth and family legacy. Build something that lasts for generations.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["ten-pentacles"],
  },
  {
    id: "page-pentacles",
    name: "Page of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 11,
    keywords: [
      "manifestation",
      "financial opportunity",
      "skill development",
      "ambition",
    ],
    uprightMeaning:
      "Manifestation, financial opportunity, skill development, ambition, desire to learn.",
    reversedMeaning:
      "Lack of progress, procrastination, learn from failure, distracted easily.",
    description:
      "The Page of Pentacles represents manifestation and new opportunities. Stay focused on your goals.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["page-pentacles"],
  },
  {
    id: "knight-pentacles",
    name: "Knight of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 12,
    keywords: ["hard work", "productivity", "routine", "conservatism"],
    uprightMeaning:
      "Hard work, productivity, routine, conservatism, methodical, reliable.",
    reversedMeaning:
      "Self-discipline, boredom, feeling 'stuck', monotony, frustration.",
    description:
      "The Knight of Pentacles represents hard work and reliability. Steady progress leads to success.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["knight-pentacles"],
  },
  {
    id: "queen-pentacles",
    name: "Queen of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 13,
    keywords: [
      "nurturing",
      "practical",
      "providing financially",
      "a working parent",
    ],
    uprightMeaning:
      "Nurturing, practical, providing financially, a working parent, resourcefulness.",
    reversedMeaning: "Financial independence, self-care, work-home conflict.",
    description:
      "The Queen of Pentacles represents nurturing and practical care. She provides security for others.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["queen-pentacles"],
  },
  {
    id: "king-pentacles",
    name: "King of Pentacles",
    type: "minor",
    suit: "pentacles",
    number: 14,
    keywords: [
      "financial success",
      "business acumen",
      "security",
      "leadership",
    ],
    uprightMeaning:
      "Financial success, business acumen, security, leadership, reliable provider.",
    reversedMeaning:
      "Financially inept, obsessed with wealth and status, stubborn.",
    description:
      "The King of Pentacles represents financial success and business leadership. Mastery of the material world.",
    imageUrl: WIKIMEDIA_TAROT_IMAGES["king-pentacles"],
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

export function getCardsBySuit(
  suit: "wands" | "cups" | "swords" | "pentacles",
): TarotCard[] {
  return TAROT_CARDS.filter((card) => card.suit === suit);
}

export function getMajorArcana(): TarotCard[] {
  return TAROT_CARDS.filter((card) => card.type === "major");
}

export function getMinorArcana(): TarotCard[] {
  return TAROT_CARDS.filter((card) => card.type === "minor");
}
