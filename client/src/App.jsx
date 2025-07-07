import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import Courses from "./pages/Courses";
// import CourseDetail from "./pages/CourseDetail";
// import Auth from "./pages/Auth";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import Quiz from "./pages/Quiz";
// import Certificate from "./pages/Certificate";
// import Admin from "./pages/Admin";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz/:courseId" element={<Quiz />} />
          <Route path="/certificate/:courseId/:certId" element={<Certificate />} />
          <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;