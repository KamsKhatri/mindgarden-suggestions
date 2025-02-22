
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Suggestions from "./pages/Suggestions";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <TooltipProvider>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </TooltipProvider>
          }
        />
        <Route
          path="/journal"
          element={
            <TooltipProvider>
              <MainLayout>
                <Journal />
              </MainLayout>
            </TooltipProvider>
          }
        />
        <Route
          path="/suggestions"
          element={
            <TooltipProvider>
              <MainLayout>
                <Suggestions />
              </MainLayout>
            </TooltipProvider>
          }
        />
        <Route
          path="/resources"
          element={
            <TooltipProvider>
              <MainLayout>
                <Resources />
              </MainLayout>
            </TooltipProvider>
          }
        />
        <Route
          path="/profile"
          element={
            <TooltipProvider>
              <MainLayout>
                <Profile />
              </MainLayout>
            </TooltipProvider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <Sonner />
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
