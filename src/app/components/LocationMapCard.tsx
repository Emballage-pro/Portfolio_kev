import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { useLanguage } from "@/app/components/LanguageContext";

interface LocationMapCardProps {
  title?: string;
  subtitle?: string;
  lat?: number;
  lon?: number;
  zoomDelta?: number;
  query?: string;
}

export function LocationMapCard({
  title,
  subtitle,
  lat = 43.5156,
  lon = 5.3746,
  zoomDelta = 0.08,
  query = "ESAIP Aix-en-Provence Allées de Pomone ",
}: LocationMapCardProps) {
  const { t } = useLanguage();
  const resolvedTitle = title ?? t("map.title");
  const resolvedSubtitle = subtitle ?? t("map.subtitle");
  const bbox = [lon - zoomDelta, lat - zoomDelta, lon + zoomDelta, lat + zoomDelta].join(",");
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`;
  const externalLink = `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
      <Card className="border border-red-500/30 bg-card/50 overflow-hidden hover:border-red-500/60 transition-all group">
        <CardContent className="p-0">
          <div className="relative h-64 overflow-hidden">
            {inView ? (
              <iframe
                title="Localisation ESAIP Aix-en-Provence"
                src={mapSrc}
                className="w-full h-[calc(100%+40px)] opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                style={{ border: 0, filter: "hue-rotate(320deg) saturate(1.3) contrast(1.05)" }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted/30">
                <MapPin className="h-8 w-8 text-red-500/50" />
              </div>
            )}
            {/* Cover OSM footer (signaler un problème / faire un don) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-card" />

            

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <div className="p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground font-mono">{t("map.location_label")}</p>
                <p className="text-foreground truncate">{resolvedTitle}</p>
                <p className="text-xs text-muted-foreground truncate">{resolvedSubtitle}</p>
              </div>
            </div>
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-red-500 hover:text-red-400 transition-colors shrink-0"
            >
              {t("map.cta")}
            </a>
          </div>
        </CardContent>
      </Card>
      </motion.div>
    </div>
  );
}
