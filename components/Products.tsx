"use client";

import Image from "next/image";
import Modal from './hoc/modal';
import Count_Modal from './count_modal';
import { useAppContext } from "@/context";
import { useEffect, useState } from "react";

type Props = {
  translation: {
    modal: any;
    header: { deliv: string; headerTitle: string; headerTitleSec: string; category: any };
    acide: { cart: string };
    main: any;
    footer: { number: string; media: string };
  };
  lang_: string;
};

const Products: React.FC<Props> = ({ translation, lang_ }) => {
  const { dataC, languageData } = useAppContext();
  const [loading, setLoading] = useState(true);

  const hasData = Array.isArray(dataC) && dataC.length > 0;

  useEffect(() => {
    // Искусственная задержка для имитации долгой загрузки
    const delay = setTimeout(() => {
      if (dataC) {
        setLoading(false);
      }
    }, 1000); // задержка в 2 секунды

    return () => clearTimeout(delay); // очищаем таймер при размонтировании
  }, [dataC]);

  return (
    <>
      <h1 className="text-[40px] text-black font-600 mt-[1vh]">
        {languageData ? languageData[lang_] : ""}
      </h1>

      <div className="w-full flex-wrap bg-gray-100 flex p-[1%] gap-[2%]">
        {loading ? (
          <div className="flex justify-center items-center w-full h-[30vh]">

            <div role="status">
              <svg aria-hidden="true" className="w-[60px] h-[60px] text-gray-100 animate-spin dark:text-gray-300 fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>

          </div>
        ) : (
          hasData ? (
            dataC.map((item: any) => (
              <div
                key={item._id}
                className="p-[1%] rounded-[15px] bg-white mb-[2%] w-[30%] text-black"
              >
                <Image
                  className="w-full h-[30vh] rounded-md object-cover mb-[5px]"
                  src={item.images || ""}
                  alt="burger"
                  width={500}
                  height={500}
                />
                <h2 className="text-[25px] font-600 mb-[5px]">{item.price} ₽</h2>
                <p className="text-[18px] mb-[15px]">{item.titles[lang_]}</p>
                <p className="text-gray-400 mb-[5px]">{item.weight} {translation.main.gramm}</p>

                <Modal Button={<button className="w-full text-center bg-gray-200 p-[10px] rounded-xl active:scale-[.9] transition-[.2s]">
                  {translation.main.add_button}
                </button>}>
                  <h1 className='text-[45px] font-[500 mb-[1%]'>{item.titles[lang_]}</h1>
                  <div className="flex w-full gap-[1%] mb-[5%]">
                    <div className="w-[45%]">
                      <Image className="rounded-md object-cover" src={item.images || ""} alt="burger_modal" width={1000} height={1000} />
                    </div>
                    <div className="w-[53%] p-[1%]">
                      <p className='text-base mb-[15px]'>{item.description[lang_]}</p>
                      <p className='text-base mb-[10px]'><span className='font-bold text-base'>{translation.modal.composition}</span> <br />
                        {item.composition[lang_]}
                      </p>
                      <span className='text-gray-500'>{item.weight} {translation.main.gramm}</span>
                    </div>
                  </div>
                  <div className="mb-[2%] flex gap-[3%]">
                    <Count_Modal item={item.price} btn_add={translation.modal.btn_add} />
                  </div>
                </Modal>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center w-full pt-[10vh] mb-[10vh] gap-[10px]">
              <h1 className="text-black text-[23px]">{translation.main.noProduct}</h1>
              <Image src="/images/nothing.svg" alt="nothing" width={20} height={20} />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Products;
