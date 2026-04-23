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
      explorationTag: 'Explore Development Intelligently',
      exploreHeritage: 'Explore Heritage',
      headingLine1: 'Italian Luxury',
      headingLine2: 'in Panama',
      description:
        'Where craftsmanship meets world-class development. We bridge the gap between Mediterranean heritage and the tropical avant-garde.',
      cta: 'Discover Projects',
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
      explorationTag: 'Esplora lo sviluppo con intelligenza',
      exploreHeritage: 'Esplora l eredita',
      headingLine1: 'Lusso Italiano',
      headingLine2: 'a Panama',
      description:
        "Dove l'artigianalita incontra lo sviluppo di livello mondiale. Colmiamo il divario tra l'eredita mediterranea e l'avanguardia tropicale.",
      cta: 'Scopri i progetti',
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
      explorationTag: 'Explora el desarrollo con inteligencia',
      exploreHeritage: 'Explora la herencia',
      headingLine1: 'Lujo Italiano',
      headingLine2: 'en Panama',
      description:
        'Donde la artesania se une al desarrollo de clase mundial. Cerramos la brecha entre la herencia mediterranea y la vanguardia tropical.',
      cta: 'Descubrir proyectos',
      imageAlt: 'Edificios de lujo con reflejo en el agua',
      stats: {
        experience: 'Anos de experiencia',
        projects: 'Proyectos de lujo entregados',
        materials: 'Materiales y abastecimiento italianos',
      },
    },
  },
};
