import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Plans", href: "#plans" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover-lift">
            <img 
              src="/lovable-uploads/ee1e91dc-d709-4195-8388-9b78d5acb8f3.png" 
              alt="Nerdshive" 
              className="h-12 w-12 object-contain"
            />
            <div className="text-2xl font-bold gradient-text">Nerdshive</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark-amber hover:text-amber transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-dark-amber hover:text-amber hover:bg-amber/10">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="btn-primary text-sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-dark-amber hover:text-amber transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-amber-100 animate-fade-in-up">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-dark-amber hover:text-amber transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-dark-amber hover:text-amber hover:bg-amber/10">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="w-full btn-primary text-sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;