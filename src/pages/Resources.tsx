
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Music2,
  Video,
  BookOpen,
  Heart,
  Clock,
  ChevronRight,
  Play,
  Bookmark
} from "lucide-react";

const playlists = [
  { title: "Focus & Concentration", duration: "1h 20m", saves: 234 },
  { title: "Peaceful Meditation", duration: "45m", saves: 156 },
  { title: "Sleep Stories", duration: "30m", saves: 89 },
];

const videos = [
  { title: "Morning Yoga Routine", duration: "15m", category: "Wellness" },
  { title: "Stress Management Tips", duration: "10m", category: "Mental Health" },
  { title: "Breathing Exercises", duration: "5m", category: "Meditation" },
];

const Resources = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Resource Library</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Playlists</h2>
          <Button variant="ghost" size="sm">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="space-y-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.title}
              className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Music2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{playlist.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {playlist.duration}
                    <span className="mx-2">•</span>
                    <Bookmark className="h-4 w-4 mr-1" />
                    {playlist.saves}
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Play className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Guided Videos</h2>
          <Button variant="ghost" size="sm">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Video className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {video.duration}
                    <span className="mx-2">•</span>
                    {video.category}
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Play className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10">
          <BookOpen className="h-6 w-6 mb-3" />
          <h3 className="font-medium mb-1">Articles & Tips</h3>
          <p className="text-sm text-gray-400">Explore wellness guides</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10">
          <Heart className="h-6 w-6 mb-3" />
          <h3 className="font-medium mb-1">Meditation</h3>
          <p className="text-sm text-gray-400">Guided sessions</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Resources;
