
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-dark to-theme-darker text-white">
      <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
              Welcome Back
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-200">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white focus:border-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-secondary-dark transition-all duration-300"
              >
                Sign In
              </Button>
            </form>
            <div className="mt-6 text-center space-y-4">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Forgot your password?
              </button>
              <p className="text-sm text-gray-300">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/signup")}
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
