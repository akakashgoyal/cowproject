import { Button } from "./button";
import { Card } from "./card";
import { Users, Heart, Clock, Award, HandHeart, Stethoscope } from "lucide-react";

export const VolunteerSection = () => {
  const volunteerOpportunities = [
    {
      icon: HandHeart,
      title: "Daily Care Volunteer",
      description: "Help with feeding, cleaning, and providing daily care for rescued cows",
      commitment: "4-8 hours/week",
      skills: "No experience needed",
      impact: "Direct care for 20+ cows",
      urgent: true
    },
    {
      icon: Stethoscope,
      title: "Medical Assistant",
      description: "Assist veterinarians with health checkups and medical treatments",
      commitment: "Weekend availability",
      skills: "Basic medical knowledge preferred",
      impact: "Support health of 100+ animals",
      urgent: false
    },
    {
      icon: Users,
      title: "Outreach Coordinator",
      description: "Help spread awareness and organize community events",
      commitment: "Flexible timing",
      skills: "Communication skills",
      impact: "Reach 1000+ people monthly",
      urgent: false
    },
    {
      icon: Heart,
      title: "Fundraising Support",
      description: "Assist with fundraising events and donor relations",
      commitment: "Event-based",
      skills: "Organizational skills",
      impact: "Raise funds for operations",
      urgent: true
    }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      role: "Daily Care Volunteer",
      duration: "2 years",
      quote: "Working with the cows has brought such peace to my life. Seeing their transformation from fear to trust is incredibly rewarding.",
      image: "/placeholder-volunteer.jpg"
    },
    {
      name: "Priya Singh",
      role: "Medical Assistant",
      duration: "1 year",
      quote: "As a veterinary student, this experience has been invaluable. I've learned so much while making a real difference in these animals' lives.",
      image: "/placeholder-volunteer.jpg"
    },
    {
      name: "Rajesh Kumar",
      role: "Weekend Volunteer",
      duration: "6 months",
      quote: "My family and I volunteer together every weekend. It's taught my children the importance of compassion and service.",
      image: "/placeholder-volunteer.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="text-hope">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Become a volunteer and be part of something meaningful. Help us rescue, rehabilitate, 
            and relocate cows while experiencing the joy of selfless service.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "150+", label: "Active Volunteers" },
            { number: "2,500+", label: "Volunteer Hours/Month" },
            { number: "95%", label: "Volunteer Satisfaction" },
            { number: "50+", label: "Monthly New Joiners" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-hope mb-2 animate-gentle-bounce">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {volunteerOpportunities.map((opportunity, index) => (
            <Card
              key={opportunity.title}
              className="p-6 hover:shadow-compassion transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Urgent Badge */}
              {opportunity.urgent && (
                <div className="inline-flex items-center bg-gradient-hope text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  <Heart className="h-3 w-3 mr-1" fill="currentColor" />
                  Urgent Need
                </div>
              )}

              {/* Icon and Title */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-gradient-hero p-3 rounded-full">
                  <opportunity.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-compassion" />
                  <div>
                    <span className="font-medium text-sm">Time Commitment: </span>
                    <span className="text-muted-foreground text-sm">{opportunity.commitment}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-hope" />
                  <div>
                    <span className="font-medium text-sm">Skills Required: </span>
                    <span className="text-muted-foreground text-sm">{opportunity.skills}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-4 w-4 text-earth" />
                  <div>
                    <span className="font-medium text-sm">Impact: </span>
                    <span className="text-muted-foreground text-sm">{opportunity.impact}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
                Apply to Volunteer
              </Button>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-16 shadow-warm border border-border">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            How to <span className="text-hope">Get Started</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Fill out our simple volunteer application form with your preferences and availability."
              },
              {
                step: "02", 
                title: "Orientation Session",
                description: "Attend a brief orientation to learn about our mission, safety protocols, and animal care basics."
              },
              {
                step: "03",
                title: "Training & Mentoring",
                description: "Get hands-on training with experienced volunteers and learn the specific skills for your role."
              },
              {
                step: "04",
                title: "Start Making Impact",
                description: "Begin your volunteer journey and start making a real difference in the lives of rescued cows."
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="bg-gradient-hero text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            What Our <span className="text-hope">Volunteers Say</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="p-6 text-center hover:shadow-compassion transition-all duration-300">
                <div className="bg-gradient-hero w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-compassion">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">Volunteering for {testimonial.duration}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-hope" fill="currentColor" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of dedicated volunteers and experience the joy of serving those who cannot speak for themselves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-earth hover:text-foreground transition-all duration-300 px-8 py-4 text-lg"
            >
              <Users className="h-5 w-5 mr-2" />
              Become a Volunteer
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};