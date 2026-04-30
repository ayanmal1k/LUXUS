export const locales = ['en', 'it', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

type Messages = {
  hero: {
    explorationTag: string;
    exploreHeritage: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    cta: string;
    imageAlt: string;
    stats: {
      experience: string;
      projects: string;
      materials: string;
    };
  };
  navbar: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    portfolioContact: string;
    contactUs: string;
  };
  languageSelector: {
    label: string;
    ariaLabel: string;
    en: string;
    it: string;
    es: string;
  };
  architecturalVision: {
    imageAlt: string;
    infoCard: {
      location: string;
      title: string;
      description: string;
    };
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    stats: {
      projectsDelivered: string;
      countriesReached: string;
      italianCertified: string;
    };
    cta: string;
  };
  servicesSection: {
    intro: {
      eyebrow: string;
      headingLine1: string;
      headingLine2: string;
      description: string;
    };
    cards: {
      realEstate: {
        title: string;
        description: string;
        action: string;
        focus: {
          marketIntelligence: string;
          acquisitionStructuring: string;
          masterPlanning: string;
        };
        metrics: {
          pipelineValue: string;
          feasibilityConfidence: string;
          approvalVelocity: string;
        };
      };
      turnkey: {
        title: string;
        description: string;
        action: string;
        focus: {
          integratedDelivery: string;
          detailSupervision: string;
          onsiteQA: string;
        };
        metrics: {
          onTimeCompletion: string;
          defectRate: string;
          craftCompliance: string;
        };
      };
      renovations: {
        title: string;
        description: string;
        action: string;
        focus: {
          heritagePreservation: string;
          luxurySystems: string;
          materialRestoration: string;
        };
        metrics: {
          assetValueUplift: string;
          energyOptimization: string;
          ownerSatisfaction: string;
        };
      };
      sustainability: {
        title: string;
        description: string;
        action: string;
        focus: {
          netZeroStrategy: string;
          esgAdvisory: string;
          performanceAudits: string;
        };
        metrics: {
          carbonReduction: string;
          waterEfficiency: string;
          certificationSuccess: string;
        };
      };
    };
    modal: {
      infographics: string;
      deliveryNoteTitle: string;
      deliveryNoteBody: string;
    };
  };
  premiumMaterialsSection: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    cards: {
      carrara: {
        name: string;
        origin: string;
        description: string;
        tag: string;
      };
      tuscanTravertine: {
        name: string;
        origin: string;
        description: string;
        tag: string;
      };
      botticino: {
        name: string;
        origin: string;
        description: string;
        tag: string;
      };
    };
    footer: {
      craftsmanship: string;
      iconAlt: string;
      collectionLabel: string;
    };
    catalogButton: string;
  };
  testimonialsSection: {
    heading: string;
    items: {
      first: {
        quote: string;
        name: string;
        role: string;
      };
      second: {
        quote: string;
        name: string;
        role: string;
      };
      third: {
        quote: string;
        name: string;
        role: string;
      };
    };
  };
};

