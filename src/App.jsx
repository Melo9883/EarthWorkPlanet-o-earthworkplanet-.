JavaScript


import React, { useState, useMemo } from 'react';
import {
  Globe, Search, Briefcase, MapPin, DollarSign, ShieldCheck, Filter, PlusCircle,
  Building, CheckCircle, ExternalLink, RefreshCw, Send, Users, ChevronRight, UserCheck
} from 'lucide-react';

const TRANSLATIONS = {
  it: {
    title: "GlobalHire Agency",
    subtitle: "La tua agenzia internazionale per opportunità di lavoro globali",
    navFindJobs: "Cerca Lavoro",
    navPostJob: "Offri Lavoro",
    navTalentPool: "Banca Talenti",
    navMyApplications: "Candidature",
    heroBadge: "Connettiamo i migliori talenti oltre i confini",
    heroTitle: "Lavora in tutto il mondo con supporto Visto garantito",
    heroSubtitle: "Aggreghiamo offerte verificate dalle principali agenzie nazionali (StepStone DE, InfoJobs ES, France Travail FR, Randstad IT) e aziende internazionali.",
    syncBtn: "Sincronizza Feed Online",
    syncing: "Aggiornamento feed...",
    searchPlaceholder: "Titolo lavoro, competenze o parole chiave...",
    locationPlaceholder: "Tutte le nazioni / città",
    allTypes: "Tutti i tipi",
    remote: "100% Remoto",
    hybrid: "Ibrido",
    onsite: "In Sede",
    visaRequired: "Solo con Visto / Sponsorship",
    minSalary: "Stipendio Minimo Anno",
    sourceFilter: "Tutte le Fonti",
    sourceDirect: "GlobalHire Diretto",
    sourceAgencies: "Solo Agenzie Nazionali Online",
    jobsFound: "Offerte trovate",
    applyNow: "Candidati Ora",
    externalApply: "Vai all'Agenzia",
    visaSponsored: "Sponsorship Visto Disponibile",
    relocationPackage: "Pacchetto Relocation",
    importedFrom: "Importato da",
    postJobTitle: "Pubblica una nuova offerta di lavoro",
    jobTitleLabel: "Titolo della posizione",
    companyLabel: "Nome Azienda",
    locationLabel: "Nazione / Città",
    workTypeLabel: "Modalità di lavoro",
    salaryLabel: "Stipendio Annuo ($ USD)",
    categoryLabel: "Categoria",
    visaOfferLabel: "Offrite Sponsorship Visto?",
    relocationOfferLabel: "Offrite pacchetto di trasferimento/relocation?",
    descriptionLabel: "Descrizione del ruolo",
    submitJob: "Pubblica Offerta",
    close: "Chiudi",
    applicationSuccess: "Candidatura inviata con successo!",
    jobPostedSuccess: "Offerta pubblicata con successo!",
    talentTitle: "Banca Talenti Internazionale",
    talentSubtitle: "Candidati con visto verificato o disponibilità al trasferimento immediato",
    skills: "Competenze",
    experience: "Esperienza",
    visaStatus: "Stato Visto",
    contactCandidate: "Contatta Candidato",
    myAppsTitle: "Le mie Candidature",
    noAppsYet: "Non hai ancora inviato alcuna candidatura."
  },
  en: {
    title: "GlobalHire Agency",
    subtitle: "Your international recruitment agency for global job opportunities",
    navFindJobs: "Find Jobs",
    navPostJob: "Post a Job",
    navTalentPool: "Talent Pool",
    navMyApplications: "Applications",
    heroBadge: "Connecting top talent across borders",
    heroTitle: "Work Worldwide with Guaranteed Visa Support",
    heroSubtitle: "We aggregate verified listings from national agencies (StepStone DE, InfoJobs ES, France Travail FR, Randstad IT) and global enterprises.",
    syncBtn: "Sync Online Feeds",
    syncing: "Updating feeds...",
    searchPlaceholder: "Job title, skills or keywords...",
    locationPlaceholder: "All countries / cities",
    allTypes: "All Types",
    remote: "100% Remote",
    hybrid: "Hybrid",
    onsite: "On-site",
    visaRequired: "Visa Sponsorship Only",
    minSalary: "Min Annual Salary",
    sourceFilter: "All Sources",
    sourceDirect: "GlobalHire Direct",
    sourceAgencies: "National Online Agencies",
    jobsFound: "Jobs found",
    applyNow: "Apply Now",
    externalApply: "Go to Agency",
    visaSponsored: "Visa Sponsorship Available",
    relocationPackage: "Relocation Package",
    importedFrom: "Imported from",
    postJobTitle: "Post a New Job Opportunity",
    jobTitleLabel: "Job Title",
    companyLabel: "Company Name",
    locationLabel: "Country / City",
    workTypeLabel: "Work Type",
    salaryLabel: "Annual Salary ($ USD)",
    categoryLabel: "Category",
    visaOfferLabel: "Do you offer Visa Sponsorship?",
    relocationOfferLabel: "Do you offer Relocation Support?",
    descriptionLabel: "Role Description",
    submitJob: "Post Job",
    close: "Close",
    applicationSuccess: "Application submitted successfully!",
    jobPostedSuccess: "Job posted successfully!",
    talentTitle: "International Talent Pool",
    talentSubtitle: "Candidates with verified visas or ready for immediate relocation",
    skills: "Skills",
    experience: "Experience",
    visaStatus: "Visa Status",
    contactCandidate: "Contact Candidate",
    myAppsTitle: "My Job Applications",
    noAppsYet: "You haven't submitted any applications yet."
  },
  de: {
    title: "GlobalHire Agency",
    subtitle: "Ihre internationale Personalagentur für globale Karrieren",
    navFindJobs: "Jobs suchen",
    navPostJob: "Job anbieten",
    navTalentPool: "Talent-Pool",
    navMyApplications: "Bewerbungen",
    heroBadge: "Top-Talente über Grenzen hinweg verbinden",
    heroTitle: "Weltweit arbeiten mit garantierter Visa-Unterstützung",
    heroSubtitle: "Wir aggregieren Stellenangebote führender nationaler Agenturen (StepStone, InfoJobs, France Travail) und globaler Unternehmen.",
    syncBtn: "Online-Feeds synchronisieren",
    syncing: "Feeds werden aktualisiert...",
    searchPlaceholder: "Jobtitel, Fähigkeiten oder Stichwörter...",
    locationPlaceholder: "Alle Länder / Städte",
    allTypes: "Alle Typen",
    remote: "100% Homeoffice",
    hybrid: "Hybrid",
    onsite: "Vor Ort",
    visaRequired: "Nur mit Visa-Sponsoring",
    minSalary: "Mindestjahresgehalt",
    sourceFilter: "Alle Quellen",
    sourceDirect: "GlobalHire Direkt",
    sourceAgencies: "Nationale Online-Agenturen",
    jobsFound: "Gefundene Jobs",
    applyNow: "Jetzt bewerben",
    externalApply: "Zur Agentur",
    visaSponsored: "Visa-Sponsoring verfügbar",
    relocationPackage: "Umzugspaket",
    importedFrom: "Importiert von",
    postJobTitle: "Neues Stellenangebot veröffentlichen",
    jobTitleLabel: "Berufsbezeichnung",
    companyLabel: "Firmenname",
    locationLabel: "Land / Stadt",
    workTypeLabel: "Arbeitsmodell",
    salaryLabel: "Jahresgehalt ($ USD)",
    categoryLabel: "Kategorie",
    visaOfferLabel: "Bieten Sie Visa-Sponsoring an?",
    relocationOfferLabel: "Bieten Sie Unterstützung beim Umzug an?",
    descriptionLabel: "Stellenbeschreibung",
    submitJob: "Stelle veröffentlichen",
    close: "Schließen",
    applicationSuccess: "Bewerbung erfolgreich eingereicht!",
    jobPostedSuccess: "Stellenangebot erfolgreich veröffentlicht!",
    talentTitle: "Internationaler Talent-Pool",
    talentSubtitle: "Kandidaten mit geprüftem Visum oder sofortiger Umzugsbereitschaft",
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    visaStatus: "Visa-Status",
    contactCandidate: "Kandidat kontaktieren",
    myAppsTitle: "Meine Bewerbungen",
    noAppsYet: "Sie haben noch keine Bewerbungen eingereicht."
  },
  es: {
    title: "GlobalHire Agency",
    subtitle: "Tu agencia internacional para oportunidades de empleo globales",
    navFindJobs: "Buscar Empleo",
    navPostJob: "Publicar Empleo",
    navTalentPool: "Bolsa de Talentos",
    navMyApplications: "Solicitudes",
    heroBadge: "Conectando talento sin fronteras",
    heroTitle: "Trabaja en todo el mundo con soporte de visado garantizado",
    heroSubtitle: "Agregamos ofertas verificadas de agencias nacionales líderes (StepStone, InfoJobs, France Travail, Randstad) y empresas internacionales.",
    syncBtn: "Sincronizar Feeds Online",
    syncing: "Actualizando...",
    searchPlaceholder: "Título del puesto, habilidades...",
    locationPlaceholder: "Todos los países / ciudades",
    allTypes: "Todos los tipos",
    remote: "100% Remoto",
    hybrid: "Híbrido",
    onsite: "Presencial",
    visaRequired: "Solo con Patrocinio de Visado",
    minSalary: "Salario Mínimo Anual",
    sourceFilter: "Todas las Fuentes",
    sourceDirect: "GlobalHire Directo",
    sourceAgencies: "Agencias Nacionales Online",
    jobsFound: "Empleos encontrados",
    applyNow: "Postularme",
    externalApply: "Ir a la Agencia",
    visaSponsored: "Visado Patrocinado Disponible",
    relocationPackage: "Paquete de Relocalización",
    importedFrom: "Importado de",
    postJobTitle: "Publicar una nueva oferta de empleo",
    jobTitleLabel: "Título del puesto",
    companyLabel: "Nombre de la empresa",
    locationLabel: "País / Ciudad",
    workTypeLabel: "Modalidad",
    salaryLabel: "Salario Anual ($ USD)",
    categoryLabel: "Categoría",
    visaOfferLabel: "¿Ofrece patrocinio de visado?",
    relocationOfferLabel: "¿Ofrece ayuda con la relocalización?",
    descriptionLabel: "Descripción del puesto",
    submitJob: "Publicar Oferta",
    close: "Cerrar",
    applicationSuccess: "¡Solicitud enviada con éxito!",
    jobPostedSuccess: "¡Oferta publicada con éxito!",
    talentTitle: "Bolsa de Talentos Internacional",
    talentSubtitle: "Candidatos con visado verificado o disponibilidad de traslado inmediato",
    skills: "Habilidades",
    experience: "Experiencia",
    visaStatus: "Estado del Visado",
    contactCandidate: "Contactar Candidato",
    myAppsTitle: "Mis Solicitudes",
    noAppsYet: "Aún no has enviado ninguna solicitud."
  },
  fr: {
    title: "GlobalHire Agency",
    subtitle: "Votre agence internationale de recrutement pour des opportunités mondiales",
    navFindJobs: "Trouver un emploi",
    navPostJob: "Publier une offre",
    navTalentPool: "Bassin de Talents",
    navMyApplications: "Candidatures",
    heroBadge: "Connecter les meilleurs talents au-delà des frontières",
    heroTitle: "Travaillez dans le monde entier avec visa garanti",
    heroSubtitle: "Nous agrégeons des offres vérifiées venant des agences nationales (StepStone, InfoJobs, France Travail, Randstad) et d'entreprises globales.",
    syncBtn: "Synchroniser les flux",
    syncing: "Mise à jour...",
    searchPlaceholder: "Titre du poste, compétences...",
    locationPlaceholder: "Tous les pays / villes",
    allTypes: "Tous les types",
    remote: "100% Télétravail",
    hybrid: "Hybride",
    onsite: "Sur site",
    visaRequired: "Visa/Sponsorship Uniquement",
    minSalary: "Salaire Minimum Annum",
    sourceFilter: "Toutes les Sources",
    sourceDirect: "GlobalHire Direct",
    sourceAgencies: "Agences Nationales en Ligne",
    jobsFound: "Offres trouvées",
    applyNow: "Postuler",
    externalApply: "Aller sur l'Agence",
    visaSponsored: "Sponsorisation Visa Disponible",
    relocationPackage: "Pack Déménagement",
    importedFrom: "Importé de",
    postJobTitle: "Publier une nouvelle offre",
    jobTitleLabel: "Titre du poste",
    companyLabel: "Nom de l'entreprise",
    locationLabel: "Pays / Ville",
    workTypeLabel: "Mode de travail",
    salaryLabel: "Salaire Annuel ($ USD)",
    categoryLabel: "Catégorie",
    visaOfferLabel: "Proposez-vous le sponsorship Visa ?",
    relocationOfferLabel: "Proposez-vous une aide à la réinstallation ?",
    descriptionLabel: "Description du rôle",
    submitJob: "Publier l'offre",
    close: "Fermer",
    applicationSuccess: "Candidature envoyée avec succès !",
    jobPostedSuccess: "Offre publiée avec succès !",
    talentTitle: "Bassin de Talents Internationaux",
    talentSubtitle: "Candidats avec visa vérifié ou prêts à déménager",
    skills: "Compétences",
    experience: "Expérience",
    visaStatus: "Statut du Visa",
    contactCandidate: "Contacter le Candidat",
    myAppsTitle: "Mes Candidatures",
    noAppsYet: "Vous n'avez pas encore envoyé de candidature."
  },
  pt: {
    title: "GlobalHire Agency",
    subtitle: "A sua agência internacional para oportunidades globais de emprego",
    navFindJobs: "Procurar Emprego",
    navPostJob: "Anunciar Vaga",
    navTalentPool: "Banco de Talentos",
    navMyApplications: "Candidaturas",
    heroBadge: "Conectando talentos sem fronteiras",
    heroTitle: "Trabalhe no mundo todo com suporte de visto garantido",
    heroSubtitle: "Agregamos ofertas verificadas das principais agências nacionais (InfoJobs PT/BR, StepStone, France Travail) e empresas internacionais.",
    syncBtn: "Sincronizar Feeds Online",
    syncing: "A atualizar feeds...",
    searchPlaceholder: "Título do cargo, competências...",
    locationPlaceholder: "Todos os países / cidades",
    allTypes: "Todos os tipos",
    remote: "100% Remoto",
    hybrid: "Híbrido",
    onsite: "Presencial",
    visaRequired: "Apenas com Suporte a Visto",
    minSalary: "Salário Mínimo Anual",
    sourceFilter: "Todas as Fontes",
    sourceDirect: "GlobalHire Direto",
    sourceAgencies: "Agências Nacionais Online",
    jobsFound: "Vagas encontradas",
    applyNow: "Candidatar-me",
    externalApply: "Ir para a Agência",
    visaSponsored: "Visto Suportado Disponível",
    relocationPackage: "Pacote de Relocalização",
    importedFrom: "Importado de",
    postJobTitle: "Publicar uma nova vaga",
    jobTitleLabel: "Título da vaga",
    companyLabel: "Nome da Empresa",
    locationLabel: "País / Cidade",
    workTypeLabel: "Modelo de trabalho",
    salaryLabel: "Salário Anual ($ USD)",
    categoryLabel: "Categoria",
    visaOfferLabel: "Oferece suporte ao visto?",
    relocationOfferLabel: "Oferece apoio à relocalização?",
    descriptionLabel: "Descrição da vaga",
    submitJob: "Publicar Vaga",
    close: "Fechar",
    applicationSuccess: "Candidatura enviada com sucesso!",
    jobPostedSuccess: "Vaga publicada com sucesso!",
    talentTitle: "Banco de Talentos Internacional",
    talentSubtitle: "Candidatos com visto verificado ou disponibilidade para mudança imediata",
    skills: "Competências",
    experience: "Experiência",
    visaStatus: "Estado do Visto",
    contactCandidate: "Contactar Candidato",
    myAppsTitle: "As minhas Candidaturas",
    noAppsYet: "Ainda não enviou nenhuma candidatura."
  }
};

