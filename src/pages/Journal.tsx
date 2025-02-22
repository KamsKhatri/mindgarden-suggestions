
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Smile, 
  Meh, 
  Frown, 
  Cloud, 
  CloudRain, 
  Sun, 
  Users,
  Bookmark,
  Calendar 
} from "lucide-react";

const moodOptions = [
  { icon: Smile, label: "Good", value: "good" },
  { icon: Meh, label: "Okay", value: "okay" },
  { icon: Frown, label: "Bad", value: "bad" },
];

const weatherOptions = [
  { icon: Sun, label: "Sunny", value: "sunny" },
  { icon: Cloud, label: "Cloudy", value: "cloudy" },
  { icon: CloudRain, label: "Rainy", value: "rainy" },
];

const Journal = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Daily Check-In</h2>
          <Button variant="ghost" size="icon">
            <Calendar className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">How are you feeling?</label>
            <div className="flex gap-4">
              {moodOptions.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`flex-1 p-4 rounded-xl transition-all duration-300 ${
                    selectedMood === mood.value
                      ? "bg-primary text-secondary-dark"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <mood.icon className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm block text-center">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Weather</label>
            <div className="flex gap-4">
              {weatherOptions.map((weather) => (
                <button
                  key={weather.value}
                  onClick={() => setSelectedWeather(weather.value)}
                  className={`flex-1 p-4 rounded-xl transition-all duration-300 ${
                    selectedWeather === weather.value
                      ? "bg-primary text-secondary-dark"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <weather.icon className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm block text-center">{weather.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              <Users className="h-4 w-4 inline mr-2" />
              Social Interactions
            </label>
            <Input
              placeholder="Who did you meet today?"
              className="bg-white/5 border-white/10 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              <Bookmark className="h-4 w-4 inline mr-2" />
              Activities & Notes
            </label>
            <Textarea
              placeholder="What did you do today? How did it make you feel?"
              className="bg-white/5 border-white/10 focus:border-primary min-h-[100px]"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary-dark text-secondary-dark">
            Save Entry
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
      >
        <h3 className="text-xl font-semibold mb-4">Previous Entries</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((entry) => (
            <div
              key={entry}
              className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Yesterday</span>
                <Smile className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-gray-300">Had a productive day at work and went for an evening walk...</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Journal;
