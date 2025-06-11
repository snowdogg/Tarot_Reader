import { TarotCard, TarotSpread } from "./tarot-data";

export interface SpreadSummary {
  title: string;
  overview: string;
  keyThemes: string[];
  guidance: string;
  timing: string;
  energies: {
    dominant: string;
    secondary: string;
    challenge: string;
  };
}

// Generate intelligent spread summaries based on cards drawn
export function generateSpreadSummary(
  spread: TarotSpread,
  cards: TarotCard[],
): SpreadSummary {
  const majorArcanaCount = cards.filter((card) => card.type === "major").length;
  const suits = cards
    .filter((card) => card.suit)
    .map((card) => card.suit!)
    .reduce(
      (acc, suit) => {
        acc[suit] = (acc[suit] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

  const dominantSuit = Object.entries(suits).sort(
    ([, a], [, b]) => b - a,
  )[0]?.[0];

  const allKeywords = cards.flatMap((card) => card.keywords);
  const keywordFrequency = allKeywords.reduce(
    (acc, keyword) => {
      acc[keyword] = (acc[keyword] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const topKeywords = Object.entries(keywordFrequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([keyword]) => keyword);

  switch (spread.id) {
    case "three-card":
      return generateThreeCardSummary(cards, topKeywords, majorArcanaCount);
    case "celtic-cross":
      return generateCelticCrossSummary(
        cards,
        topKeywords,
        majorArcanaCount,
        dominantSuit,
      );
    case "relationship":
      return generateRelationshipSummary(cards, topKeywords, majorArcanaCount);
    case "horseshoe":
      return generateHorseshoeSummary(cards, topKeywords, majorArcanaCount);
    default:
      return generateGenericSummary(cards, topKeywords, majorArcanaCount);
  }
}

function generateThreeCardSummary(
  cards: TarotCard[],
  topKeywords: string[],
  majorArcanaCount: number,
): SpreadSummary {
  const [past, present, future] = cards;

  const pastEnergy = past.keywords[0] || "unknown";
  const presentEnergy = present.keywords[0] || "current";
  const futureEnergy = future.keywords[0] || "potential";

  const isTransformativeJourney = majorArcanaCount >= 2;
  const timeline = isTransformativeJourney ? "long-term" : "near future";

  return {
    title: "Your Life's Current Chapter",
    overview: `This reading reveals a journey from ${pastEnergy} through ${presentEnergy} toward ${futureEnergy}. ${
      isTransformativeJourney
        ? "The presence of Major Arcana cards suggests this is a significant life phase with deep spiritual lessons."
        : "This appears to be a period of gradual development and practical growth."
    } The cards show ${
      majorArcanaCount === 3
        ? "a powerful spiritual transformation"
        : majorArcanaCount === 2
          ? "significant life changes ahead"
          : "steady progress in your current path"
    }.`,
    keyThemes: topKeywords,
    guidance: `Focus on integrating the lessons from your ${pastEnergy} experiences while navigating your current ${presentEnergy} phase. The path toward ${futureEnergy} requires ${
      present.type === "major"
        ? "deep inner work and spiritual awareness"
        : "practical action and consistent effort"
    }.`,
    timing: `${timeline} - expect developments over ${
      isTransformativeJourney ? "6-12 months" : "1-3 months"
    }`,
    energies: {
      dominant: presentEnergy,
      secondary: futureEnergy,
      challenge: getOpposingEnergy(pastEnergy),
    },
  };
}

function generateCelticCrossSummary(
  cards: TarotCard[],
  topKeywords: string[],
  majorArcanaCount: number,
  dominantSuit?: string,
): SpreadSummary {
  const suitEnergies = {
    wands: "creative and passionate",
    cups: "emotional and intuitive",
    swords: "mental and communicative",
    pentacles: "material and practical",
  };

  const suitElement = dominantSuit
    ? suitEnergies[dominantSuit as keyof typeof suitEnergies]
    : "balanced";

  const intensityLevel =
    majorArcanaCount >= 6
      ? "highly transformative"
      : majorArcanaCount >= 4
        ? "significantly impactful"
        : "moderately evolving";

  return {
    title: "Complete Life Overview",
    overview: `This comprehensive reading reveals a ${intensityLevel} period in your life. With ${majorArcanaCount} Major Arcana cards, you're experiencing ${
      majorArcanaCount >= 5
        ? "profound spiritual awakening and major life shifts"
        : majorArcanaCount >= 3
          ? "important life lessons and meaningful changes"
          : "steady growth with some significant moments"
    }. The dominant energy is ${suitElement}, suggesting your focus should be on ${getSuitAdvice(
      dominantSuit,
    )}.`,
    keyThemes: topKeywords,
    guidance: `This is a pivotal time requiring ${
      majorArcanaCount >= 5
        ? "complete trust in the universe's plan for your highest good"
        : "balanced attention to both spiritual growth and practical matters"
    }. The cards suggest ${
      cards[9]?.type === "major"
        ? "a destiny-changing outcome awaits"
        : "steady progress toward your goals"
    }.`,
    timing: `Major cycle - ${
      majorArcanaCount >= 6 ? "1-2 years" : "6-18 months"
    } of significant development`,
    energies: {
      dominant: cards[0]?.keywords[0] || "central",
      secondary: cards[5]?.keywords[0] || "emerging",
      challenge: cards[1]?.keywords[0] || "resistance",
    },
  };
}

function generateRelationshipSummary(
  cards: TarotCard[],
  topKeywords: string[],
  majorArcanaCount: number,
): SpreadSummary {
  const youCard = cards[0];
  const themCard = cards[1];
  const connectionCard = cards[2];
  const outcomeCard = cards[5];

  const relationshipIntensity =
    majorArcanaCount >= 4
      ? "soul-level karmic"
      : majorArcanaCount >= 2
        ? "deeply meaningful"
        : "evolving and growing";

  const connectionType =
    connectionCard.type === "major" ? "destined" : "chosen";

  return {
    title: "Relationship Dynamics & Potential",
    overview: `This reading illuminates a ${relationshipIntensity} connection. Your energy (${youCard.keywords[0]}) and their energy (${themCard.keywords[0]}) create a ${connectionType} bond centered around ${connectionCard.keywords[0]}. ${
      majorArcanaCount >= 3
        ? "This relationship has the potential to transform both of you profoundly."
        : "This connection offers opportunities for mutual growth and understanding."
    }`,
    keyThemes: topKeywords,
    guidance: `Focus on ${
      youCard.type === "major"
        ? "embodying your highest self and spiritual purpose"
        : "being authentic and communicating openly"
    }. The relationship calls for ${
      connectionCard.keywords.includes("balance")
        ? "equal give and take"
        : connectionCard.keywords.includes("patience")
          ? "allowing natural timing to unfold"
          : "embracing the journey of discovery together"
    }.`,
    timing: `${
      outcomeCard.type === "major"
        ? "Life-changing developments"
        : "Gradual evolution"
    } over ${majorArcanaCount >= 3 ? "6-12 months" : "2-6 months"}`,
    energies: {
      dominant: connectionCard.keywords[0],
      secondary: outcomeCard.keywords[0],
      challenge: getRelationshipChallenge(youCard, themCard),
    },
  };
}

function generateHorseshoeSummary(
  cards: TarotCard[],
  topKeywords: string[],
  majorArcanaCount: number,
): SpreadSummary {
  const actionCard = cards[5];
  const outcomeCard = cards[6];

  const guidanceStrength =
    majorArcanaCount >= 4
      ? "divine intervention"
      : majorArcanaCount >= 2
        ? "strong spiritual guidance"
        : "practical wisdom";

  return {
    title: "Guidance for Your Path Forward",
    overview: `The universe offers ${guidanceStrength} for your current situation. With ${majorArcanaCount} Major Arcana cards, this reading suggests ${
      majorArcanaCount >= 4
        ? "you're being guided by higher forces toward your soul's purpose"
        : "important life lessons are available if you remain open and aware"
    }. The recommended action (${actionCard.keywords[0]}) leads to ${
      outcomeCard.keywords[0]
    }.`,
    keyThemes: topKeywords,
    guidance: `Your path requires ${
      actionCard.type === "major"
        ? "deep spiritual commitment and trust in divine timing"
        : "practical steps combined with intuitive awareness"
    }. The cards emphasize the importance of ${
      topKeywords.includes("patience")
        ? "allowing situations to unfold naturally"
        : topKeywords.includes("action")
          ? "taking decisive steps forward"
          : "maintaining balance between action and reflection"
    }.`,
    timing: `Guidance period: ${
      majorArcanaCount >= 3 ? "3-9 months" : "1-4 months"
    } for full resolution`,
    energies: {
      dominant: actionCard.keywords[0],
      secondary: outcomeCard.keywords[0],
      challenge: cards[3]?.keywords[0] || "obstacles",
    },
  };
}

function generateGenericSummary(
  cards: TarotCard[],
  topKeywords: string[],
  majorArcanaCount: number,
): SpreadSummary {
  return {
    title: "Life Guidance & Insights",
    overview: `This reading provides guidance for your current life situation. The presence of ${majorArcanaCount} Major Arcana cards suggests ${
      majorArcanaCount >= 3
        ? "significant spiritual lessons and life changes"
        : "a blend of practical and spiritual growth opportunities"
    }.`,
    keyThemes: topKeywords,
    guidance:
      "Trust your intuition and remain open to the messages the universe is sending you.",
    timing: "Present moment awareness with developments over the coming weeks",
    energies: {
      dominant: cards[0]?.keywords[0] || "central",
      secondary: cards[1]?.keywords[0] || "supporting",
      challenge: cards[cards.length - 1]?.keywords[0] || "resolution",
    },
  };
}

// Helper functions
function getOpposingEnergy(energy: string): string {
  const opposites: Record<string, string> = {
    beginnings: "endings",
    love: "separation",
    success: "failure",
    clarity: "confusion",
    strength: "weakness",
    hope: "despair",
    joy: "sorrow",
    stability: "chaos",
  };
  return opposites[energy] || "resistance";
}

function getSuitAdvice(suit?: string): string {
  const advice = {
    wands: "creative projects, passion, and taking inspired action",
    cups: "emotional healing, relationships, and intuitive guidance",
    swords: "clear communication, mental clarity, and decisive thinking",
    pentacles:
      "material security, practical planning, and earthly manifestation",
  };
  return suit ? advice[suit as keyof typeof advice] : "balanced growth";
}

function getRelationshipChallenge(card1: TarotCard, card2: TarotCard): string {
  if (card1.type === "major" && card2.type === "major") {
    return "spiritual alignment";
  }
  if (card1.suit && card2.suit && card1.suit !== card2.suit) {
    return "different approaches";
  }
  return "communication";
}

// Additional spread-specific insights
export function getSpreadSpecificInsights(
  spreadId: string,
  cards: TarotCard[],
): string[] {
  switch (spreadId) {
    case "three-card":
      return [
        `Past influence: ${cards[0]?.name} shaped your current perspective`,
        `Present energy: ${cards[1]?.name} defines your current experience`,
        `Future potential: ${cards[2]?.name} shows what's emerging`,
      ];
    case "celtic-cross":
      return [
        `Core situation: ${cards[0]?.name} represents the heart of your matter`,
        `Main challenge: ${cards[1]?.name} crosses your path for growth`,
        `Subconscious influence: ${cards[2]?.name} works beneath the surface`,
        `Final outcome: ${cards[9]?.name} shows your destined conclusion`,
      ];
    case "relationship":
      return [
        `Your role: ${cards[0]?.name} represents your energy in this connection`,
        `Their role: ${cards[1]?.name} shows their contribution to the dynamic`,
        `The bond: ${cards[2]?.name} reveals the nature of your connection`,
        `Relationship future: ${cards[5]?.name} indicates the path ahead`,
      ];
    case "horseshoe":
      return [
        `Current situation: ${cards[1]?.name} defines your present circumstances`,
        `Hidden factors: ${cards[2]?.name} reveals what's working behind the scenes`,
        `Best action: ${cards[5]?.name} advises your optimal approach`,
        `Final outcome: ${cards[6]?.name} shows the likely result`,
      ];
    default:
      return cards.map((card, index) => `Position ${index + 1}: ${card.name}`);
  }
}
