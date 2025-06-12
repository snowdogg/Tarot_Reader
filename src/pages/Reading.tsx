import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Shuffle,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  Moon,
  Clock,
  Stars,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getSpreadById,
  getRandomCards,
  TarotCard as TarotCardType,
} from "@/lib/tarot-data";
import {
  generateSpreadSummary,
  getSpreadSpecificInsights,
} from "@/lib/spread-summaries";
import SpreadLayout from "@/components/SpreadLayout";

const Reading = () => {
  const { spreadId } = useParams<{ spreadId: string }>();
  const navigate = useNavigate();
  const [cards, setCards] = useState<TarotCardType[]>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null,
  );

  const spread = spreadId ? getSpreadById(spreadId) : null;

  // Get the currently selected card and position
  const selectedCard =
    selectedCardIndex !== null ? cards[selectedCardIndex] : null;
  const selectedPosition =
    selectedCardIndex !== null && spread
      ? spread.positions[selectedCardIndex]
      : null;
  const isSelectedCardRevealed =
    selectedCardIndex !== null ? revealedCards.has(selectedCardIndex) : false;

  // Generate spread summary when all cards are revealed
  const spreadSummary =
    cards.length > 0 && spread ? generateSpreadSummary(spread, cards) : null;
  const spreadInsights =
    cards.length > 0 && spread
      ? getSpreadSpecificInsights(spread.id, cards)
      : [];

  useEffect(() => {
    if (spread) {
      drawCards();
    }
  }, [spread]);

  const drawCards = () => {
    if (!spread) return;

    setIsLoading(true);
    setRevealedCards(new Set());
    setSelectedCardIndex(null);

    // Simulate card shuffling delay
    setTimeout(() => {
      const newCards = getRandomCards(spread.positions.length);
      setCards(newCards);
      setIsLoading(false);
    }, 1000);
  };

  const handleCardReveal = (index: number) => {
    setRevealedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  // Check if all cards are currently revealed
  const allRevealed = cards.length > 0 && revealedCards.size === cards.length;

  const revealAllCards = () => {
    if (allRevealed) {
      // Hide all cards
      setRevealedCards(new Set());
      setSelectedCardIndex(null); // Clear selection when hiding all
    } else {
      // Reveal all cards
      setRevealedCards(
        new Set(Array.from({ length: cards.length }, (_, i) => i)),
      );
    }
  };

  const resetReading = () => {
    setRevealedCards(new Set());
    setSelectedCardIndex(null);
    drawCards();
  };

  if (!spread) {
    return (
      <div className="min-h-screen bg-mystical-gradient flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Spread Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The tarot spread you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mystical-gradient">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="flex items-center gap-4">
            <Button
              onClick={revealAllCards}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              disabled={isLoading || cards.length === 0}
            >
              {allRevealed ? (
                <EyeOff className="w-4 h-4 mr-2" />
              ) : (
                <Eye className="w-4 h-4 mr-2" />
              )}
              {allRevealed ? "Hide All" : "Reveal All"}
            </Button>

            <Button
              onClick={resetReading}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              disabled={isLoading}
            >
              <RotateCcw
                className={cn("w-4 h-4 mr-2", isLoading && "animate-spin")}
              />
              New Reading
            </Button>

            <Button
              onClick={drawCards}
              className="bg-gold-600 hover:bg-gold-700 text-white"
              disabled={isLoading}
            >
              <Shuffle
                className={cn("w-4 h-4 mr-2", isLoading && "animate-spin")}
              />
              {isLoading ? "Shuffling..." : "Shuffle Cards"}
            </Button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-mystical-600 flex items-center justify-center animate-mystical-glow">
                <Shuffle className="w-8 h-8 text-white animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Shuffling the Cards...
              </h3>
              <p className="text-mystical-200">
                The universe is preparing your reading
              </p>
            </div>
          </Card>
        )}

        {/* Reading Area with Card Meaning Popup */}
        {!isLoading && cards.length > 0 && (
          <div className="relative">
            {/* Card Meaning Popup - Top Left */}
            {selectedCard && isSelectedCardRevealed && (
              <Card className="absolute top-0 left-0 z-50 w-80 p-4 bg-white/95 backdrop-blur-sm border border-mystical-200 shadow-2xl animate-in slide-in-from-left-2">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-mystical-800 text-lg">
                      {selectedCard.name}
                    </h4>
                    {selectedPosition && (
                      <p className="text-mystical-600 text-sm mt-1">
                        Position: {selectedPosition.name}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCardIndex(null)}
                    className="p-1 h-auto text-mystical-500 hover:text-mystical-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1">
                    {selectedCard.keywords.map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-mystical-50 text-mystical-700 border-mystical-300"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>

                  {/* Position Description */}
                  {selectedPosition && (
                    <div className="bg-mystical-50 p-3 rounded-lg border border-mystical-200">
                      <h5 className="text-sm font-semibold text-mystical-800 mb-1">
                        Position Meaning
                      </h5>
                      <p className="text-mystical-700 text-sm">
                        {selectedPosition.description}
                      </p>
                    </div>
                  )}

                  {/* Card Meaning */}
                  <div>
                    <h5 className="text-sm font-semibold text-mystical-800 mb-2">
                      Card Meaning
                    </h5>
                    <p className="text-mystical-700 text-sm leading-relaxed">
                      {selectedCard.uprightMeaning}
                    </p>
                  </div>

                  {/* Card Description */}
                  {selectedCard.description && (
                    <div className="border-t border-mystical-200 pt-3">
                      <p className="text-mystical-600 text-xs italic">
                        {selectedCard.description}
                      </p>
                    </div>
                  )}

                  {/* Card Type Badge */}
                  <div className="flex items-center justify-between pt-2 border-t border-mystical-200">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-mystical-100 text-mystical-700"
                    >
                      {selectedCard.type === "major"
                        ? "Major Arcana"
                        : `${selectedCard.suit?.charAt(0).toUpperCase()}${selectedCard.suit?.slice(1)} Suit`}
                    </Badge>
                    {selectedCard.number !== undefined && (
                      <span className="text-mystical-500 text-xs">
                        #{selectedCard.number}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            )}

            {/* Spread Layout */}
            <SpreadLayout
              spread={spread}
              cards={cards}
              onCardClick={handleCardReveal}
              onCardSelect={handleCardSelect}
              revealedCards={revealedCards}
              selectedCardIndex={selectedCardIndex}
            />
          </div>
        )}

        {/* Comprehensive Spread Summary - Shown First When All Cards Revealed */}
        {revealedCards.size === cards.length && revealedCards.size > 0 && (
          <Card className="mt-8 p-6 bg-white/10 backdrop-blur-sm border-mystical-600/30">
            <div className="space-y-6">
              {/* Main Summary */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  {spreadSummary.title}
                </h3>
                <div className="bg-gradient-to-br from-mystical-800/60 to-cosmic-800/60 rounded-lg p-6 border border-gold-400/20">
                  <p className="text-mystical-100 leading-relaxed text-lg">
                    {spreadSummary.overview}
                  </p>
                </div>
              </div>

              {/* Key Themes & Energies */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-mystical-800/40 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-gold-600 text-white">Themes</Badge>
                    Key Energies Present
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {spreadSummary.keyThemes.map((theme, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-white/10 text-mystical-200 border-mystical-400"
                      >
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-cosmic-800/40 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-mystical-600 text-white">Energy</Badge>
                    Dominant Forces
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-mystical-200">Dominant:</span>
                      <span className="text-white font-medium">
                        {spreadSummary.energies.dominant}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mystical-200">Supporting:</span>
                      <span className="text-white font-medium">
                        {spreadSummary.energies.secondary}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mystical-200">Challenge:</span>
                      <span className="text-white font-medium">
                        {spreadSummary.energies.challenge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidance & Timing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gold-900/20 rounded-lg p-4 border border-gold-400/20">
                  <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-gold-400" />
                    Spiritual Guidance
                  </h5>
                  <p className="text-mystical-100 text-sm leading-relaxed">
                    {spreadSummary.guidance}
                  </p>
                </div>

                <div className="bg-cosmic-900/20 rounded-lg p-4 border border-cosmic-400/20">
                  <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cosmic-400" />
                    Timing & Timeline
                  </h5>
                  <p className="text-mystical-100 text-sm leading-relaxed">
                    {spreadSummary.timing}
                  </p>
                </div>
              </div>

              {/* Spread-Specific Insights */}
              <div className="bg-mystical-900/30 rounded-lg p-5 border border-mystical-500/30">
                <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Stars className="w-4 h-4 text-gold-400" />
                  Key Connections in Your {spread.name}
                </h5>
                <div className="space-y-3">
                  {spreadInsights.map((insight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-gold-400">
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-mystical-100 text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Message */}
              <div className="text-center p-6 bg-gradient-to-r from-mystical-800/30 via-cosmic-800/30 to-mystical-800/30 rounded-lg border border-gold-400/10">
                <h5 className="text-gold-400 font-semibold mb-2">
                  ✨ Integration Message ✨
                </h5>
                <p className="text-mystical-200 text-sm italic">
                  Trust in the wisdom revealed through these cards. Allow their
                  messages to guide you while remembering that you hold the
                  power to shape your destiny. The universe has spoken - now
                  it's time to act with confidence and clarity.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Individual Card Details */}
        {revealedCards.size > 0 && (
          <Card className="mt-8 p-6 bg-white/10 backdrop-blur-sm border-mystical-600/30">
            <h3 className="text-xl font-semibold text-white mb-6">
              Individual Card Meanings
            </h3>
            <div className="space-y-6">
              {Array.from(revealedCards).map((index) => {
                const card = cards[index];
                const position = spread.positions[index];

                return (
                  <div
                    key={index}
                    className={cn(
                      "border-l-4 pl-6 cursor-pointer transition-all duration-200 rounded-r-lg p-3",
                      selectedCardIndex === index
                        ? "border-gold-400 bg-gold-400/10"
                        : "border-mystical-500 hover:border-gold-400/60 hover:bg-gold-400/5",
                    )}
                    onClick={() => handleCardSelect(index)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">
                          {position.name}
                        </h4>
                        <p className="text-mystical-200 text-sm">
                          {position.description}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn(
                          "border-white/20",
                          selectedCardIndex === index
                            ? "bg-gold-400/20 text-gold-200"
                            : "bg-white/10 text-white",
                        )}
                      >
                        {card.name}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {card.keywords.slice(0, 4).map((keyword, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {keyword}
                          </Badge>
                        ))}
                        {card.keywords.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-xs opacity-60"
                          >
                            +{card.keywords.length - 4} more
                          </Badge>
                        )}
                      </div>

                      <p className="text-mystical-100 text-sm">
                        {card.uprightMeaning.slice(0, 150)}
                        {card.uprightMeaning.length > 150 && "..."}
                      </p>
                    </div>

                    {index < Array.from(revealedCards).length - 1 && (
                      <Separator className="mt-6 bg-mystical-600/30" />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Empty State */}
        {!isLoading && cards.length === 0 && (
          <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              Ready for Your Reading?
            </h3>
            <p className="text-mystical-200 mb-6">
              Click "Shuffle Cards" to begin your tarot reading journey.
            </p>
            <Button
              onClick={drawCards}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Begin Reading
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Reading;