const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  JPY: { symbol: '¥', rate: 155.2 },
  CHF: { symbol: 'Fr', rate: 0.89 }
};

const INITIAL_JOBS = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    company: "TechGlobal Zurich",
    location: "Zurich, Switzerland",
    type: "Hybrid",
    salaryUSD: 130000,
    visaSponsored: true,
    relocationPackage: true,
    visaBadge: "Swiss Work Permit B",
    sourceAgency: "StepStone DE / CH",
    externalUrl: "https://www.stepstone.de",
    category: "IT & Engineering",
    description: "Sviluppo architetture cloud ad alte prestazioni in ambiente React & Node.js."
  },
  {
    id: 2,
    title: "Project Manager - Energy Transition",
    company: "Iberdrola Global",
    location: "Madrid, Spain",
    type: "On-site",
    salaryUSD: 85000,
    visaSponsored: true,
    relocationPackage: true,
    visaBadge: "EU Blue Card",
    sourceAgency: "InfoJobs ES",
    externalUrl: "https://www.infojobs.net",
    category: "Management & Finance",
    description: "Gestione di grandi impianti di energie rinnovabili in Europa e America Latina."
  },
  {
    id: 3,
    title: "AI Research Scientist",
    company: "DeepLabs Paris",
    location: "Paris, France",
    type: "100% Remote",
    salaryUSD: 110000,
    visaSponsored: true,
    relocationPackage: false,
    visaBadge: "Passeport Talent FR",
    sourceAgency: "France Travail (Pôle Emploi)",
    externalUrl: "https://www.francetravail.fr",
    category: "IT & Engineering",
    description: "Ricerca e modellazione LLM per la sanità digitale con finanziamenti europei."
  },
  {
    id: 4,
    title: "Senior Medical Specialist - Oncology",
    company: "NHS Health Trust",
    location: "London, United Kingdom",
    type: "On-site",
    salaryUSD: 125000,
    visaSponsored: true,
    relocationPackage: true,
    visaBadge: "UK Health & Care Visa",
    sourceAgency: "GlobalHire Direct",
    externalUrl: null,
    category: "Healthcare",
    description: "Incarico dirigenziale clinico in uno dei principali poli ospedalieri di Londra."
  },
  {
    id: 5,
    title: "Automotive Robotics Engineer",
    company: "Stellantis Technology Centre",
    location: "Torino, Italy",
    type: "Hybrid",
    salaryUSD: 78000,
    visaSponsored: false,
    relocationPackage: true,
    visaBadge: "Permesso Lavoro Subordinato",
    sourceAgency: "Randstad Italy",
    externalUrl: "https://www.randstad.it",
    category: "IT & Engineering",
    description: "Progettazione di sistemi robotici avanzati per linee di montaggio e automazione."
  },
  {
    id: 6,
    title: "International Business Development Manager",
    company: "Emirates Trade Group",
    location: "Dubai, UAE",
    type: "On-site",
    salaryUSD: 105000,
    visaSponsored: true,
    relocationPackage: true,
    visaBadge: "UAE Residence & Work Visa",
    sourceAgency: "LinkedIn Jobs Global",
    externalUrl: "https://www.linkedin.com/jobs",
    category: "Sales & Marketing",
    description: "Sviluppo dei mercati emergenti in Medio Oriente e Nord Africa con pacchetto esentasse."
  }
];

