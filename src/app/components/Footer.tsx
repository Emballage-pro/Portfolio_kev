import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import angeIcon from "../../imports/Capture_d__cran_2026-05-27_174254-1.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-transparent text-foreground py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={angeIcon}
                alt="Logo"
                className="h-9 w-9 object-contain"
                style={{}}
              />
              <h3 className="text-xl font-semibold">Kevin SABERT</h3>
            </div>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-red-500 transition-colors">
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-red-500 transition-colors">
                  {t("footer.projects")}
                </a>
              </li>
              <li>
                <a href="/skills" className="text-muted-foreground hover:text-red-500 transition-colors">
                  {t("footer.skills")}
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-red-500 transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer.follow")}</h3>
            <div className="flex gap-4">
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
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-red-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

        </div>

        <div className="pt-8 text-center">
          <p className="text-muted-foreground font-mono">
            <span className="text-red-500">&gt;</span> {t("footer.rights")} © {new Date().getFullYear()} Kevin SABERT
          </p>
        </div>
      </div>
    </footer>
  );
}
