import { Heart, Shield, Home, Truck } from "lucide-react";
import cowRescueImage from "@/assets/cow-rescue.jpg";
import goshalaImage from "@/assets/goshala.jpg";
import greenLandImage from "@/assets/green-land.jpg";

export const MissionSection = () => {
  const missions = [
    {
      icon: Shield,
      title: "Cow Protection",
      description: "Rescuing abandoned and injured cows from dangerous urban environments and providing immediate medical care.",
      image: cowRescueImage,
    },
    {
      icon: Home,
      title: "Safe Shelters",
      description: "Creating and maintaining peaceful goshalas where cows can live in natural, stress-free environments.",
      image: goshalaImage,
    },
    {
      icon: Truck,
      title: "Relocation Services",
      description: "Professionally managed transportation to move cows from Delhi to safe, spacious rural sanctuaries.",
      image: greenLandImage,
    },
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Sacred <span className="text-compassion">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are dedicated to protecting and relocating cows from the bustling streets of Delhi to peaceful, 
            natural environments where they can live with dignity and care.
          </p>
        </div>

        {/* Mission cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {missions.map((mission, index) => (
            <div
              key={mission.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-compassion transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <mission.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-compassion transition-colors">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact statistics */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Impact So Far</h3>
            <p className="text-muted-foreground">Every donation helps us achieve these meaningful milestones</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-hope mb-2 animate-gentle-bounce">₹12.5L</div>
              <div className="text-sm text-muted-foreground">Total Donations</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-hope h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-compassion mb-2 animate-gentle-bounce">250+</div>
              <div className="text-sm text-muted-foreground">Cows Rescued</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-compassion to-nature h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nature mb-2 animate-gentle-bounce">15</div>
              <div className="text-sm text-muted-foreground">Acres Secured</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-nature to-compassion h-2 rounded-full w-1/2"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 animate-gentle-bounce">2</div>
              <div className="text-sm text-muted-foreground">Ambulances Active</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-hero h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <Heart className="h-12 w-12 mx-auto mb-6 animate-gentle-bounce" fill="currentColor" />
            <h3 className="text-3xl font-bold mb-4">Every Life Matters</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Your support helps us continue our mission of cow protection and relocation. 
              Together, we can create a safer world for these gentle beings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-earth hover:text-foreground transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
                Join Our Mission
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};