import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ArrowLeft, Share2, Calendar, MapPin, Users, IndianRupee } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CounterAnimation } from "@/components/ui/counter-animation";

const DonationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  // Mock data - in real app this would come from API
  const causeDetails = {
    chara: {
      title: "Chara (Fodder) Donation",
      description: "Provide nutritious fodder for our rescued cows. Quality chara ensures proper nutrition and health, supporting their recovery and well-being.",
      image: "/src/assets/cows-forest.jpg",
      raised: 85000,
      goal: 150000,
      supporters: 156,
      daysLeft: 45,
      impact: "Feed 50 cows for 30 days",
      updates: [
        {
          date: "2024-01-15",
          title: "Fresh Chara Delivery",
          content: "Received 2 tons of premium quality chara from local farmers. This will feed our 45 resident cows for the next 10 days."
        },
        {
          date: "2024-01-10",
          title: "Monthly Nutrition Report",
          content: "All cows showing improved health with the new nutrition program. Weight gain and energy levels have increased significantly."
        }
      ]
    },
    "health-kit": {
      title: "Cow Health Kit",
      description: "Complete medical supplies including medicines, bandages, and health monitoring equipment for emergency and routine care.",
      image: "/src/assets/brown-ox.jpg",
      raised: 42000,
      goal: 75000,
      supporters: 89,
      daysLeft: 30,
      impact: "Treat 100 cows with medical supplies",
      updates: [
        {
          date: "2024-01-12",
          title: "Emergency Kit Used",
          content: "Successfully treated a cow with leg injury using our health kit. Complete recovery expected in 2 weeks."
        }
      ]
    }
  };

  const currentCause = causeDetails[id as keyof typeof causeDetails];
  
  if (!currentCause) {
    return <div>Cause not found</div>;
  }

  const progress = (currentCause.raised / currentCause.goal) * 100;
  const quickAmounts = [500, 1000, 2500, 5000, 10000];

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount) {
      alert(`Thank you for your generous donation of ₹${amount} for ${currentCause.title}!\n\nNote: Payment integration requires backend setup.`);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => navigate('/donations')}
            variant="outline"
            className="mb-8 text-white border-white hover:bg-white hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Causes
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                {currentCause.title}
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed animate-slide-up">
                {currentCause.description}
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-hope">
                    <CounterAnimation target={currentCause.supporters} />
                  </div>
                  <div className="opacity-80 text-sm">Supporters</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-hope">
                    {currentCause.daysLeft}
                  </div>
                  <div className="opacity-80 text-sm">Days Left</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-hope">
                    {Math.round(progress)}%
                  </div>
                  <div className="opacity-80 text-sm">Funded</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={currentCause.image}
                alt={currentCause.title}
                className="w-full h-80 object-cover rounded-2xl shadow-compassion"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Progress Card */}
              <Card className="p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-foreground">
                      ₹<CounterAnimation target={currentCause.raised} />
                    </span>
                    <span className="text-lg text-muted-foreground">
                      of ₹{currentCause.goal.toLocaleString()} goal
                    </span>
                  </div>
                  <Progress value={progress} className="h-4 mb-4" />
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <Users className="h-4 w-4 mx-auto mb-1 text-compassion" />
                      <div className="font-semibold">{currentCause.supporters}</div>
                      <div className="text-muted-foreground">supporters</div>
                    </div>
                    <div>
                      <Calendar className="h-4 w-4 mx-auto mb-1 text-hope" />
                      <div className="font-semibold">{currentCause.daysLeft}</div>
                      <div className="text-muted-foreground">days left</div>
                    </div>
                    <div>
                      <Heart className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">{Math.round(progress)}%</div>
                      <div className="text-muted-foreground">complete</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-warm rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Your Impact:</h4>
                  <p className="text-muted-foreground">{currentCause.impact}</p>
                </div>
              </Card>

              {/* Tabs for Updates and Impact */}
              <Tabs defaultValue="updates" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="updates">Recent Updates</TabsTrigger>
                  <TabsTrigger value="impact">Impact Stories</TabsTrigger>
                </TabsList>
                
                <TabsContent value="updates" className="space-y-6">
                  {currentCause.updates.map((update, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-compassion text-white p-2 rounded-full">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-foreground">{update.title}</h4>
                            <span className="text-sm text-muted-foreground">
                              {new Date(update.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{update.content}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="impact" className="space-y-6">
                  <Card className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">How Your Donation Helps</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-hope text-white p-1 rounded-full">
                          <IndianRupee className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium">₹500</span>
                          <span className="text-muted-foreground ml-2">provides 1 week of nutritious feed for 1 cow</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-compassion text-white p-1 rounded-full">
                          <IndianRupee className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium">₹2,000</span>
                          <span className="text-muted-foreground ml-2">covers monthly health supplements for 5 cows</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-nature text-white p-1 rounded-full">
                          <IndianRupee className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium">₹5,000</span>
                          <span className="text-muted-foreground ml-2">ensures complete nutrition for 10 cows for a month</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Donation Form */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-8">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Make a Donation
                </h3>

                {/* Quick amounts */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">Choose Amount</label>
                  <div className="grid grid-cols-2 gap-3">
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
                    Custom Amount
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

                {/* Donation button */}
                <Button
                  onClick={handleDonate}
                  disabled={!selectedAmount && !customAmount}
                  className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-lg py-4 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                  Donate ₹{selectedAmount || customAmount || "0"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full hover:bg-gradient-hope hover:text-white hover:border-transparent mb-4"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share This Cause
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Secure donation • Tax deductible • 100% goes to the cause
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonationDetail;