import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, Users, CheckCircle, XCircle, MessageSquare, Settings } from "lucide-react";

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.role !== "admin") {
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

  const pendingApprovals = [
    { id: 1, name: "John Doe", email: "john@example.com", plan: "Monthly", submitted: "2 hours ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Weekly", submitted: "5 hours ago" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", plan: "Daily", submitted: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold gradient-text">Admin Dashboard</h1>
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
          <Card className="card-interactive">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber">124</div>
              <p className="text-xs text-warm-gray">+12 from last month</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">3</div>
              <p className="text-xs text-warm-gray">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">28</div>
              <p className="text-xs text-warm-gray">Current occupancy</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber">₹45,600</div>
              <p className="text-xs text-warm-gray">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-amber" />
                Pending Approvals
              </CardTitle>
              <CardDescription>New user registrations awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <div key={approval.id} className="flex items-center justify-between p-3 bg-amber/5 rounded-lg border border-amber/20">
                    <div className="flex-1">
                      <h4 className="font-medium text-dark-amber">{approval.name}</h4>
                      <p className="text-sm text-warm-gray">{approval.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{approval.plan}</Badge>
                        <span className="text-xs text-warm-gray">{approval.submitted}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="btn-primary text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        <XCircle className="h-3 w-3 mr-1" />
                        Reject
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
                <MessageSquare className="h-5 w-5 mr-2 text-amber" />
                Recent Queries
              </CardTitle>
              <CardDescription>Customer support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-amber/5 rounded-lg border border-amber/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-dark-amber">WiFi Issues</h4>
                      <p className="text-sm text-warm-gray">Internet connection problems in meeting room 2</p>
                      <span className="text-xs text-warm-gray">sarah@example.com • 30 min ago</span>
                    </div>
                    <Badge variant="outline" className="text-xs">Open</Badge>
                  </div>
                </div>
                <div className="p-3 bg-amber/5 rounded-lg border border-amber/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-dark-amber">Printer Request</h4>
                      <p className="text-sm text-warm-gray">Need help with document printing</p>
                      <span className="text-xs text-warm-gray">tom@example.com • 2 hours ago</span>
                    </div>
                    <Badge variant="outline" className="text-xs">Resolved</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-amber" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="btn-secondary">View All Users</Button>
                <Button className="btn-secondary">Send Announcements</Button>
                <Button className="btn-secondary">Update Content</Button>
                <Button className="btn-secondary">Generate Reports</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;