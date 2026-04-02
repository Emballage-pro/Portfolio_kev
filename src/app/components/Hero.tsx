import { ArrowRight, Github, Linkedin, Mail, Shield } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CodeRainBackground } from "./CodeRainBackground";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Code Rain Background */}
      <CodeRainBackground />
      
      {/* Background Decorative Elements - Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
             backgroundSize: '4rem 4rem',
             maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
           }} 
      />
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mx-auto mb-6 flex items-center justify-center relative shadow-lg shadow-cyan-500/20">
              <Shield className="h-16 w-16 text-white" />
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Bonjour, je suis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Kevin SABERT
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-500 font-mono">
              &gt; Étudiant Ingénieur Cybersécurité
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              2ème année d'école d'ingénieur en informatique et réseau, orienté cybersécurité.
              Passionné par la sécurité offensive et l'OSINT.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <Button size="lg" className="group bg-cyan-500 hover:bg-cyan-600 text-white border-none cursor-pointer">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 cursor-pointer">
                Me contacter
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}