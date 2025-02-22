
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Moon, 
  Sun, 
  Heart,
  Brain,
  Coffee,
  Book,
  Music2,
  ListTodo,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
}

const steps: OnboardingStep[] = [
  {
    id: 1,
    title: "Welcome to MindBloom AI",
    description: "Let's personalize your experience. This will help us provide better recommendations.",
  },
  {
    id: 2,
    title: "Sleep Schedule",
    description: "Understanding your sleep pattern helps us suggest the best routines.",
  },
  {
    id: 3,
    title: "Mental Wellness",
    description: "Help us understand your mental wellness goals.",
  },
  {
    id: 4,
    title: "Daily Habits",
    description: "What habits would you like to develop?",
  },
  {
    id: 5,
    title: "Routines",
    description: "Let's set up your ideal daily routines.",
  }
];

const sleepSchedules = [
  { icon: Moon, label: "Night Owl", value: "night", time: "12 AM - 8 AM" },
  { icon: Sun, label: "Early Bird", value: "morning", time: "10 PM - 6 AM" },
  { icon: Coffee, label: "Flexible", value: "flexible", time: "Variable" },
];

const mentalGoals = [
  "Reduce Stress",
  "Improve Focus",
  "Better Sleep",
  "Manage Anxiety",
  "Build Confidence",
  "Find Balance"
];

const habits = [
  { icon: Book, label: "Reading" },
  { icon: Music2, label: "Meditation" },
  { icon: Heart, label: "Exercise" },
  { icon: Brain, label: "Learning" },
  { icon: ListTodo, label: "Journaling" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    sleepSchedule: "",
    mentalGoals: [] as string[],
    selectedHabits: [] as string[],
    morningRoutine: [] as string[],
    eveningRoutine: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save formData to context/storage and redirect
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-6"
          >
            <div className="h-32 w-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Welcome to MindBloom AI</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Your journey to better mental wellness starts here. Let's customize your experience.
            </p>
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
            <div className="space-y-4">
              {sleepSchedules.map((schedule) => (
                <button
                  key={schedule.value}
                  onClick={() => setFormData({ ...formData, sleepSchedule: schedule.value })}
                  className={`w-full p-4 rounded-xl transition-all duration-300 ${
                    formData.sleepSchedule === schedule.value
                      ? "bg-primary text-secondary-dark"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <schedule.icon className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-medium">{schedule.label}</div>
                      <div className="text-sm text-gray-400">{schedule.time}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
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
            <div className="grid grid-cols-2 gap-4">
              {mentalGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => {
                    const goals = formData.mentalGoals.includes(goal)
                      ? formData.mentalGoals.filter(g => g !== goal)
                      : [...formData.mentalGoals, goal];
                    setFormData({ ...formData, mentalGoals: goals });
                  }}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    formData.mentalGoals.includes(goal)
                      ? "bg-primary text-secondary-dark"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {habits.map((habit) => (
                <button
                  key={habit.label}
                  onClick={() => {
                    const selected = formData.selectedHabits.includes(habit.label)
                      ? formData.selectedHabits.filter(h => h !== habit.label)
                      : [...formData.selectedHabits, habit.label];
                    setFormData({ ...formData, selectedHabits: selected });
                  }}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    formData.selectedHabits.includes(habit.label)
                      ? "bg-primary text-secondary-dark"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <habit.icon className="h-6 w-6 mx-auto mb-2" />
                  {habit.label}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Label>Morning Routine Goals</Label>
              <Input
                placeholder="e.g., 15min meditation, 30min exercise"
                className="bg-white/5 border-white/10 focus:border-primary"
                value={formData.morningRoutine.join(", ")}
                onChange={(e) => setFormData({
                  ...formData,
                  morningRoutine: e.target.value.split(", ").filter(Boolean)
                })}
              />
            </div>
            <div className="space-y-4">
              <Label>Evening Routine Goals</Label>
              <Input
                placeholder="e.g., reading, journaling"
                className="bg-white/5 border-white/10 focus:border-primary"
                value={formData.eveningRoutine.join(", ")}
                onChange={(e) => setFormData({
                  ...formData,
                  eveningRoutine: e.target.value.split(", ").filter(Boolean)
                })}
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-dark to-theme-darker text-white">
      <div className="container mx-auto px-4 min-h-screen flex flex-col">
        <div className="flex-1 max-w-xl mx-auto w-full py-12">
          <div className="space-y-8">
            <div className="flex justify-center space-x-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`h-2 w-12 rounded-full transition-all duration-300 ${
                    step.id <= currentStep ? "bg-primary" : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>

            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={handleBack}
                className={`${currentStep === 1 ? "invisible" : ""}`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleNext}>
                {currentStep === steps.length ? "Complete" : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
