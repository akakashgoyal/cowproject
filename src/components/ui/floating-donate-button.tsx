import { Button } from "./button";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FloatingDonateButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        onClick={() => navigate('/donations')}
        className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-compassion rounded-full p-4 h-auto"
        size="lg"
      >
        <Heart className="h-6 w-6 mr-2" fill="currentColor" />
        <span className="hidden sm:inline">Donate Now</span>
      </Button>
    </div>
  );
};