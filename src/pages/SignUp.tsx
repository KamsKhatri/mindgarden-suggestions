
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ageGroup: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-dark to-theme-darker text-white">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
              Create Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ageGroup" className="text-gray-200">
                  Age Group
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, ageGroup: value })
                  }
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-primary">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teen">Teen (13-17)</SelectItem>
                    <SelectItem value="youngAdult">Young Adult (18-24)</SelectItem>
                    <SelectItem value="adult">Adult (25-40)</SelectItem>
                    <SelectItem value="middleAge">Middle Age (41-60)</SelectItem>
                    <SelectItem value="senior">Senior (60+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-secondary-dark transition-all duration-300"
              >
                Create Account
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
