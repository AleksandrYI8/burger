
import Layout from "./Layout";
import Products from "@/components/Products";
import { getDictionary } from "../dictionaries";
import { Menu } from "@/models/menu";
import { GetServerSideProps } from "next";



export default async function Home({ params: { lang }, }: { params: { lang: string };}) {
    const translation = await getDictionary(lang)

    

    const res = await fetch("http://localhost:3000/api/menu", {cache: "no-cache"});
	console.log(res);

	const {data} = await res.json();

	console.log(data); 

    return (
        <Layout translation={translation} lang={lang}>
           


           


                 <Products translation={translation} lang_={lang}  />


            

        </Layout>
    );
}