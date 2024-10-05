import React, { cache } from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Category } from '@/models/category';
import AddFormCAt from './AddFormCat';
import Image from 'next/image';
import AdminProductModal from '@/components/Dashboard_product_modal';

interface PageProps {
  params: { lang: string };
}

export default async function Page({ params: { lang } }: PageProps) {
  const translation = await getDictionary(lang);

  const res = await fetch('http://localhost:3000/api/category', {cache: 'no-cache'})
  const { data } = await res.json()

  console.log(data);
  

  return (
    <>
      <div className="flex">


        <div className=" flex w-[65%] p-[1%] gap-[1%] flex-wrap">
          {data.map((item: any) => {
            return <div className="relative mb-[1%] flex  items-center overflow-hidden bg-gray-200 gap-[10px] text-black w-[45%] h-[15vh] p-[1%] pr-[5%]  rounded-md">
              <Image className='rounded-md' src={item.images || ""} alt="category" width={150} height={150} />
              <div className="flex flex-col gap-[2px]">
              <p className='text-[18px]'><span className='font-bold'>ru:</span> {item.titles.ru}</p>
              <p className='text-[18px]'><span className='font-bold'>en:</span> {item.titles.en}</p>
              </div>
              <div className="absolute top-[1%] right-[1%]">
                <AdminProductModal Button={<button>•••</button>} />
              </div>
            </div>
          })}
        </div>
        <div className="w-[30%] ">
          <AddFormCAt lang={ lang} translation={translation} />
        </div>
      </div>
    </>
  );
};
