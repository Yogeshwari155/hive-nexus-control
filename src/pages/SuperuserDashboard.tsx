import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, Shield, UserPlus, Settings, BarChart3, Database, Users, MessageSquare } from "lucide-react";

const SuperuserDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.role !== "superuser") {
        navigate("/login");
        return;
      }
      setUser(parsedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) return null;

  const systemStats = [
    { label: "Total Users", value: "124", change: "+12", color: "text-amber" },
    { label: "Active Admins", value: "3", change: "0", color: "text-blue-600" },
    { label: "Daily Revenue", value: "₹8,400", change: "+15%", color: "text-green-600" },
    { label: "System Health", value: "99.9%", change: "+0.1%", color: "text-emerald-600" },
  ];

  const adminList = [
    { id: 1, name: "Admin User", email: "admin@nerdshive.com", status: "Active", lastLogin: "2 hours ago" },
    { id: 2, name: "Support Admin", email: "support@nerdshive.com", status: "Active", lastLogin: "1 day ago" },
    { id: 3, name: "Operations Admin", email: "ops@nerdshive.com", status: "Inactive", lastLogin: "1 week ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold gradient-text flex items-center">
              <Shield className="h-6 w-6 mr-2 text-amber" />
              Superuser Dashboard
            </h1>
            <p className="text-warm-gray">{user.email}</p>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="text-dark-amber">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="card-interactive">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <p className="text-xs text-warm-gray">{stat.change} from last period</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-amber" />
                  Admin Management
                </div>
                <Button size="sm" className="btn-primary text-xs">
                  <UserPlus className="h-3 w-3 mr-1" />
                  Add Admin
                </Button>
              </CardTitle>
              <CardDescription>Manage administrative users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {adminList.map((admin) => (
                  <div key={admin.id} className="flex items-center justify-between p-3 bg-amber/5 rounded-lg border border-amber/20">
                    <div className="flex-1">
                      <h4 className="font-medium text-dark-amber">{admin.name}</h4>
                      <p className="text-sm text-warm-gray">{admin.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={admin.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {admin.status}
                        </Badge>
                        <span className="text-xs text-warm-gray">Last login: {admin.lastLogin}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs text-red-600">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-amber" />
                System Analytics
              </CardTitle>
              <CardDescription>Platform usage and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-amber/5 rounded-lg">
                  <span className="font-medium">User Registrations</span>
                  <span className="text-green-600 font-bold">+24 this week</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber/5 rounded-lg">
                  <span className="font-medium">Booking Rate</span>
                  <span className="text-blue-600 font-bold">87% occupied</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber/5 rounded-lg">
                  <span className="font-medium">Revenue Growth</span>
                  <span className="text-amber font-bold">+18% MoM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber/5 rounded-lg">
                  <span className="font-medium">Customer Satisfaction</span>
                  <span className="text-emerald-600 font-bold">4.8/5.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-amber" />
                System Configuration
              </CardTitle>
              <CardDescription>Platform settings and configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full btn-secondary text-sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Global Settings
                </Button>
                <Button className="w-full btn-secondary text-sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp Templates
                </Button>
                <Button className="w-full btn-secondary text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Settings
                </Button>
                <Button className="w-full btn-secondary text-sm">
                  <Database className="h-4 w-4 mr-2" />
                  Database Management
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-amber" />
                Quick Actions
              </CardTitle>
              <CardDescription>Administrative shortcuts and system tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <Button className="btn-secondary">Export Data</Button>
                <Button className="btn-secondary">Backup System</Button>
                <Button className="btn-secondary">Send Broadcasts</Button>
                <Button className="btn-secondary">View Logs</Button>
                <Button className="btn-secondary">Update Policies</Button>
                <Button className="btn-secondary">System Health</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SuperuserDashboard;