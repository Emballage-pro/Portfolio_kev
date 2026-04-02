import { Github, Linkedin, Mail, Shield } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-card text-foreground py-12 px-4 border-t border-border relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-cyan-500" />
              <h3 className="text-xl font-semibold">Kevin SABERT</h3>
            </div>
            <p className="text-muted-foreground">
              Étudiant ingénieur en cybersécurité, passionné par la sécurité offensive et le développement web.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-cyan-500 transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-cyan-500 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/skills" className="text-muted-foreground hover:text-cyan-500 transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-cyan-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Me suivre</h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-mono">
            <span className="text-cyan-500">&gt;</span> Fait avec passion © {new Date().getFullYear()} Kevin SABERT
          </p>
        </div>
      </div>
    </footer>
  );
}
