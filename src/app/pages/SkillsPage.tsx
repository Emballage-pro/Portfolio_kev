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

export function SkillsPage() {
  const skillCategories = [
    {
      title: "Cybersécurité Offensive",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      skills: [
        "Pentesting",
        "OSINT",
        "Exploitation de vulnérabilités",
        "Analyse de malware",
        "Forensic numérique",
        "Social Engineering",
      ],
    },
    /*{
      title: "Cybersécurité Défensive",
      icon: Lock,
      color: "from-blue-500 to-cyan-600",
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
      title: "Langages de Programmation",
      icon: Code2,
      color: "from-purple-500 to-pink-600",
      skills: ["Python", "C", "JavaScript", "TypeScript", "Bash/Shell", "SQL"],
    },
    {
      title: "Frameworks & Bibliothèques",
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
      title: "Outils de Pentesting",
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
      title: "Plateformes CTF",
      icon: Bug,
      color: "from-indigo-500 to-purple-600",
      skills: ["Root-Me", 
               "TryHackMe", 
               "HackTheBox", 
               "PicoCTF",],
    },
    {
      title: "Réseaux & Systèmes",
      icon: Network,
      color: "from-cyan-500 to-blue-600",
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
      title: "OSINT",
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
      title: "Outils de Développement",
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
    <div className="min-h-screen bg-slate-900">
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Mes Compétences
            </h1>
            <p className="text-xl text-cyan-400 max-w-2xl mx-auto font-mono">
              &gt; Un arsenal complet en cybersécurité et développement
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-2 border-cyan-500/20 bg-slate-800/50 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 h-full">
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
                            className="text-sm py-2 px-3 bg-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors cursor-default"
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
              { label: "Langages maîtrisés", value: "5+" },
              { label: "Outils de pentesting", value: "15+" },
              { label: "Challenges CTF résolus", value: "50+" },
              { label: "Projets réalisés et menés à la fin ", value: "5+" },
              { label: "Hackathon effectué", value: "1"},
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="border-2 border-cyan-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-center py-8">
                  <CardContent>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
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
