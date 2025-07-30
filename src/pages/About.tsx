import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Heart, Users, Shield, Target } from "lucide-react";
import goshalaImage from "@/assets/goshala.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every cow deserves love, care, and dignity. We approach each rescue with deep compassion and respect for these sacred beings."
    },
    {
      icon: Shield,
      title: "Protection",
      description: "Our primary mission is safeguarding cows from harm, providing immediate medical attention, and ensuring their long-term safety."
    },
    {
      icon: Users,
      title: "Community",
      description: "We work with local communities, volunteers, and donors to create a network of support for cow protection initiatives."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Every action we take is measured by its positive impact on cow welfare and the preservation of our cultural values."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero section */}
      <section className="relative py-20 lg:py-32 bg-gradient-warm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About Our <span className="text-compassion">Sacred Mission</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded with a deep commitment to cow protection, we rescue, rehabilitate, and relocate cows 
                from the dangerous streets of Delhi to peaceful sanctuaries where they can live in dignity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Our Impact
                </button>
                <button className="border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-3 rounded-lg">
                  Join Our Team
                </button>
              </div>
            </div>
            <div className="animate-scale-gentle">
              <img
                src={goshalaImage}
                alt="Peaceful goshala"
                className="rounded-2xl shadow-compassion"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            "To create a safe haven for cows by rescuing them from urban dangers, providing comprehensive medical care, 
            and relocating them to peaceful rural sanctuaries where they can live naturally and with dignity, 
            while preserving our cultural traditions and values."
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-compassion/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a future where every cow in India lives in safety and peace, where urban-rural 
              cooperation ensures their protection, and where our ancient traditions of cow reverence 
              continue to thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every action we take in our mission to protect cows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-compassion transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-hero p-3 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">{value.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current needs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Current Needs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us expand our mission with these immediate requirements for better cow protection and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-warm text-center">
              <div className="text-4xl font-bold text-hope mb-2">₹5 Lakhs</div>
              <h3 className="text-xl font-bold text-foreground mb-4">Additional Land</h3>
              <p className="text-muted-foreground mb-6">
                Purchase 10 more acres for expanding our sanctuary capacity to house more rescued cows.
              </p>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-hope h-3 rounded-full w-1/3"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">33% funded</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm text-center">
              <div className="text-4xl font-bold text-compassion mb-2">₹3 Lakhs</div>
              <h3 className="text-xl font-bold text-foreground mb-4">New Ambulance</h3>
              <p className="text-muted-foreground mb-6">
                Equip a specialized ambulance for faster emergency response and safe transportation.
              </p>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-compassion to-nature h-3 rounded-full w-2/3"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">67% funded</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm text-center">
              <div className="text-4xl font-bold text-nature mb-2">₹2 Lakhs</div>
              <h3 className="text-xl font-bold text-foreground mb-4">Medical Facility</h3>
              <p className="text-muted-foreground mb-6">
                Build a dedicated veterinary facility for comprehensive medical care and rehabilitation.
              </p>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-nature to-primary h-3 rounded-full w-1/2"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">50% funded</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;