
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Lightbulb, 
  Library, 
  UserCircle, 
  Bell 
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/dashboard" },
  { icon: BookOpen, label: "Journal", path: "/journal" },
  { icon: Lightbulb, label: "AI Suggestions", path: "/suggestions" },
  { icon: Library, label: "Resources", path: "/resources" },
  { icon: UserCircle, label: "Profile", path: "/profile" },
];

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-dark to-theme-darker text-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/5 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/dashboard" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
              MindBloom AI
            </Link>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-20 pb-24">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center p-2 rounded-lg transition-all",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-400 hover:text-gray-200"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {showNotifications && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 right-4 w-80 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl p-4 z-50"
        >
          <h3 className="font-semibold mb-3">Notifications</h3>
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-sm">Time for your daily check-in!</p>
              <span className="text-xs text-gray-400">Just now</span>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-sm">New meditation suggestion available</p>
              <span className="text-xs text-gray-400">2h ago</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MainLayout;
