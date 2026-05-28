import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Footer } from "@/app/components/Footer";
import { motion } from "motion/react";
import {
  Shield,
  Code2,
  Terminal,
  Database,
  Network,
  Lock,
  Bug,
  FileSearch,
  Server,
  Laptop,
} from "lucide-react";
import { useLanguage } from "@/app/components/LanguageContext";

export function SkillsPage() {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t("skillsPage.cat.offensive"),
      icon: Shield,
      color: "from-red-500 to-orange-600",
      skills: [
        t("skill.pentesting"),
        t("skill.osint"),
        t("skillsPage.skill.vuln_expl"),
        t("skillsPage.skill.malware"),
        t("skillsPage.skill.forensic_digital"),
        t("skillsPage.skill.social_eng"),
      ],
    },
    /*{
      title: "Cybersécurité Défensive",
      icon: Lock,
      color: "from-red-600 to-red-600",
      skills: [
        "Sécurité réseau",
        "Détection d'intrusion",
        "Analyse de logs",
        "Hardening système",
        "Gestion des incidents",
        "Security Monitoring",
      ],
    },*/
    {
      title: t("skillsPage.cat.languages"),
      icon: Code2,
      color: "from-purple-500 to-pink-600",
      skills: ["Python", "C", "JavaScript", "TypeScript", "Bash/Shell", "SQL"],
    },
    {
      title: t("skillsPage.cat.frameworks"),
      icon: Server,
      color: "from-green-500 to-teal-600",
      skills: ["React", 
               "Node.js", 
               "Express", 
               "Next.js", 
               "Flask", 
               "FastAPI",
               "Metasploit",
              ],
    },
    {
      title: t("skillsPage.cat.pentesting"),
      icon: Terminal,
      color: "from-yellow-500 to-orange-600",
      skills: [
        "Gobsuter",
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "SQLMap",
        "John the Ripper",
        "Hashcat",
        "Netcat",
        "Steghide",
        "Exiftool",
        //"Nikto",
      ],
    },
    {
      title: t("skillsPage.cat.ctf_platforms"),
      icon: Bug,
      color: "from-indigo-500 to-purple-600",
      skills: ["Root-Me", 
               "TryHackMe", 
               "HackTheBox", 
               "PicoCTF",],
    },
    {
      title: t("skillsPage.cat.network_sys"),
      icon: Network,
      color: "from-red-500 to-red-700",
      skills: [
        "TCP/IP",
        "Cisco Packet Tracer",
        "VPN",
        "Windows Server",
        "Active Directory",
        "Docker",
        //"Firewall"
      ],
    },
    {
      title: t("skillsPage.cat.osint"),
      icon: FileSearch,
      color: "from-pink-500 to-rose-600",
      skills: [ "Shodan", 
               "Maltego", 
               "TheHarvester", 
               "Recon-ng",
               "Google Dorking",
               "DNS enumeration",
                
              //"PostgreSQL"
               ],
    },
    {
      title: t("skillsPage.cat.dev_tools"),
      icon: Laptop,
      color: "from-emerald-500 to-green-600",
      skills: ["Git", 
               "GitHub", 
               "VS Code",  
               "Docker",
              ],
    },
    /*{
      title: "OSINT & Reconnaissance",
      icon: FileSearch,
      color: "from-orange-500 to-red-600",
      skills: [
        
        "Whois lookup",
       ,
        "Social Media Intelligence",
      ],
    },*/
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="pt-24 pb-12 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-block px-8 py-6 rounded-2xl bg-background/50 backdrop-blur-md border border-red-500/15 shadow-xl shadow-red-500/5">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {t("skillsPage.title")}
              </h1>
              <p className="text-xl text-red-400 max-w-2xl mx-auto font-mono">
                {t("skillsPage.subtitle")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-2 border-red-500/20 bg-slate-800/50 hover:border-red-500/50 transition-all hover:shadow-xl hover:shadow-red-500/10 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                      >
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 + skillIndex * 0.02 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-sm py-2 px-3 bg-slate-700 text-red-400 hover:bg-red-500 hover:text-white transition-colors cursor-default"
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

          {/* Section statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            {[
              { label: t("skillsPage.stat.languages"), value: "5+" },
              { label: t("skillsPage.stat.tools"), value: "15+" },
              { label: t("skillsPage.stat.ctf"), value: "50+" },
              { label: t("skillsPage.stat.projects"), value: "5+" },
              { label: t("skillsPage.stat.hackathon"), value: "1"},
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="border-2 border-red-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-center py-8">
                  <CardContent>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
