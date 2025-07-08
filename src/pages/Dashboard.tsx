import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Calendar, Clock, MapPin, Wifi } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
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

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-warm">
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold gradient-text">Welcome Back!</h1>
            <p className="text-warm-gray">{user.email}</p>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="text-dark-amber">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-amber" />
                Today's Booking
              </CardTitle>
              <CardDescription>Your current workspace session</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Plan:</span>
                  <span className="font-medium">Hot Desk</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-amber" />
                Usage Stats
              </CardTitle>
              <CardDescription>Your coworking activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>This Month:</span>
                  <span className="font-medium">12 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Hours:</span>
                  <span className="font-medium">96 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Plan:</span>
                  <span className="font-medium">Monthly</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wifi className="h-5 w-5 mr-2 text-amber" />
                Workspace Info
              </CardTitle>
              <CardDescription>Current location details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>WiFi:</span>
                  <span className="font-medium">Nerdshive_5G</span>
                </div>
                <div className="flex justify-between">
                  <span>Password:</span>
                  <span className="font-mono text-sm">work@2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Floor:</span>
                  <span className="font-medium">Ground Floor</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive col-span-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-amber" />
                Quick Actions
              </CardTitle>
              <CardDescription>Manage your workspace experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="btn-secondary">Book Meeting Room</Button>
                <Button className="btn-secondary">Print Documents</Button>
                <Button className="btn-secondary">Request Support</Button>
                <Button className="btn-secondary">Extend Hours</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;