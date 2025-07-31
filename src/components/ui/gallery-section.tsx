import { Button } from "./button";
import { Card } from "./card";
import { Camera, Play, Heart, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Rescue Missions", "Goshala Life", "Medical Care", "Volunteers", "Facilities"];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/src/assets/cows-forest.jpg",
      title: "Peaceful Morning at Goshala",
      description: "Cows enjoying their morning feed in our main sanctuary",
      category: "Goshala Life",
      location: "Main Goshala, Haryana",
      date: "2024-01-15"
    },
    {
      id: 2,
      type: "image",
      src: "/src/assets/cow-rescue.jpg",
      title: "Emergency Rescue Operation",
      description: "Our team rescuing an injured cow from Delhi streets",
      category: "Rescue Missions",
      location: "Delhi",
      date: "2024-01-10"
    },
    {
      id: 3,
      type: "video",
      src: "/src/assets/hero-cows.jpg",
      title: "Cow Rehabilitation Success Story",
      description: "Watch Ganga's journey from injury to recovery",
      category: "Medical Care",
      location: "Medical Center",
      date: "2024-01-08",
      duration: "3:24"
    },
    {
      id: 4,
      type: "image",
      src: "/src/assets/goshala.jpg",
      title: "New Shelter Construction",
      description: "Building eco-friendly shelters for better cow comfort",
      category: "Facilities",
      location: "Construction Site",
      date: "2024-01-05"
    },
    {
      id: 5,
      type: "image",
      src: "/src/assets/green-land.jpg",
      title: "Green Pastures Expansion",
      description: "Recently acquired land for organic grazing",
      category: "Facilities",
      location: "New Land, Haryana",
      date: "2023-12-28"
    },
    {
      id: 6,
      type: "video",
      src: "/src/assets/cow-rescue.jpg",
      title: "Volunteer Training Day",
      description: "New volunteers learning proper cow care techniques",
      category: "Volunteers",
      location: "Training Center",
      date: "2023-12-20",
      duration: "5:12"
    },
    {
      id: 7,
      type: "image",
      src: "/src/assets/hero-cows.jpg",
      title: "Mother Cow with Calf",
      description: "Beautiful bond between rescued cow and her newborn",
      category: "Goshala Life",
      location: "Maternity Ward",
      date: "2023-12-15"
    },
    {
      id: 8,
      type: "image",
      src: "/src/assets/goshala.jpg",
      title: "Medical Checkup Day",
      description: "Regular health examination ensuring cow wellness",
      category: "Medical Care",
      location: "Veterinary Clinic",
      date: "2023-12-10"
    },
    {
      id: 9,
      type: "video",
      src: "/src/assets/green-land.jpg",
      title: "24-Hour Rescue Operation",
      description: "Documenting our round-the-clock emergency response",
      category: "Rescue Missions",
      location: "Various Locations",
      date: "2023-12-01",
      duration: "7:45"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-hope">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness the journey of rescue, rehabilitation, and love through our visual stories. 
            Every image tells a tale of compassion and transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category 
                  ? "bg-gradient-hope text-white" 
                  : "hover:bg-gradient-hope hover:text-white hover:border-transparent"
              } transition-all duration-300`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-compassion transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Media Type Indicator */}
                <div className="absolute top-4 left-4">
                  {item.type === "video" ? (
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                      <Play className="h-3 w-3" fill="currentColor" />
                      <span>{item.duration}</span>
                    </div>
                  ) : (
                    <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full">
                      <Camera className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-primary p-4 rounded-full hover:bg-white transition-colors cursor-pointer">
                      <Play className="h-8 w-8" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-hope text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-compassion transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-compassion" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3 text-hope" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-gradient-hope hover:text-white hover:border-transparent transition-all"
                  >
                    View Details
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:text-hope transition-colors p-2"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:text-compassion transition-colors p-2"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Visual Impact Stories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-gentle-bounce">500+</div>
              <div className="text-white/90 text-sm">Photos Captured</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-gentle-bounce">50+</div>
              <div className="text-white/90 text-sm">Video Stories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-gentle-bounce">25+</div>
              <div className="text-white/90 text-sm">Rescue Documentaries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-gentle-bounce">1M+</div>
              <div className="text-white/90 text-sm">Views & Shares</div>
            </div>
          </div>
        </div>

        {/* Featured Documentary */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-warm border border-border">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-video lg:aspect-auto">
              <img 
                src="/src/assets/cow-rescue.jpg" 
                alt="Featured Documentary"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white/90 text-primary p-6 rounded-full hover:bg-white transition-colors cursor-pointer">
                  <Play className="h-12 w-12" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Documentary
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                "Journey to Safety: Delhi to Sanctuary"
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Follow the complete journey of 50 cows as they're relocated from the busy streets of Delhi 
                to our peaceful sanctuary. This 30-minute documentary showcases the challenges, triumphs, 
                and the incredible transformation that love and care can bring.
              </p>
              <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Released: January 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Duration: 30 minutes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Now
                </Button>
                <Button variant="outline" className="hover:bg-gradient-hope hover:text-white hover:border-transparent">
                  Share Documentary
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="hover:bg-gradient-hope hover:text-white hover:border-transparent transition-all duration-300"
          >
            Load More Content
          </Button>
        </div>
      </div>
    </section>
  );
};