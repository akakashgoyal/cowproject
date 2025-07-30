import { Quote, Calendar, MapPin, Users, Star } from "lucide-react";
import { Button } from "./button";
import cowRescueImage from "@/assets/cow-rescue.jpg";
import goshalaImage from "@/assets/goshala.jpg";

export const ImpactStoriesSection = () => {
  const stories = [
    {
      id: 1,
      title: "Ganga's Miraculous Recovery",
      excerpt: "Found injured on Delhi streets, Ganga now lives peacefully in our sanctuary after months of dedicated care.",
      image: cowRescueImage,
      date: "15 days ago",
      location: "Delhi to Vrindavan",
      impact: "1 life saved",
      category: "Rescue Story"
    },
    {
      id: 2,
      title: "New Shelter Completed",
      excerpt: "Thanks to your donations, we've completed a 500-cow capacity shelter with modern facilities.",
      image: goshalaImage,
      date: "1 month ago",
      location: "Vrindavan Goshala",
      impact: "500 cows housed",
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Emergency Ambulance Service",
      excerpt: "Our new ambulance has rescued 25 cows in its first month, providing critical emergency care.",
      image: cowRescueImage,
      date: "2 months ago",
      location: "Delhi NCR",
      impact: "25 cows rescued",
      category: "Emergency Care"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      amount: "₹5,000/month",
      quote: "Knowing that my monthly donation helps feed cows and provides them shelter gives me immense peace.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      amount: "₹25,000 one-time",
      quote: "I sponsored a cow ambulance. Seeing it in action saving lives makes every rupee worth it.",
      rating: 5
    },
    {
      name: "Meera Patel",
      location: "Gujarat",
      amount: "₹2,000/month",
      quote: "This organization is transparent and truly dedicated. I trust them with my donations completely.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stories Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Impact <span className="text-compassion">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories of transformation, rescue, and hope. See how your donations 
              are making a difference in the lives of cows across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-compassion transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-hope text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-compassion transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {story.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {story.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-hero text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {story.impact}
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-compassion hover:text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity">
              View All Stories
            </Button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Donor <span className="text-hope">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear from our generous donors who are making a real difference in cow welfare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-compassion transition-all duration-500 animate-scale-gentle"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-hope mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-hope fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-compassion font-semibold mt-1">
                    Donated: {testimonial.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};