type Translation = {
    ru: string;
    en: string
}


export type Menu = {
    _id: string;
    titles: Translation;
    description: string;
    price: number;
    weight: string;
    images: string[];
    composition: string
}