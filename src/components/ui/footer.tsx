import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "./button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand and mission */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-hope p-2 rounded-full">
                  <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </div>
                <span className="text-2xl font-bold">Gau Seva</span>
              </div>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-md">
                Dedicated to protecting and relocating cows from urban environments to peaceful, 
                natural sanctuaries where they can live with dignity and care.
              </p>
              
              {/* Quick contact */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-hope" />
                  <span className="text-primary-foreground/80">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-hope" />
                  <span className="text-primary-foreground/80">contact@gauseva.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-hope" />
                  <span className="text-primary-foreground/80">Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  "About Our Mission",
                  "How to Donate",
                  "Success Stories",
                  "Volunteer",
                  "Latest Updates",
                  "Emergency Rescue"
                ].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-hope transition-colors duration-200 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter signup */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-primary-foreground/80 mb-4">
                Get updates on our rescue missions and how your donations are making a difference.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-primary-light border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:ring-2 focus:ring-hope focus:border-transparent"
                />
                <Button className="w-full bg-gradient-hope hover:opacity-90 transition-opacity">
                  Subscribe
                </Button>
              </div>

              {/* Social links */}
              <div className="flex space-x-4 mt-6">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-primary-light p-2 rounded-full hover:bg-hope transition-colors duration-200 group"
                  >
                    <social.icon className="h-5 w-5 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency contact banner */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="bg-gradient-to-r from-hope/20 to-compassion/20 rounded-lg p-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h4 className="font-semibold text-lg">Emergency Cow Rescue</h4>
                <p className="text-primary-foreground/80">Found an injured or abandoned cow? Call us immediately</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="secondary" size="sm" className="bg-hope hover:bg-hope/80">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency: +91 98765 43210
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Gau Seva. All rights reserved. Made with love for cow protection.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-hope text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-hope text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-hope text-sm transition-colors">Transparency Report</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};