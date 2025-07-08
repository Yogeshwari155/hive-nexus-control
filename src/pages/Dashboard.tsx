import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  LogOut, 
  Calendar, 
  Clock, 
  MapPin, 
  Wifi, 
  CreditCard,
  FileText,
  HelpCircle,
  Bell,
  History,
  Shield,
  Users,
  Coffee
} from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const plans = [
    {
      id: "daily",
      name: "Daily Pass",
      price: "₹299+GST",
      duration: "1 Day",
      description: "Perfect for occasional visits"
    },
    {
      id: "weekly", 
      name: "Weekly Pass",
      price: "₹1,400+GST",
      duration: "7 Days",
      description: "Great for short-term projects"
    },
    {
      id: "monthly",
      name: "Monthly Pass", 
      price: "₹4,600+GST",
      duration: "30 Days",
      description: "Best value for regular users"
    }
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold gradient-text">Nerdshive</h1>
            <p className="text-warm-gray">Coworking Space</p>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="text-dark-amber">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-2">Welcome to Nerdshive</h2>
          <p className="text-warm-gray">Your premier coworking destination in Thanjavur</p>
        </div>

        {/* Today's Plan Status */}
        <Card className="card-interactive border-l-4 border-l-amber">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-amber" />
                Today's Plan
              </span>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Plan</p>
                <p className="font-semibold text-lg">Daily Pass Active</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Hours</p>
                <p className="font-semibold text-lg flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-amber" />
                  8AM - 8PM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select Your Plan */}
        <Card className="card-interactive">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-amber" />
              Select Your Plan
            </CardTitle>
            <CardDescription>
              Choose from our flexible membership options designed to fit your work style and budget.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? 'border-amber bg-amber/5'
                      : 'border-gray-200 hover:border-amber/50'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                  <p className="text-2xl font-bold text-amber mb-1">{plan.price}</p>
                  <p className="text-sm text-muted-foreground mb-2">{plan.duration}</p>
                  <p className="text-sm">{plan.description}</p>
                </div>
              ))}
            </div>
            <Button 
              className="w-full btn-primary" 
              disabled={!selectedPlan}
            >
              Book Selected Plan
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Card className="card-interactive text-center hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-4">
              <Shield className="h-8 w-8 text-amber mx-auto mb-2" />
              <p className="text-sm font-medium">Rules & Regulations</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-4">
              <FileText className="h-8 w-8 text-amber mx-auto mb-2" />
              <p className="text-sm font-medium">Guide</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-4">
              <Wifi className="h-8 w-8 text-amber mx-auto mb-2" />
              <p className="text-sm font-medium">WiFi Info</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-4">
              <History className="h-8 w-8 text-amber mx-auto mb-2" />
              <p className="text-sm font-medium">Usage History</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-4">
              <HelpCircle className="h-8 w-8 text-amber mx-auto mb-2" />
              <p className="text-sm font-medium">Query</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="p-4">
              <Bell className="h-8 w-8 text-amber mx-auto mb-2" />
              <p className="text-sm font-medium">Notifications</p>
            </CardContent>
          </Card>
        </div>

        {/* Rules & Regulations */}
        <Card className="card-interactive">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-amber" />
              Rules & Regulations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-muted-foreground">8:00 AM – 8:00 PM, Monday–Saturday</p>
            </div>
            
            <Separator />
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber mr-2">•</span>
                Maintain a professional work environment; phone booths available for calls
              </li>
              <li className="flex items-start">
                <span className="text-amber mr-2">•</span>
                Keep your workspace clean and organized
              </li>
              <li className="flex items-start">
                <span className="text-amber mr-2">•</span>
                Guests allowed with prior notification to reception
              </li>
              <li className="flex items-start">
                <span className="text-amber mr-2">•</span>
                Respect shared resources and equipment
              </li>
              <li className="flex items-start">
                <span className="text-amber mr-2">•</span>
                Follow safety protocols and emergency procedures
              </li>
            </ul>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">Payment Policy</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Prepaid plans; invoices sent monthly or per chosen plan</li>
                <li>• No refunds on daily/weekly passes</li>
                <li>• Pro-rata refunds available on monthly plans if canceled within 7 days</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* WiFi Info & Workspace Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wifi className="h-5 w-5 mr-2 text-amber" />
                WiFi Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network:</span>
                <span className="font-medium">Nerdshive_5G</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Password:</span>
                <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">work@2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Speed:</span>
                <span className="font-medium">100 Mbps</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-amber" />
                Workspace Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Floor:</span>
                <span className="font-medium">Ground Floor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Capacity:</span>
                <span className="font-medium">50 seats</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amenities:</span>
                <span className="font-medium flex items-center">
                  <Coffee className="h-4 w-4 mr-1" />
                  Coffee & AC
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;