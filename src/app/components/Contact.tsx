import { Mail, MapPin, Briefcase, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { LocationMapCard } from "@/app/components/LocationMapCard";
import { useLanguage } from "@/app/components/LanguageContext";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent } from "@/app/components/ui/card";
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const serviceId = "service_ngpz8bo";
      const templateId = "template_sx4qz7e";
      const publicKey = "dtzaRq15vmJbeHNNq";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Kevin SABERT",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus("error");
      setErrorMessage(t("contact.form.error"));

      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "sbtkevin2b@yahoo.com",
      href: "mailto:sbtkevin2b@yahoo.com",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: t("map.subtitle"),
      href: "#",
    },
    {
      icon: Briefcase,
      title: t("contact.info.company"),
      value: "Classor",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-background/50 backdrop-blur-md border border-red-500/15 shadow-xl shadow-red-500/5">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-red-500 max-w-2xl mx-auto font-mono">
              {t("contact.subtitle")}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {t("contact.heading")}
              </h3>
              <p className="text-muted-foreground mb-8">{t("contact.intro")}</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border border-border bg-card/50 hover:border-red-500/50 transition-all">
                    <CardContent className="p-6">
                      <a href={info.href} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          <p className="text-foreground group-hover:text-red-500 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <LocationMapCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border bg-card/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t("contact.form.name.placeholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={status === "loading"}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.form.email.placeholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={status === "loading"}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.message.placeholder")}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={status === "loading"}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full bg-red-500 hover:bg-red-600 text-white disabled:opacity-50"
                  >
                    {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {status === "loading" ? t("contact.form.submitting") : t("contact.form.submit")}
                  </Button>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <p className="text-green-500">{t("contact.form.success")}</p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                    >
                      <XCircle className="h-5 w-5 text-red-500" />
                      <p className="text-red-500">{errorMessage}</p>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}