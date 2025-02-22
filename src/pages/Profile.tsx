
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight
} from "lucide-react";

const menuItems = [
  { icon: Settings, label: "Preferences", path: "/preferences" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Shield, label: "Privacy & Security", path: "/privacy" },
  { icon: CreditCard, label: "Subscription", path: "/subscription" },
  { icon: HelpCircle, label: "Help & Support", path: "/support" },
];

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 text-center"
      >
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-12 w-12" />
        </div>
        <h2 className="text-2xl font-bold mb-1">John Doe</h2>
        <p className="text-gray-400 mb-4">john@example.com</p>
        <Button className="bg-primary hover:bg-primary-dark text-secondary-dark">
          Edit Profile
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 divide-y divide-white/10"
      >
        {menuItems.map((item) => (
          <button
            key={item.path}
            className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          variant="ghost"
          className="w-full text-red-400 hover:text-red-300 hover:bg-red-400/10"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Sign Out
        </Button>
      </motion.div>
    </div>
  );
};

export default Profile;
