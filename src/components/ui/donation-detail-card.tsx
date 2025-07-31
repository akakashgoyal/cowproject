import { Button } from "./button";
import { Card } from "./card";
import { Progress } from "./progress";
import { useNavigate } from "react-router-dom";

interface DonationDetailCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  icon: React.ReactNode;
  category: string;
}

export const DonationDetailCard = ({
  id,
  title,
  description,
  image,
  raised,
  goal,
  icon,
  category
}: DonationDetailCardProps) => {
  const navigate = useNavigate();
  const progress = (raised / goal) * 100;

  return (
    <Card className="group overflow-hidden hover:shadow-compassion transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 text-primary p-2 rounded-full">
            {icon}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-hero text-white px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-compassion transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              ₹{raised.toLocaleString()} raised
            </span>
            <span className="text-sm text-muted-foreground">
              ₹{goal.toLocaleString()} goal
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-center mt-2">
            <span className="text-sm text-compassion font-semibold">
              {Math.round(progress)}% funded
            </span>
          </div>
        </div>
        
        <Button
          onClick={() => navigate(`/donations/${id}`)}
          className="w-full bg-gradient-hope hover:opacity-90 transition-opacity"
        >
          Donate Now
        </Button>
      </div>
    </Card>
  );
};