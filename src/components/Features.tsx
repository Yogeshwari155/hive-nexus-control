import { 
  Wifi, 
  Coffee, 
  Car, 
  Shield, 
  Users, 
  Monitor, 
  Printer, 
  Clock,
  MapPin,
  Zap,
  Building,
  Briefcase
} from "lucide-react";

const Features = () => {
  const facilities = [
    {
      icon: Wifi,
      title: "High-Speed Fiber Wi-Fi",
      description: "Blazing fast internet for all your work needs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Coffee,
      title: "Pantry & Refreshments",
      description: "Free tea, coffee, and snacks throughout the day",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Car,
      title: "Parking Facilities",
      description: "Secure parking for both two-wheelers and cars",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "CCTV monitoring and access control systems",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Conference Rooms",
      description: "Modern meeting rooms with AV equipment",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Printer,
      title: "Print & Scan",
      description: "High-quality printing and scanning services",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Power Backup",
      description: "Uninterrupted power supply for continuous work",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Regular networking events and workshops",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const workspaceOptions = [
    {
      icon: Briefcase,
      title: "Hot Desks",
      description: "Flexible seating for freelancers & remote workers",
      price: "₹299/day"
    },
    {
      icon: Monitor,
      title: "Dedicated Desks",
      description: "Reserve your personal desk with storage",
      price: "₹4,600/month"
    },
    {
      icon: Building,
      title: "Private Cabins",
      description: "Furnished offices for small teams or startups",
      price: "Custom"
    },
    {
      icon: MapPin,
      title: "Virtual Office",
      description: "Business address & mail handling services",
      price: "₹2,000/month"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-cream/50">
      <div className="container mx-auto px-6">
        {/* Workspace Options */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Workspace Options
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the workspace that fits your style and budget. From flexible hot desks to private cabins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {workspaceOptions.map((option, index) => (
            <div 
              key={option.title}
              className="card-interactive text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-amber mb-3">
                {option.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {option.description}
              </p>
              <div className="text-2xl font-bold gradient-text">
                {option.price}
              </div>
            </div>
          ))}
        </div>

        {/* Facilities & Amenities */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            World-Class Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to be productive, comfortable, and connected in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={facility.title}
              className="card-interactive text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${facility.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark-amber mb-3">
                {facility.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Nerdshive */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Nerdshive?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <Zap className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
                  <p className="opacity-90">Work when and how you want</p>
                </div>
                <div>
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="opacity-90">Connect with like-minded professionals</p>
                </div>
                <div>
                  <Building className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="opacity-90">Modern workspace designed for creativity</p>
                </div>
                <div>
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="opacity-90">Prime spot in central Thanjavur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;