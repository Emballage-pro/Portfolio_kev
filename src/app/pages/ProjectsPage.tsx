import { ExternalLink, Github, Terminal, Shield, Code, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Footer } from "@/app/components/Footer";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import deductoImage from "../../imports/Capture_d'écran_2026-03-10_134318.png";
import { useLanguage } from "@/app/components/LanguageContext";

export function ProjectsPage() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.1.title"),
      description: t("projects.1.desc"),
      image: deductoImage,
      tags: ["Python", "OSINT", "API", "Data Analysis"],
      icon: Shield,
      github: "https://github.com/Emballage-pro/Deducto/tree/main",
      demo: "https://github.com/Emballage-pro/Deducto/tree/main",
    },
    {
      title: t("projects.2.title"),
      description: t("projects.2.desc"),
      image: "https://images.unsplash.com/photo-1608742213509-815b97c30b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJtaW5hbCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjgwMDI3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["C", t("projects.tag.network"), "TCP/IP", "Sockets"],
      icon: Terminal,
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.3.title"),
      description: t("projects.3.desc"),
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByYWNrJTIwZGF0YWNlbnRlcnxlbnwwfHx8fDE3MTMzNjQ4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Proxmox", "Docker", "Virtualisation", t("projects.tag.network")],
      icon: Server,
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.4.title"),
      description: t("projects.4.desc"),
      image: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2Nzk3MjM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MySQL"],
      icon: Code,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-block px-8 py-6 rounded-2xl bg-background/50 backdrop-blur-md border border-red-500/15 shadow-xl shadow-red-500/5">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                {t("projects.title")}
              </h1>
              <p className="text-xl text-red-500 max-w-2xl mx-auto font-mono">
                {t("projects.subtitle")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-border bg-card/50 hover:border-red-500/50 transition-all hover:shadow-xl hover:shadow-red-500/10 group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    {typeof project.image === 'string' ? (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
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
                          className="bg-muted text-red-600 dark:text-red-400"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-red-500/50 text-red-500 hover:bg-red-500/10"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {t("projects.code")}
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("projects.details")}
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
