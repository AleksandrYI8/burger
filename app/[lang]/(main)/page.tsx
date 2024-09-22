import Layout from "./Layout";
import Products from "@/components/Products";
import { getDictionary } from "../dictionaries";
import Modal from "@/components/hoc/modal";





export default async function Home({ params: { lang }, }: { params: { lang: string }; }) {
    const translation = await getDictionary(lang)

    const arr = [
        { id: 1, price: 689, title: translation.main.titleFirst, weight: '520г' },
        { id: 2, price: 499, title: translation.main.titleSecond, weight: '350г' },
        { id: 3, price: 599, title: translation.main.titleTherd, weight: '450г' },
        { id: 4, price: 749, title: translation.main.titleFourth, weight: '600г' },
        { id: 5, price: 529, title: translation.main.titleFivth, weight: '450г' },
        { id: 6, price: 579, title: translation.main.titleSixth, weight: '470г' },
    ];


    return (
        <Layout translation={translation}>
            <h1 className="text-[40px] text-black font-600 mt-[1vh]">{translation.main.mainText}</h1>


            <div className="w-full flex-wrap bg-gray-100 flex p-[1%] gap-[2%]">

                <Products arr={arr} />
            </div>
            <div className="">
                

            </div>
        </Layout>
    );
}