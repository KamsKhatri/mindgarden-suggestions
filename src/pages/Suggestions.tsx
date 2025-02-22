
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Music2,
  Video,
  Heart,
  Wind,
  Moon,
  Timer,
  RefreshCw,
  ChevronRight,
  Play
} from "lucide-react";

const categories = [
  { icon: Timer, label: "Activities", color: "from-purple-400 to-purple-600" },
  { icon: Music2, label: "Music", color: "from-blue-400 to-blue-600" },
  { icon: Video, label: "Videos", color: "from-green-400 to-green-600" },
  { icon: Heart, label: "Meditation", color: "from-red-400 to-red-600" },
  { icon: Wind, label: "Breathe", color: "from-yellow-400 to-yellow-600" },
  { icon: Moon, label: "Sleep", color: "from-indigo-400 to-indigo-600" },
];

const Suggestions = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">AI Suggestions</h1>
        <Button variant="ghost" size="icon">
          <RefreshCw className="h-5 w-5" />
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
      >
        <h2 className="text-xl font-semibold mb-4">Today's Recommendation</h2>
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Music2 className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Calming Evening Playlist</h3>
              <p className="text-sm text-gray-300 mb-3">
                Perfect for winding down after a busy day
              </p>
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-secondary-dark">
                <Play className="h-4 w-4 mr-2" /> Listen Now
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-4 rounded-xl backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg inline-block mb-3`}>
              <category.icon className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{category.label}</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