const TALENTS = [
  {
    id: 101,
    name: "Dr. Carlos Mendez",
    role: "Senior Data Scientist & AI Lead",
    location: "Buenos Aires (Disponibile al trasferimento in UE)",
    experience: "8 anni",
    skills: ["Python", "PyTorch", "AWS", "Big Data"],
    visaStatus: "In possesso di Passaporto Spagnolo (Libera circolazione UE)",
    rating: "4.9"
  },
  {
    id: 102,
    name: "Elena Rostova",
    role: "Cloud DevOps Engineer",
    location: "Warsaw, Poland",
    experience: "6 anni",
    skills: ["Kubernetes", "Terraform", "CI/CD", "Azure"],
    visaStatus: "EU Blue Card Attiva - Richiede solo Trasferimento",
    rating: "5.0"
  },
  {
    id: 103,
    name: "Aarav Patel",
    role: "Mechanical Design Engineer",
    location: "Mumbai, India",
    experience: "5 anni",
    skills: ["SolidWorks", "Ansys", "CAD/CAM", "Robotics"],
    visaStatus: "Sponsorship Visto Richiesta (Pratiche pre-verificate)",
    rating: "4.8"
  }
];

export default function App() {
  const [lang, setLang] = useState('it');
  const [currency, setCurrency] = useState('EUR');
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [myApps, setMyApps] = useState([]);
  
  // Search & Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [visaOnly, setVisaOnly] = useState(false);
  const [minSalaryUSD, setMinSalaryUSD] = useState(0);
  const [sourceFilter, setSourceFilter] = useState('all');

  // Modals & UI States
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantResume, setApplicantResume] = useState('');

  const [newJob, setNewJob] = useState({
    title: '', company: '', location: '', type: '100% Remote', salaryUSD: 80000,
    visaSponsored: true, relocationPackage: false, category: 'IT & Engineering', description: ''
  });

  const t = TRANSLATIONS[lang] || TRANSLATIONS.it;
  const curr = CURRENCIES[currency];

  const formatSalary = (usdValue) => {
    const converted = Math.round(usdValue * curr.rate);
    return `${curr.symbol} ${converted.toLocaleString()}`;
  };

  const handleSyncFeeds = () => {
    setIsSyncing(true);
    setTimeout(() => {
      const newExternalJob = {
        id: Date.now(),
        title: "Cybersecurity Analyst",
        company: "Frankfurt Security Systems",
        location: "Frankfurt, Germany",
        type: "Hybrid",
        salaryUSD: 95000,
        visaSponsored: true,
        relocationPackage: true,
        visaBadge: "EU Blue Card",
        sourceAgency: "StepStone DE",
        externalUrl: "https://www.stepstone.de",
        category: "IT & Engineering",
        description: "Analisi di vulnerabilità e gestione della sicurezza informatica per infrastrutture bancarie europee."
      };
      setJobs(prev => [newExternalJob, ...prev]);
      setIsSyncing(false);
      showToast(lang === 'it' ? "Feed sincronizzati! Aggiunto nuovo annuncio da StepStone DE." : "Feeds synchronized!");
    }, 1200);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(j => {
      const matchSearch = j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          j.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          j.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLocation = !locationFilter || j.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchType = typeFilter === 'all' || j.type === typeFilter;
      const matchVisa = !visaOnly || j.visaSponsored;
      const matchSalary = j.salaryUSD >= minSalaryUSD;
      let matchSource = true;
      if (sourceFilter === 'direct') matchSource = j.sourceAgency === "GlobalHire Direct";
      if (sourceFilter === 'agencies') matchSource = j.sourceAgency !== "GlobalHire Direct";

      return matchSearch && matchLocation && matchType && matchVisa && matchSalary && matchSource;
    });
  }, [jobs, searchTerm, locationFilter, typeFilter, visaOnly, minSalaryUSD, sourceFilter]);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    
    setMyApps(prev => [...prev, {
      id: Date.now(),
      jobTitle: selectedJobForApply.title,
      company: selectedJobForApply.company,
      date: new Date().toLocaleDateString(),
      status: "In Revisione dal Recruiter"
    }]);

    setSelectedJobForApply(null);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantResume('');
    showToast(t.applicationSuccess);
  };

  const handlePostJobSubmit = (e) => {
    e.preventDefault();
    const created = {
      ...newJob,
      id: Date.now(),
      sourceAgency: "GlobalHire Direct",
      externalUrl: null,
      visaBadge: newJob.visaSponsored ? "Visa Sponsorship Provided" : "Standard Permit"
    };
    setJobs(prev => [created, ...prev]);
    setShowPostModal(false);
    showToast(t.jobPostedSuccess);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow-xl z-50 flex items-center gap-2 animate-bounce">
          <CheckCircle className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BAR */}
      <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('jobs')}>
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Globe className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">{t.title}</h1>
              <p className="text-xs text-slate-400">{t.subtitle}</p>
            </div>
          </div>

          {/* CONTROLS: LANGUAGE & CURRENCY */}
          <div className="flex items-center gap-3">
            {/* Language Picker */}
            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <Globe className="w-4 h-4 text-slate-400 ml-2 mr-1" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer pr-2"
              >
                <option value="it" className="bg-slate-900">🇮🇹 IT - Italiano</option>
                <option value="en" className="bg-slate-900">🇬🇧 EN - English</option>
                <option value="de" className="bg-slate-900">🇩🇪 DE - Deutsch</option>
                <option value="es" className="bg-slate-900">🇪🇸 ES - Español</option>
                <option value="fr" className="bg-slate-900">🇫🇷 FR - Français</option>
                <option value="pt" className="bg-slate-900">🇵🇹 PT - Português</option>
              </select>
            </div>

            {/* Currency Picker */}
            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <DollarSign className="w-4 h-4 text-slate-400 ml-2" />
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer pr-2"
              >
                {Object.keys(CURRENCIES).map(c => (
                  <option key={c} value={c} className="bg-slate-900">{c} ({CURRENCIES[c].symbol})</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="border-t border-slate-800 bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 flex gap-6 text-sm font-medium">
            <button 
              onClick={() => setActiveTab('jobs')}
              className={`py-3 border-b-2 flex items-center gap-2 transition ${activeTab === 'jobs' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              <Search className="w-4 h-4" /> {t.navFindJobs}
            </button>
            <button 
              onClick={() => setActiveTab('talents')}
              className={`py-3 border-b-2 flex items-center gap-2 transition ${activeTab === 'talents' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              <Users className="w-4 h-4" /> {t.navTalentPool}
            </button>
            <button 
              onClick={() => setActiveTab('myapps')}
              className={`py-3 border-b-2 flex items-center gap-2 transition ${activeTab === 'myapps' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              <UserCheck className="w-4 h-4" /> {t.navMyApplications} ({myApps.length})
            </button>
            <button 
              onClick={() => setShowPostModal(true)}
              className="py-3 ml-auto text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
            >
              <PlusCircle className="w-4 h-4" /> {t.navPostJob}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      {activeTab === 'jobs' && (
        <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white py-12 px-4 shadow-inner">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
              {t.heroBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {t.heroTitle}
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>

            <div className="pt-2 flex justify-center">
              <button 
                onClick={handleSyncFeeds}
                disabled={isSyncing}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 shadow-lg transition disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                {isSyncing ? t.syncing : t.syncBtn}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* TAB 1: FIND JOBS */}
        {activeTab === 'jobs' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* FILTERS PANEL */}
            <div className="lg:col-span-1 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-6 h-fit">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 font-semibold text-slate-800">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3>Filtri di Ricerca</h3>
              </div>

              {/* Keyword Search */}
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Cerca</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Location Search */}
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Luogo</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input 
                    type="text"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    placeholder={t.locationPlaceholder}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Work Type */}
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Modalità</label>
                <select 
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full p-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="all">{t.allTypes}</option>
                  <option value="100% Remote">{t.remote}</option>
                  <option value="Hybrid">{t.hybrid}</option>
                  <option value="On-site">{t.onsite}</option>
                </select>
              </div>

              {/* Agency Source */}
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Origine Annuncio</label>
                <select 
                  value={sourceFilter}
                  onChange={(e) => setSourceFilter(e.target.value)}
                  className="w-full p-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="all">{t.sourceFilter}</option>
                  <option value="direct">{t.sourceDirect}</option>
                  <option value="agencies">{t.sourceAgencies}</option>
                </select>
              </div>

              {/* Visa Toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={visaOnly}
                    onChange={(e) => setVisaOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span className="text-xs font-semibold text-slate-700">{t.visaRequired}</span>
                </label>
              </div>

              {/* Min Salary Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{t.minSalary}</label>
                  <span className="text-xs font-bold text-blue-600">{formatSalary(minSalaryUSD)}</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="150000"
                  step="10000"
                  value={minSalaryUSD}
                  onChange={(e) => setMinSalaryUSD(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            {/* JOBS LISTING */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-sm font-semibold text-slate-600">
                  {t.jobsFound}: <strong className="text-slate-900">{filteredJobs.length}</strong>
                </span>
                <span className="text-xs text-slate-400">Valuta: {currency} ({curr.symbol})</span>
              </div>

              {filteredJobs.length === 0 ? (
                <div className="bg-white p-12 rounded-xl border border-slate-200 text-center text-slate-500">
                  <p>Nessun annuncio trovato con i filtri selezionati.</p>
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition relative space-y-4">
                    
                    {/* Header line */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                          {job.sourceAgency !== "GlobalHire Direct" && (
                            <span className="bg-purple-50 text-purple-700 text-xs px-2.5 py-0.5 rounded-full border border-purple-200 font-medium">
                              {t.importedFrom} {job.sourceAgency}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                          <span className="flex items-center gap-1 font-medium text-slate-700"><Building className="w-4 h-4 text-slate-400" /> {job.company}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-extrabold text-emerald-600">
                          {formatSalary(job.salaryUSD)} <span className="text-xs font-normal text-slate-400">/anno</span>
                        </div>
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md mt-1">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 line-clamp-2">
                      {job.description}
                    </p>

                    {/* Visa & Perks Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                      {job.visaSponsored && (
                        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-md border border-blue-200 flex items-center gap-1 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> {t.visaSponsored} ({job.visaBadge})
                        </span>
                      )}
                      {job.relocationPackage && (
                        <span className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-md border border-amber-200 flex items-center gap-1 font-medium">
                          ✈️ {t.relocationPackage}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end pt-2">
                      {job.externalUrl ? (
                        <a 
                          href={job.externalUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition"
                        >
                          {t.externalApply} <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      ) : (
                        <button 
                          onClick={() => setSelectedJobForApply(job)}
                          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 shadow-sm transition"
                        >
                          {t.applyNow} <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>
        )}

        {/* TAB 2: TALENT POOL */}
        {activeTab === 'talents' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">{t.talentTitle}</h2>
              <p className="text-sm text-slate-500 mt-1">{t.talentSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TALENTS.map(candidate => (
                <div key={candidate.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-slate-900">{candidate.name}</h3>
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded">★ {candidate.rating}</span>
                    </div>
                    <p className="text-sm font-semibold text-blue-600">{candidate.role}</p>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {candidate.location}
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="text-xs text-slate-600">
                        <strong>{t.experience}:</strong> {candidate.experience}
                      </div>
                      <div className="text-xs text-slate-600">
                        <strong>{t.visaStatus}:</strong> {candidate.visaStatus}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {candidate.skills.map((sk, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => showToast(`Richiesta di contatto inviata a ${candidate.name}`)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition"
                  >
                    {t.contactCandidate}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: MY APPLICATIONS */}
        {activeTab === 'myapps' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{t.myAppsTitle}</h2>

            {myApps.length === 0 ? (
              <p className="text-slate-500 py-8 text-center">{t.noAppsYet}</p>
            ) : (
              <div className="divide-y divide-slate-100">
                {myApps.map(app => (
                  <div key={app.id} className="py-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-800">{app.jobTitle}</h4>
                      <p className="text-xs text-slate-500">{app.company} • Inviata il {app.date}</p>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      {/* MODAL: APPLY TO JOB */}
      {selectedJobForApply && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 space-y-4 relative animate-in fade-in zoom-in duration-150">
            <h3 className="text-xl font-bold text-slate-900">Candidatura: {selectedJobForApply.title}</h3>
            <p className="text-xs text-slate-500">{selectedJobForApply.company} — {selectedJobForApply.location}</p>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Nome e Cognome</label>
                <input 
                  type="text" 
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Email di Contatto</label>
                <input 
                  type="email" 
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="mario.rossi@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Link CV / Profilo LinkedIn</label>
                <input 
                  type="url" 
                  required
                  value={applicantResume}
                  onChange={(e) => setApplicantResume(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="https://linkedin.com/in/mariorossi"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button 
                  type="button" 
                  onClick={() => setSelectedJobForApply(null)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  {t.close}
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold flex items-center gap-1 shadow-md"
                >
                  <Send className="w-4 h-4" /> Invia Candidatura
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: POST A NEW JOB */}
      {showPostModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-4 relative max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-slate-900">{t.postJobTitle}</h3>

            <form onSubmit={handlePostJobSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">{t.jobTitleLabel}</label>
                <input 
                  type="text" 
                  required
                  value={newJob.title}
                  onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">{t.companyLabel}</label>
                  <input 
                    type="text" 
                    required
                    value={newJob.company}
                    onChange={(e) => setNewJob({...newJob, company: e.target.value})}
                    className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">{t.locationLabel}</label>
                  <input 
                    type="text" 
                    required
                    value={newJob.location}
                    onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                    className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">{t.workTypeLabel}</label>
                  <select 
                    value={newJob.type}
                    onChange={(e) => setNewJob({...newJob, type: e.target.value})}
                    className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="100% Remote">{t.remote}</option>
                    <option value="Hybrid">{t.hybrid}</option>
                    <option value="On-site">{t.onsite}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">{t.salaryLabel}</label>
                  <input 
                    type="number" 
                    required
                    value={newJob.salaryUSD}
                    onChange={(e) => setNewJob({...newJob, salaryUSD: Number(e.target.value)})}
                    className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-6 py-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={newJob.visaSponsored}
                    onChange={(e) => setNewJob({...newJob, visaSponsored: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  {t.visaOfferLabel}
                </label>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={newJob.relocationPackage}
                    onChange={(e) => setNewJob({...newJob, relocationPackage: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  {t.relocationOfferLabel}
                </label>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">{t.descriptionLabel}</label>
                <textarea 
                  rows="3"
                  required
                  value={newJob.description}
                  onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowPostModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  {t.close}
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold shadow-md"
                >
                  {t.submitJob}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
