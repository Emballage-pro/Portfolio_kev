import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Footer } from "@/app/components/Footer";
import { motion } from "motion/react";
import { Trophy, Target, Zap, Crown, Brain, Users, Star, Award, Loader2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useEffect, useState } from "react";

interface ChessComStats {
  chess_rapid?: { last: { rating: number } };
  chess_blitz?: { last: { rating: number } };
  chess_bullet?: { last: { rating: number } };
  chess_daily?: { last: { rating: number } };
}

export function PassionPage() {
  const [chessStats, setChessStats] = useState<ChessComStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChessStats = async () => {
      try {
        const response = await fetch('https://api.chess.com/pub/player/bobby-pro/stats');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des statistiques');
        }
        const data = await response.json();
        setChessStats(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setLoading(false);
      }
    };

    fetchChessStats();
  }, []);

  const chessCompetitionImg = "https://images.unsplash.com/photo-1697753594185-8ce7ea802d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGNvbXBldGl0aW9uJTIwdG91cm5hbWVudHxlbnwxfHx8fDE3NzMwNjc0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const chessBoardImg = "https://images.unsplash.com/photo-1634264719918-d1d67697b698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGJvYXJkJTIwc3RyYXRlZ3klMjBwaWVjZXN8ZW58MXx8fHwxNzczMDY3NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const chessThinkingImg = "https://images.unsplash.com/photo-1721641809341-bfc9706039cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHBsYXllciUyMHRoaW5raW5nfGVufDF8fHx8MTc3MzA2NzQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const stats = [
    { icon: Star, label: "Classement ELO", value: "1500" },
    { icon: Trophy, label: "Compétitions", value: "Multiple" },
    { icon: Brain, label: "Style de Jeu", value: "Tactique" },
    { icon: Award, label: "Années de Pratique", value: "5+" },
  ];

  const strengths = [
    {
      title: "Pensée Stratégique",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      description: "Développement d'une vision à long terme et anticipation des mouvements adverses.",
    },
    {
      title: "Analyse Tactique",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      description: "Repérage rapide des opportunités tactiques et calcul des variantes complexes.",
    },
    {
      title: "Gestion du Temps",
      icon: Crown,
      color: "from-orange-500 to-red-600",
      description: "Maîtrise de la cadence et optimisation du temps de réflexion en compétition.",
    },
    {
      title: "Esprit Compétitif",
      icon: Users,
      color: "from-green-500 to-teal-600",
      description: "Participation active aux tournois et amélioration continue des compétences.",
    },
  ];

  const openings = [
    { name: "Défense Sicilienne", color: "bg-cyan-500/20", textColor: "text-cyan-400" },
    { name: "Partie Espagnole", color: "bg-blue-500/20", textColor: "text-blue-400" },
    { name: "Gambit Dame", color: "bg-purple-500/20", textColor: "text-purple-400" },
    { name: "Défense Française", color: "bg-pink-500/20", textColor: "text-pink-400" },
    { name: "Ouverture Italienne", color: "bg-orange-500/20", textColor: "text-orange-400" },
    { name: "Défense Caro-Kann", color: "bg-green-500/20", textColor: "text-green-400" },
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
              Ma Passion : Les Échecs
            </h1>
            <p className="text-xl text-cyan-400 max-w-2xl mx-auto font-mono">
              &gt; Un jeu de stratégie qui nourrit l'esprit analytique
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Une Passion qui Développe l'Esprit
              </h2>
              <p className="text-lg text-slate-300">
                Les échecs sont bien plus qu'un simple jeu pour moi. C'est une passion qui développe
                la pensée stratégique, la concentration et l'anticipation - des compétences
                directement applicables à la cybersécurité.
              </p>
              <p className="text-lg text-slate-300">
                Avec un classement ELO de <span className="text-cyan-400 font-bold">1500</span>, j'ai participé à
                de nombreuses compétitions qui m'ont appris à gérer la pression, analyser rapidement
                des situations complexes et prendre des décisions stratégiques.
              </p>
              <p className="text-lg text-slate-300">
                Chaque partie est une opportunité d'apprendre, que ce soit en analysant mes erreurs
                ou en étudiant les tactiques des grands maîtres.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/20"
            >
              <ImageWithFallback
                src={chessCompetitionImg}
                alt="Compétition d'échecs"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chess.com Live Stats Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="h-8 w-8 text-cyan-400" />
              Statistiques Chess.com en Temps Réel
            </h2>
            <p className="text-xl text-cyan-400 max-w-2xl mx-auto font-mono">
              &gt; Profil : bobby-pro
            </p>
          </motion.div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-12 w-12 text-cyan-400 animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <Card className="border-2 border-red-500/20 bg-slate-800/50 max-w-md mx-auto">
                <CardContent className="p-6">
                  <p className="text-red-400">⚠️ {error}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {!loading && !error && chessStats && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chessStats.chess_rapid && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-blue-900/30 to-slate-800/50 hover:border-cyan-500/60 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                    <CardHeader>
                      <CardTitle className="text-center text-white flex items-center justify-center gap-2">
                        <Trophy className="h-5 w-5 text-blue-400" />
                        Rapid
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-2">
                        {chessStats.chess_rapid.last.rating}
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                        ELO Actuel
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {chessStats.chess_blitz && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-slate-800/50 hover:border-purple-500/60 transition-all hover:shadow-xl hover:shadow-purple-500/20">
                    <CardHeader>
                      <CardTitle className="text-center text-white flex items-center justify-center gap-2">
                        <Zap className="h-5 w-5 text-purple-400" />
                        Blitz
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                        {chessStats.chess_blitz.last.rating}
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                        ELO Actuel
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {chessStats.chess_bullet && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="border-2 border-orange-500/30 bg-gradient-to-br from-orange-900/30 to-slate-800/50 hover:border-orange-500/60 transition-all hover:shadow-xl hover:shadow-orange-500/20">
                    <CardHeader>
                      <CardTitle className="text-center text-white flex items-center justify-center gap-2">
                        <Target className="h-5 w-5 text-orange-400" />
                        Bullet
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                        {chessStats.chess_bullet.last.rating}
                      </div>
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30">
                        ELO Actuel
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {chessStats.chess_daily && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-900/30 to-slate-800/50 hover:border-green-500/60 transition-all hover:shadow-xl hover:shadow-green-500/20">
                    <CardHeader>
                      <CardTitle className="text-center text-white flex items-center justify-center gap-2">
                        <Brain className="h-5 w-5 text-green-400" />
                        Daily
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-2">
                        {chessStats.chess_daily.last.rating}
                      </div>
                      <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                        ELO Actuel
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          )}

          {!loading && !error && chessStats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <a
                href="https://www.chess.com/member/bobby-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/50"
              >
                <Trophy className="h-5 w-5" />
                Voir le profil Chess.com
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="border-2 border-cyan-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-center py-8 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                  <CardContent>
                    <stat.icon className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compétences Développées
            </h2>
            <p className="text-xl text-cyan-400 max-w-2xl mx-auto">
              Les échecs m'ont permis de développer des qualités essentielles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-cyan-500/20 bg-slate-800/50 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${strength.color} rounded-lg flex items-center justify-center`}
                      >
                        <strength.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{strength.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{strength.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ouvertures Préférées</h2>
            <p className="text-xl text-cyan-400 max-w-2xl mx-auto">
              Mes armes favorites pour débuter une partie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/20"
            >
              <ImageWithFallback
                src={chessBoardImg}
                alt="Échiquier stratégie"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-4">
                {openings.map((opening, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${opening.color} border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/50 transition-all`}
                  >
                    <h3 className={`text-lg font-semibold ${opening.textColor}`}>
                      {opening.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8">
              <CardContent className="text-center">
                <div className="rounded-2xl overflow-hidden mb-8 max-w-md mx-auto border-2 border-cyan-500/20">
                  <ImageWithFallback
                    src={chessThinkingImg}
                    alt="Joueur d'échecs en réflexion"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                  "Les échecs sont une gymnastique de l'esprit."
                </blockquote>
                <p className="text-cyan-400 font-mono">— Blaise Pascal</p>
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-lg text-slate-300">
                    Tout comme en cybersécurité, les échecs nécessitent de penser plusieurs coups
                    à l'avance, d'anticiper les mouvements de l'adversaire et de trouver des
                    solutions créatives face à des situations complexes.
                  </p>
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