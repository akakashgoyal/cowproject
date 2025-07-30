import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Sacred Bond: Understanding Our Responsibility Towards Cows",
      excerpt: "Exploring the deep spiritual and cultural significance of cow protection in Indian tradition and how modern society can honor this sacred relationship.",
      image: "/src/assets/hero-cows.jpg",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Spiritual",
      featured: true
    },
    {
      id: 2,
      title: "Rescue Mission: From Delhi Streets to Peaceful Sanctuaries",
      excerpt: "A heartwarming story of how we successfully relocated 50 cows from the busy streets of Delhi to our peaceful goshala in rural Haryana.",
      image: "/src/assets/cow-rescue.jpg",
      author: "Rajesh Kumar",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Rescue Stories"
    },
    {
      id: 3,
      title: "Building Sustainable Cow Shelters: Our Construction Journey",
      excerpt: "Learn about our eco-friendly approach to building cow shelters that provide comfort, safety, and promote natural behavior patterns.",
      image: "/src/assets/goshala.jpg",
      author: "Architect Meera Patel",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Infrastructure"
    },
    {
      id: 4,
      title: "The Healing Power of Cow Therapy",
      excerpt: "Discover how interaction with cows provides therapeutic benefits and helps in emotional healing for both humans and the animals themselves.",
      image: "/src/assets/green-land.jpg",
      author: "Dr. Amit Verma",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Health & Wellness"
    },
    {
      id: 5,
      title: "Volunteer Spotlight: Stories from Our Dedicated Helpers",
      excerpt: "Meet the amazing volunteers who dedicate their time and energy to help us care for rescued cows and maintain our sanctuaries.",
      image: "/src/assets/hero-cows.jpg",
      author: "Volunteer Team",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Community"
    },
    {
      id: 6,
      title: "Emergency Response: 24/7 Cow Ambulance Service",
      excerpt: "How our emergency ambulance service has saved hundreds of injured cows and what you can do to help us expand this vital service.",
      image: "/src/assets/cow-rescue.jpg",
      author: "Emergency Team",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Emergency Care"
    }
  ];

  const categories = ["All", "Spiritual", "Rescue Stories", "Infrastructure", "Health & Wellness", "Community", "Emergency Care"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stories of <span className="text-hope">Compassion</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Read inspiring stories, updates from our rescue missions, and learn more about cow protection and welfare.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gradient-hope" : "hover:bg-gradient-hope hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="mb-16">
              <div className="bg-card rounded-2xl overflow-hidden shadow-warm border border-border">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-hope text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button className="bg-gradient-hero hover:opacity-90 group">
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div key={post.id} className="bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-compassion transition-all duration-300 hover:-translate-y-2 border border-border group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-compassion transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full hover:bg-gradient-hope hover:text-white hover:border-transparent transition-all">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover:bg-gradient-hope hover:text-white hover:border-transparent">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 mx-auto mb-6 text-hope" fill="currentColor" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected with Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive the latest updates, rescue stories, and ways to help our cause.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-primary focus:ring-2 focus:ring-hope focus:outline-none"
            />
            <Button className="bg-hope hover:bg-hope/80 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;