import { Code2, Shield, Terminal } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "motion/react";
import profilePhoto from "../../imports/Photo_CV.png";
import { useLanguage } from "./LanguageContext";

export function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, title: t("about.value1.title"), description: t("about.value1.desc") },
    { icon: Terminal, title: t("about.value2.title"), description: t("about.value2.desc") },
    { icon: Code2, title: t("about.value3.title"), description: t("about.value3.desc") },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-background/50 backdrop-blur-md border border-red-500/15 shadow-xl shadow-red-500/5">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("about.title")}
            </h2>
            <p className="text-xl text-red-500 max-w-2xl mx-auto font-mono">
              {t("about.subtitle")}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-2xl bg-background/50 backdrop-blur-md border border-red-500/15 shadow-xl shadow-red-500/5"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Kevin SABERT</h3>
            <p className="text-lg text-muted-foreground">{t("about.p1")}</p>
            <p className="text-lg text-muted-foreground">
              {t("about.p2_before")}
              <span className="text-red-500 font-semibold">Classor</span>
              {t("about.p2_after")}
            </p>
            <p className="text-lg text-muted-foreground">{t("about.p3")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-card max-w-md">
              <img
                src={profilePhoto}
                alt="Kevin SABERT"
                className="w-full h-auto object-contain"
              />
            </div>
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
              <Card className="border border-border bg-card/50 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
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