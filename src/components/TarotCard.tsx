import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TarotCard as TarotCardType } from "@/lib/tarot-data";

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
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-500/20 to-cosmic-500/20"></div>

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

      {/* Card Meaning - Shows when expanded */}
      {showMeaning && isFlipped && (
        <Card className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 p-4 bg-white/95 backdrop-blur-sm border border-mystical-200 shadow-xl z-50 animate-in slide-in-from-top-2">
          <div className="space-y-2">
            <h4 className="font-bold text-mystical-800">{card.name}</h4>
            <div className="flex flex-wrap gap-1">
              {card.keywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-gray-700">{card.uprightMeaning}</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default TarotCard;
