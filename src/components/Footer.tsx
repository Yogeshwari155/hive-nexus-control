import { Heart, Instagram, Facebook, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Hot Desks", href: "#" },
    { name: "Dedicated Desks", href: "#" },
    { name: "Private Cabins", href: "#" },
    { name: "Virtual Office", href: "#" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "House Rules", href: "#" },
  ];

  return (
    <footer className="bg-dark-amber text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ee1e91dc-d709-4195-8388-9b78d5acb8f3.png" 
                alt="Nerdshive" 
                className="h-12 w-12 object-contain"
              />
              <div className="text-2xl font-bold text-yellow-300">Nerdshive</div>
            </div>
            <p className="text-yellow-100/80 leading-relaxed">
              Thanjavur's first dedicated coworking space. Building a community of 
              innovators, entrepreneurs, and dreamers.
            </p>
            <div className="text-yellow-300 font-medium">
              "Collaborate Locally, Impact Globally"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-yellow-100/80 hover:text-yellow-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-yellow-100/80 hover:text-yellow-300 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Get Connected</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-300" />
                <span className="text-yellow-100/80">hello@nerdshive.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-300" />
                <span className="text-yellow-100/80">+91-XXXXXXXXXX</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-4 text-yellow-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/30 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-yellow-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/30 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5 text-yellow-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/30 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-yellow-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/30 transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5 text-yellow-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-yellow-100/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in Thanjavur</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              {policies.map((policy) => (
                <a 
                  key={policy.name}
                  href={policy.href}
                  className="text-yellow-100/80 hover:text-yellow-300 transition-colors duration-300"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 text-yellow-100/60 text-sm">
            © 2024 Nerdshive Coworking. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;