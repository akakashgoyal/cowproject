import { Button } from "./button";
import { Heart, Shield, Home } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cows.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful cows in natural habitat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Protecting Our
              <span className="block bg-gradient-to-r from-hope to-accent bg-clip-text text-transparent">
                Sacred Cows
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join us in providing safe havens, medical care, and peaceful relocation for cows in need. 
              Every donation saves lives and preserves sacred traditions.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/donations">
                <Button 
                  size="lg" 
                  className="bg-gradient-hope hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-compassion text-lg px-8 py-4"
                >
                  <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
                >
                  Learn Our Mission
                </Button>
              </Link>
            </div>

            {/* Impact stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-hope mb-2">₹12.5L+</div>
                <div className="text-white/80 text-sm">Donations Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-hope mb-2">250+</div>
                <div className="text-white/80 text-sm">Cows Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-hope mb-2">15</div>
                <div className="text-white/80 text-sm">Acres Secured</div>
              </div>
            </div>
          </div>

          {/* Right side - Donation card */}
          <div className="lg:justify-self-end animate-scale-gentle">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-compassion p-8 max-w-md w-full border border-border">
              <div className="text-center mb-6">
                <div className="bg-gradient-hero p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Make a Difference Today</h3>
                <p className="text-muted-foreground">Your donation directly helps rescue and relocate cows to safety</p>
              </div>

              {/* Quick donation amounts */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[500, 1000, 2500, 5000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-gradient-hope hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              {/* Custom amount input */}
              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                />
              </div>

              {/* Donation categories */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <Home className="h-5 w-5 text-compassion" />
                  <div>
                    <div className="font-medium text-sm">Cow Relocation</div>
                    <div className="text-xs text-muted-foreground">Safe transport to shelters</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <Heart className="h-5 w-5 text-hope" />
                  <div>
                    <div className="font-medium text-sm">Medical Care</div>
                    <div className="text-xs text-muted-foreground">Emergency treatment & vaccines</div>
                  </div>
                </div>
              </div>

              <Link to="/donations">
                <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-lg py-3">
                  Donate Securely
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                🔒 Secure payment • Tax benefits available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-gentle-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-gentle-bounce"></div>
          </div>
          <span className="text-sm mt-2">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};