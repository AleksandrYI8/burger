type Translation = {
    ru: string;
    en: string
}

type Translation_descr = {
    ru: string;
    en: string
}

export type Menu = {
    _id: string;
    titles: Translation;
    description: Translation_descr;
    price: number;
    weight: string;
    images: string[];
    composition: string
}