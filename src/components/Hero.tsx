import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Wifi, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-honey/20 rounded-full hexagon-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber/15 rounded-full hexagon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/10 rounded-full hexagon-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-honey/25 rounded-full hexagon-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Welcome to{" "}
                <span className="gradient-text">Nerdshive</span>
              </h1>
              <p className="text-xl lg:text-2xl text-warm-gray font-medium">
                Thanjavur's First Dedicated Coworking Space
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Collaborate locally, impact globally. Join our vibrant community of entrepreneurs, 
                startups, and innovators in a professional, flexible environment designed for growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary group" onClick={() => navigate('/login')}>
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-secondary" onClick={() => navigate('/login')}>
                Join Now
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">₹299</div>
                <div className="text-sm text-muted-foreground">Starting from/day</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Access Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">100+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">Prime</div>
                <div className="text-sm text-muted-foreground">Location</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo & Features */}
          <div className="flex flex-col items-center space-y-8 animate-slide-in-right">
            {/* Animated Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow rounded-full blur-xl opacity-30 bee-float"></div>
              <img 
                src="/lovable-uploads/ee1e91dc-d709-4195-8388-9b78d5acb8f3.png" 
                alt="Nerdshive Logo" 
                className="relative w-80 h-80 object-contain bee-float hover-glow"
              />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="card-interactive text-center">
                <Wifi className="h-8 w-8 text-amber mx-auto mb-2" />
                <div className="font-semibold text-dark-amber">High-Speed WiFi</div>
              </div>
              <div className="card-interactive text-center">
                <Coffee className="h-8 w-8 text-amber mx-auto mb-2" />
                <div className="font-semibold text-dark-amber">Free Refreshments</div>
              </div>
              <div className="card-interactive text-center">
                <Users className="h-8 w-8 text-amber mx-auto mb-2" />
                <div className="font-semibold text-dark-amber">Community Hub</div>
              </div>
              <div className="card-interactive text-center">
                <MapPin className="h-8 w-8 text-amber mx-auto mb-2" />
                <div className="font-semibold text-dark-amber">Prime Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;