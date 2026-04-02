import { Code2, Shield, Terminal } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const kaliImg = "https://images.unsplash.com/photo-1656776890105-3d80eb67af13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwa2FsaSUyMGxpbnV4JTIwc2NyZWVufGVufDF8fHx8MTc3MDQ2MzE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const profileImg = "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGN5YmVyc2VjdXJpdHklMjBlbmdpbmVlcnxlbnwxfHx8fDE3NzA0NjMxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const values = [
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Passionné par la sécurité offensive, l'analyse de vulnérabilités et la protection des systèmes.",
    },
    {
      icon: Terminal,
      title: "Pentesting",
      description: "Pratique régulière sur Root-Me et TryHackMe pour affiner mes compétences en tests d'intrusion.",
    },
    {
      icon: Code2,
      title: "Développement",
      description: "Création de sites vitrines et applications web avec backend pour des commerçants via Classor.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À Propos
          </h2>
          <p className="text-xl text-cyan-500 max-w-2xl mx-auto font-mono">
            &gt; Étudiant ingénieur passionné par la cybersécurité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/20 shrink-0">
                <ImageWithFallback
                  src={profileImg}
                  alt="Kevin SABERT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Kevin SABERT</h3>
                <p className="text-cyan-500 font-mono text-sm">@ksabert_cyber</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Actuellement en 2ème année d'école d'ingénieur en informatique et réseau, je me spécialise dans la cybersécurité. Mon parcours m'a permis de développer des compétences solides en sécurité offensive.
            </p>
            <p className="text-lg text-muted-foreground">
              Je mets mes compétences au service des commerçants en tant qu'autoentrepreneur chez <span className="text-cyan-500 font-semibold">Classor</span>, où je développe des sites vitrines et des applications web avec backend.
            </p>
            <p className="text-lg text-muted-foreground">
              Quand je ne code pas, je perfectionne mes techniques de pentesting sur des plateformes comme Root-Me et TryHackMe, et je travaille sur des outils d'OSINT en Python.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-card aspect-video"
          >
            <ImageWithFallback
              src={kaliImg}
              alt="Kali Linux Cybersecurity"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="border border-border bg-card/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}