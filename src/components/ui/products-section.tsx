import { Button } from "./button";
import { Heart, Package, Stethoscope, Truck, Home, Wheat } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductsSection = () => {
  const products = [
    {
      icon: Wheat,
      title: "Chara (Cow Feed)",
      description: "Nutritious fodder to feed 10 cows for a month",
      price: "₹3,500",
      raised: "₹1,85,000",
      goal: "₹2,50,000",
      progress: 74,
      urgent: true,
    },
    {
      icon: Stethoscope,
      title: "Cow Health Kit",
      description: "Complete medical supplies and vaccines for cow health",
      price: "₹2,800",
      raised: "₹95,000",
      goal: "₹1,50,000",
      progress: 63,
      urgent: false,
    },
    {
      icon: Truck,
      title: "Cow Ambulance Fund",
      description: "Emergency rescue vehicle for injured cows",
      price: "₹5,000",
      raised: "₹3,20,000",
      goal: "₹8,00,000",
      progress: 40,
      urgent: true,
    },
    {
      icon: Home,
      title: "Shelter Construction",
      description: "Build safe shelters in our goshala sanctuary",
      price: "₹10,000",
      raised: "₹4,50,000",
      goal: "₹12,00,000",
      progress: 37,
      urgent: false,
    },
    {
      icon: Package,
      title: "Winter Care Package",
      description: "Blankets and warm care items for cold season",
      price: "₹1,500",
      raised: "₹67,000",
      goal: "₹1,00,000",
      progress: 67,
      urgent: true,
    },
    {
      icon: Heart,
      title: "General Cow Welfare",
      description: "Support overall cow protection and daily care",
      price: "₹1,000",
      raised: "₹2,15,000",
      goal: "₹5,00,000",
      progress: 43,
      urgent: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Support Our <span className="text-hope">Cause</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose how you'd like to help. Every donation directly supports cow welfare, 
            from daily feed to emergency medical care and safe shelter construction.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-2xl p-6 shadow-warm hover:shadow-compassion transition-all duration-500 hover:-translate-y-2 border border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Urgent Badge */}
              {product.urgent && (
                <div className="inline-flex items-center bg-gradient-hope text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  <Heart className="h-3 w-3 mr-1" fill="currentColor" />
                  Urgent Need
                </div>
              )}

              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="bg-gradient-hero p-3 rounded-full mr-4">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-compassion transition-colors">
                    {product.title}
                  </h3>
                  <div className="text-2xl font-bold text-hope">{product.price}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Raised: {product.raised}</span>
                  <span className="text-muted-foreground">Goal: {product.goal}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-hope h-3 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${product.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-compassion font-semibold mt-1">
                  {product.progress}% funded
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link to="/donations" className="flex-1">
                  <Button 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                  >
                    Donate Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    className="hover:bg-compassion hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Total Funds Collected</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-gentle-bounce">₹14.32L</div>
              <div className="text-white/90">This Month</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-gentle-bounce">₹1.2Cr</div>
              <div className="text-white/90">Total Collected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-gentle-bounce">₹50L</div>
              <div className="text-white/90">This Year</div>
            </div>
          </div>
          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-earth hover:text-foreground transition-all duration-300 px-8 py-4 text-lg"
            >
              View Detailed Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};