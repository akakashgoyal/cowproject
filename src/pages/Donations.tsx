import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Heart, Home, Truck, Shield, Plus } from "lucide-react";
import { useState } from "react";

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("relocation");

  const donationCategories = [
    {
      id: "relocation",
      title: "Cow Relocation",
      description: "Safe transport from Delhi to peaceful sanctuaries",
      icon: Truck,
      color: "compassion",
      examples: ["₹500 - Transportation for 1 cow", "₹2,500 - Emergency rescue vehicle fuel", "₹5,000 - Complete relocation service"]
    },
    {
      id: "medical",
      title: "Medical Care",
      description: "Emergency treatment and ongoing health support",
      icon: Shield,
      color: "hope",
      examples: ["₹300 - Basic medical checkup", "₹1,500 - Emergency surgery", "₹3,000 - Monthly medical supplies"]
    },
    {
      id: "shelter",
      title: "Shelter & Land",
      description: "Expanding safe havens and facilities",
      icon: Home,
      color: "nature",
      examples: ["₹1,000 - Monthly shelter maintenance", "₹10,000 - New shelter construction", "₹50,000 - Land purchase contribution"]
    },
    {
      id: "feed",
      title: "Feed & Care",
      description: "Nutritious food and daily care essentials",
      icon: Heart,
      color: "primary",
      examples: ["₹200 - Daily feed for 1 cow", "₹1,000 - Weekly nutrition package", "₹5,000 - Monthly care supplies"]
    }
  ];

  const quickAmounts = [500, 1000, 2500, 5000, 10000];

  const handleDonate = () => {
    // This would integrate with payment gateway
    // For now, just show an alert
    const amount = selectedAmount || parseInt(customAmount);
    if (amount) {
      alert(`Thank you for your generous donation of ₹${amount} for ${donationCategories.find(c => c.id === selectedCategory)?.title}!\n\nNote: Payment integration requires Supabase backend setup.`);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Make a <span className="text-hope">Difference</span> Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-slide-up">
            Your donation directly saves lives and provides hope for cows in need. 
            Every rupee makes a meaningful impact in our mission of protection and care.
          </p>
          <div className="flex justify-center space-x-8 text-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-hope">₹12.5L+</div>
              <div className="opacity-80">Raised This Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hope">250+</div>
              <div className="opacity-80">Cows Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hope">1,500+</div>
              <div className="opacity-80">Happy Donors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Choose Your Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the area where you'd like your donation to make the most difference. 
              Every category directly contributes to cow welfare and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`bg-card rounded-2xl p-6 shadow-warm hover:shadow-compassion transition-all duration-300 cursor-pointer border-2 ${
                  selectedCategory === category.id 
                    ? `border-${category.color} bg-gradient-to-br from-${category.color}/10 to-transparent` 
                    : 'border-transparent hover:border-border'
                }`}
              >
                <div className={`bg-gradient-hero p-3 rounded-full w-fit mx-auto mb-4 ${
                  selectedCategory === category.id ? 'scale-110' : ''
                } transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 text-center">{category.title}</h3>
                <p className="text-muted-foreground text-center text-sm mb-4">{category.description}</p>
                
                {selectedCategory === category.id && (
                  <div className="space-y-2 animate-slide-up">
                    {category.examples.map((example, index) => (
                      <div key={index} className="text-xs text-muted-foreground bg-muted rounded p-2">
                        {example}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Donation form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-compassion p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Donate for {donationCategories.find(c => c.id === selectedCategory)?.title}
              </h3>

              {/* Quick amounts */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">Choose Amount</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {quickAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={selectedAmount === amount ? "bg-gradient-hero" : ""}
                    >
                      ₹{amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  />
                </div>
              </div>

              {/* Impact preview */}
              {(selectedAmount || customAmount) && (
                <div className="mb-6 p-4 bg-gradient-warm rounded-lg animate-slide-up">
                  <h4 className="font-semibold text-foreground mb-2">Your Impact:</h4>
                  <p className="text-muted-foreground text-sm">
                    ₹{selectedAmount || customAmount} can help {
                      selectedCategory === 'relocation' ? 'transport and relocate cows to safety' :
                      selectedCategory === 'medical' ? 'provide essential medical care and treatment' :
                      selectedCategory === 'shelter' ? 'maintain and expand our shelter facilities' :
                      'provide nutritious food and daily care'
                    }.
                  </p>
                </div>
              )}

              {/* Donation button */}
              <Button
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
                className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Donate ₹{selectedAmount || customAmount || "0"} Securely
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                🔒 Your donation is secure and tax-deductible. 100% goes to cow care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress goals */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Current Goals</h2>
            <p className="text-xl text-muted-foreground">Help us reach these milestones to expand our impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="text-xl font-bold text-foreground mb-4">Emergency Ambulance</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>₹2,00,000 raised</span>
                  <span>₹3,00,000 goal</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-hope to-compassion h-3 rounded-full w-2/3"></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">67% funded - Almost there!</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="text-xl font-bold text-foreground mb-4">Shelter Expansion</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>₹1,50,000 raised</span>
                  <span>₹5,00,000 goal</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-nature to-primary h-3 rounded-full w-1/3"></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">30% funded - Great start!</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="text-xl font-bold text-foreground mb-4">Medical Facility</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>₹75,000 raised</span>
                  <span>₹2,00,000 goal</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary to-compassion h-3 rounded-full w-1/3"></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">38% funded - Growing strong!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donations;