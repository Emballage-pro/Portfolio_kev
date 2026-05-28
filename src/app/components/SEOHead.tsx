import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const BASE_URL = "https://sbt-kevin.dev";

const DEFAULT_SEO: Required<SEOProps> = {
  title: "Kevin SABERT | Ingénieur Cybersécurité Offensive – CTF & Pentest",
  description:
    "Portfolio de Kevin SABERT, étudiant ingénieur en cybersécurité offensive à l'ESAIP Aix-en-Provence. Spécialisé en pentest, CTF, sécurité réseau et ethical hacking.",
  url: BASE_URL + "/",
  image: BASE_URL + "/icon_ange.png",
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = `link[rel="${rel}"]` + (extra?.hreflang ? `[hreflang="${extra.hreflang}"]` : "");
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectJSONLD(data: object) {
  const id = "jsonld-person";
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SEOHead({ title, description, url, image }: SEOProps) {
  const seo = {
    title: title ?? DEFAULT_SEO.title,
    description: description ?? DEFAULT_SEO.description,
    url: url ?? DEFAULT_SEO.url,
    image: image ?? DEFAULT_SEO.image,
  };

  useEffect(() => {
    document.title = seo.title;

    // Primary meta
    setMeta("description", seo.description);
    setMeta("keywords", "Kevin SABERT, cybersécurité, sécurité offensive, pentest, CTF, capture the flag, ESAIP, Aix-en-Provence, ethical hacking, portfolio, ingénieur sécurité");
    setMeta("author", "Kevin SABERT");
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("theme-color", "#dc2626");
    setMeta("revisit-after", "7 days");

    // Canonical & alternates
    setLink("canonical", seo.url);
    setLink("alternate", BASE_URL + "/", { hreflang: "fr" });
    setLink("alternate", BASE_URL + "/", { hreflang: "en" });
    setLink("alternate", BASE_URL + "/", { hreflang: "hu" });
    setLink("alternate", BASE_URL + "/", { hreflang: "x-default" });

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:url", seo.url, true);
    setMeta("og:title", seo.title, true);
    setMeta("og:description", seo.description, true);
    setMeta("og:image", seo.image, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "Kevin SABERT – Portfolio Cybersécurité", true);
    setMeta("og:locale", "fr_FR", true);
    setMeta("og:locale:alternate", "en_US", true);
    setMeta("og:site_name", "Kevin SABERT Portfolio", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:url", seo.url);
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
    setMeta("twitter:image", seo.image);
    setMeta("twitter:image:alt", "Kevin SABERT – Portfolio Cybersécurité");

    // Favicon (update if missing)
    setLink("icon", "/icon_ange.png");
    setLink("apple-touch-icon", "/icon_ange.png");

    // JSON-LD structured data
    injectJSONLD({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kevin SABERT",
      url: BASE_URL + "/",
      image: BASE_URL + "/icon_ange.png",
      jobTitle: "Étudiant Ingénieur en Cybersécurité Offensive",
      description: "Étudiant ingénieur en cybersécurité offensive spécialisé en pentest, CTF et sécurité réseau à l'ESAIP Aix-en-Provence.",
      sameAs: ["https://sbt-kevin.dev"],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "ESAIP",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aix-en-Provence",
          addressCountry: "FR",
        },
      },
      knowsAbout: [
        "Cybersécurité",
        "Sécurité offensive",
        "Pentest",
        "CTF (Capture The Flag)",
        "Sécurité réseau",
        "Ethical hacking",
        "OSCP",
        "Web security",
      ],
    });
  }, [seo.title, seo.description, seo.url, seo.image]);

  return null;
}
