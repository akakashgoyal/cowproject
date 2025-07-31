import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { DonationDetailCard } from "@/components/ui/donation-detail-card";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Heart, Home, Truck, Shield, Milk, Package, Users, Target, Quote } from "lucide-react";
import { useState } from "react";
import cowsForestImg from "@/assets/cows-forest.jpg";
import brownOxImg from "@/assets/brown-ox.jpg";
import greenMountainsImg from "@/assets/green-mountains.jpg";
import sunbeamForestImg from "@/assets/sunbeam-forest.jpg";

const Donations = () => {
  const [selectedTab, setSelectedTab] = useState("causes");

  const donationCauses = [
    {
      id: "chara",
      title: "Chara (Fodder) Donation",
      description: "Provide nutritious fodder for our rescued cows. Quality chara ensures proper nutrition and health.",
      image: cowsForestImg,
      raised: 85000,
      goal: 150000,
      icon: <Milk className="h-5 w-5" />,
      category: "Feed & Care"
    },
    {
      id: "health-kit",
      title: "Cow Health Kit",
      description: "Complete medical supplies including medicines, bandages, and health monitoring equipment.",
      image: brownOxImg,
      raised: 42000,
      goal: 75000,
      icon: <Shield className="h-5 w-5" />,
      category: "Medical Care"
    },
    {
      id: "ambulance",
      title: "Emergency Ambulance",
      description: "24/7 emergency vehicle for cow rescue operations and medical emergencies across Delhi NCR.",
      image: sunbeamForestImg,
      raised: 200000,
      goal: 300000,
      icon: <Truck className="h-5 w-5" />,
      category: "Emergency Response"
    },
    {
      id: "land",
      title: "Land Purchase",
      description: "Expand our sanctuary by acquiring more land for peaceful grazing and shelter facilities.",
      image: greenMountainsImg,
      raised: 350000,
      goal: 500000,
      icon: <Home className="h-5 w-5" />,
      category: "Infrastructure"
    },
    {
      id: "shelter",
      title: "Shelter Construction",
      description: "Build weather-resistant shelters to protect cows during extreme weather conditions.",
      image: cowsForestImg,
      raised: 120000,
      goal: 200000,
      icon: <Package className="h-5 w-5" />,
      category: "Infrastructure"
    },
    {
      id: "training",
      title: "Volunteer Training",
      description: "Train volunteers in proper cow care, first aid, and rescue operations.",
      image: brownOxImg,
      raised: 25000,
      goal: 50000,
      icon: <Users className="h-5 w-5" />,
      category: "Education"
    }
  ];

  const totalRaised = donationCauses.reduce((sum, cause) => sum + cause.raised, 0);
  const totalGoal = donationCauses.reduce((sum, cause) => sum + cause.goal, 0);
  const overallProgress = (totalRaised / totalGoal) * 100;

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      amount: 5000,
      quote: "Knowing that my donation is directly helping rescue cows from the streets of Delhi gives me immense peace."
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      amount: 10000,
      quote: "The transparency in how funds are used and the regular updates make me confident in continuing my donations."
    },
    {
      name: "Sunita Verma",
      location: "Gurgaon",
      amount: 2500,
      quote: "Every small contribution matters. I'm proud to be part of this noble cause for cow protection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero section with overall progress */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Support Our <span className="text-hope">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-slide-up">
              Together, we can provide safety, care, and love for cows in need. 
              Your support makes every rescue possible.
            </p>
          </div>

          {/* Overall Progress Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-scale-gentle">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Total Campaign Progress</h3>
              <p className="opacity-90">Collective impact across all causes</p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold">
                  ₹<CounterAnimation target={totalRaised} /> raised
                </span>
                <span className="text-lg opacity-80">
                  ₹{totalGoal.toLocaleString()} goal
                </span>
              </div>
              <Progress value={overallProgress} className="h-4 bg-white/20" />
              <div className="text-center mt-3">
                <span className="text-xl font-bold text-hope">
                  {Math.round(overallProgress)}% Complete
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-hope">
                  <CounterAnimation target={250} />+
                </div>
                <div className="opacity-80 text-sm">Cows Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hope">
                  <CounterAnimation target={1500} />+
                </div>
                <div className="opacity-80 text-sm">Donors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hope">
                  <CounterAnimation target={6} />
                </div>
                <div className="opacity-80 text-sm">Active Causes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="causes" className="text-sm">
                <Target className="h-4 w-4 mr-2" />
                Active Causes
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="text-sm">
                <Quote className="h-4 w-4 mr-2" />
                Donor Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="causes" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Choose Your <span className="text-compassion">Impact</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Every donation directly contributes to cow welfare. Select a cause that resonates with your heart 
                  and see the immediate impact of your generosity.
                </p>
              </div>

              {/* Filter tabs for causes */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {['All', 'Feed & Care', 'Medical Care', 'Emergency Response', 'Infrastructure', 'Education'].map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    className="hover:bg-gradient-hope hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    {filter}
                  </Button>
                ))}
              </div>

              {/* Donation Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {donationCauses.map((cause, index) => (
                  <div
                    key={cause.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <DonationDetailCard {...cause} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Stories of <span className="text-hope">Compassion</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hear from our donors about why they chose to support cow welfare and the joy they find in giving.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-compassion transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-compassion mb-4" />
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-compassion font-semibold">
                          ₹{testimonial.amount.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">donated</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setSelectedTab("causes")}
                  className="bg-gradient-hero hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Heart className="h-5 w-5 mr-2" fill="currentColor" />
                  Join Our Mission
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Emergency Appeal Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl shadow-compassion p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Urgent: Winter Shelter Appeal
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With winter approaching, we need immediate funds to complete weatherproof shelters 
              for 100+ rescued cows. Every day counts in keeping them safe and warm.
            </p>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-foreground">
                  ₹1,20,000 raised
                </span>
                <span className="text-lg text-muted-foreground">
                  ₹2,00,000 needed
                </span>
              </div>
              <Progress value={60} className="h-4" />
              <p className="text-sm text-muted-foreground mt-2">
                60% funded • 15 days remaining
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-hero hover:opacity-90 transition-opacity"
                size="lg"
              >
                <Heart className="h-5 w-5 mr-2" fill="currentColor" />
                Donate for Shelter
              </Button>
              <Button
                variant="outline"
                className="hover:bg-gradient-hope hover:text-white hover:border-transparent"
                size="lg"
              >
                Share This Cause
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donations;