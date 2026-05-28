import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatedNavbar } from "@/app/components/AnimatedNavbar";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { HomePage } from "@/app/pages/HomePage";
import { ProjectsPage } from "@/app/pages/ProjectsPage";
import { SkillsPage } from "@/app/pages/SkillsPage";
import { PassionPage } from "@/app/pages/PassionPage";
import { CTFPage } from "@/app/pages/CTFPage";
import { ThemeProvider, useTheme } from "@/app/components/ThemeContext";
import { LanguageProvider } from "@/app/components/LanguageContext";
import { RedStarField } from "@/app/components/RedStarField";

function AppShell() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Router>
      <div
        className="min-h-screen text-foreground transition-colors duration-300 relative overflow-x-hidden"
        style={{
          backgroundColor: isDark ? "#0f1115" : "#e5e7eb",
        }}
      >
        {/* Global SVG filter: maps white pixels to transparent */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            {/* Keep dark pixels as opaque black, drop light pixels (transparent bg) */}
            <filter id="remove-white-bg">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        -0.333 -0.334 -0.333 0 1"
              />
            </filter>
          </defs>
        </svg>
        <RedStarField isDark={isDark} />
        <AnimatedNavbar />
        <ScrollToTop />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/passion" element={<PassionPage />} />
            <Route path="/ctf" element={<CTFPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}
