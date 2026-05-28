import { motion } from "motion/react";
import { Footer } from "@/app/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Trophy, Target, Award, TrendingUp } from "lucide-react";
import { useLanguage } from "@/app/components/LanguageContext";

export function CTFPage() {
  const { t } = useLanguage();
  const stats = [
    {
      icon: Trophy,
      label: t("ctf.stats.resolved"),
      value: "20+",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Target,
      label: t("ctf.stats.categories"),
      value: "12",
      color: "from-red-500 to-red-700",
    },
    {
      icon: Award,
      label: t("ctf.stats.points"),
      value: "3500+",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      label: t("ctf.stats.ranking"),
      value: "Top 20%",
      color: "from-green-500 to-emerald-600",
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
                {t("ctf.title")}
              </h1>
              <p className="text-xl text-red-500 max-w-2xl mx-auto font-mono">
                {t("ctf.subtitle")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border border-border bg-card/50 text-center">
                  <CardContent className="pt-6 space-y-2">
                    <div className={`w-12 h-12 mx-auto bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* TryHackMe Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <span className="text-2xl">☁️</span>
                  TryHackMe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">20+</p>
                    <p className="text-muted-foreground">{t("ctf.thm.rooms")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">Top 20%</p>
                    <p className="text-muted-foreground">{t("ctf.thm.global_rank")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-purple-500 mb-2">2086</p>
                    <p className="text-muted-foreground">{t("ctf.stats.points")}</p>   
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{t("ctf.thm.paths")}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Introduction to Cyber Security", "Web Fundamentals", "Pentesting", "Offensive Security", "Network Security", "Linux Fundamentals"].map((cat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/50 rounded px-3 py-2">
                        <span className="text-red-500">✓</span>
                        <span className="text-sm text-muted-foreground">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Root-Me Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Root-Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-green-500 mb-2">12</p>
                    <p className="text-muted-foreground">{t("ctf.rootme.challenges")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">90+</p>
                    <p className="text-muted-foreground">{t("ctf.rootme.points")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-purple-500 mb-2">Réseaux</p>
                    <p className="text-muted-foreground">{t("ctf.rootme.categories")}</p>
                  </div>
                </div>

                <div className="bg-transparent rounded-lg p-8 border border-red-500/30 text-center">
                  <p className="text-muted-foreground mb-4">
                    {t("ctf.rootme.profile_intro")}
                  </p>
                  <a
                    href="https://www.root-me.org/KEV-858136?inc=score&lang=fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all font-semibold"
                  >
                    {t("ctf.rootme.view_profile")}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{t("ctf.rootme.mastered")}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Web - Serveur", "Cryptanalyse", "Forensic", "Programmation", "Cracking", "Réseau"].map((cat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/50 rounded px-3 py-2">
                        <span className="text-red-500">✓</span>
                        <span className="text-sm text-muted-foreground">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* HackTheBox Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="border border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  HackTheBox
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-green-500 mb-2">1</p>
                    <p className="text-muted-foreground">{t("ctf.htb.pwned")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">Beginner</p>
                    <p className="text-muted-foreground">{t("ctf.htb.rank")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-purple-500 mb-2">5</p>
                    <p className="text-muted-foreground">{t("ctf.htb.challenges")}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{t("ctf.htb.skills")}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Active Directory", "Web Exploitation", "Privilege Escalation", "Buffer Overflow", "Reverse Engineering", "Forensics"].map((cat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/50 rounded px-3 py-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-sm text-muted-foreground">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* PicoCTF Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="border border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <span className="text-2xl">🚩</span>
                  PicoCTF
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-red-600/10 to-indigo-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-blue-500 mb-2">4</p>
                    <p className="text-muted-foreground">{t("ctf.pico.flags")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">Web exploitation </p>
                    <p className="text-muted-foreground">{t("ctf.pico.categories")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 text-center">
                    <p className="text-4xl font-bold text-purple-500 mb-2">1</p>
                    <p className="text-muted-foreground">{t("ctf.pico.comps")}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{t("ctf.pico.categories")}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Binary Exploitation", "Cryptography", "Forensics", "Reverse Engineering", "Web Exploitation", "General Skills"].map((cat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/50 rounded px-3 py-2">
                        <span className="text-blue-500">✓</span>
                        <span className="text-sm text-muted-foreground">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
