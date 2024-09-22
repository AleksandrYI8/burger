import 'server-only'
 
const dictionaries:   any = {
  en: () => import('@/langs/en.json').then((module) => module.default),
  ru: () => import('@/langs/ru.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: any) => dictionaries[locale]()