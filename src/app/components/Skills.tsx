import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.cat.cyber"),
      skills: [
        t("skill.pentesting"),
        t("skill.osint"),
        t("skill.vuln_analysis"),
        t("skill.net_security"),
        t("skill.forensic"),
        "CTF",
      ],
    },
    {
      title: t("skills.cat.langs"),
      skills: ["Python", "C", "JavaScript", "TypeScript", "React", "Node.js", "PHP"],
    },
    {
      title: t("skills.cat.tools"),
      skills: ["Root-Me", "TryHackMe", "Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Git"],
    },
    {
      title: t("skills.cat.soft"),
      skills: [
        t("skill.problem_solving"),
        t("skill.critical_thinking"),
        t("skill.teamwork"),
        t("skill.entrepreneur"),
        t("skill.project_mgmt"),
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-background/50 backdrop-blur-md border border-red-500/15 shadow-xl shadow-red-500/5">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("skills.title")}
            </h2>
            <p className="text-xl text-red-500 max-w-2xl mx-auto font-mono">
              {t("skills.subtitle")}
            </p>
          </div>
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
              <Card className="border border-border bg-card/50 hover:border-red-500/50 transition-all">
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
                          className="text-sm py-2 px-3 bg-muted text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white transition-colors"
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
