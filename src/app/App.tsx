import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/app/components/Navbar";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { HomePage } from "@/app/pages/HomePage";
import { ProjectsPage } from "@/app/pages/ProjectsPage";
import { SkillsPage } from "@/app/pages/SkillsPage";
import { PassionPage } from "@/app/pages/PassionPage";
import { ThemeProvider } from "@/app/components/ThemeContext";
import { MatrixBackground } from "@/app/components/MatrixBackground";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-x-hidden">
          <MatrixBackground />
          <Navbar />
          <ScrollToTop />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/passion" element={<PassionPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}