export type Author = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
};

export type BookWork = {
  id: string;
  title: string;
  description: string;
  author: Author;
  createdAt: Date;
};

export enum ParsOrationis {
  Adiectivum = "adiectivum",
  Adverbium = "adverbium",
  Articulus = "articulus",
  Coniunctio = "coniunctio",
  Interiectio = "interiectio",
  Substantivum = "substantivum",
  Numerale = "numerale",
  Participium = "participium",
  Particula = "particula",
  Praepositio = "praepositio",
  Pronomen = "pronomen",
  Verbum = "verbum",
}

export enum Tempus {
  Aoristus = "aoristus",
  Futurum = "futurum",
  FuturumPerfectum = "futurum perfectum",
  Imperfectum = "imperfectum",
  Impraeteritum = "impraeteritum",
  Perfectum = "perfectum",
  Plusquamperfectum = "plusquamperfectum",
  Praeteritum = "praeteritum",
  Praesens = "praesens",
}

export enum Modus {
  Gerundium = "gerundium",
  Imperativus = "imperativus",
  Indicativus = "indicativus",
  Infinitivus = "infinitivus",
  Subiunctivus = "subiunctivus",
  Supinum = "supinum",
}

export enum Causus {
  Ablativus = "ablativus",
  Accusativus = "accusativus",
  Dativus = "dativus",
  Genetivus = "genetivus",
  Nomativus = "nomativus",
  Vocativus = "vocativus",
}

export enum GenusNominis {
  Commune = "commune",
  Femininum = "femininum",
  Masculinum = "masculinum",
  Neutrum = "neutrum",
}

export enum Numerus {
  Pluralis = "pluralis",
  Singularis = "singularis",
}

export enum Gradus {
  Comparativus = "comparativus",
  Superlativus = "superlativus",
}

export enum GenusVerbi {
  Activum = "activum",
  Passivum = "passivum",
}

export enum Persona {
  Prima = "persona prima",
  Secunda = "persona secunda",
  Tertia = "persona tertia",
}

export type MorphologicFilters = {
  parsOrationis: ParsOrationis[];
  tempus: Tempus[];
  modus: Modus[];
  causus: Causus[];
  genusNominis: GenusNominis[];
  numerus: Numerus[];
  gradus: Gradus[];
  genusVerbi: GenusVerbi[];
  persona: Persona[];
};

export type Property = {
  id: number;
  label: string;
  value: string;
};

export type Word = {
  id: string;
  value: string;
  description: string;
  properties: Property[];
  note: string | undefined;
};

export type CorpusSearchTextResult = {
  searchedWord: string;
  author: string;
  source: string;
  sourceId: string;
  page: number;
  line: number;
  text: (Word | string)[];
};

export type Statistics = {
  totalWordFormation: number;
  totalMorphologyForms: number;
  wordsWithFormsByLocale: {
    latin: number;
    russian: number;
    greek: number;
  };
  morphologiesByLocale: {
    latin: number;
    russian: number;
    greek: number;
  };
  authorsAndTranslations: {
    authors: number;
    translations: number;
    total: number;
  };
};
