"use client";

import { useAppContext } from "@/context";
import { useAppTrnslationContext } from "@/context/translation_context";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  item: any;
  lang: any;
};

const CategoryReload: React.FC<Props> = ({ item, lang }) => {
  const {setDataC} = useAppContext(); 
  const {setLanguageData} = useAppTrnslationContext(); 
  const [data_prod, setData_prod] = useState<any[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/menu", {
          cache: "no-cache",
        });
        const result = await res.json();
        setData_prod(result.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {

    const newFilteredData = data_prod.filter(
      (product: { category: string }) => product.category === item.titles.en
    );

    setDataC(newFilteredData);

    setLanguageData({
      ru: item.titles.ru,
      en: item.titles.en
    })
  };


  return (
    <li
      onClick={handleClick}
      className="flex whitespace-nowrap w-[110px] gap-[5px] pt-[5px] hover:bg-orange-500 pb-[5px] p-[8px] rounded-[15px] bg-white text-black justify-center items-center"
    >
      <Image src={item.images || ""} alt="burger" width={25} height={25} />
      {item.titles[lang]}
    </li>
  );
};

export default CategoryReload;
