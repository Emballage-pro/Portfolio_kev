import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en" | "hu";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.ctf": "CTF",
    "nav.passion": "Passion",

    // Hero
    "hero.greeting": "Bonjour, je suis",
    "hero.title": "Étudiant Ingénieur",
    "hero.title2": "Cybersécurité",
    "hero.title3": "Pentester",
    "hero.title4": "OSINT Enthusiast",
    "hero.description":
      "2ème année d'école d'ingénieur en informatique et réseau, orienté cybersécurité. Passionné par la sécurité offensive et l'OSINT.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",

    // About
    "about.title": "À Propos",
    "about.subtitle": "> Étudiant ingénieur passionné par la cybersécurité",
    "about.p1":
      "Actuellement en 2ème année d'école d'ingénieur en informatique et réseau, je me spécialise dans la cybersécurité. Mon parcours m'a permis de développer des compétences solides en sécurité offensive.",
    "about.p2_before": "Je mets mes compétences au service des commerçants en tant qu'autoentrepreneur chez ",
    "about.p2_after":
      ", où je développe des sites vitrines et des applications web avec backend.",
    "about.p3":
      "Quand je ne code pas, je perfectionne mes techniques de pentesting sur des plateformes comme Root-Me et TryHackMe, et je travaille sur des outils d'OSINT en Python.",
    "about.value1.title": "Cybersécurité",
    "about.value1.desc":
      "Passionné par la sécurité offensive, l'analyse de vulnérabilités et la protection des systèmes.",
    "about.value2.title": "Pentesting",
    "about.value2.desc":
      "Pratique régulière sur Root-Me et TryHackMe pour affiner mes compétences en tests d'intrusion.",
    "about.value3.title": "Développement",
    "about.value3.desc":
      "Création de sites vitrines et applications web avec backend pour des commerçants via Classor.",

    // Contact
    "contact.title": "Me Contacter",
    "contact.subtitle": "> Un projet en tête ? Discutons-en !",
    "contact.heading": "Restons en contact",
    "contact.intro":
      "Je suis disponible pour des opportunités de stage, des projets de développement web ou toute collaboration en cybersécurité.",
    "contact.info.email": "Email",
    "contact.info.location": "Localisation",
    "contact.info.company": "Entreprise",
    "contact.form.name": "Nom",
    "contact.form.name.placeholder": "Votre nom",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "votre.email@example.com",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Votre message...",
    "contact.form.submit": "Envoyer le message",
    "contact.form.submitting": "Envoi en cours...",
    "contact.form.success": "Message envoyé avec succès !",
    "contact.form.error": "Une erreur est survenue. Veuillez réessayer.",

    // Location map
    "map.title": "ESAIP Aix-en-Provence",
    "map.subtitle": "École d'Ingénieurs — Allées de Pomone",
    "map.location_label": "> location",
    "map.cta": "[ voir la carte ]",

    // Skills (home section)
    "skills.title": "Compétences",
    "skills.subtitle": "> Technologies et outils que je maîtrise",
    "skills.cat.cyber": "Cybersécurité",
    "skills.cat.langs": "Langages & Frameworks",
    "skills.cat.tools": "Outils & Plateformes",
    "skills.cat.soft": "Compétences Transversales",
    "skill.pentesting": "Pentesting",
    "skill.osint": "OSINT",
    "skill.vuln_analysis": "Analyse de vulnérabilités",
    "skill.net_security": "Sécurité réseau",
    "skill.forensic": "Forensic",
    "skill.problem_solving": "Résolution de problèmes",
    "skill.critical_thinking": "Analyse critique",
    "skill.teamwork": "Travail en équipe",
    "skill.entrepreneur": "Autoentrepreneuriat",
    "skill.project_mgmt": "Gestion de projets",

    // Projects Page
    "projects.title": "Mes Projets",
    "projects.subtitle": "> Une sélection de mes réalisations en cybersécurité et développement",
    "projects.code": "Code",
    "projects.details": "Détails",
    "projects.1.title": "Deducto",
    "projects.1.desc":
      "Un outil Open Source développé en Python pour la collecte et l'analyse d'informations publiques sur LinkedIn. Automatisation de la recherche d'informations. Module DNS intégré.",
    "projects.2.title": "Scanneur de ports TCP/IP",
    "projects.2.desc":
      "Un scanneur de ports réseau performant développé en C, capable d'identifier les services actifs sur un réseau. Implémentation bas niveau avec sockets.",
    "projects.3.title": "Homelab",
    "projects.3.desc":
      "Infrastructure personnelle de cybersécurité avec serveurs virtualisés, environnements de test d'intrusion, monitoring réseau et lab de malware analysis en environnement isolé.",
    "projects.4.title": "Sites Web - Classor",
    "projects.4.desc":
      "Développement de sites vitrines et applications web avec backend pour des commerçants locaux. Solutions sur mesure incluant gestion de contenu et e-commerce.",
    "projects.tag.network": "Réseau",

    // Skills Page
    "skillsPage.title": "Mes Compétences",
    "skillsPage.subtitle": "> Un arsenal complet en cybersécurité et développement",
    "skillsPage.cat.offensive": "Cybersécurité Offensive",
    "skillsPage.cat.languages": "Langages de Programmation",
    "skillsPage.cat.frameworks": "Frameworks & Bibliothèques",
    "skillsPage.cat.pentesting": "Outils de Pentesting",
    "skillsPage.cat.ctf_platforms": "Plateformes CTF",
    "skillsPage.cat.network_sys": "Réseaux & Systèmes",
    "skillsPage.cat.osint": "OSINT",
    "skillsPage.cat.dev_tools": "Outils de Développement",
    "skillsPage.skill.vuln_expl": "Exploitation de vulnérabilités",
    "skillsPage.skill.malware": "Analyse de malware",
    "skillsPage.skill.forensic_digital": "Forensic numérique",
    "skillsPage.skill.social_eng": "Social Engineering",
    "skillsPage.stat.languages": "Langages maîtrisés",
    "skillsPage.stat.tools": "Outils de pentesting",
    "skillsPage.stat.ctf": "Challenges CTF résolus",
    "skillsPage.stat.projects": "Projets réalisés et menés à la fin",
    "skillsPage.stat.hackathon": "Hackathon effectué",

    // CTF Page
    "ctf.title": "Challenges CTF",
    "ctf.subtitle": "> Mon parcours sur les plateformes de cybersécurité",
    "ctf.stats.resolved": "Challenges résolus",
    "ctf.stats.categories": "Catégories",
    "ctf.stats.points": "Points",
    "ctf.stats.ranking": "Classement",
    "ctf.thm.rooms": "Rooms complétées",
    "ctf.thm.global_rank": "Classement global",
    "ctf.thm.badges": "Badges obtenus",
    "ctf.thm.paths": "Parcours suivis",
    "ctf.rootme.challenges": "Challenges validés",
    "ctf.rootme.points": "Points",
    "ctf.rootme.categories": "Catégories",
    "ctf.rootme.profile_intro":
      "Consultez mon profil complet et mes statistiques en temps réel",
    "ctf.rootme.view_profile": "Voir mon profil Root-Me",
    "ctf.rootme.mastered": "Catégories maîtrisées",
    "ctf.htb.pwned": "Machines pwned",
    "ctf.htb.rank": "Rank actuel",
    "ctf.htb.challenges": "Challenges",
    "ctf.htb.skills": "Compétences développées",
    "ctf.pico.flags": "Flags capturés",
    "ctf.pico.points": "Points totaux",
    "ctf.pico.comps": "Compétitions",
    "ctf.pico.categories": "Catégories complétées",

    // Passion Page
    "passion.title": "Ma Passion : Les Échecs",
    "passion.subtitle": "> Un jeu de stratégie qui nourrit l'esprit analytique",
    "passion.heading": "Une Passion qui Développe l'Esprit",
    "passion.p1":
      "Les échecs sont bien plus qu'un simple jeu pour moi. C'est une passion qui développe la pensée stratégique, la concentration et l'anticipation — des compétences directement applicables à la cybersécurité.",
    "passion.p2_before": "Avec un classement ELO de ",
    "passion.p2_after":
      ", j'ai participé à de nombreuses compétitions qui m'ont appris à gérer la pression, analyser rapidement des situations complexes et prendre des décisions stratégiques.",
    "passion.p3":
      "Chaque partie est une opportunité d'apprendre, que ce soit en analysant mes erreurs ou en étudiant les tactiques des grands maîtres.",
    "passion.live_title": "Statistiques Chess.com en Temps Réel",
    "passion.live_subtitle": "> Profil : bobby-pro",
    "passion.live_error": "Erreur lors de la récupération des statistiques",
    "passion.live_unknown": "Erreur inconnue",
    "passion.elo_current": "ELO Actuel",
    "passion.view_chesscom": "Voir le profil Chess.com",
    "passion.stats.elo": "Classement ELO",
    "passion.stats.comps": "Compétitions",
    "passion.stats.comps_value": "Multiple",
    "passion.stats.style": "Style de Jeu",
    "passion.stats.style_value": "Tactique",
    "passion.stats.years": "Années de Pratique",
    "passion.strengths_title": "Compétences Développées",
    "passion.strengths_subtitle": "Les échecs m'ont permis de développer des qualités essentielles",
    "passion.strength1.title": "Pensée Stratégique",
    "passion.strength1.desc":
      "Développement d'une vision à long terme et anticipation des mouvements adverses.",
    "passion.strength2.title": "Analyse Tactique",
    "passion.strength2.desc":
      "Repérage rapide des opportunités tactiques et calcul des variantes complexes.",
    "passion.strength3.title": "Gestion du Temps",
    "passion.strength3.desc":
      "Maîtrise de la cadence et optimisation du temps de réflexion en compétition.",
    "passion.strength4.title": "Esprit Compétitif",
    "passion.strength4.desc":
      "Participation active aux tournois et amélioration continue des compétences.",
    "passion.openings_title": "Ouvertures Préférées",
    "passion.openings_subtitle": "La partie théorique",
    "passion.op1": "Gambit morra",
    "passion.op2": "Nimzo indienne",
    "passion.op3": "Gambit Dame",
    "passion.op4": "EST-indienne",
    "passion.op5": "Ouverture Italienne",
    "passion.op6": "Défense Caro-Kann",
    "passion.quote": "« Les échecs sont une gymnastique de l'esprit. »",
    "passion.quote_author": "— Blaise Pascal",
    "passion.closing":
      "Tout comme en cybersécurité, les échecs nécessitent de penser plusieurs coups à l'avance, d'anticiper les mouvements de l'adversaire et de trouver des solutions créatives face à des situations complexes.",

    // Footer
    "footer.description":
      "Étudiant ingénieur en cybersécurité, passionné par la sécurité offensive et le développement web.",
    "footer.navigation": "Navigation",
    "footer.about": "À Propos",
    "footer.projects": "Projets",
    "footer.skills": "Compétences",
    "footer.contact": "Contact",
    "footer.follow": "Me suivre",
    "footer.rights": "Fait avec passion",
  },

  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.ctf": "CTF",
    "nav.passion": "Passion",

    "hero.greeting": "Hello, I am",
    "hero.title": "Engineering Student",
    "hero.title2": "Cybersecurity",
    "hero.title3": "Pentester",
    "hero.title4": "OSINT Enthusiast",
    "hero.description":
      "Second-year engineering student in computer science & networks, focused on cybersecurity. Passionate about offensive security and OSINT.",
    "hero.cta.projects": "See my projects",
    "hero.cta.contact": "Contact me",

    "about.title": "About",
    "about.subtitle": "> Engineering student passionate about cybersecurity",
    "about.p1":
      "Currently a second-year engineering student in computer science and networks, I specialize in cybersecurity. My background has given me solid skills in offensive security.",
    "about.p2_before": "I put my skills to work for merchants as a freelancer at ",
    "about.p2_after": ", where I build showcase sites and full-stack web apps.",
    "about.p3":
      "When I'm not coding, I sharpen my pentesting skills on platforms like Root-Me and TryHackMe, and I work on OSINT tools in Python.",
    "about.value1.title": "Cybersecurity",
    "about.value1.desc":
      "Passionate about offensive security, vulnerability analysis and system protection.",
    "about.value2.title": "Pentesting",
    "about.value2.desc":
      "Regular practice on Root-Me and TryHackMe to sharpen my penetration testing skills.",
    "about.value3.title": "Development",
    "about.value3.desc":
      "Building showcase sites and full-stack web apps for merchants via Classor.",

    "contact.title": "Contact Me",
    "contact.subtitle": "> Got a project in mind? Let's talk!",
    "contact.heading": "Let's stay in touch",
    "contact.intro":
      "I'm available for internship opportunities, web development projects or any cybersecurity collaboration.",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.company": "Company",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your.email@example.com",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Your message...",
    "contact.form.submit": "Send message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Message sent successfully!",
    "contact.form.error": "An error occurred. Please try again.",

    "map.title": "ESAIP Aix-en-Provence",
    "map.subtitle": "Engineering School — Allées de Pomone Bat B",
    "map.location_label": "> location",
    "map.cta": "[ view map ]",

    "skills.title": "Skills",
    "skills.subtitle": "> Technologies and tools I master",
    "skills.cat.cyber": "Cybersecurity",
    "skills.cat.langs": "Languages & Frameworks",
    "skills.cat.tools": "Tools & Platforms",
    "skills.cat.soft": "Soft Skills",
    "skill.pentesting": "Pentesting",
    "skill.osint": "OSINT",
    "skill.vuln_analysis": "Vulnerability analysis",
    "skill.net_security": "Network security",
    "skill.forensic": "Forensics",
    "skill.problem_solving": "Problem solving",
    "skill.critical_thinking": "Critical thinking",
    "skill.teamwork": "Teamwork",
    "skill.entrepreneur": "Entrepreneurship",
    "skill.project_mgmt": "Project management",

    "projects.title": "My Projects",
    "projects.subtitle": "> A selection of my work in cybersecurity and development",
    "projects.code": "Code",
    "projects.details": "Details",
    "projects.1.title": "Deducto",
    "projects.1.desc":
      "An open-source tool built in Python for gathering and analyzing public info from LinkedIn. Automated recon with an integrated DNS module.",
    "projects.2.title": "TCP/IP Port Scanner",
    "projects.2.desc":
      "A high-performance network port scanner written in C, able to identify active services on a network. Low-level implementation with sockets.",
    "projects.3.title": "Homelab",
    "projects.3.desc":
      "Personal cybersecurity infrastructure with virtualized servers, pentest environments, network monitoring and an isolated malware-analysis lab.",
    "projects.4.title": "Websites - Classor",
    "projects.4.desc":
      "Building showcase sites and full-stack web apps for local merchants. Custom solutions including CMS and e-commerce.",
    "projects.tag.network": "Network",

    "skillsPage.title": "My Skills",
    "skillsPage.subtitle": "> A complete arsenal in cybersecurity and development",
    "skillsPage.cat.offensive": "Offensive Cybersecurity",
    "skillsPage.cat.languages": "Programming Languages",
    "skillsPage.cat.frameworks": "Frameworks & Libraries",
    "skillsPage.cat.pentesting": "Pentesting Tools",
    "skillsPage.cat.ctf_platforms": "CTF Platforms",
    "skillsPage.cat.network_sys": "Networks & Systems",
    "skillsPage.cat.osint": "OSINT",
    "skillsPage.cat.dev_tools": "Development Tools",
    "skillsPage.skill.vuln_expl": "Vulnerability exploitation",
    "skillsPage.skill.malware": "Malware analysis",
    "skillsPage.skill.forensic_digital": "Digital forensics",
    "skillsPage.skill.social_eng": "Social engineering",
    "skillsPage.stat.languages": "Languages mastered",
    "skillsPage.stat.tools": "Pentesting tools",
    "skillsPage.stat.ctf": "CTF challenges solved",
    "skillsPage.stat.projects": "Projects completed",
    "skillsPage.stat.hackathon": "Hackathon attended",

    "ctf.title": "CTF Challenges",
    "ctf.subtitle": "> My journey on cybersecurity platforms",
    "ctf.stats.resolved": "Challenges solved",
    "ctf.stats.categories": "Categories",
    "ctf.stats.points": "Points",
    "ctf.stats.ranking": "Ranking",
    "ctf.thm.rooms": "Rooms completed",
    "ctf.thm.global_rank": "Global ranking",
    "ctf.thm.badges": "Badges earned",
    "ctf.thm.paths": "Paths followed",
    "ctf.rootme.challenges": "Challenges validated",
    "ctf.rootme.points": "Points",
    "ctf.rootme.categories": "Categories",
    "ctf.rootme.profile_intro": "Check my full profile and real-time stats",
    "ctf.rootme.view_profile": "View my Root-Me profile",
    "ctf.rootme.mastered": "Mastered categories",
    "ctf.htb.pwned": "Machines pwned",
    "ctf.htb.rank": "Current rank",
    "ctf.htb.challenges": "Challenges",
    "ctf.htb.skills": "Skills developed",
    "ctf.pico.flags": "Flags captured",
    "ctf.pico.points": "Total points",
    "ctf.pico.comps": "Competitions",
    "ctf.pico.categories": "Categories completed",

    "passion.title": "My Passion: Chess",
    "passion.subtitle": "> A strategy game that feeds the analytical mind",
    "passion.heading": "A Passion That Shapes the Mind",
    "passion.p1":
      "Chess is far more than a game to me. It's a passion that builds strategic thinking, focus and anticipation — skills that translate directly to cybersecurity.",
    "passion.p2_before": "With an ELO rating of ",
    "passion.p2_after":
      ", I've taken part in many tournaments that taught me to handle pressure, quickly analyze complex situations and make strategic decisions.",
    "passion.p3":
      "Every game is a chance to learn, whether by reviewing my mistakes or studying grandmaster tactics.",
    "passion.live_title": "Real-time Chess.com Stats",
    "passion.live_subtitle": "> Profile: bobby-pro",
    "passion.live_error": "Error while fetching stats",
    "passion.live_unknown": "Unknown error",
    "passion.elo_current": "Current ELO",
    "passion.view_chesscom": "View Chess.com profile",
    "passion.stats.elo": "ELO Rating",
    "passion.stats.comps": "Tournaments",
    "passion.stats.comps_value": "Multiple",
    "passion.stats.style": "Playing Style",
    "passion.stats.style_value": "Tactical",
    "passion.stats.years": "Years of Practice",
    "passion.strengths_title": "Skills Developed",
    "passion.strengths_subtitle": "Chess has helped me develop essential qualities",
    "passion.strength1.title": "Strategic Thinking",
    "passion.strength1.desc":
      "Building a long-term vision and anticipating the opponent's moves.",
    "passion.strength2.title": "Tactical Analysis",
    "passion.strength2.desc":
      "Spotting tactical chances quickly and calculating complex variations.",
    "passion.strength3.title": "Time Management",
    "passion.strength3.desc":
      "Mastering pace and optimizing thinking time in competition.",
    "passion.strength4.title": "Competitive Spirit",
    "passion.strength4.desc":
      "Active tournament play and continuous skill improvement.",
    "passion.openings_title": "Favorite Openings",
    "passion.openings_subtitle": "The theoretical part",
    "passion.op1": "Gambit morra",
    "passion.op2": "Nimzo-Indian",
    "passion.op3": "Queen's Gambit",
    "passion.op4": "King's Indian Defense",
    "passion.op5": "Italian Opening",
    "passion.op6": "Caro-Kann Defense",
    "passion.quote": "\u201CChess is gymnastics for the mind.\u201D",
    "passion.quote_author": "— Blaise Pascal",
    "passion.closing":
      "Just like in cybersecurity, chess demands thinking several moves ahead, anticipating the opponent and finding creative solutions to complex situations.",

    "footer.description":
      "Cybersecurity engineering student, passionate about offensive security and web development.",
    "footer.navigation": "Navigation",
    "footer.about": "About",
    "footer.projects": "Projects",
    "footer.skills": "Skills",
    "footer.contact": "Contact",
    "footer.follow": "Follow me",
    "footer.rights": "Made with passion",
  },

  hu: {
    "nav.home": "Kezdőlap",
    "nav.projects": "Projektek",
    "nav.skills": "Készségek",
    "nav.ctf": "CTF",
    "nav.passion": "Szenvedély",

    "hero.greeting": "Üdv, én vagyok",
    "hero.title": "Mérnökhallgató",
    "hero.title2": "Kiberbiztonság",
    "hero.title3": "Pentester",
    "hero.title4": "OSINT rajongó",
    "hero.description":
      "Másodéves mérnökhallgató informatika és hálózatok szakon, kiberbiztonságra specializálódva. A támadó biztonság és az OSINT szerelmese.",
    "hero.cta.projects": "Projektjeim",
    "hero.cta.contact": "Kapcsolat",

    "about.title": "Rólam",
    "about.subtitle": "> Kiberbiztonság iránt szenvedélyes mérnökhallgató",
    "about.p1":
      "Másodéves mérnökhallgató vagyok informatika és hálózatok szakon, kiberbiztonságra specializálódva. Eddigi utam során szilárd tudást szereztem a támadó biztonság területén.",
    "about.p2_before": "Szabadúszóként kereskedők számára dolgozom a ",
    "about.p2_after":
      " cégnél, ahol bemutatkozó oldalakat és teljes értékű webalkalmazásokat fejlesztek.",
    "about.p3":
      "Amikor nem kódolok, a Root-Me és a TryHackMe platformokon csiszolom a pentest készségeimet, és Python-alapú OSINT eszközökön dolgozom.",
    "about.value1.title": "Kiberbiztonság",
    "about.value1.desc":
      "A támadó biztonság, sebezhetőség-elemzés és rendszervédelem szerelmese.",
    "about.value2.title": "Pentesztelés",
    "about.value2.desc":
      "Rendszeres gyakorlás a Root-Me és TryHackMe platformokon a behatolás-vizsgálati készségek finomításáért.",
    "about.value3.title": "Fejlesztés",
    "about.value3.desc":
      "Bemutatkozó oldalak és teljes értékű webalkalmazások a Classor keretében kereskedőknek.",

    "contact.title": "Kapcsolat",
    "contact.subtitle": "> Van egy ötleted? Beszéljünk róla!",
    "contact.heading": "Maradjunk kapcsolatban",
    "contact.intro":
      "Nyitott vagyok szakmai gyakorlati lehetőségekre, webfejlesztési projektekre és bármilyen kiberbiztonsági együttműködésre.",
    "contact.info.email": "E-mail",
    "contact.info.location": "Helyszín",
    "contact.info.company": "Cég",
    "contact.form.name": "Név",
    "contact.form.name.placeholder": "A neved",
    "contact.form.email": "E-mail",
    "contact.form.email.placeholder": "email@pelda.hu",
    "contact.form.message": "Üzenet",
    "contact.form.message.placeholder": "Az üzeneted...",
    "contact.form.submit": "Üzenet küldése",
    "contact.form.submitting": "Küldés folyamatban...",
    "contact.form.success": "Üzenet sikeresen elküldve!",
    "contact.form.error": "Hiba történt. Kérlek próbáld újra.",

    "map.title": "ESAIP Aix-en-Provence",
    "map.subtitle": "Mérnöki iskola — Allées de Pomone B épület",
    "map.location_label": "> helyszín",
    "map.cta": "[ térkép megtekintése ]",

    "skills.title": "Készségek",
    "skills.subtitle": "> Az általam használt technológiák és eszközök",
    "skills.cat.cyber": "Kiberbiztonság",
    "skills.cat.langs": "Nyelvek és keretrendszerek",
    "skills.cat.tools": "Eszközök és platformok",
    "skills.cat.soft": "Soft skillek",
    "skill.pentesting": "Pentesztelés",
    "skill.osint": "OSINT",
    "skill.vuln_analysis": "Sebezhetőség-elemzés",
    "skill.net_security": "Hálózati biztonság",
    "skill.forensic": "Kriminalisztika",
    "skill.problem_solving": "Problémamegoldás",
    "skill.critical_thinking": "Kritikai gondolkodás",
    "skill.teamwork": "Csapatmunka",
    "skill.entrepreneur": "Vállalkozás",
    "skill.project_mgmt": "Projektmenedzsment",

    "projects.title": "Projektjeim",
    "projects.subtitle": "> Válogatás a kiberbiztonsági és fejlesztői munkáimból",
    "projects.code": "Kód",
    "projects.details": "Részletek",
    "projects.1.title": "Deducto",
    "projects.1.desc":
      "Python nyelven írt nyílt forráskódú eszköz LinkedIn-es nyilvános adatok gyűjtésére és elemzésére. Automatizált felderítés integrált DNS modullal.",
    "projects.2.title": "TCP/IP port-szkenner",
    "projects.2.desc":
      "C nyelven írt nagy teljesítményű hálózati port-szkenner, mely képes az aktív szolgáltatások azonosítására. Alacsony szintű socket-implementáció.",
    "projects.3.title": "Homelab",
    "projects.3.desc":
      "Személyes kiberbiztonsági infrastruktúra: virtualizált szerverek, pentest környezetek, hálózati monitoring és elkülönített malware-elemző labor.",
    "projects.4.title": "Weboldalak - Classor",
    "projects.4.desc":
      "Bemutatkozó oldalak és teljes értékű webalkalmazások helyi kereskedőknek. Egyedi megoldások CMS-sel és e-kereskedelemmel.",
    "projects.tag.network": "Hálózat",

    "skillsPage.title": "Készségeim",
    "skillsPage.subtitle": "> Teljes arzenál kiberbiztonságban és fejlesztésben",
    "skillsPage.cat.offensive": "Támadó kiberbiztonság",
    "skillsPage.cat.languages": "Programozási nyelvek",
    "skillsPage.cat.frameworks": "Keretrendszerek és könyvtárak",
    "skillsPage.cat.pentesting": "Pentest eszközök",
    "skillsPage.cat.ctf_platforms": "CTF platformok",
    "skillsPage.cat.network_sys": "Hálózatok és rendszerek",
    "skillsPage.cat.osint": "OSINT",
    "skillsPage.cat.dev_tools": "Fejlesztői eszközök",
    "skillsPage.skill.vuln_expl": "Sebezhetőség-kihasználás",
    "skillsPage.skill.malware": "Malware-elemzés",
    "skillsPage.skill.forensic_digital": "Digitális kriminalisztika",
    "skillsPage.skill.social_eng": "Social engineering",
    "skillsPage.stat.languages": "Elsajátított nyelvek",
    "skillsPage.stat.tools": "Pentest eszközök",
    "skillsPage.stat.ctf": "Megoldott CTF feladatok",
    "skillsPage.stat.projects": "Befejezett projektek",
    "skillsPage.stat.hackathon": "Hackathon",

    "ctf.title": "CTF kihívások",
    "ctf.subtitle": "> Utam a kiberbiztonsági platformokon",
    "ctf.stats.resolved": "Megoldott kihívások",
    "ctf.stats.categories": "Kategóriák",
    "ctf.stats.points": "Pontok",
    "ctf.stats.ranking": "Rangsor",
    "ctf.thm.rooms": "Teljesített szobák",
    "ctf.thm.global_rank": "Globális rangsor",
    "ctf.thm.badges": "Megszerzett kitűzők",
    "ctf.thm.paths": "Elvégzett utak",
    "ctf.rootme.challenges": "Validált kihívások",
    "ctf.rootme.points": "Pontok",
    "ctf.rootme.categories": "Kategóriák",
    "ctf.rootme.profile_intro":
      "Tekintsd meg a teljes profilomat és valós idejű statisztikáimat",
    "ctf.rootme.view_profile": "Root-Me profilom",
    "ctf.rootme.mastered": "Elsajátított kategóriák",
    "ctf.htb.pwned": "Feltört gépek",
    "ctf.htb.rank": "Aktuális rang",
    "ctf.htb.challenges": "Kihívások",
    "ctf.htb.skills": "Fejlesztett készségek",
    "ctf.pico.flags": "Megszerzett zászlók",
    "ctf.pico.points": "Összes pont",
    "ctf.pico.comps": "Versenyek",
    "ctf.pico.categories": "Teljesített kategóriák",

    "passion.title": "Szenvedélyem: a sakk",
    "passion.subtitle": "> Stratégiai játék, amely táplálja az elemző elmét",
    "passion.heading": "Szenvedély, amely formálja az elmét",
    "passion.p1":
      "A sakk számomra sokkal több egyszerű játéknál. Szenvedély, amely fejleszti a stratégiai gondolkodást, a koncentrációt és az előrelátást — olyan készségeket, amelyek közvetlenül átültethetők a kiberbiztonságra.",
    "passion.p2_before": "ELO-pontszámommal ",
    "passion.p2_after":
      ", számos versenyen vettem részt, amelyek megtanítottak a nyomás kezelésére, összetett helyzetek gyors elemzésére és stratégiai döntéshozatalra.",
    "passion.p3":
      "Minden játszma tanulási lehetőség, akár hibáim elemzésével, akár nagymesterek taktikáinak tanulmányozásával.",
    "passion.live_title": "Chess.com statisztikák valós időben",
    "passion.live_subtitle": "> Profil: bobby-pro",
    "passion.live_error": "Hiba a statisztikák lekérésekor",
    "passion.live_unknown": "Ismeretlen hiba",
    "passion.elo_current": "Aktuális ELO",
    "passion.view_chesscom": "Chess.com profil megtekintése",
    "passion.stats.elo": "ELO pontszám",
    "passion.stats.comps": "Versenyek",
    "passion.stats.comps_value": "Több",
    "passion.stats.style": "Játékstílus",
    "passion.stats.style_value": "Taktikus",
    "passion.stats.years": "Évek gyakorlata",
    "passion.strengths_title": "Fejlesztett készségek",
    "passion.strengths_subtitle":
      "A sakk segített kialakítani néhány alapvető képességet",
    "passion.strength1.title": "Stratégiai gondolkodás",
    "passion.strength1.desc":
      "Hosszú távú vízió kialakítása és az ellenfél lépéseinek előrejelzése.",
    "passion.strength2.title": "Taktikai elemzés",
    "passion.strength2.desc":
      "Taktikai lehetőségek gyors felismerése és komplex változatok kiszámítása.",
    "passion.strength3.title": "Időkezelés",
    "passion.strength3.desc":
      "A tempó uralása és a gondolkodási idő optimalizálása versenyen.",
    "passion.strength4.title": "Versenyszellem",
    "passion.strength4.desc": "Aktív versenyzés és folyamatos fejlődés.",
    "passion.openings_title": "Kedvenc megnyitások",
    "passion.openings_subtitle": "Az elméleti rész",
    "passion.op1": "Gambit morra",
    "passion.op2": "nimzoindiai védelem",
    "passion.op3": "Vezércsel",
    "passion.op4": "királyindiai védelem",
    "passion.op5": "Olasz megnyitás",
    "passion.op6": "Caro-Kann védelem",
    "passion.quote": "„A sakk az elme tornája.”",
    "passion.quote_author": "— Blaise Pascal",
    "passion.closing":
      "Akárcsak a kiberbiztonságban, a sakkban is több lépéssel előre kell gondolkodni, előre kell látni az ellenfelet és kreatív megoldásokat találni komplex helyzetekre.",

    "footer.description":
      "Kiberbiztonsági mérnökhallgató, a támadó biztonság és a webfejlesztés szerelmese.",
    "footer.navigation": "Navigáció",
    "footer.about": "Rólam",
    "footer.projects": "Projektek",
    "footer.skills": "Készségek",
    "footer.contact": "Kapcsolat",
    "footer.follow": "Kövess",
    "footer.rights": "Szenvedéllyel készült",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    return saved && ["fr", "en", "hu"].includes(saved) ? saved : "fr";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.fr[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
