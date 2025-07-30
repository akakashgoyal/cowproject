import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User, Clock, Heart, Share2, ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  // Mock blog data - in real app, this would come from API
  const blogPost = {
    id: 1,
    title: "The Sacred Bond: Understanding Our Responsibility Towards Cows",
    content: `
      <p>In the heart of our ancient traditions lies a profound reverence for all living beings, with the cow holding a particularly sacred place. This isn't merely a cultural artifact but a living philosophy that speaks to our deepest understanding of interconnectedness and compassion.</p>

      <h2>The Spiritual Significance</h2>
      <p>Throughout Hindu scriptures, the cow is revered as a symbol of gentleness, generosity, and motherhood. The cow gives milk, which sustains life, asks for nothing in return except basic care and protection. This selfless giving has made the cow a powerful symbol of dharma itself.</p>

      <p>In the Bhagavad Gita, Lord Krishna is often depicted as a cowherd, emphasizing the divine connection between the protector and the protected. This relationship teaches us about unconditional love and the responsibility that comes with being the guardians of those who cannot speak for themselves.</p>

      <h2>Modern Challenges and Ancient Wisdom</h2>
      <p>Today, as urbanization rapidly changes our landscape, cows find themselves in increasingly precarious situations. The busy streets of Delhi, once peaceful pathways, have become dangerous obstacles for these gentle creatures. Traffic, pollution, and the scarcity of natural grazing grounds pose unprecedented challenges.</p>

      <p>Our organization has witnessed heartbreaking scenes: cows injured by vehicles, suffering from malnutrition due to eating plastic waste, or simply abandoned when they're no longer economically viable. Each of these situations calls us back to our fundamental duty of protection and care.</p>

      <h2>The Path Forward: Compassionate Action</h2>
      <p>Understanding our responsibility is the first step, but action transforms understanding into meaningful change. Here's how we can honor this sacred bond:</p>

      <h3>1. Creating Safe Havens</h3>
      <p>Our goshalas serve as more than shelters; they're sanctuaries where cows can live with dignity. With green pastures, medical care, and loving attention, these spaces recreate the natural environment that cows need to thrive.</p>

      <h3>2. Emergency Response Systems</h3>
      <p>Our 24/7 ambulance service has saved countless lives. When citizens spot injured or distressed cows, immediate response can mean the difference between life and death. Every call we receive is a chance to honor our commitment.</p>

      <h3>3. Community Education</h3>
      <p>Change begins with awareness. Through our outreach programs, we educate communities about cow care, the importance of not feeding plastic bags to cows, and how to contact rescue services when needed.</p>

      <h2>Stories of Transformation</h2>
      <p>Last month, we rescued Ganga, a cow who had been hit by a truck on the outer ring road of Delhi. Her leg was severely injured, and she was lying helpless by the roadside. After three months of careful treatment and rehabilitation at our goshala, Ganga not only recovered but also gave birth to a healthy calf.</p>

      <p>These stories remind us that every act of compassion creates ripples of positive change. When we save one cow, we're not just preserving a life; we're upholding the values that make us human.</p>

      <h2>Your Role in This Sacred Mission</h2>
      <p>You don't need to be a spiritual practitioner to understand the importance of kindness towards animals. Whether you donate to support our rescue operations, volunteer at our goshalas, or simply spread awareness among your friends and family, every action matters.</p>

      <p>The sacred bond between humans and cows is not just about the past; it's about the future we choose to create. A future where compassion guides our decisions, where the vulnerable are protected, and where the wisdom of our ancestors illuminates the path forward.</p>

      <p>As we continue this work, we're reminded daily that in serving these gentle beings, we serve something greater than ourselves. We serve the principle of ahimsa (non-violence), the spirit of seva (selfless service), and the eternal truth that all life is interconnected.</p>

      <h2>Join Us in Making a Difference</h2>
      <p>This sacred responsibility belongs to all of us. Whether through donations, volunteering, or simply changing how we interact with animals in our daily lives, we can all contribute to a more compassionate world.</p>

      <p>The cows cannot speak for themselves, but through our actions, we become their voice. Through our care, we become instruments of the divine compassion that our scriptures celebrate. This is not just cow protection; this is the protection of our highest values and deepest truths.</p>
    `,
    image: "/src/assets/hero-cows.jpg",
    author: "Dr. Priya Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Spiritual",
    tags: ["Spirituality", "Cow Protection", "Hindu Philosophy", "Animal Welfare", "Dharma"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Rescue Mission: From Delhi Streets to Peaceful Sanctuaries",
      image: "/src/assets/cow-rescue.jpg",
      category: "Rescue Stories"
    },
    {
      id: 3,
      title: "Building Sustainable Cow Shelters: Our Construction Journey",
      image: "/src/assets/goshala.jpg",
      category: "Infrastructure"
    },
    {
      id: 4,
      title: "The Healing Power of Cow Therapy",
      image: "/src/assets/green-land.jpg",
      category: "Health & Wellness"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Stories
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-hope text-white px-3 py-1 rounded-full text-sm font-semibold">
              {blogPost.category}
            </span>
            <div className="flex items-center space-x-4 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Heart className="h-4 w-4 mr-2" />
              Like Story
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="aspect-video md:aspect-[21/9] overflow-hidden">
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: blogPost.content.replace(/\n\s*\n/g, '</p><p>').replace(/\n/g, ' ')
                }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                <span className="text-sm font-medium text-muted-foreground mr-2">Tags:</span>
                {blogPost.tags.map((tag) => (
                  <span key={tag} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-hope hover:text-white transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <Card className="p-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">About {blogPost.author}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Priya Sharma is a veterinarian and spiritual counselor who has dedicated her life to cow welfare. 
                      With over 15 years of experience in animal rescue and rehabilitation, she brings both scientific 
                      expertise and deep spiritual understanding to her work at Gau Seva.
                    </p>
                    <div className="flex space-x-4 mt-4">
                      <Button variant="outline" size="sm">Follow Author</Button>
                      <Button variant="outline" size="sm">View All Posts</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Share Options */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Share This Story</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-200">
                      <Share2 className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-200">
                      <Share2 className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-green-50 hover:border-green-200">
                      <Share2 className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </Card>

                {/* Support Our Mission */}
                <Card className="p-6 bg-gradient-to-br from-hope/10 to-compassion/10 border-hope/20">
                  <Heart className="h-8 w-8 text-hope mb-4" fill="currentColor" />
                  <h3 className="text-lg font-bold text-foreground mb-3">Support Our Mission</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Help us continue rescuing and caring for cows in need. Every donation makes a difference.
                  </p>
                  <Button className="w-full bg-gradient-hope hover:opacity-90">
                    Donate Now
                  </Button>
                </Card>

                {/* Newsletter */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Stay Updated</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest rescue stories and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-sm"
                    />
                    <Button className="w-full bg-gradient-hero hover:opacity-90 text-sm">
                      Subscribe
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related <span className="text-hope">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              More inspiring stories from our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-compassion transition-all duration-300 hover:-translate-y-2 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-compassion transition-colors">
                    {post.title}
                  </h3>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full hover:bg-gradient-hope hover:text-white hover:border-transparent transition-all">
                      Read Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blogs">
              <Button size="lg" variant="outline" className="hover:bg-gradient-hope hover:text-white hover:border-transparent">
                View All Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetails;