"use client"

import Image from "next/image";
import Modal from './hoc/modal';
import Count_Modal from './count_modal';
import { useAppContext } from "@/context";

type Props = {
  translation: {
    modal: any;
    header: { deliv: string, headerTitle: string, headerTitleSec: string, category: any };
    acide: { cart: string };
    main: any,
    footer: { number: string; media: string };
  };
  lang_: string
};

const Products: React.FC<Props> = ({ translation, lang_ }) => {
  console.log(lang_);

  const { dataC, languageData } = useAppContext()

  return (
    <>

    

      <h1 className="text-[40px] text-black font-600 mt-[1vh]">{languageData ? languageData[lang_] : ""}</h1>


      <div className="w-full flex-wrap bg-gray-100 flex p-[1%] gap-[2%]">



      {dataC.map((item: any) => {
        
        return <div
        key={item._id}
        className="p-[1%] rounded-[15px] bg-white mb-[2%] w-[30%] text-black"
        >
          <Image
            className="w-full rounded-md mb-[5px]"
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
              <div className=" w-[45%]">
                <Image className="rounded-md object-cover" src={item.images || ""} alt="burger_modal" width={1000} height={1000} />
              </div>
              <div className="w-[53%] p-[1%]">
                <p className='text-base mb-[15px]'>{item.description[lang_]}</p>
                <p className='text-base mb-[10px]'><span className='font-bold text-base'>{translation.modal.composition}</span> <br />
                  {item.composition[lang_]}
                </p>

                <span className=' text-gray-500'>{item.weight} {translation.main.gramm}</span>
              </div>
            </div>
            <div className="mb-[2%] flex gap-[3%]">
              <Count_Modal item={item.price} btn_add={translation.modal.btn_add} />

            </div>

          </Modal>


        </div>
      })}

      </div>



    </>
  ) 
  
};

export default Products;
