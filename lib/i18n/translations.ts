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
  footer: {
    companyName: string;
    address: string;
    email: string;
    socialTitle: string;
    copyright: string;
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
  aboutPage?: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
    principles: {
      eyebrow: string;
      title: string;
      items: {
        sustainability: { title: string; description: string };
        craftsmanship: { title: string; description: string };
        engineering: { title: string; description: string };
      };
    };
    leadership: {
      eyebrow: string;
      heading: string;
      roles: { chiefEngineer: string; headIntl: string; headConstruction: string; headInteriors: string };
    };
    cta: { heading: string; viewCollection: string; scheduleTour: string };
  };
  portfolioPage?: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    categories: { All: string; Residential: string; Commercial: string; Marine: string };
    exploreProjects: string;
    contactUs: string;
    gallery: {
      eyebrow: string;
      heading: string;
      filterHint: string;
    };
    modal: {
      projectOverview: string;
      location: string;
      size: string;
      materials: string;
      completion: string;
      challenge: string;
      solution: string;
      result: string;
      imageCarousel: string;
      view360: string;
      openLightbox: string;
      tapToZoom: string;
      viewProject: string;
      outcomeStat: string;
    };
    caseStudies: { format: string; focus: string; curated: string };
    contactCTA: { eyebrow: string; heading: string; description: string; button: string };
    projects: Record<string, {
      title: string;
      subtitle: string;
      location: string;
      size: string;
      year: string;
      materials: string;
      overview: string;
      challenge: string;
      solution: string;
      result: string;
      stats: Array<{ label: string; value: string }>;
      features: string[];
    }>;
    caseStudyItems: Record<string, { title: string; subtitle: string; challenge: string; solution: string; result: string; image: string; stat: string }>;
  };
  portfolioContactPage: {
    eyebrow: string;
    title: string;
    description: string;
    requestHeading: string;
    requestHighlight: string;
    requestDescription: string;
    benefits: string[];
    form: {
      fullName: string;
      email: string;
      phone: string;
      company: string;
      projectType: string;
      projectTypeOptions: { residential: string; commercial: string; marine: string; mixed: string; other: string };
      message: string;
      placeholders: { name: string; email: string; phone: string; company: string; message: string; projectType: string };
      submit: { sending: string; default: string };
      successMessage: string;
    };
  };
  admin: {
    title: string;
    subtitle: string;
    loginTitle: string;
    loginSubtitle: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    loginButton: string;
    logoutButton: string;
    stats: {
      contacts: string;
      catalog: string;
      portfolio: string;
      total: string;
    };
    tabs: {
      contacts: string;
      catalog: string;
      portfolio: string;
    };
    card: {
      inquiry: string;
      request: string;
      portfolio: string;
      deleteConfirm: string;
      deleted: string;
      deleteError: string;
    };
    auth: {
      unauthorized: string;
      welcome: string;
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
    footer: {
      companyName: 'Luxus International Group',
      address: 'Ph Worldwide Plaza, Bella Vista, Suite 7, Panama City, Panama',
      email: 'info@luxusinternationalgroup.com',
      socialTitle: 'Follow Us',
      copyright: '© 2026 LUXUS. All rights reserved.',
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
        'We Offer the Finest Italian Materials, Each With a Unique Geological Story and Unmatched Artisanal Quality, Selected to Elevate Every Space With Timeless Elegance.', catalogButton: 'Request our complete Materials Catalog', cards: {
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
            'The level of detail in the stone is unparalleled in Central America. It truly feels like a piece of Lake Como in Panama.',
          name: 'Alessandra Rossi',
          role: 'Penthouse Owner, Ocean Reef Punta Paitilla',
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
    aboutPage: {
      eyebrow: 'The Genesis',
      headingLine1: 'From Tuscan Marble',
      headingLine2: 'to American Horizons',
      paragraphs: [
        'The story of Luxus begins in Tuscany, among noble materials and a construction tradition that for over 25 years has shaped high-end residences.',
        'This heritage merges with refined expertise in superyacht interiors, creating a distinctive design language.',
        'The result is residences designed to last, where proportion, harmony, and artisanal finishes come together in timeless spaces overlooking the sea, capable of surpassing traditional architectural standards across the Americas.',
      ],
      quote: 'Elegance is the only beauty that never fades.',
      quoteAuthor: 'Audrey Hepburn',
      principles: {
        eyebrow: 'Our Values',
        title: 'Our Alchemical Principles',
        items: {
          sustainability: {
            title: 'Sustainability',
            description: "Harmonizing architecture with Panama's unique biodiversity. We build for centuries, not seasons.",
          },
          craftsmanship: {
            title: 'Italian Craftsmanship',
            description: 'Importing the soul of Italian design where every slab of marble and hand-forged hinge tells a story of mastery.',
          },
          engineering: {
            title: 'Precision Engineering',
            description: 'Applying rigorous structural logic to ensure coastal resilience without sacrificing aesthetic weightlessness.',
          },
        },
      },
      leadership: {
        eyebrow: 'Luxus International Group',
        heading: 'Our Leadership',
        roles: {
          chiefEngineer: 'Chief Engineer',
          headIntl: 'Head of International Relations',
          headConstruction: 'Head of Construction',
          headInteriors: 'Head of Interiors',
        },
      },
      cta: { heading: 'Ready to transform your vision into a unique residence?', viewCollection: 'View the Collection', scheduleTour: 'Schedule Private Tour' },
    },
    portfolioPage: {
      tag: 'Our Portfolio',
      titleLine1: 'Italian Craftsmanship',
      titleLine2: 'in Every Detail',
      description:
        'A curated collection of residences, commercial spaces, and marine-inspired environments built with a luxury pacing that favors precision, material depth, and quiet confidence.',
      categories: { All: 'All', Residential: 'Residential', Commercial: 'Commercial', Marine: 'Marine' },
      exploreProjects: 'Explore Projects',
      contactUs: 'Contact Us',
      gallery: { eyebrow: 'Filterable Project Gallery', heading: 'Spaces shaped for luxury experiences', filterHint: 'Filter projects by category' },
      modal: {
        projectOverview: 'Project Overview',
        location: 'Location',
        size: 'Size',
        materials: 'Materials',
        completion: 'Completion',
        challenge: 'Challenge',
        solution: 'Solution',
        result: 'Result',
        imageCarousel: 'Image Carousel',
        view360: 'View 360',
        openLightbox: 'Open lightbox floor plan',
        tapToZoom: 'Tap to zoom',
        viewProject: 'View Project',
        outcomeStat: 'Outcome Stat',
      },
      caseStudies: { format: 'Format', focus: 'Focus', curated: 'Curated' },
      contactCTA: { eyebrow: 'Discover Your Future Project', heading: 'Ready to shape a project that feels inevitable?', description: 'Speak with the team behind our most precise residences, refined commercial spaces, and marine-inspired interiors.', button: 'Contact Us' },
      projects: {
        'ocean-reef-villa': {
          title: 'Ocean Reef Villa',
          subtitle: 'Made in Italy Luxury',
          location: 'Ocean Reef Islands, Panama',
          size: '8,400 sq ft',
          year: '2025',
          materials: 'Carrara marble, bronze, teak',
          overview:
            'A waterfront villa shaped like a private gallery, balancing marine resilience with the softness of Tuscan materiality and a restrained, luminous interior palette.',
          challenge: 'Deliver a residence exposed to salt air, humidity, and changing shoreline conditions without compromising elegance.',
          solution: 'A yacht-inspired structural envelope, concealed service systems, and carefully tuned spatial thresholds for shade, airflow, and privacy.',
          result: 'A durable coastal home with museum-grade finishes, generous indoor-outdoor flow, and a calm procession of rooms centered on the water.',
          stats: [
            { label: 'Location', value: 'Panama' },
            { label: 'Material Palette', value: 'Italy + Marine Grade' },
            { label: 'Completion', value: '2025' },
          ],
          features: ['Salt-resistant envelope', 'Golden-ratio circulation', 'Private shoreline terrace', 'Bespoke Italian joinery'],
        },
        'marina-atelier': {
          title: 'Marina Atelier',
          subtitle: 'Floating Commercial Showcase',
          location: 'Balboa District',
          size: '12,100 sq ft',
          year: '2024',
          materials: 'Ebonized oak, brushed brass, stone',
          overview: 'A client-facing experience center designed as a quiet destination for hospitality, negotiation, and brand storytelling.',
          challenge: 'Create a commercial environment that feels intimate, premium, and memorable while accommodating frequent daily use.',
          solution: 'Layered lighting, acoustic material sequencing, and a central arrival axis that frames the project from the first step inside.',
          result: 'A refined showroom that functions as both a sales environment and an architectural statement piece.',
          stats: [
            { label: 'Location', value: 'Balboa' },
            { label: 'Use', value: 'Commercial Showcase' },
            { label: 'Completion', value: '2024' },
          ],
          features: ['Client experience suite', 'Acoustic zoning', 'Feature lighting', 'Flexible meeting rooms'],
        },
        'aurelia-penthouse': {
          title: 'Aurelia Penthouse',
          subtitle: 'Urban Residential Retreat',
          location: 'Panama City',
          size: '5,700 sq ft',
          year: '2024',
          materials: 'Travertine, linen oak, patinated metal',
          overview: 'An elevated city residence that translates coastal calm into a restrained vertical composition with rich, tactile surfaces.',
          challenge: 'Maintain privacy and warmth in a high-rise setting while preserving long-view sightlines and natural light.',
          solution: 'A perimeter of soft architectural fins, layered drapery, and integrated millwork that conceals function and amplifies serenity.',
          result: 'A luminous urban retreat with gallery-like walls, quiet transitions, and a distinctly Mediterranean cadence.',
          stats: [
            { label: 'Location', value: 'City Center' },
            { label: 'Type', value: 'Penthouse' },
            { label: 'Completion', value: '2024' },
          ],
          features: ['Perimeter fins', 'Integrated millwork', 'Quiet spa suite', 'Panoramic city views'],
        },
        'harbor-yard': {
          title: 'Harbor Yard',
          subtitle: 'Marine-Grade Floating Residence',
          location: 'Pacific Coast',
          size: '6,200 sq ft',
          year: '2025',
          materials: 'Marine composites, teak, brushed stainless',
          overview: 'A residence informed by superyacht engineering, with water-resistant detailing and a spatial rhythm that echoes onboard circulation.',
          challenge: 'Deliver waterfront durability and visual lightness in a climate where moisture and motion are constant design factors.',
          solution: 'Marine-grade construction, elevated thresholds, and a material system chosen for both resilience and tactility.',
          result: 'A stable, atmospheric home with the precision of a vessel and the comfort of a private villa.',
          stats: [
            { label: 'Location', value: 'Pacific Coast' },
            { label: 'Type', value: 'Marine Residential' },
            { label: 'Completion', value: '2025' },
          ],
          features: ['Marine composites', 'Elevated thresholds', 'Seaworthy detailing', 'Waterfront lounge deck'],
        },
      },
      caseStudyItems: {
        'ocean-reef-villa': {
          title: 'Ocean Reef Villa',
          subtitle: 'Made in Italy Luxury',
          challenge: 'A shoreline residence needed to feel timeless while surviving salt, sun, and humidity.',
          solution: 'A marine-grade shell wrapped around warm Italian surfaces and a calm, axial plan.',
          result: 'A waterfront home that feels more like a private museum than a coastal house.',
          image: '/hero%20bg.png',
          stat: '32% faster delivery through prefabricated precision components',
        },
        'marina-atelier': {
          title: 'Marina Atelier',
          subtitle: 'Commercial Experience Center',
          challenge: 'The brief required a commercial interior that felt editorial, not transactional.',
          solution: 'Layered light, acoustic softness, and a highly controlled arrival sequence.',
          result: 'A premium client environment that elevates the brand through architecture.',
          image: '/mastering%20bg.png',
          stat: '18 curated material touchpoints across the visitor journey',
        },
        'harbor-yard': {
          title: 'Harbor Yard',
          subtitle: 'Marine-Grade Residence',
          challenge: 'The home had to read as delicate while being engineered for rough coastal conditions.',
          solution: 'Yacht-derived structural logic with tactile finishes and hidden service integration.',
          result: 'A stable and luminous residence with a subtle nautical discipline.',
          image: '/Botticino%20Marble.png',
          stat: '100% coastal-spec materials throughout the envelope',
        },
      },
    },
    portfolioContactPage: {
      eyebrow: 'Our Portfolio',
      title: 'Portfolio Updating',
      description: 'Contact us for a confidential presentation of our projects in Italy and the Americas.',
      requestHeading: 'Request a Confidential',
      requestHighlight: 'Presentation',
      requestDescription:
        'Our portfolio showcases carefully crafted residences, commercial spaces, and marine-inspired environments across Italy and the Americas. Fill out the form to receive a detailed overview of our most recent projects.',
      benefits: ['25+ years of luxury expertise', 'Italian craftsmanship & design', 'Bespoke project solutions', 'Confidential portfolio access'],
      form: {
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        projectType: 'Project Type',
        projectTypeOptions: { residential: 'Residential', commercial: 'Commercial', marine: 'Marine', mixed: 'Mixed-Use', other: 'Other' },
        message: 'Message',
        placeholders: { name: 'Your name', email: 'your@email.com', phone: '+1 (555) 000-0000', company: 'Your company', message: 'Tell us about your project...', projectType: 'Select a project type' },
        submit: { sending: 'Sending...', default: 'Request Portfolio' },
        successMessage: "Thank you! We'll be in touch shortly.",
      },
    },
    admin: {
      title: 'Admin Dashboard',
      subtitle: 'Managing LUXUS International inquiries',
      loginTitle: 'Luxus Admin',
      loginSubtitle: 'Secure access for administration only',
      emailPlaceholder: 'Admin Email',
      passwordPlaceholder: 'Password',
      loginButton: 'LOGIN',
      logoutButton: 'Logout',
      stats: {
        contacts: 'Total Contacts',
        catalog: 'Catalog Requests',
        portfolio: 'Portfolio Inquiries',
        total: 'Total Leads',
      },
      tabs: {
        contacts: 'Contact Form',
        catalog: 'Catalog Requests',
        portfolio: 'Portfolio Inquiries',
      },
      card: {
        inquiry: 'Contact Inquiry',
        request: 'Catalog Request',
        portfolio: 'Portfolio Inquiry',
        deleteConfirm: 'Are you sure you want to delete this entry?',
        deleted: 'Entry deleted.',
        deleteError: 'Failed to delete entry.',
      },
      auth: {
        unauthorized: 'Unauthorized access.',
        welcome: 'Welcome back, Admin.',
      },
    },
  },
  it: {
    hero: {
      explorationTag: "Scopri una nuova visione\ndell'abitare",
      exploreHeritage: "Vivi l'eccellenza",
      headingLine1: 'Il lusso italiano',
      headingLine2: 'nelle Americhe',
      description:
        "Dall'eccellenza italiana nella costruzione residenziale e negli interni di yacht nasce una nuova dimensione dell\'abitare di lusso.",
      cta: "vivi l'eccellenza",
      imageAlt: "Edifici di lusso con riflesso sull'acqua",
      stats: {
        experience: 'Anni di esperienza',
        projects: 'Progetti di lusso consegnati',
        materials: 'Materiali italiani',
      },
    },
    navbar: {
      home: 'Home',
      about: 'Chi siamo',
      services: 'Servizi',
      portfolio: 'Portfolio',
      portfolioContact: 'Richiesta Portfolio',
      contactUs: 'Contattaci',
    },
    footer: {
      companyName: 'Luxus International Group',
      address: 'Ph Worldwide Plaza, Bella Vista, Suite 7, Panama City, Panama',
      email: 'info@luxusinternationalgroup.com',
      socialTitle: 'Seguici',
      copyright: '© 2026 LUXUS. Tutti i diritti riservati.',
    },
    languageSelector: {
      label: 'Lingua',
      ariaLabel: 'Seleziona lingua',
      en: 'Inglese',
      it: 'Italiano',
      es: 'Spagnolo',
    },
    architecturalVision: {
      imageAlt: 'Marina di Pisa - Italia / Villa Aurea',
      infoCard: {
        location: 'Marina di Pisa - Italia',
        title: 'Villa Aurea',
        description:
          'Una fusione di marmo italiano e luce mediterranea che ridefinisce l\'abitare costiero, attraverso finiture artigianali senza precedenti.',
      },
      eyebrow: 'La Visione',
      headingLine1: 'Dallo Yachting',
      headingLine2: 'all\'Abitare',
      description:
        'Il nostro approccio nasce in Toscana, dall\'incontro tra due filiere d\'eccellenza del Made in Italy: lo yachting di alta gamma e le costruzioni. Con Luxus portiamo nelle Americhe questo patrimonio progettuale e costruttivo, trasferendo nell\'architettura residenziale gli standard, i materiali e il know-how sviluppati nel mondo dei superyacht. Materiali pensati per l\'ambiente marino garantiscono resistenza anche nelle condizioni costiere più estreme; tecniche costruttive derivate dalla nautica assicurano durabilità e precisione; mentre il design degli spazi, ispirato ai migliori yacht al mondo, unisce funzionalità ed eleganza. Il risultato è un architettura residenziale che interpreta il lusso italiano in chiave contemporanea, creando residenze capaci di integrarsi armoniosamente con la forza e la bellezza della natura circostante.',
      stats: {
        projectsDelivered: 'Progetti Consegnati',
        countriesReached: 'Paesi Raggiunti',
        italianCertified: 'Certificazione Italiana',
      },
      cta: 'Vedi Portfolio',
    },
    servicesSection: {
      intro: {
        eyebrow: 'I nostri servizi',
        headingLine1: 'Lusso italiano,',
        headingLine2: 'su misura, nelle Americhe.',
        description:
          'Luxus interpreta il lusso italiano attraverso un approccio esclusivo e su misura. Ogni progetto nasce da una visione integrata che unisce estetica, materiali d\'eccellenza e cura assoluta del dettaglio, trasformando ogni residenza in un\'esperienza unica e senza tempo.',
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
            'Il futuro del lusso è etico. Metodologie certificate LEED abbinate a sistemi energetici ad alta efficienza.',
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
      eyebrow: 'I Nostri Materiali Premium',
      headingLine1: 'I Nostri Materiali',
      headingLine2: 'Premium',
      description:
        'Ti proponiamo i migliori materiali italiani, ciascuno con una storia geologica unica e una qualita artigianale ineguagliabile, selezionati per elevare ogni spazio con eleganza senza tempo.',
      cards: {
        carrara: {
          name: 'Marmo di Carrara',
          origin: 'Carrara, Toscana - Italia',
          description:
            'Scopri l\'eleganza senza tempo del marmo di Carrara, celebre per grana fine e venature luminose, ideale per pavimenti, pareti e dettagli di carattere.',
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
      catalogButton: 'Richiedi il catalogo completo dei nostri Materiali',
    },
    testimonialsSection: {
      heading: 'Esperienze Luxus',
      items: {
        first: {
          quote:
            'Il livello di dettaglio nella lavorazione della pietra non ha eguali in America Centrale. Sembra davvero un frammento del Lago di Como a Panama.',
          name: 'Alessandra Rossi',
          role: 'Proprietaria Penthouse, Punta Paitilla',
        },
        second: {
          quote:
            'Lavorare con Luxus è un esperienza cinematografica. La loro visione dello sviluppo urbano ridefinisce ciò che ti aspetti dal lusso.',
          name: 'Luca Piva',
          role: 'CEO Four Walls Realty Corp',
        },
        third: {
          quote:
            'In Luxus ho trovato un partner capace di trasformare l\'eccellenza italiana in architettura concreta, con un livello di dettaglio e controllo che fa la differenza nei progetti più ambiziosi.',
          name: 'Andrea Melillo',
          role: 'CEO Melillo Group',
        },
      },
    },
    aboutPage: {
      eyebrow: 'La Genesi',
      headingLine1: 'Dal marmo toscano',
      headingLine2: 'agli orizzonti americani',
      paragraphs: [
        'La storia di Luxus nasce in Toscana, tra materie nobili e una tradizione costruttiva che da oltre 25 anni da forma a residenze di alta gamma.',
        'A questa eredita si unisce una raffinata esperienza negli interni di superyacht, creando un linguaggio progettuale distintivo.',
        'Ne nascono residenze pensate per durare nel tempo, dove proporzione, armonia e finiture artigianali si fondono in spazi senza tempo, affacciati sul mare e capaci di superare i canoni dell\'architettura tradizionale nelle Americhe.',
      ],
      quote: 'L\'eleganza è l\'unica bellezza che non sfiorisce mai.',
      quoteAuthor: 'Audrey Hepburn',
      principles: {
        eyebrow: 'I nostri valori',
        title: 'I nostri principi',
        items: {
          sustainability: {
            title: 'Sostenibilità',
            description: 'Armonizziamo architettura e natura per creare residenze durature, pensate per il futuro.',
          },
          craftsmanship: {
            title: 'Artigianalità italiana',
            description: 'Ogni dettaglio racconta una cultura del fare, dalla scelta dei materiali alle finiture su misura.',
          },
          engineering: {
            title: 'Ingegneria di precisione',
            description: 'Applichiamo rigore tecnico e controllo costante per garantire performance, durata e qualità.',
          },
        },
      },
      leadership: {
        eyebrow: 'Luxus International Group',
        heading: 'Le firme del progetto',
        roles: {
          chiefEngineer: 'Chief Engineer',
          headIntl: 'Head of International Relations',
          headConstruction: 'Head of Construction',
          headInteriors: 'Head of Interiors',
        },
      },
      cta: {
        heading: 'Pronto a trasformare la tua visione in una residenza unica?',
        viewCollection: 'Scopri la collezione',
        scheduleTour: 'Prenota un tour privato',
      },
    },
    portfolioContactPage: {
      eyebrow: 'Il Nostro Portfolio',
      title: 'Portfolio in aggiornamento',
      description: 'Portfolio in aggiornamento. Contattaci per una presentazione riservata dei nostri progetti in Italia e nelle Americhe',
      requestHeading: 'Richiedi una Presentazione',
      requestHighlight: 'Riservata',
      requestDescription: "Il nostro portfolio presenta residenze curate, spazi commerciali e ambienti ispirati al mare in Italia e Americhe. Compila il modulo per ricevere una panoramica dettagliata dei nostri progetti più recenti.",
      benefits: ['25+ anni di esperienza nel lusso', "Artigianalità e design italiano", 'Soluzioni di progetto su misura', 'Accesso confidenziale al portfolio'],
      form: {
        fullName: 'Nome e Cognome',
        email: 'Email',
        phone: 'Telefono',
        company: 'Azienda',
        projectType: 'Tipo di progetto',
        projectTypeOptions: { residential: 'Residenziale', commercial: 'Commerciale', marine: 'Marino', mixed: 'Uso Misto', other: 'Altro' },
        message: 'Mensaggio',
        placeholders: { name: 'Il tuo nome', email: 'tuo@email.com', phone: '+1 (555) 000-0000', company: 'La tua azienda', message: 'Raccontaci del tuo progetto...', projectType: 'Seleziona un tipo di progetto' },
        submit: { sending: 'Invio in corso...', default: 'Richiedi il Portfolio' },
        successMessage: 'Grazie! Ti contatteremo a breve.',
      },
    },
    admin: {
      title: 'Pannello Admin',
      subtitle: 'Gestione contatti LUXUS International',
      loginTitle: 'Luxus Admin',
      loginSubtitle: 'Accesso sicuro solo per amministrazione',
      emailPlaceholder: 'Email Admin',
      passwordPlaceholder: 'Password',
      loginButton: 'ACCEDI',
      logoutButton: 'Esci',
      stats: {
        contacts: 'Contatti Totali',
        catalog: 'Richieste Catalogo',
        portfolio: 'Richieste Portfolio',
        total: 'Lead Totali',
      },
      tabs: {
        contacts: 'Form Contatto',
        catalog: 'Richieste Catalogo',
        portfolio: 'Richieste Portfolio',
      },
      card: {
        inquiry: 'Richiesta Contatto',
        request: 'Richiesta Catalogo',
        portfolio: 'Richiesta Portfolio',
        deleteConfirm: 'Sei sicuro di voler eliminare questa voce?',
        deleted: 'Voce eliminata.',
        deleteError: 'Impossibile eliminare la voce.',
      },
      auth: {
        unauthorized: 'Accesso non autorizzato.',
        welcome: 'Bentornato, Admin.',
      },
    },
  },

  es: {
    hero: {
      explorationTag: 'Descubre una nueva visión del habitar',
      exploreHeritage: 'Experimenta la excelencia',
      headingLine1: 'El lujo italiano',
      headingLine2: 'en las Américas',
      description:
        'De la excelencia italiana en construcción residencial e interiores de yates nace una nueva dimensión del habitar de lujo.',
      cta: 'Experimenta la excelencia',
      imageAlt: 'Edificios de lujo con reflejo en el agua',
      stats: {
        experience: 'Anos de experiencia',
        projects: 'Proyectos de lujo entregados',
        materials: 'Materiales y abastecimiento italianos',
      },
    },
    navbar: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      services: 'Servicios',
      portfolio: 'Portafolio',
      portfolioContact: 'Consulta de Portafolio',
      contactUs: 'Contáctanos',
    },
    footer: {
      companyName: 'Luxus International Group',
      address: 'Ph Worldwide Plaza, Bella Vista, Suite 7, Panama City, Panama',
      email: 'info@luxusinternationalgroup.com',
      socialTitle: 'Síguenos',
      copyright: '© 2026 LUXUS. Todos los derechos reservados.',
    },
    languageSelector: {
      label: 'Idioma',
      ariaLabel: 'Seleccionar idioma',
      en: 'Inglés',
      it: 'Italiano',
      es: 'Español',
    },
    architecturalVision: {
      imageAlt: 'Marina di Pisa - Italia / Villa Aurea',
      infoCard: {
        location: 'Marina di Pisa – Italia',
        title: 'Villa Aurea',
        description:
          'Una fusión de mármol italiano y luz mediterránea que redefine el habitar costero a través de acabados artesanales sin precedentes.',
      },
      eyebrow: 'La Visión',
      headingLine1: 'Del Yachting',
      headingLine2: 'al Habitar',
      description:
        'Nuestro enfoque nace en Toscana, del encuentro entre dos pilares de excelencia del Made in Italy: el yachting de alta gama y la construcción. Con Luxus llevamos a las Américas este patrimonio proyectual y constructivo, trasladando a la arquitectura residencial los estándares, materiales y know-how desarrollados en el mundo de los superyates. Materiales diseñados para el entorno marino garantizan resistencia incluso en las condiciones costeras más extremas; técnicas constructivas derivadas de la náutica aseguran durabilidad y precisión; mientras que el diseño de los espacios, inspirado en los mejores yates del mundo, une funcionalidad y elegancia. El resultado es una arquitectura residencial que interpreta el lujo italiano en clave contemporánea, creando residencias capaces de integrarse armónicamente con la fuerza y belleza de la naturaleza circundante.',
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
        headingLine1: 'Lujo italiano,',
        headingLine2: 'a medida, en las Américas.',
        description:
          'Luxus interpreta el lujo italiano a través de un enfoque exclusivo y a medida. Cada proyecto surge de una visión integrada que une estética, materiales de excelencia y cuidado absoluto del detalle, transformando cada residencia en una experiencia única e intemporal.',
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
      eyebrow: 'Nuestros Materiales Premium',
      headingLine1: 'Nuestros Materiales',
      headingLine2: 'Premium',
      description:
        'Te ofrecemos los mejores materiales italianos, cada uno con una historia geológica única y una calidad artesanal inigualable, seleccionados para elevar cada espacio con elegancia atemporal.',
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
      catalogButton: 'Solicita nuestro catálogo completo de Materiales',
    },
    portfolioContactPage: {
      eyebrow: 'Nuestro Portfolio',
      title: 'Portfolio en actualización',
      description: 'Portfolio en actualización. Contáctanos para una presentación confidencial de nuestros proyectos en Italia y las Américas.',
      requestHeading: 'Solicita una',
      requestHighlight: 'Presentación',
      requestDescription:
        'Nuestro portfolio presenta residencias cuidadas, espacios comerciales y entornos inspirados en el mar en Italia y las Américas. Completa el formulario para recibir una visión detallada de nuestros proyectos más recientes.',
      benefits: ['25+ años de experiencia en lujo', 'Artesanía y diseño italiano', 'Soluciones de proyecto a medida', 'Acceso confidencial al portfolio'],
      form: {
        fullName: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        company: 'Empresa',
        projectType: 'Tipo de proyecto',
        projectTypeOptions: { residential: 'Residencial', commercial: 'Comercial', marine: 'Marino', mixed: 'Uso mixto', other: 'Otro' },
        message: 'Mensaje',
        placeholders: { name: 'Tu nombre', email: 'tu@email.com', phone: '+1 (555) 000-0000', company: 'Tu empresa', message: 'Cuéntanos sobre tu proyecto...', projectType: 'Selecciona un tipo de proyecto' },
        submit: { sending: 'Enviando...', default: 'Solicitar Portfolio' },
        successMessage: '¡Gracias! Nos pondremos en contacto contigo pronto.',
      },
    },
    aboutPage: {
      eyebrow: 'La Génesis',
      headingLine1: 'Del mármol toscano',
      headingLine2: 'a los horizontes americanos',
      paragraphs: [
        'La historia de Luxus nace en Toscana, entre materias nobles y una tradición constructiva que desde hace más de 25 años da forma a residencias de alta gama.',
        'A esta herencia se une una refinada experiencia en interiores de superyates, creando un lenguaje proyectual distintivo.',
        'De ello nacen residencias pensadas para perdurar, donde proporción, armonía y acabados artesanales se funden en espacios intemporales con vistas al mar, capaces de superar los cánones de la arquitectura tradicional en las Américas.',
      ],
      quote: 'La elegancia es la única belleza que nunca se desvanece.',
      quoteAuthor: 'Audrey Hepburn',
      principles: {
        eyebrow: 'Nuestros valores',
        title: 'Nuestros principios',
        items: {
          sustainability: {
            title: 'Sostenibilidad',
            description: 'Armonizamos arquitectura y naturaleza para crear residencias duraderas, diseñadas para el futuro.',
          },
          craftsmanship: {
            title: 'Artesanía italiana',
            description: 'Cada detalle expresa una cultura del hacer, desde la selección de materiales hasta los acabados a medida.',
          },
          engineering: {
            title: 'Ingeniería de precisión',
            description: 'Aplicamos rigor técnico y control constante para garantizar rendimiento, durabilidad y calidad.',
          },
        },
      },
      leadership: {
        eyebrow: 'Luxus International Group',
        heading: 'Las firmas del proyecto',
        roles: {
          chiefEngineer: 'Chief Engineer',
          headIntl: 'Head of International Relations',
          headConstruction: 'Head of Construction',
          headInteriors: 'Head of Interiors',
        },
      },
      cta: {
        heading: '¡Listo para transformar tu visión en una residencia única?',
        viewCollection: 'Ver la colección',
        scheduleTour: 'Agendar tour privado',
      },
    },
    testimonialsSection: {
      heading: 'Experiencias Luxus',
      items: {
        first: {
          quote:
            'El nivel de detalle en la piedra no tiene comparacion en Centroamerica. Realmente se siente como un pedazo del Lago de Como en Panama.',
          name: 'Alessandra Rossi',
          role: 'Propietaria Penthouse, Ocean Reef Punta Paitilla',
        },
        second: {
          quote:
            'Trabajar con Luxus es una experiencia cinematográfica. Su visión del desarrollo urbano redefine lo que esperas del lujo.',
          name: 'Luca Piva',
          role: 'CEO Four Walls Realty Corp',
        },
        third: {
          quote:
            'En Luxus encontré un socio capaz de transformar la excelencia italiana en arquitectura concreta, con un nivel de detalle y control que marca la diferencia en los proyectos más ambiciosos.',
          name: 'Andrea Melillo',
          role: 'CEO Melillo Group',
        },
      },
    },
    admin: {
      title: 'Panel de Admin',
      subtitle: 'Gestión de contactos LUXUS International',
      loginTitle: 'Luxus Admin',
      loginSubtitle: 'Acceso seguro solo para administración',
      emailPlaceholder: 'Email Admin',
      passwordPlaceholder: 'Contraseña',
      loginButton: 'ACCEDER',
      logoutButton: 'Salir',
      stats: {
        contacts: 'Contactos Totales',
        catalog: 'Solicitudes Catálogo',
        portfolio: 'Solicitudes Portafolio',
        total: 'Leads Totales',
      },
      tabs: {
        contacts: 'Formulario Contacto',
        catalog: 'Solicitudes Catálogo',
        portfolio: 'Solicitudes Portafolio',
      },
      card: {
        inquiry: 'Consulta Contacto',
        request: 'Solicitud Catálogo',
        portfolio: 'Consulta Portafolio',
        deleteConfirm: '¿Estás seguro de que quieres eliminar esta entrada?',
        deleted: 'Entrada eliminada.',
        deleteError: 'Error al eliminar la entrada.',
      },
      auth: {
        unauthorized: 'Acceso no autorizado.',
        welcome: 'Bienvenido, Admin.',
      },
    },
  },
};