export const translations: Record<Locale, Messages> = {
  en: {
    hero: {
      explorationTag: 'DISCOVER A NEW VISION OF LIVING',
      exploreHeritage: 'Explore Heritage',
      headingLine1: 'Italian Luxury',
      headingLine2: 'in Americas',
      description:
        'From Italian Excellence In Residential Construction And Yacht Interiors Emerges A New Dimension Of Luxury Living.',
      cta: 'Experience Excellence',
      imageAlt: 'Luxury buildings with water reflection',
      stats: {
        experience: 'Years of Experience',
        projects: 'Luxury Projects Delivered',
        materials: 'Italian Materials & Sourcing',
      },
    },
    navbar: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      portfolioContact: 'Portfolio Inquiry',
      contactUs: 'Contact Us',
    },
    languageSelector: {
      label: 'Language',
      ariaLabel: 'Select language',
      en: 'English',
      it: 'Italian',
      es: 'Spanish',
    },
    architecturalVision: {
      imageAlt: ' Villa Aurea',
      infoCard: {
        location: 'Marina di Pisa – Italy',
        title: ' Villa Aurea',
        description:
          'A Fusion of Italian Marble and Mediterranean Light That Redefines Coastal Living Through Unprecedented Artisanal Finishes.',
      },
      eyebrow: 'The Vision',
      headingLine1: 'From Yachting',
      headingLine2: 'to Living',
      description:
        "Our approach originates in Tuscany, from the encounter between two pillars of Made in Italy excellence: high-end yachting and construction. With Luxus, we bring this design and construction heritage to the Americas, applying to residential architecture the standards, materials, and expertise developed in the world of superyachts.Materials designed for the marine environment ensure resistance even in the most extreme coastal conditions; construction techniques derived from nautical engineering guarantee durability and precision; while the spatial design, inspired by the world's finest yachts, blends functionality and elegance.The result is contemporary Italian luxury architecture that creates residences capable of harmoniously integrating with the power and beauty of the surrounding nature.",
      stats: {
        projectsDelivered: 'Projects Delivered',
        countriesReached: 'Countries Reached',
        italianCertified: 'Italian Certified',
      },
      cta: 'View Portfolio',
    },
    servicesSection: {
      intro: {
        eyebrow: 'Our Services',
        headingLine1: 'Italian Luxury,',
        headingLine2: 'Custom-made for the Americas.',
        description:
          "Luxus Interprets Italian Luxury Through an Exclusive, Bespoke Approach. Every Project Stems From an Integrated Vision Combining Aesthetics, Premium Materials, and Absolute Attention to Detail, Transforming Each Residence Into a Unique, Timeless Experience.",
      },
      cards: {
        realEstate: {
          title: 'Real Estate Development',
          description:
            'Strategic land acquisition and visionary planning. We identify the pulse of high-growth markets to build lasting value.',
          action: 'Discover',
          focus: {
            marketIntelligence: 'Market Intelligence',
            acquisitionStructuring: 'Acquisition Structuring',
            masterPlanning: 'Master Planning',
          },
          metrics: {
            pipelineValue: 'Pipeline Value',
            feasibilityConfidence: 'Feasibility Confidence',
            approvalVelocity: 'Approval Velocity',
          },
        },
        turnkey: {
          title: 'Turnkey Construction',
          description:
            'A seamless transition from blueprint to reality. Our master builders handle every structural nuance with surgical precision.',
          action: 'Execute',
          focus: {
            integratedDelivery: 'Integrated Delivery',
            detailSupervision: 'Detail Supervision',
            onsiteQA: 'On-Site QA',
          },
          metrics: {
            onTimeCompletion: 'On-Time Completion',
            defectRate: 'Defect Rate',
            craftCompliance: 'Craft Compliance',
          },
        },
        renovations: {
          title: 'Luxury Renovations',
          description:
            'Breathe new life into heritage estates. We blend historic preservation with cutting-edge smart home technology.',
          action: 'Transform',
          focus: {
            heritagePreservation: 'Heritage Preservation',
            luxurySystems: 'Luxury Systems',
            materialRestoration: 'Material Restoration',
          },
          metrics: {
            assetValueUplift: 'Asset Value Uplift',
            energyOptimization: 'Energy Optimization',
            ownerSatisfaction: 'Owner Satisfaction',
          },
        },
        sustainability: {
          title: 'Sustainable Consulting',
          description:
            'The future of luxury is ethical. LEED-certified methodologies paired with high-efficiency energy systems.',
          action: 'Evolve',
          focus: {
            netZeroStrategy: 'Net-Zero Strategy',
            esgAdvisory: 'ESG Advisory',
            performanceAudits: 'Performance Audits',
          },
          metrics: {
            carbonReduction: 'Carbon Reduction',
            waterEfficiency: 'Water Efficiency',
            certificationSuccess: 'Certification Success',
          },
        },
      },
      modal: {
        infographics: 'Infographics',
        deliveryNoteTitle: 'Delivery Note',
        deliveryNoteBody:
          'Every engagement is led by a principal team and tracked through milestone dashboards for complete transparency from concept to handover.',
      },
    },
    premiumMaterialsSection: {
      eyebrow: 'Curated Selection',
      headingLine1: 'Our Premium',
      headingLine2: 'Materials',
      description:
        'We Offer the Finest Italian Materials, Each With a Unique Geological Story and Unmatched Artisanal Quality, Selected to Elevate Every Space With Timeless Elegance.',      catalogButton: 'Request our complete Materials Catalog',      cards: {
        carrara: {
          name: 'Carrara Marble',
          origin: 'Carrara, Tuscany - Italy',
          description:
            'Experience the timeless elegance of Carrara marble, renowned for its fine grain and bright veining, perfect for creating statement floors, walls, and accents.',
          tag: 'Signature Collection',
        },
        tuscanTravertine: {
          name: 'Tuscan Travertine',
          origin: 'Tivoli, Lazio - Italy',
          description:
            'Immerse yourself in the warm textures of handcrafted Tuscan travertine, a geological masterpiece that tells a story of thousands of years.',
          tag: 'Heritage Series',
        },
        botticino: {
          name: 'Botticino Marble',
          origin: 'Botticino, Lombardy - Italy',
          description:
            'Discover the subtle luxury of Botticino marble, with its creamy tones and understated elegance, ideal for tropical settings.',
          tag: 'Exclusive Reserve',
        },
      },
      footer: {
        craftsmanship: 'Italian Craftsmanship - Since 1987',
        iconAlt: 'Luxus icon',
        collectionLabel: 'Luxus Collection',
      },
    },
    testimonialsSection: {
      heading: 'Luxus Experiences',
      items: {
        first: {
          quote:
            'Penthouse Owner, Ocean Reef Punta Paitilla',
          name: 'Alessandra Rossi',
          role: '',
        },
        second: {
          quote:
            'Working with Luxus is a cinematic experience. Their vision of urban development redefines what you expect from luxury.',
          name: 'Luca Piva',
          role: 'CEO Four Walls Realty Corp',
        },
        third: {
          quote:
            'In Luxus I found a partner capable of transforming Italian excellence into concrete architecture, with a level of detail and control that makes the difference in the most ambitious projects.',
          name: 'Andrea Melillo',
          role: 'CEO Melillo Group',
        },
      },
    },
  },
  it: {
    hero: {
      explorationTag: 'Diventa parte di una nuova dimensione',
      exploreHeritage: 'Esplora l eredita',
      headingLine1: 'Lusso Italiano',
      headingLine2: 'in Americas',
      description:
        "Dall'eccellenza italiana nell'edilizia residenziale e negli interni di yacht nasce una nuova dimensione del vivere di lusso.",
      cta: 'Scopri l eccellenza',
      imageAlt: "Edifici di lusso con riflesso sull'acqua",
      stats: {
        experience: 'Anni di esperienza',
        projects: 'Progetti di lusso consegnati',
        materials: 'Materiali e approvvigionamento italiani',
      },
    },
    navbar: {
      home: 'Home',
      about: 'Chi Siamo',
      services: 'Servizi',
      portfolio: 'Portfolio',
      portfolioContact: 'Richiesta Portfolio',
      contactUs: 'Contattaci',
    },
    languageSelector: {
      label: 'Lingua',
      ariaLabel: 'Seleziona lingua',
      en: 'Inglese',
      it: 'Italiano',
      es: 'Spagnolo',
    },
    architecturalVision: {
      imageAlt: 'Piscina Tropical Horizon',
      infoCard: {
        location: 'Ocean Reef Islands, Panama',
        title: 'The Alchemist Residences',
        description:
          'Una fusione di marmo italiano e luce panamense che ridefinisce la vita costiera con finiture artigianali senza precedenti.',
      },
      eyebrow: 'Visione Architettonica',
      headingLine1: 'Dallo Yachting',
      headingLine2: 'all Abitare',
      description:
        "Il nostro approccio adatta l'ingegneria dei superyacht all'architettura residenziale. Materiali di grado marino resistono agli estremi costieri, soluzioni strutturali collaudate su imbarcazioni di 200 piedi garantiscono resilienza e il flusso spaziale riflette il miglior design di bordo al mondo. Ogni residenza si estende armoniosamente nella grandezza della natura.",
      stats: {
        projectsDelivered: 'Progetti Consegnati',
        countriesReached: 'Paesi Raggiunti',
        italianCertified: 'Certificazione Italiana',
      },
      cta: 'Vedi Portfolio',
    },
    servicesSection: {
      intro: {
        eyebrow: 'I Nostri Servizi',
        headingLine1: 'Arte Ingegneristica',
        headingLine2: 'su Larga Scala.',
        description:
          "Luxus trasforma terreni grezzi in residenze scultoree attraverso ingegneria ispirata agli yacht, maestria spaziale basata sulla sezione aurea e rari materiali italiani. I nostri principal, con oltre 25 anni di esperienza nel lusso toscano, creano gallerie permanenti sul lungomare che ridefiniscono gli standard nelle Americhe.",
      },
      cards: {
        realEstate: {
          title: 'Sviluppo Immobiliare',
          description:
            'Acquisizione strategica dei terreni e pianificazione visionaria. Individuiamo il ritmo dei mercati ad alta crescita per creare valore duraturo.',
          action: 'Scopri',
          focus: {
            marketIntelligence: 'Intelligence di Mercato',
            acquisitionStructuring: 'Strutturazione Acquisizioni',
            masterPlanning: 'Master Planning',
          },
          metrics: {
            pipelineValue: 'Valore Pipeline',
            feasibilityConfidence: 'Affidabilita Fattibilita',
            approvalVelocity: 'Velocita Approvazione',
          },
        },
        turnkey: {
          title: 'Costruzione Chiavi in Mano',
          description:
            'Una transizione fluida dal progetto alla realta. I nostri maestri costruttori gestiscono ogni dettaglio strutturale con precisione chirurgica.',
          action: 'Realizza',
          focus: {
            integratedDelivery: 'Consegna Integrata',
            detailSupervision: 'Supervisione Dettagli',
            onsiteQA: 'QA in Cantiere',
          },
          metrics: {
            onTimeCompletion: 'Consegna Puntuale',
            defectRate: 'Tasso Difetti',
            craftCompliance: 'Conformita Artigianale',
          },
        },
        renovations: {
          title: 'Ristrutturazioni di Lusso',
          description:
            'Ridiamo vita a dimore storiche. Uniamo conservazione del patrimonio e tecnologia domotica d avanguardia.',
          action: 'Trasforma',
          focus: {
            heritagePreservation: 'Conservazione Storica',
            luxurySystems: 'Sistemi Luxury',
            materialRestoration: 'Restauro Materiali',
          },
          metrics: {
            assetValueUplift: 'Incremento Valore Asset',
            energyOptimization: 'Ottimizzazione Energetica',
            ownerSatisfaction: 'Soddisfazione Proprietario',
          },
        },
        sustainability: {
          title: 'Consulenza Sostenibile',
          description:
            'Il futuro del lusso e etico. Metodologie certificate LEED abbinate a sistemi energetici ad alta efficienza.',
          action: 'Evolvi',
          focus: {
            netZeroStrategy: 'Strategia Net-Zero',
            esgAdvisory: 'Consulenza ESG',
            performanceAudits: 'Audit Prestazionali',
          },
          metrics: {
            carbonReduction: 'Riduzione Carbonio',
            waterEfficiency: 'Efficienza Idrica',
            certificationSuccess: 'Successo Certificazioni',
          },
        },
      },
      modal: {
        infographics: 'Infografiche',
        deliveryNoteTitle: 'Nota di Consegna',
        deliveryNoteBody:
          'Ogni incarico e guidato da un team principal e monitorato tramite dashboard di milestone per garantire piena trasparenza dal concept alla consegna.',
      },
    },
    premiumMaterialsSection: {
      eyebrow: 'Selezione Curata',
      headingLine1: 'I Nostri Materiali',
      headingLine2: 'Premium',
      description:
        'Ti proponiamo i migliori materiali italiani, ciascuno con una storia geologica unica e una qualita artigianale ineguagliabile, selezionati per elevare ogni spazio con eleganza senza tempo.',
      cards: {
        carrara: {
          name: 'Marmo di Carrara',
          origin: 'Carrara, Toscana - Italia',
          description:
            'Scopri l eleganza senza tempo del marmo di Carrara, celebre per grana fine e venature luminose, ideale per pavimenti, pareti e dettagli di carattere.',
          tag: 'Collezione Signature',
        },
        tuscanTravertine: {
          name: 'Travertino Toscano',
          origin: 'Tivoli, Lazio - Italia',
          description:
            'Immergiti nelle texture calde del travertino toscano lavorato a mano, un capolavoro geologico che racconta migliaia di anni di storia.',
          tag: 'Serie Heritage',
        },
        botticino: {
          name: 'Marmo Botticino',
          origin: 'Botticino, Lombardia - Italia',
          description:
            'Scopri il lusso discreto del marmo Botticino, con tonalita cremose ed eleganza sobria, ideale per ambienti tropicali.',
          tag: 'Riserva Esclusiva',
        },
      },
      footer: {
        craftsmanship: 'Artigianalita Italiana - Dal 1987',
        iconAlt: 'Icona Luxus',
        collectionLabel: 'Collezione Luxus',
      },
      catalogButton: 'Richiedi il nostro catalogo completo dei materiali',
    },
    testimonialsSection: {
      heading: 'Luxus Experiences',
      items: {
        first: {
          quote:
            'Proprietaria Penthouse, Ocean Reef Punta Paitilla',
          name: 'Alessandra Rossi',
          role: '',
        },
        second: {
          quote:
            'Lavorare con Luxus è un esperienza cinematografica. La loro visione dello sviluppo urbano ha ridefinito ciò che mi aspetto dal lusso.',
          name: 'Luca Piva',
          role: 'CEO Four Walls Realty Corp',
        },
        third: {
          quote:
            'In Luxus ho trovato un partner capace di trasformare l eccellenza italiana in architettura concreta, con un livello di dettaglio e controllo che fa la differenza nei progetti più ambiziosi.',
          name: 'Andrea Melillo',
          role: 'CEO Melillo Group',
        },
      },
    },
  },
  es: {
    hero: {
      explorationTag: 'Conviértete en parte de una nueva dimensión',
      exploreHeritage: 'Explora la herencia',
      headingLine1: 'Lujo Italiano',
      headingLine2: 'en Americas',
      description:
        'Desde la excelencia italiana en construcción residencial e interiores de yates surge una nueva dimensión de vida de lujo.',
      cta: 'Descubrir la excelencia',
      imageAlt: 'Edificios de lujo con reflejo en el agua',
      stats: {
        experience: 'Anos de experiencia',
        projects: 'Proyectos de lujo entregados',
        materials: 'Materiales y abastecimiento italianos',
      },
    },
    navbar: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      portfolio: 'Portafolio',
      portfolioContact: 'Consulta de Portafolio',
      contactUs: 'Contáctanos',
    },
    languageSelector: {
      label: 'Idioma',
      ariaLabel: 'Seleccionar idioma',
      en: 'Inglés',
      it: 'Italiano',
      es: 'Español',
    },
    architecturalVision: {
      imageAlt: 'Piscina Tropical Horizon',
      infoCard: {
        location: 'Ocean Reef Islands, Panama',
        title: 'The Alchemist Residences',
        description:
          'Una fusión de mármol italiano y luz panameña que redefine la vida costera con acabados artesanales sin precedentes.',
      },
      eyebrow: 'Visión Arquitectónica',
      headingLine1: 'Del Yachting',
      headingLine2: 'al Habitar',
      description:
        'Nuestro enfoque adapta la ingeniería de superyates a la arquitectura residencial. Materiales de grado marino resisten extremos costeros, soluciones estructurales probadas en embarcaciones de 200 pies aseguran resiliencia y el flujo espacial refleja el mejor diseño a bordo del mundo. Cada residencia se integra de forma natural con la grandeza del entorno.',
      stats: {
        projectsDelivered: 'Proyectos Entregados',
        countriesReached: 'Países Alcanzados',
        italianCertified: 'Certificación Italiana',
      },
      cta: 'Ver Portafolio',
    },
    servicesSection: {
      intro: {
        eyebrow: 'Nuestros Servicios',
        headingLine1: 'Ingenieria Artistica',
        headingLine2: 'a Gran Escala.',
        description:
          'Luxus transforma terrenos en bruto en residencias escultoricas mediante ingenieria inspirada en yates, dominio espacial de proporcion aurea y materiales italianos exclusivos. Nuestros directores, con mas de 25 anos de experiencia en lujo toscano, crean galerias permanentes frente al mar que redefinen los estandares en las Americas.',
      },
      cards: {
        realEstate: {
          title: 'Desarrollo Inmobiliario',
          description:
            'Adquisicion estrategica de terrenos y planificacion visionaria. Identificamos el pulso de mercados de alto crecimiento para construir valor duradero.',
          action: 'Descubrir',
          focus: {
            marketIntelligence: 'Inteligencia de Mercado',
            acquisitionStructuring: 'Estructuracion de Adquisicion',
            masterPlanning: 'Planificacion Maestra',
          },
          metrics: {
            pipelineValue: 'Valor del Portafolio',
            feasibilityConfidence: 'Confianza de Viabilidad',
            approvalVelocity: 'Velocidad de Aprobacion',
          },
        },
        turnkey: {
          title: 'Construccion Llave en Mano',
          description:
            'Una transicion fluida del plano a la realidad. Nuestros maestros constructores gestionan cada detalle estructural con precision quirurgica.',
          action: 'Ejecutar',
          focus: {
            integratedDelivery: 'Entrega Integrada',
            detailSupervision: 'Supervision de Detalles',
            onsiteQA: 'QA en Obra',
          },
          metrics: {
            onTimeCompletion: 'Entrega Puntual',
            defectRate: 'Tasa de Defectos',
            craftCompliance: 'Cumplimiento Artesanal',
          },
        },
        renovations: {
          title: 'Renovaciones de Lujo',
          description:
            'Damos nueva vida a propiedades patrimoniales. Combinamos preservacion historica con tecnologia domotica de ultima generacion.',
          action: 'Transformar',
          focus: {
            heritagePreservation: 'Preservacion Patrimonial',
            luxurySystems: 'Sistemas de Lujo',
            materialRestoration: 'Restauracion de Materiales',
          },
          metrics: {
            assetValueUplift: 'Aumento del Valor del Activo',
            energyOptimization: 'Optimizacion Energetica',
            ownerSatisfaction: 'Satisfaccion del Propietario',
          },
        },
        sustainability: {
          title: 'Consultoria Sostenible',
          description:
            'El futuro del lujo es etico. Metodologias certificadas LEED combinadas con sistemas energeticos de alta eficiencia.',
          action: 'Evolucionar',
          focus: {
            netZeroStrategy: 'Estrategia Net-Zero',
            esgAdvisory: 'Asesoria ESG',
            performanceAudits: 'Auditorias de Rendimiento',
          },
          metrics: {
            carbonReduction: 'Reduccion de Carbono',
            waterEfficiency: 'Eficiencia Hidrica',
            certificationSuccess: 'Exito en Certificacion',
          },
        },
      },
      modal: {
        infographics: 'Infograficos',
        deliveryNoteTitle: 'Nota de Entrega',
        deliveryNoteBody:
          'Cada proyecto es liderado por un equipo principal y monitoreado mediante paneles de hitos para total transparencia desde el concepto hasta la entrega.',
      },
    },
    premiumMaterialsSection: {
      eyebrow: 'Seleccion Curada',
      headingLine1: 'Nuestros Materiales',
      headingLine2: 'Premium',
      description:
        'Te presentamos los mejores materiales italianos, cada uno con una historia geologica unica y calidad artesanal incomparable, seleccionados para elevar cada espacio con elegancia atemporal.',
      cards: {
        carrara: {
          name: 'Marmol de Carrara',
          origin: 'Carrara, Toscana - Italia',
          description:
            'Experimenta la elegancia atemporal del marmol de Carrara, reconocido por su grano fino y vetas luminosas, perfecto para pisos, muros y acentos de impacto.',
          tag: 'Coleccion Signature',
        },
        tuscanTravertine: {
          name: 'Travertino Toscano',
          origin: 'Tivoli, Lacio - Italia',
          description:
            'Sumergite en las texturas calidas del travertino toscano trabajado a mano, una obra geologica que cuenta miles de anos de historia.',
          tag: 'Serie Heritage',
        },
        botticino: {
          name: 'Marmol Botticino',
          origin: 'Botticino, Lombardia - Italia',
          description:
            'Descubre el lujo sutil del marmol Botticino, con tonos cremosos y elegancia discreta, ideal para entornos tropicales.',
          tag: 'Reserva Exclusiva',
        },
      },
      footer: {
        craftsmanship: 'Artesania Italiana - Desde 1987',
        iconAlt: 'Icono Luxus',
        collectionLabel: 'Coleccion Luxus',
      },
      catalogButton: 'Solicita nuestro catalogo completo de materiales',
    },
    testimonialsSection: {
      heading: 'El Estilo de Vida Luxus',
      items: {
        first: {
          quote:
            'El nivel de detalle en la piedra no tiene comparacion en Centroamerica. Realmente se siente como un pedazo del Lago de Como en Panama.',
          name: 'Alessandra Rossi',
          role: 'Propietaria de Penthouse, Ocean Reef',
        },
        second: {
          quote:
            'Trabajar con Luxus fue una experiencia cinematografica. Su vision del desarrollo urbano redefinio lo que esperaba del lujo.',
          name: 'Julian Varela',
          role: 'CEO, Pan-Global Dev',
        },
        third: {
          quote:
            'Desde los primeros planos hasta el toque final de la manija, la artesania italiana se percibe en cada rincon.',
          name: 'Elena Castillo',
          role: 'Inversionista Privada',
        },
      },
    },
  },
};
