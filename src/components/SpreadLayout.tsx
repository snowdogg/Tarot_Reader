import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TarotSpread, TarotCard as TarotCardType } from "@/lib/tarot-data";
import TarotCard from "./TarotCard";

interface SpreadLayoutProps {
  spread: TarotSpread;
  cards: TarotCardType[];
  onCardClick?: (cardIndex: number) => void;
  revealedCards?: Set<number>;
  className?: string;
}

const SpreadLayout = ({
  spread,
  cards,
  onCardClick,
  revealedCards = new Set(),
  className,
}: SpreadLayoutProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
    onCardClick?.(index);
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
                  isSelected={selectedCard === index}
                  showMeaning={selectedCard === index && isRevealed}
                  size="md"
                  className="animate-card-deal"
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
          {spread.positions.map((position, index) => (
            <div
              key={position.id}
              className={cn(
                "p-3 rounded-lg border transition-all cursor-pointer",
                selectedCard === index
                  ? "bg-mystical-700/50 border-gold-400"
                  : "bg-mystical-800/30 border-mystical-600/30 hover:bg-mystical-700/30",
              )}
              onClick={() =>
                setSelectedCard(selectedCard === index ? null : index)
              }
            >
              <div className="flex items-start gap-3">
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 shrink-0"
                >
                  {index + 1}
                </Badge>
                <div>
                  <h4 className="font-medium text-white text-sm">
                    {position.name}
                  </h4>
                  <p className="text-mystical-200 text-xs mt-1">
                    {position.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SpreadLayout;
