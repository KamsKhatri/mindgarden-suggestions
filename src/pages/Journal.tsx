
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Smile, 
  Meh, 
  Frown, 
  Cloud, 
  CloudRain, 
  Sun,
  Users,
  Bookmark,
  Calendar as CalendarIcon,
  Heart,
  Brain,
  Coffee,
  Moon,
  Music2,
  Book
} from "lucide-react";
import { format } from "date-fns";

interface JournalEntry {
  date: Date;
  mood: string;
  weather: string;
  social: string;
  activities: string;
  gratitude: string;
  challenges: string;
  sleep: number;
  energy: number;
}

const moodOptions = [
  { icon: Smile, label: "Good", value: "good", color: "text-green-400" },
  { icon: Meh, label: "Okay", value: "okay", color: "text-yellow-400" },
  { icon: Frown, label: "Bad", value: "bad", color: "text-red-400" },
];

const weatherOptions = [
  { icon: Sun, label: "Sunny", value: "sunny" },
  { icon: Cloud, label: "Cloudy", value: "cloudy" },
  { icon: CloudRain, label: "Rainy", value: "rainy" },
];

const additionalQuestions = [
  { icon: Heart, label: "What are you grateful for today?", key: "gratitude" },
  { icon: Brain, label: "Any challenges you faced?", key: "challenges" },
  { icon: Coffee, label: "Energy level (1-10)", key: "energy", type: "number" },
  { icon: Moon, label: "Hours of sleep", key: "sleep", type: "number" },
];

const Journal = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Partial<JournalEntry>>({
    date: new Date(),
    mood: "",
    weather: "",
    social: "",
    activities: "",
    gratitude: "",
    challenges: "",
    sleep: 0,
    energy: 0,
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSaveEntry();
    }
  };

  const handleSaveEntry = () => {
    const newEntry = {
      ...currentEntry,
      date: selectedDate,
    } as JournalEntry;
    
    setEntries([...entries, newEntry]);
    setCurrentEntry({
      date: new Date(),
      mood: "",
      weather: "",
      social: "",
      activities: "",
      gratitude: "",
      challenges: "",
      sleep: 0,
      energy: 0,
    });
    setCurrentStep(0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <label className="block text-sm font-medium mb-3">How are you feeling?</label>
            <div className="flex gap-4">
              {moodOptions.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => {
                    setSelectedMood(mood.value);
                    setCurrentEntry({ ...currentEntry, mood: mood.value });
                  }}
                  className={`flex-1 p-4 rounded-xl transition-all duration-300 ${
                    selectedMood === mood.value
                      ? "bg-primary text-secondary-dark"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <mood.icon className={`h-8 w-8 mx-auto mb-2 ${mood.color}`} />
                  <span className="text-sm block text-center">{mood.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-3">Weather</label>
              <div className="flex gap-4">
                {weatherOptions.map((weather) => (
                  <button
                    key={weather.value}
                    onClick={() => {
                      setSelectedWeather(weather.value);
                      setCurrentEntry({ ...currentEntry, weather: weather.value });
                    }}
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
                value={currentEntry.social}
                onChange={(e) => setCurrentEntry({ ...currentEntry, social: e.target.value })}
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {additionalQuestions.map((question) => (
              <div key={question.key} className="space-y-2">
                <label className="block text-sm font-medium">
                  <question.icon className="h-4 w-4 inline mr-2" />
                  {question.label}
                </label>
                {question.type === "number" ? (
                  <Input
                    type="number"
                    min="0"
                    max="10"
                    className="bg-white/5 border-white/10 focus:border-primary"
                    value={currentEntry[question.key as keyof JournalEntry] || ""}
                    onChange={(e) => setCurrentEntry({
                      ...currentEntry,
                      [question.key]: parseInt(e.target.value)
                    })}
                  />
                ) : (
                  <Textarea
                    className="bg-white/5 border-white/10 focus:border-primary min-h-[100px]"
                    value={currentEntry[question.key as keyof JournalEntry] || ""}
                    onChange={(e) => setCurrentEntry({
                      ...currentEntry,
                      [question.key]: e.target.value
                    })}
                  />
                )}
              </div>
            ))}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-3">
                <Bookmark className="h-4 w-4 inline mr-2" />
                Activities & Notes
              </label>
              <Textarea
                placeholder="What did you do today? How did it make you feel?"
                className="bg-white/5 border-white/10 focus:border-primary min-h-[100px]"
                value={currentEntry.activities}
                onChange={(e) => setCurrentEntry({ ...currentEntry, activities: e.target.value })}
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Daily Check-In</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <CalendarIcon className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white/10 backdrop-blur-lg border-white/20">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-lg border-white/10"
                modifiers={{
                  booked: entries.map(entry => format(entry.date, "yyyy-MM-dd"))
                }}
                modifiersStyles={{
                  booked: {
                    fontWeight: "bold",
                    textDecoration: "underline"
                  }
                }}
              />
              <div className="p-4 space-y-2">
                {entries
                  .filter(entry => format(entry.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd"))
                  .map((entry, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          {format(entry.date, "MMMM d, yyyy")}
                        </span>
                        {moodOptions.find(m => m.value === entry.mood)?.icon({
                          className: `h-5 w-5 ${moodOptions.find(m => m.value === entry.mood)?.color}`
                        })}
                      </div>
                      <p className="text-sm mt-2">{entry.activities}</p>
                    </div>
                  ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <Button
            variant="ghost"
            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {currentStep === 3 ? "Save Entry" : "Next"}
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
          {entries.slice().reverse().map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">
                  {format(entry.date, "MMMM d, yyyy")}
                </span>
                {moodOptions.find(m => m.value === entry.mood)?.icon({
                  className: `h-5 w-5 ${moodOptions.find(m => m.value === entry.mood)?.color}`
                })}
              </div>
              <p className="text-sm text-gray-300">{entry.activities}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Journal;
