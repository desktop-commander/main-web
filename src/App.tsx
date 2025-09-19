import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import { initializeAnalytics } from "./lib/analytics";
import { usePageTracking } from "./lib/analytics/hooks";

const queryClient = new QueryClient();

// GitHub Pages HashRouter implementation - Updated
const basename = import.meta.env.PROD ? '/main-web' : '';

// Component to handle page tracking inside Router context
const AppContent = () => {
  usePageTracking();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/careers" element={<Careers />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  // Initialize all analytics services when the app starts
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
