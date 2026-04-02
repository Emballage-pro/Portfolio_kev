import { ExternalLink, Github, Terminal, Shield, Code, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Footer } from "@/app/components/Footer";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ProjectsPage() {
  const projects = [
    {
      title: "Deducto",
      description: "Un outil Open Source développé en Python pour la collecte et l'analyse d'informations publiques sur Linkedin. Automatisation de la recherche d'informations. Avec en plus module DNS intégré",
      image: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBkaWdpdGFsfGVufDF8fHx8MTc2NzkzODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "OSINT", "API", "Data Analysis"],
      icon: Shield,
      github: "#",
      demo: "#",
    },
    {
      title: "Scanneur de ports TCP/IP",
      description: "Un scanneur de ports réseau performant développé en C, capable d'identifier les services actifs sur un réseau. Implémentation bas niveau avec sockets.",
      image: "https://images.unsplash.com/photo-1608742213509-815b97c30b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJtaW5hbCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjgwMDI3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["C", "Réseau", "TCP/IP", "Sockets"],
      icon: Terminal,
      github: "#",
      demo: "#",
    },
    {
      title: "Challenges CTF",
      description: "Réalisations de CTF sur Root-Me, TryHackMe, Hackthebox et Picoctf . Résolution de défis en cryptographie, web, forensic et exploitation.",
      image: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwY29kZSUyMGhhY2tlcnxlbnwxfHx8fDE3NjgwMDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["CTF", "Root-Me", "TryHackMe", "Pentesting"],
      icon: Activity,
      github: "#",
      demo: "#",
    },
    {
      title: "Sites Web - Classor",
      description: "Développement de sites vitrines et applications web avec backend pour des commerçants locaux. Solutions sur mesure incluant gestion de contenu et e-commerce.",
      image: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2Nzk3MjM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MySQL"],
      icon: Code,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Mes Projets
            </h1>
            <p className="text-xl text-cyan-500 max-w-2xl mx-auto font-mono">
              &gt; Une sélection de mes réalisations en cybersécurité et développement
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-border bg-card/50 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-muted text-cyan-600 dark:text-cyan-400"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}