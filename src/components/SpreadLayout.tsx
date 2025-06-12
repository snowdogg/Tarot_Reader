import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TarotSpread, TarotCard as TarotCardType } from "@/lib/tarot-data";
import TarotCard from "./TarotCard";

interface SpreadLayoutProps {
  spread: TarotSpread;
  cards: TarotCardType[];
  onCardClick?: (cardIndex: number) => void;
  onCardSelect?: (cardIndex: number) => void;
  revealedCards?: Set<number>;
  selectedCardIndex?: number | null;
  className?: string;
}

const SpreadLayout = ({
  spread,
  cards,
  onCardClick,
  onCardSelect,
  revealedCards = new Set(),
  selectedCardIndex = null,
  className,
}: SpreadLayoutProps) => {
  const handleCardClick = (index: number) => {
    // First reveal the card
    onCardClick?.(index);

    // Then select it if it's revealed or will be revealed
    if (revealedCards.has(index) || !revealedCards.has(index)) {
      onCardSelect?.(index);
    }
  };

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      {/* Spread Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{spread.name}</h2>
        <p className="text-mystical-200 max-w-2xl mx-auto">
          {spread.description}
        </p>
      </div>

      {/* Spread Layout */}
      <div className="relative aspect-[4/3] min-h-[600px] bg-gradient-to-br from-mystical-900/50 to-cosmic-900/50 rounded-2xl border border-mystical-600/30 backdrop-blur-sm">
        {spread.positions.map((position, index) => {
          const card = cards[index];
          const isRevealed = revealedCards.has(index);
          const isSelected = selectedCardIndex === index;

          return (
            <div
              key={position.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: `translate(-50%, -50%) ${position.rotation ? `rotate(${position.rotation}deg)` : ""}`,
              }}
            >
              {card ? (
                <TarotCard
                  card={card}
                  isRevealed={isRevealed}
                  onFlip={() => handleCardClick(index)}
                  position={position.name}
                  isSelected={isSelected}
                  showMeaning={false} // Remove individual card meanings
                  size="md"
                  className={cn(
                    "animate-card-deal transition-all duration-200",
                    isSelected &&
                      isRevealed &&
                      "ring-2 ring-gold-400 ring-offset-2 ring-offset-mystical-900",
                  )}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ) : (
                // Empty position placeholder
                <div className="w-32 h-48 border-2 border-dashed border-mystical-400/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-mystical-400 text-sm font-medium">
                      {position.name}
                    </div>
                    <div className="text-mystical-500 text-xs mt-1">
                      Click to draw
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Position Legend */}
      <Card className="mt-8 p-6 bg-white/10 backdrop-blur-sm border-mystical-600/30">
        <h3 className="text-lg font-semibold text-white mb-4">
          Position Meanings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spread.positions.map((position, index) => {
            const isRevealed = revealedCards.has(index);
            const isSelected = selectedCardIndex === index;
            const card = cards[index];

            return (
              <div
                key={position.id}
                className={cn(
                  "p-3 rounded-lg border transition-all cursor-pointer",
                  isSelected
                    ? "bg-mystical-700/50 border-gold-400 ring-1 ring-gold-400/50"
                    : isRevealed
                      ? "bg-mystical-800/50 border-mystical-500/50 hover:bg-mystical-700/40 hover:border-gold-400/60"
                      : "bg-mystical-800/30 border-mystical-600/30 hover:bg-mystical-700/30",
                )}
                onClick={() => {
                  if (isRevealed) {
                    onCardSelect?.(index);
                  }
                }}
              >
                <div className="flex items-start gap-3">
                  <Badge
                    variant="outline"
                    className={cn(
                      "shrink-0",
                      isSelected
                        ? "bg-gold-400/20 text-gold-200 border-gold-400/50"
                        : isRevealed
                          ? "bg-white/10 text-white border-white/30"
                          : "bg-white/5 text-mystical-400 border-mystical-500/30",
                    )}
                  >
                    {index + 1}
                  </Badge>
                  <div className="flex-1">
                    <h4
                      className={cn(
                        "font-medium text-sm mb-1",
                        isSelected
                          ? "text-gold-200"
                          : isRevealed
                            ? "text-white"
                            : "text-mystical-300",
                      )}
                    >
                      {position.name}
                    </h4>
                    <p
                      className={cn(
                        "text-xs",
                        isSelected
                          ? "text-gold-300/80"
                          : isRevealed
                            ? "text-mystical-200"
                            : "text-mystical-400",
                      )}
                    >
                      {position.description}
                    </p>
                    {isRevealed && card && (
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {card.name}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SpreadLayout;
