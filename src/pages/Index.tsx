
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-dark to-theme-darker text-white">
      <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-primary to-secondary-light">
            MindBloom AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
            Your personal AI companion for mental wellness and balanced living
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-x-4 pt-8"
          >
            <Button
              onClick={() => navigate("/signup")}
              className="bg-primary hover:bg-primary-dark text-secondary-dark px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-primary hover:text-primary-light hover:bg-white/5 px-8 py-6 rounded-full transition-all duration-300"
            >
              Sign In
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
