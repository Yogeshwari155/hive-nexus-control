import { Button } from "@/components/ui/button";
import { Heart, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Building connections, sharing knowledge, and collaborating for mutual growth."
    },
    {
      icon: Target,
      title: "Flexibility",
      description: "Work when and how you want with our adaptable workspace solutions."
    },
    {
      icon: Award,
      title: "Affordability",
      description: "World-class facilities at local-friendly prices with no hidden fees."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creativity through modern workspaces and community support."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
                About Nerdshive
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Thanjavur's first dedicated coworking space, built to empower entrepreneurs, 
                startups, freelancers, and businesses with a professional, flexible, and 
                community-driven environment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-amber mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To create a local hub of innovation where ideas thrive, connections happen 
                    organically, and businesses grow faster through collaboration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-amber mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the catalyst for Thanjavur's entrepreneurial ecosystem, fostering 
                    innovation and creating opportunities for local talent to impact globally.
                  </p>
                </div>
              </div>
            </div>

            <Button className="btn-primary">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-dark-amber text-center lg:text-left">
              Our Values
            </h3>
            
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="card-interactive hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-amber mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-gradient-warm rounded-2xl p-8 mt-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Events Hosted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">₹299</div>
                  <div className="text-sm text-muted-foreground">Starting Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;