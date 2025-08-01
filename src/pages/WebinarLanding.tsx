import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, CheckCircle, Star, Play, Gift, User, ArrowRight, TrendingUp, Zap, Target } from "lucide-react";
import { CounterAnimation } from "@/components/ui/counter-animation";

const WebinarLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <Badge className="mb-8 px-8 py-3 text-xl bg-primary/15 text-primary border-primary/30 shadow-lg">
            🔥 For Content Creators, Bloggers & Digital Marketers!
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Learn how to become a <span className="text-primary drop-shadow-lg">successful blogger</span> who can
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: "🚀", text: "Create viral content that gets millions of views" },
              { icon: "💰", text: "Monetize your blog and earn $10K+ monthly" }, 
              { icon: "📈", text: "Grow your audience from 0 to 100K followers" },
              { icon: "🎯", text: "Build a 6-figure online business empire" }
            ].map((benefit, index) => (
              <Card key={index} className="p-8 bg-card/90 backdrop-blur border-primary/30 hover:shadow-warm transition-all duration-500 hover:scale-105 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <p className="text-lg font-semibold leading-tight">{benefit.text}</p>
              </Card>
            ))}
          </div>

          {/* Webinar Info */}
          <div className="bg-gradient-to-br from-card/95 to-primary/10 backdrop-blur rounded-3xl p-12 shadow-warm border border-primary/30 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
              <div className="flex items-center justify-center gap-3 p-6 bg-white/50 rounded-2xl shadow-sm">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Date (Sunday)</p>
                  <p className="text-2xl font-bold text-foreground">15th Dec'24</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-6 bg-white/50 rounded-2xl shadow-sm">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Time</p>
                  <p className="text-2xl font-bold text-foreground">7:00 PM IST</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-6 bg-white/50 rounded-2xl shadow-sm">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Language</p>
                  <p className="text-2xl font-bold text-foreground">English & Hindi</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8 relative z-10">
              <p className="text-xl mb-2">🎯 Host:</p>
              <p className="text-3xl font-bold text-primary">SARAH JOHNSON</p>
              <p className="text-lg text-accent font-medium">7-Figure Blogger & Digital Marketing Expert</p>
            </div>
            
            {/* Countdown Timer */}
            <div className="mb-12 relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-center">⏰ Webinar Starts In:</h3>
              <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                {[
                  { value: 5, label: "Days" },
                  { value: 12, label: "Hours" },
                  { value: 45, label: "Minutes" },
                  { value: 30, label: "Seconds" }
                ].map((time, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-6 shadow-lg">
                    <div className="text-4xl font-bold">
                      <CounterAnimation target={time.value} />
                    </div>
                    <div className="text-sm font-medium">{time.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center relative z-10">
              <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-hero hover:opacity-90 shadow-warm rounded-2xl border-2 border-white/30 hover:scale-105 transition-all duration-300">
                🔥 YES! I Want To Master Blogging!<br />
                <span className="text-lg">Register NOW at just ₹299/- <span className="line-through text-white/70">₹799/-</span></span>
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-8 border border-accent/30">
            <p className="text-2xl font-bold text-center text-accent animate-pulse">
              🎁 Register before 10th December to unlock bonuses worth ₹7,997 🎁
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-muted/50 to-primary/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">⭐ What people have to say about the Webinar...</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Alex Kumar",
                role: "Tech Blogger",
                text: "This webinar completely transformed my blogging journey. I went from 100 to 10,000 monthly visitors in just 3 months!",
                revenue: "₹50K+/month"
              },
              {
                name: "Priya Sharma", 
                role: "Lifestyle Blogger",
                text: "Sarah's strategies helped me monetize my blog and now I'm earning more than my corporate job!",
                revenue: "₹75K+/month"
              },
              {
                name: "Rahul Verma",
                role: "Food Blogger", 
                text: "From zero to 100K followers in 6 months. This webinar is pure gold for anyone serious about blogging!",
                revenue: "₹1L+/month"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 bg-card/90 backdrop-blur border-primary/30 hover:shadow-compassion transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-6 w-6 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <User className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <Badge className="bg-success/20 text-success border-success/30 px-3 py-1">
                    {testimonial.revenue}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Why is "Blogging Mastery" Important?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Your online success is based on 5 key areas, and imbalance in any of these areas will cause your blog to be ignored, unprofitable, and ultimately abandoned.
          </p>
          
          <h3 className="text-2xl font-bold mb-8">Being a SUCCESSFUL BLOGGER in today's market is not as easy</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-destructive/20">
              <h4 className="text-xl font-bold mb-4 text-destructive">Content Creation</h4>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Struggle to find engaging topics consistently</li>
                <li>• Content gets lost in the noise</li>
                <li>• Time-consuming research and writing process</li>
              </ul>
            </Card>
            
            <Card className="p-8 border-destructive/20">
              <h4 className="text-xl font-bold mb-4 text-destructive">Audience Building</h4>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Low engagement and traffic</li>
                <li>• Difficulty building email subscribers</li>
                <li>• Competition from established bloggers</li>
              </ul>
            </Card>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">But does this mean 🤔 you should give up your blogging dreams?</h3>
          <h3 className="text-2xl font-bold text-success mb-8">No, because we have a solution to overcome this challenging situation with ease.</h3>
          <h3 className="text-2xl font-bold text-primary">And that's exactly what I'll REVEAL inside...</h3>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">"Blogging Mastery" 3-Hour Webinar</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get clarity and confidence on how to blog like a PRO with proven strategies to create content that converts without being seen as salesy but as a trusted authority.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Content Strategy Mastery",
                description: "Learn the 7 pillars of successful content creation and how to plan months of content in advance"
              },
              {
                title: "SEO & Traffic Generation", 
                description: "Discover proven techniques to rank #1 on Google and drive thousands of organic visitors"
              },
              {
                title: "Monetization Blueprint",
                description: "Transform your blog into a profitable business with multiple revenue streams"
              },
              {
                title: "Audience Engagement",
                description: "Build a loyal community that eagerly awaits your content and buys your recommendations"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur border-primary/20 hover:shadow-warm transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-xl px-12 py-6 bg-gradient-hero hover:opacity-90 shadow-warm">
              Yes, I Want To Master Blogging!<br />
              Register for the webinar now at just ₹299/- <span className="line-through text-muted-foreground">₹799/-</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">BUT WAIT!!! That's Not Everything...</h2>
            <h3 className="text-2xl mb-8">You Can Unlock These 3 Amazing Bonuses Worth ₹7,997/- For Absolutely FREE</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Content Calendar Template",
                description: "Never run out of content ideas again",
                value: "₹2,999",
                features: ["365 blog post ideas", "Social media templates", "Content planning system"]
              },
              {
                title: "SEO Checklist Masterclass",
                description: "Rank higher on Google with ease",
                value: "₹2,999", 
                features: ["Keyword research tools", "On-page optimization", "Link building strategies"]
              },
              {
                title: "Monetization Playbook",
                description: "Turn your blog into profit",
                value: "₹1,999",
                features: ["Affiliate marketing guide", "Digital product creation", "Sponsorship templates"]
              }
            ].map((bonus, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
                <div className="text-center mb-6">
                  <Gift className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">🎁 Bonus #{index + 1}: {bonus.title}</h4>
                  <p className="text-muted-foreground mb-4">{bonus.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {bonus.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-2xl font-bold text-accent">Value {bonus.value}/-</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-xl px-12 py-6 bg-gradient-hero hover:opacity-90 shadow-warm">
              Yes, I Want To Master Blogging!<br />
              Register for the webinar now at just ₹299/- <span className="line-through text-muted-foreground">₹799/-</span>
            </Button>
          </div>
        </div>
      </section>

      {/* About Instructor */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">But Who Am I And Why Should You Listen To Me?</h2>
          
          <Card className="p-8 bg-card border-primary/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-24 w-24 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">SARAH JOHNSON</h3>
                <p className="text-lg text-accent mb-4">Digital Marketing Expert & Successful Blogger</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I have been a Digital Marketing Expert and successful blogger for the past 8 years. I've helped over 5,000 bloggers 
                  transform their passion into profitable online businesses. My blog generates over $50,000 monthly through various revenue streams.
                </p>
                <p className="text-muted-foreground mb-6">
                  I started my blogging journey with zero followers and $0 revenue. Today, I run a multi-six-figure blogging business 
                  and have been featured in major publications like Forbes, Entrepreneur, and HuffPost.
                </p>
                <p className="font-semibold text-primary">
                  For the very first time, I'm sharing my complete blogging system that took me from zero to hero!
                </p>
              </div>
            </div>
          </Card>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-xl px-12 py-6 bg-gradient-hero hover:opacity-90 shadow-warm">
              Yes, I Want To Master Blogging!<br />
              Register for the webinar now at just ₹299/- <span className="line-through text-muted-foreground">₹799/-</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "When and where is the webinar and how long would it be?",
                a: "The webinar will be for 3 hours and will be held on the Zoom platform. Please check the top section for the exact date and time."
              },
              {
                q: "For whom is this webinar?",
                a: "This webinar is designed for aspiring bloggers, content creators, and anyone looking to build a profitable online presence through blogging."
              },
              {
                q: "I'm just starting my blogging journey, should I join?",
                a: "Absolutely! This webinar is perfect for beginners. You'll learn everything from setting up your first blog to monetizing it effectively."
              },
              {
                q: "Will recordings be available?",
                a: "No, this is a live-only webinar. Recordings will not be provided to maintain exclusivity and encourage active participation."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-card border-primary/20">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Become One Among Them By Taking Action Today</h2>
          
          <Card className="p-8 bg-card/90 backdrop-blur border-primary/20 mb-12">
            <h3 className="text-2xl font-bold mb-4">A Final Note From Your Instructor</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dear Future Blogger, I understand the struggles you face every day trying to build your online presence. 
              I've been where you are - staring at a blank screen, wondering if anyone will ever read my content.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When you join this webinar, you'll not only gain practical skills but also discover the confidence 
              and clarity needed to overcome any blogging obstacles that come your way.
            </p>
            <p className="font-semibold text-primary">With dedication to your success,</p>
            <p className="font-bold text-xl text-primary">SARAH JOHNSON</p>
          </Card>
          
          <div className="bg-accent/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Offer Will Expire In</h3>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-6">
              <div className="bg-destructive text-destructive-foreground rounded-lg p-4">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-destructive text-destructive-foreground rounded-lg p-4">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
            <Button size="lg" className="text-xl px-12 py-6 bg-gradient-hero hover:opacity-90 shadow-warm">
              Register Now<br />
              At Just ₹299/-
            </Button>
          </div>
        </div>
      </section>

      {/* Hype Creating Footer */}
      <section className="py-16 px-6 bg-gradient-to-br from-destructive/90 to-accent/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8">
            <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg mb-4">
              ⚠️ URGENT: Limited Time Offer
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
              ONLY 47 SPOTS LEFT!
            </h2>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              Don't Miss This Life-Changing Opportunity
            </p>
          </div>
          
          <div className="bg-black/30 rounded-3xl p-8 mb-8 backdrop-blur border border-white/20">
            <h3 className="text-3xl font-bold mb-6">⏰ Offer Expires In:</h3>
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
                <div className="text-4xl font-bold">15</div>
                <div className="text-lg font-medium">Minutes</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30">
                <div className="text-4xl font-bold">45</div>
                <div className="text-lg font-medium">Seconds</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-xl">
                <TrendingUp className="h-6 w-6" />
                <span>Regular Price: ₹799/-</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-3xl font-bold">
                <Zap className="h-8 w-8 text-yellow-300" />
                <span>Today Only: ₹299/-</span>
              </div>
              <div className="text-lg text-white/80">
                Save ₹500 + Get ₹7,997 Worth Bonuses FREE!
              </div>
            </div>
            
            <Button size="lg" className="text-2xl px-16 py-8 bg-white text-destructive hover:bg-white/90 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 font-bold">
              🚀 SECURE MY SPOT NOW!
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
              <Target className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
              <h4 className="font-bold text-lg mb-2">Instant Access</h4>
              <p className="text-white/80">Get immediate confirmation & calendar invite</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
              <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-300" />
              <h4 className="font-bold text-lg mb-2">100% Guarantee</h4>
              <p className="text-white/80">Learn or get your money back</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
              <Gift className="h-12 w-12 mx-auto mb-3 text-pink-300" />
              <h4 className="font-bold text-lg mb-2">Exclusive Bonuses</h4>
              <p className="text-white/80">Worth ₹7,997 - Today only!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer Links */}
      <footer className="py-8 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <p className="text-sm opacity-80">
              © 2024 Blogging Mastery Webinar. Transform your passion into profit.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Refund & Return</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebinarLanding;