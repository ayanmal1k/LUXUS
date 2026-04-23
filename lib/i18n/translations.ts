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
};

export const translations: Record<Locale, Messages> = {
  en: {
    hero: {
      explorationTag: 'Become Part of a New Dimension',
      exploreHeritage: 'Explore Heritage',
      headingLine1: 'Italian Luxury',
      headingLine2: 'in Americas',
      description:
        'From Italian Excellence in Residential Construction and Yacht Interiors Emerges a New Dimension of Luxury Living.',
      cta: 'Discover the Excellence',
      imageAlt: 'Luxury buildings with water reflection',
      stats: {
        experience: 'Years of Experience',
        projects: 'Luxury Projects Delivered',
        materials: 'Italian Materials & Sourcing',
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
  },
};
