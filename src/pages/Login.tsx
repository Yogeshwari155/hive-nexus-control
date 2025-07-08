import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Demo credentials
const DEMO_USERS = {
  "admin@nerdshive.com": { password: "admin123", role: "admin" },
  "super@nerdshive.com": { password: "super123", role: "superuser" },
  "user@nerdshive.com": { password: "user123", role: "user" }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Demo authentication
    const user = DEMO_USERS[email as keyof typeof DEMO_USERS];
    
    if (user && user.password === password) {
      // Store user info in localStorage
      localStorage.setItem("user", JSON.stringify({ email, role: user.role }));
      
      toast({
        title: "Login successful!",
        description: `Welcome back, ${user.role}!`,
      });

      // Navigate to appropriate dashboard
      switch (user.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "superuser":
          navigate("/superuser/dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-dark-amber hover:text-amber"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="card-interactive">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gradient-text">Welcome Back</CardTitle>
            <CardDescription>Sign in to your Nerdshive account</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={loading}
              >
                <LogIn className="h-4 w-4 mr-2" />
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-amber/10 rounded-lg">
              <p className="text-sm font-medium text-dark-amber mb-2">Demo Credentials:</p>
              <div className="text-xs text-warm-gray space-y-1">
                <div><strong>Admin:</strong> admin@nerdshive.com / admin123</div>
                <div><strong>Superuser:</strong> super@nerdshive.com / super123</div>
                <div><strong>User:</strong> user@nerdshive.com / user123</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;