import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { GooeyText } from "./GooeyText";
import anonIcon from "../../imports/Capture_d__cran_2026-05-27_174254-1.png";
import { useLanguage } from "./LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <div className="w-44 h-44 rounded-full bg-gradient-to-br from-red-500 to-red-800 mx-auto mb-6 flex items-center justify-center relative shadow-lg shadow-red-500/30">
              <img
                src={anonIcon}
                alt="Anonymous mask"
                className="absolute inset-0 m-auto h-32 w-32 object-contain z-10"
                style={{
                  transformOrigin: "center center",
                  objectPosition: "center",
                }}
              />
              <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: "#E32E36", opacity: 0.2 }} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Kevin SABERT
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-red-500 font-mono">
              <GooeyText
                texts={[`> ${t("hero.title")}`, `> ${t("hero.title2")}`, `> ${t("hero.title3")}`, `> ${t("hero.title4")}`]}
                textClassName="text-red-500"
              />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <Button size="lg" className="group bg-red-500 hover:bg-red-600 text-white border-none cursor-pointer">
                {t("hero.cta.projects")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10 cursor-pointer">
                {t("hero.cta.contact")}
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 justify-center pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Emballage-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/kevin-sabert/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:sbtkevin2b@yahoo.com"
              className="text-muted-foreground hover:text-red-500 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}