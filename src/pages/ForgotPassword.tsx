
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Implement password reset logic
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
              Reset Password
            </h2>
            {!submitted ? (
              <>
                <p className="text-gray-300 text-center mb-6">
                  Enter your email address and we'll send you instructions to reset
                  your password.
                </p>
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
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-secondary-dark transition-all duration-300"
                  >
                    Send Reset Instructions
                  </Button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-6"
              >
                <p className="text-gray-200">
                  Check your email for reset instructions.
                </p>
                <p className="text-sm text-gray-400">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
              </motion.div>
            )}
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Back to Sign In
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
