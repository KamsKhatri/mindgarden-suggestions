
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smile, Meh, Frown, Calendar, Book, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const moodOptions = [
  { icon: Smile, label: "Good", value: "good" },
  { icon: Meh, label: "Okay", value: "okay" },
  { icon: Frown, label: "Bad", value: "bad" },
];

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-dark to-theme-darker text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 mb-6"
        >
          <h2 className="text-xl mb-4">How are you feeling today?</h2>
          <div className="flex justify-center gap-4">
            {moodOptions.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={cn(
                  "p-4 rounded-xl transition-all duration-300",
                  selectedMood === mood.value
                    ? "bg-primary text-secondary-dark"
                    : "bg-white/5 hover:bg-white/10"
                )}
              >
                <mood.icon className="h-8 w-8 mb-2" />
                <span className="text-sm">{mood.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl">Journal</h2>
              <Button variant="ghost" size="icon">
                <Book className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-gray-300">
              Write down your thoughts and feelings...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl">Today's Plan</h2>
              <Button variant="ghost" size="icon">
                <Calendar className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-gray-300">Your personalized activities...</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
