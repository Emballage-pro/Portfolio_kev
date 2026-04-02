import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Cybersécurité",
      skills: ["Pentesting", "OSINT", "Analyse de vulnérabilités", "Sécurité réseau", "Forensic", "CTF"],
    },
    {
      title: "Langages & Frameworks",
      skills: ["Python", "C", "JavaScript", "TypeScript", "React", "Node.js", "PHP"],
    },
    {
      title: "Outils & Plateformes",
      skills: ["Root-Me", "TryHackMe", "Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Git"],
    },
    {
      title: "Compétences Transversales",
      skills: ["Résolution de problèmes", "Analyse critique", "Travail en équipe", "Autoentrepreneuriat", "Gestion de projets"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compétences
          </h2>
          <p className="text-xl text-cyan-500 max-w-2xl mx-auto font-mono">
            &gt; Technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border border-border bg-card/50 hover:border-cyan-500/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-2 px-3 bg-muted text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
