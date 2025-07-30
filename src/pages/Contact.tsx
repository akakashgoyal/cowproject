import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Heart, MessageCircle, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Rescue",
      details: ["+91 98765 43210", "Available 24/7"],
      description: "For immediate cow rescue and emergency situations"
    },
    {
      icon: Mail,
      title: "General Inquiries",
      details: ["contact@gauseva.org", "info@gauseva.org"],
      description: "For donations, partnerships, and general questions"
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: ["123 Gau Seva Ashram", "Sector 15, Delhi - 110001"],
      description: "Visit us for tours and volunteer opportunities"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 4:00 PM"],
      description: "Best time to reach us for non-emergency matters"
    }
  ];

  const locations = [
    {
      name: "Main Goshala & Sanctuary",
      address: "Village Rampur, Haryana - 125001",
      phone: "+91 98765 43211",
      capacity: "500+ cows",
      facilities: ["Medical Center", "Feed Storage", "Volunteer Housing"]
    },
    {
      name: "Delhi Rescue Center",
      address: "Outer Ring Road, Delhi - 110039",
      phone: "+91 98765 43212",
      capacity: "Emergency facility",
      facilities: ["Ambulance Base", "Temporary Shelter", "Medical Aid"]
    },
    {
      name: "Uttar Pradesh Branch",
      address: "Mathura Road, UP - 281001",
      phone: "+91 98765 43213",
      capacity: "300+ cows",
      facilities: ["Breeding Center", "Training Facility", "Research Center"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-hope" fill="currentColor" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-hope">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Have questions? Need emergency rescue? Want to volunteer? 
            We're here to help and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-3 mb-3 md:mb-0">
              <Phone className="h-6 w-6 animate-pulse" />
              <div>
                <div className="font-bold text-lg">Emergency Cow Rescue</div>
                <div className="text-red-100">Found an injured cow? Call immediately!</div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-red-50 font-bold"
            >
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to <span className="text-hope">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to connect with our team for different needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-compassion transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-hero p-4 rounded-full w-fit mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <div key={idx} className="text-lg font-semibold text-compassion mb-1">
                    {detail}
                  </div>
                ))}
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {info.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-warm border border-border">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="h-8 w-8 text-hope" />
                <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                    <option>General Inquiry</option>
                    <option>Emergency Rescue</option>
                    <option>Donation Question</option>
                    <option>Volunteer Opportunity</option>
                    <option>Partnership Proposal</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                    placeholder="Please describe how we can help you..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-hero hover:opacity-90 text-lg py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Quick Actions */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-warm border border-border">
                <div className="h-64 bg-gradient-to-br from-earth to-compassion flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-lg font-semibold">Interactive Map</div>
                    <div className="text-white/80">Visit our main facility</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-foreground mb-2">Main Goshala Location</h4>
                  <p className="text-muted-foreground">
                    123 Gau Seva Ashram, Sector 15, Delhi - 110001
                  </p>
                  <Button variant="outline" className="w-full mt-4 hover:bg-gradient-hope hover:text-white">
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-2xl p-6 shadow-warm border border-border">
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-hope" />
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-hope hover:opacity-90 justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Make a Donation
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-gradient-hope hover:text-white">
                    <Users className="h-4 w-4 mr-2" />
                    Volunteer with Us
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-gradient-hope hover:text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule a Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-hope">Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit any of our facilities to see our work firsthand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="p-6 hover:shadow-compassion transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-hero p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{location.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-muted-foreground">{location.address}</p>
                  <p className="text-compassion font-semibold">{location.phone}</p>
                  <p className="text-sm text-muted-foreground">Capacity: {location.capacity}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Facilities:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {location.facilities.map((facility, idx) => (
                      <li key={idx}>• {facility}</li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full hover:bg-gradient-hope hover:text-white">
                  Visit Location
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;