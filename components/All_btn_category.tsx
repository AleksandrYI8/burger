"use client"

import { useAppContext } from "@/context";

interface Props {
    translation: any;
    lang: any
}


const AllButtonCategory: React.FC<Props> = ({ translation, lang }) => {
    const { setDataC,languageData, setLanguageData, alldata } = useAppContext();


    async function SetALL() {
            setDataC(alldata); // Установка данных в состояние
            setLanguageData({
                ru: "Меню",
                en: "Menu"
            })
    }

    return (
        <>
            <li
                onClick={SetALL}
                className={`md:text-[14px] lg:text-[16px] flex whitespace-nowrap overflow-hidden min-w-fit gap-[5px] justify-center pt-[5px] pb-[5px] p-[8px] rounded-[15px] text-black items-center ${languageData[lang] === translation.header.category.all ? "bg-background" : "bg-white"}`}>
                {translation.header.category.all}
            </li >
        </>
    );
};

export default AllButtonCategory;