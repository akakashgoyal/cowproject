import { AlertTriangle, Phone, Clock, MapPin, Truck } from "lucide-react";
import { Button } from "./button";

export const EmergencySection = () => {
  return (
    <section className="py-20 bg-destructive/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-compassion border-l-4 border-destructive">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left side - Alert content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-destructive p-3 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Emergency <span className="text-destructive">Cow Rescue</span>
                  </h2>
                  <p className="text-muted-foreground">24/7 Emergency Response Team</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Found an injured cow? See a cow in distress? Our emergency response team 
                is available 24/7 to rescue and provide immediate medical care. Every minute counts.
              </p>

              {/* Emergency Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-warm rounded-xl">
                  <div className="text-2xl font-bold text-destructive mb-1">12 min</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div className="text-center p-4 bg-gradient-warm rounded-xl">
                  <div className="text-2xl font-bold text-destructive mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Ambulances Active</div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-warm rounded-xl">
                  <Phone className="h-6 w-6 text-destructive" />
                  <div>
                    <div className="font-semibold text-foreground">Emergency Hotline</div>
                    <div className="text-destructive font-bold text-lg">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-warm rounded-xl">
                  <MapPin className="h-6 w-6 text-destructive" />
                  <div>
                    <div className="font-semibold text-foreground">WhatsApp Location</div>
                    <div className="text-muted-foreground">Send location for faster rescue</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Action buttons */}
            <div className="lg:w-80">
              <div className="bg-gradient-hero rounded-2xl p-6 text-white text-center">
                <Truck className="h-12 w-12 mx-auto mb-4 animate-gentle-bounce" />
                <h3 className="text-xl font-bold mb-4">Quick Emergency Actions</h3>
                
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-destructive hover:bg-destructive/90 text-white"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Emergency: 98765 43210
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Send Location via WhatsApp
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Clock className="h-5 w-5 mr-2" />
                    Report Non-Emergency Case
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="text-sm opacity-90">
                    💡 <strong>Tip:</strong> Take a photo and share location for faster response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Rescues Ticker */}
        <div className="mt-12 bg-card rounded-2xl p-6 shadow-warm">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Recent Emergency Rescues</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-gradient-warm px-4 py-2 rounded-full">
              <span className="text-muted-foreground">2 hours ago:</span> 
              <span className="text-foreground font-semibold ml-1">Cow rescued from Connaught Place</span>
            </div>
            <div className="bg-gradient-warm px-4 py-2 rounded-full">
              <span className="text-muted-foreground">5 hours ago:</span> 
              <span className="text-foreground font-semibold ml-1">Injured calf treated in Karol Bagh</span>
            </div>
            <div className="bg-gradient-warm px-4 py-2 rounded-full">
              <span className="text-muted-foreground">1 day ago:</span> 
              <span className="text-foreground font-semibold ml-1">3 cows relocated from highway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};