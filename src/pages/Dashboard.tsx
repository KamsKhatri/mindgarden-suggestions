
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Smile,
  Meh,
  Frown,
  Calendar,
  Book,
  Settings,
  Activity,
  Music2,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const moodOptions = [
  { icon: Smile, label: "Good", value: "good" },
  { icon: Meh, label: "Okay", value: "okay" },
  { icon: Frown, label: "Bad", value: "bad" },
];

const habits = [
  { name: "Meditation", progress: 75 },
  { name: "Exercise", progress: 40 },
  { name: "Reading", progress: 90 },
];

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Good morning, John</h1>
          <p className="text-gray-400">Let's make today great!</p>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
      >
        <h2 className="text-xl mb-4">How are you feeling?</h2>
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
          transition={{ delay: 0.1 }}
          className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">Today's Summary</h2>
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-4">
            {habits.map((habit) => (
              <div key={habit.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">{habit.name}</span>
                  <span className="text-sm text-primary">{habit.progress}%</span>
                </div>
                <Progress value={habit.progress} className="h-2" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">Recommended Now</h2>
            <Music2 className="h-5 w-5 text-primary" />
          </div>
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-xl">
            <h3 className="font-medium mb-2">Morning Meditation</h3>
            <p className="text-sm text-gray-300 mb-4">
              Start your day with a 10-minute guided session
            </p>
            <Button
              className="w-full bg-primary hover:bg-primary-dark text-secondary-dark"
            >
              Begin Session
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
        >
          <Sun className="h-6 w-6 mb-2 text-yellow-400" />
          <h3 className="font-medium mb-1">Morning Routine</h3>
          <p className="text-sm text-gray-400">2 tasks remaining</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
        >
          <Moon className="h-6 w-6 mb-2 text-blue-400" />
          <h3 className="font-medium mb-1">Evening Routine</h3>
          <p className="text-sm text-gray-400">3 tasks remaining</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
