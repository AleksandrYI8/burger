
import Layout from "./Layout";
import Products from "@/components/Products";
import { getDictionary } from "../dictionaries";

export default async function Home({ params: { lang }, }: { params: { lang: string };}) {
    const translation = await getDictionary(lang)

    return (
        <Layout translation={translation} lang={lang}>
                 <Products translation={translation} lang_={lang}/>
        </Layout>
    );
}