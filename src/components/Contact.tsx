import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to join our community? Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-interactive p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-dark-amber mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-amber mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-amber mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-amber mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-amber mb-2">
                  Phone
                </label>
                <Input 
                  placeholder="+91 98765 43210" 
                  className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-amber mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your workspace needs..." 
                  rows={4}
                  className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
              
              <Button className="w-full btn-primary">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="card-interactive p-8">
              <h3 className="text-2xl font-bold text-dark-amber mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-amber mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Central Thanjavur, Tamil Nadu<br />
                      Near Major Transport Hub
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-amber mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-amber mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@nerdshive.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-amber mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday<br />
                      8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full btn-primary group">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
              
              <Button className="w-full btn-secondary group">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule a Visit
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="card-interactive p-4">
              <div className="bg-gradient-warm rounded-xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-amber mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;