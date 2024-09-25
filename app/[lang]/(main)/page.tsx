import Layout from "./Layout";
import Products from "@/components/Products";
import { getDictionary } from "../dictionaries";
import { Menu } from "@/models/menu";


export default async function Home({ params: { lang }, }: { params: { lang: string }; }) {
    const translation = await getDictionary(lang)

    const res = await fetch('http://localhost:3000/api/menu',{
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',  
            'Content-Type': 'application/json',
        }
    });
    
    const data = await res.json();
    console.log(data.data)



    return (
        <Layout translation={translation}>
            <h1 className="text-[40px] text-black font-600 mt-[1vh]">{translation.main.mainText}</h1>


            <div className="w-full flex-wrap bg-gray-100 flex p-[1%] gap-[2%]">


                 {data.data.map((item: Menu) => {
                    return <Products item={item} translation={translation} lang_={lang}  />
                })} 


            </div>

        </Layout>
    );
}