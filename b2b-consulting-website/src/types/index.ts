export type Language = 'en' | 'es' | 'no';

export interface Translations {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      category: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    content: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    copyright: string;
  };
}