import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Moon,
  Stars,
  Heart,
  Compass,
  BookOpen,
  Shuffle,
  Clock,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TAROT_SPREADS } from "@/lib/tarot-data";

const Index = () => {
  const navigate = useNavigate();
  const [selectedSpread, setSelectedSpread] = useState<string | null>(null);

  const handleSpreadSelect = (spreadId: string) => {
    setSelectedSpread(spreadId);
    // Small delay for visual feedback before navigation
    setTimeout(() => {
      navigate(`/reading/${spreadId}`);
    }, 300);
  };

  const getSpreadIcon = (spreadId: string) => {
    const icons = {
      "three-card": Clock,
      "celtic-cross": Compass,
      relationship: Heart,
      horseshoe: Stars,
    };
    const Icon = icons[spreadId as keyof typeof icons] || Sparkles;
    return <Icon className="w-6 h-6" />;
  };

  const getSpreadDifficulty = (spreadId: string) => {
    const difficulties = {
      "three-card": "Beginner",
      relationship: "Intermediate",
      horseshoe: "Intermediate",
      "celtic-cross": "Advanced",
    };
    return difficulties[spreadId as keyof typeof difficulties] || "Beginner";
  };

  const getSpreadTime = (spreadId: string) => {
    const times = {
      "three-card": "5-10 min",
      relationship: "15-20 min",
      horseshoe: "20-25 min",
      "celtic-cross": "30-45 min",
    };
    return times[spreadId as keyof typeof times] || "10 min";
  };

  return (
    <div className="min-h-screen bg-mystical-gradient">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mystical-900/50 to-cosmic-900/50"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Moon className="w-8 h-8 text-gold-400" />
              <h1 className="text-5xl font-bold text-white">
                Mystic <span className="text-gold-400">Tarot</span>
              </h1>
              <Stars className="w-8 h-8 text-gold-400" />
            </div>

            <p className="text-xl text-mystical-100 leading-relaxed">
              Discover the wisdom of the ancient Rider-Waite tarot deck. Let the
              cards guide you through life's mysteries and reveal hidden
              insights about your past, present, and future.
            </p>

            <div className="flex items-center justify-center space-x-8 text-mystical-200">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>78 Traditional Cards</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Multiple Spreads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>All Experience Levels</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spread Selection */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose Your Spread
          </h2>
          <p className="text-mystical-200 max-w-2xl mx-auto">
            Each spread offers a unique perspective on your question. Select the
            one that resonates with your current situation and level of
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TAROT_SPREADS.map((spread) => (
            <Card
              key={spread.id}
              className={cn(
                "relative overflow-hidden transition-all duration-300 cursor-pointer group",
                "bg-white/10 backdrop-blur-sm border-mystical-600/30 hover:border-gold-400/50",
                "hover:shadow-2xl hover:shadow-gold-500/20 hover:scale-105",
                selectedSpread === spread.id &&
                  "border-gold-400 shadow-xl shadow-gold-500/30 scale-105",
              )}
              onClick={() => handleSpreadSelect(spread.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mystical-800/20 to-cosmic-800/20 group-hover:from-gold-600/10 group-hover:to-gold-400/10 transition-all duration-300"></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gold-400/20 text-gold-400 group-hover:bg-gold-400/30 transition-colors">
                      {getSpreadIcon(spread.id)}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-gold-100 transition-colors">
                        {spread.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge
                          variant="outline"
                          className="text-xs bg-white/10 text-mystical-200 border-mystical-400/30"
                        >
                          {getSpreadDifficulty(spread.id)}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs bg-white/10 text-mystical-200 border-mystical-400/30"
                        >
                          {getSpreadTime(spread.id)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-gold-400">
                    {spread.positions.length}
                  </div>
                </div>

                <CardDescription className="text-mystical-100 leading-relaxed">
                  {spread.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <Separator className="mb-4 bg-mystical-600/30" />

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Card Positions:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {spread.positions.slice(0, 4).map((position, index) => (
                      <div
                        key={position.id}
                        className="text-xs text-mystical-200"
                      >
                        <span className="font-medium">{index + 1}.</span>{" "}
                        {position.name}
                      </div>
                    ))}
                    {spread.positions.length > 4 && (
                      <div className="text-xs text-mystical-300 italic col-span-2">
                        +{spread.positions.length - 4} more positions
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  className="w-full mt-6 bg-gold-600 hover:bg-gold-700 text-white group-hover:shadow-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpreadSelect(spread.id);
                  }}
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Start Reading
                </Button>
              </CardContent>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold-400/20 via-transparent to-gold-400/20 animate-shimmer"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Reading CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-br from-cosmic-800/30 to-mystical-800/30 backdrop-blur-sm border-mystical-600/30">
            <div className="space-y-4">
              <Sparkles className="w-12 h-12 text-gold-400 mx-auto" />
              <h3 className="text-xl font-semibold text-white">
                New to Tarot?
              </h3>
              <p className="text-mystical-200 max-w-md">
                Start with the Three Card Spread to get familiar with tarot
                readings. It's perfect for daily guidance and simple questions.
              </p>
              <Button
                size="lg"
                className="bg-mystical-600 hover:bg-mystical-700 text-white"
                onClick={() => handleSpreadSelect("three-card")}
              >
                <Moon className="w-5 h-5 mr-2" />
                Quick Reading
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-mystical-600/30 bg-mystical-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <p className="text-mystical-300 text-sm">
              ✨ Remember: Tarot is a tool for self-reflection and guidance.
              Trust your intuition. ✨
            </p>
            <div className="flex items-center justify-center space-x-6 text-mystical-400 text-xs">
              <span>Traditional Rider-Waite Deck</span>
              <span>•</span>
              <span>For Entertainment Purposes</span>
              <span>•</span>
              <span>Trust Your Inner Wisdom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
