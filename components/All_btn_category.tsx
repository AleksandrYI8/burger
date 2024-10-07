"use client"

import { useAppContext } from "@/context";
import Image from "next/image";

interface Props {
    translation: any;
}


const AllButtonCategory: React.FC<Props> = ({ translation }) => {
    const { setDataC, setLanguageData } = useAppContext();


    async function SetALL() {
        try {
            const res = await fetch("http://localhost:3000/api/menu", {
                cache: "no-cache",
            });
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await res.json();
            setDataC(result.data); // Установка данных в состояние
            setLanguageData({
                ru: "Ассортимент",
                en: "Assortment"
            })
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    }

    return (
        <>
            <li

            onClick={SetALL}
                className="flex whitespace-nowrap  overflow-hidden min-w-fit gap-[5px] justify-center pt-[5px] hover:bg-orange-500 pb-[5px] p-[8px] rounded-[15px] bg-white text-black items-center"    >
            {translation.header.category.all}
        </li >
        </>
    );
};

export default AllButtonCategory;