import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import anonIcon from "../../imports/Capture_d__cran_2026-05-27_174254-1.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeContext";
import { useLanguage, Lang } from "./LanguageContext";

export function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { t, lang, setLang } = useLanguage();
  const languages: { code: Lang; flag: string }[] = [
    { code: "fr", flag: "🇫🇷" },
    { code: "en", flag: "🇬🇧" },
    { code: "hu", flag: "🇭🇺" },
  ];
  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/skills", label: t("nav.skills") },
    { to: "/ctf", label: t("nav.ctf") },
    { to: "/passion", label: t("nav.passion") },
  ];

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{
        backgroundColor: scrolled ? "hsl(var(--background) / 0.92)" : "hsl(var(--background) / 0.70)",
        backdropFilter: "blur(24px)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center"
          animate={{ height: scrolled ? 44 : 64 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/" className="flex items-center gap-2 group relative">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div
                animate={{ width: scrolled ? 28 : 36, height: scrolled ? 28 : 36 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={anonIcon}
                  alt="Anonymous"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-red-500/30 blur-md"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.span
              className="font-bold text-foreground relative"
              animate={{ fontSize: scrolled ? "1rem" : "1.25rem" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              KS
              {/* Glitch effect on hover */}
              <motion.span
                className="absolute inset-0 text-red-500"
                initial={{ opacity: 0, x: 0 }}
                whileHover={{
                  opacity: [0, 0.7, 0],
                  x: [-2, 2, -2, 0],
                }}
                transition={{ duration: 0.3 }}
              >
                KS
              </motion.span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1" style={{ fontSize: scrolled ? "0.875rem" : "1rem", transition: "font-size 0.3s ease" }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2"
              >
                <motion.span
                  className={`relative z-10 transition-colors ${
                    activeTab === link.to
                      ? "text-red-500 font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </motion.span>
                {/* Active indicator */}
                {activeTab === link.to && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-red-500/10 rounded-lg border border-red-500/30"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}

            <div className="ml-4 flex items-center gap-1 pr-2 border-r border-border/50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  aria-label={`Switch language to ${l.code.toUpperCase()}`}
                  className={`px-2 py-1 rounded-md text-sm font-mono transition-all cursor-pointer ${
                    lang === l.code
                      ? "bg-red-500/15 text-red-500 border border-red-500/40"
                      : "text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  <span className="mr-1">{l.flag}</span>
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg hover:bg-accent transition-colors text-foreground relative group"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-red-500/20 blur-md opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-red-500 transition-colors relative"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-all ${
                      activeTab === link.to
                        ? "bg-red-500/10 text-red-500 font-semibold border border-red-500/30"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-2 pt-3 px-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex-1 py-2 rounded-md text-sm font-mono transition-all cursor-pointer ${
                      lang === l.code
                        ? "bg-red-500/15 text-red-500 border border-red-500/40"
                        : "text-muted-foreground border border-border/50"
                    }`}
                  >
                    <span className="mr-1">{l.flag}</span>
                    {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
