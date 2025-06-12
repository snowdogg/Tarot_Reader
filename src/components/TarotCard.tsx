import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TarotCard as TarotCardType } from "@/lib/tarot-data";
import { WIKIMEDIA_TAROT_IMAGES } from "@/lib/tarot-images";

interface TarotCardProps {
  card: TarotCardType;
  isRevealed?: boolean;
  showMeaning?: boolean;
  onFlip?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  position?: string;
  isSelected?: boolean;
}

const TarotCard = ({
  card,
  isRevealed = false,
  showMeaning = false,
  onFlip,
  className,
  size = "md",
  position,
  isSelected = false,
}: TarotCardProps) => {
  const [isFlipped, setIsFlipped] = useState(isRevealed);
  const [imageError, setImageError] = useState(false);

  // Sync internal state with prop changes (for reveal all/hide all)
  useEffect(() => {
    setIsFlipped(isRevealed);
  }, [isRevealed]);

  const handleClick = () => {
    if (onFlip) {
      onFlip();
    }
    setIsFlipped(!isFlipped);
  };

  const sizeClasses = {
    sm: "w-16 h-24",
    md: "w-32 h-48",
    lg: "w-40 h-60",
  };

  return (
    <div className={cn("relative", className)}>
      {position && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-mystical-300 text-center">
          {position}
        </div>
      )}

      <Card
        className={cn(
          sizeClasses[size],
          "relative cursor-pointer transform-gpu transition-all duration-300 hover:scale-105",
          "bg-gradient-to-br from-mystical-800 to-cosmic-800 border-2",
          isSelected
            ? "border-gold-400 shadow-lg animate-mystical-glow"
            : "border-mystical-600",
          "group perspective-1000",
        )}
        onClick={handleClick}
      >
        <div
          className={cn(
            "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
            isFlipped && "rotate-y-180",
          )}
        >
          {/* Card Back */}
          <div className="absolute inset-0 backface-hidden rounded-lg">
            <div className="w-full h-full bg-gradient-to-br from-mystical-700 via-cosmic-600 to-mystical-800 rounded-lg border border-gold-400/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-card-shimmer animate-shimmer opacity-30"></div>
              <div className="relative z-10 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gold-400/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gold-200 font-semibold">TAROT</div>
              </div>

              {/* Mystical pattern overlay */}
              <div className="absolute inset-2 border border-gold-400/20 rounded-md"></div>
              <div className="absolute inset-4 border border-gold-400/10 rounded-sm"></div>
            </div>
          </div>

          {/* Card Front */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-lg">
            <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              {/* Card Image Area */}
              <div className="h-3/4 relative bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-mystical-500/30 to-cosmic-500/30 text-mystical-700">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-mystical-400/30 flex items-center justify-center">
                        <div className="text-2xl">
                          {card.type === "major"
                            ? "🌟"
                            : card.suit === "wands"
                              ? "🔥"
                              : card.suit === "cups"
                                ? "💧"
                                : card.suit === "swords"
                                  ? "⚔️"
                                  : "💰"}
                        </div>
                      </div>
                      <div className="text-sm font-bold mb-1">{card.name}</div>
                      <div className="text-xs opacity-70 mb-2">
                        {card.type === "major"
                          ? "Major Arcana"
                          : `${card.suit?.charAt(0).toUpperCase()}${card.suit?.slice(1)}`}
                        {card.number !== undefined && ` ${card.number}`}
                      </div>
                      <div className="text-xs opacity-50 italic">
                        Image Loading...
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-500/10 to-cosmic-500/10"></div>

                {/* Card Type Badge */}
                <Badge
                  variant="secondary"
                  className="absolute top-2 right-2 text-xs bg-white/80 text-mystical-700"
                >
                  {card.type === "major" ? "Major" : card.suit?.toUpperCase()}
                </Badge>
              </div>

              {/* Card Name */}
              <div className="h-1/4 p-2 bg-white flex items-center justify-center text-center">
                <h3 className="text-sm font-bold text-gray-800 leading-tight">
                  {card.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TarotCard;
