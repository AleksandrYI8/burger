"use client";

import { useAppContext } from "@/context";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  item: any;
  lang: any;
};

const CategoryReload: React.FC<Props> = ({ item, lang }) => {
  const { setDataC, setLanguageData, languageData, alldata } = useAppContext();
  
  const handleClick = () => {


    console.log("Clicked category:", item.titles.en);
    const newFilteredData = alldata.filter(
      (product: { category: string }) => product.category === item.titles.en
    );

    setDataC(newFilteredData);

    setLanguageData({
      ru: item.titles.ru,
      en: item.titles.en,
    });
  };

  return (
    <li
      onClick={handleClick}
      className={`flex whitespace-nowrap overflow-hidden min-w-fit gap-[5px] justify-center pt-[5px] pb-[5px] p-[8px] rounded-[15px] text-black items-center ${languageData.en === item.titles.en ? "bg-background" : "bg-white"}`}>
      <Image className="rounded-md object-cover" src={item.images || ""} alt="burger" width={25} height={25} />
      {item.titles[lang]}
    </li>
  );
};

export default CategoryReload;
