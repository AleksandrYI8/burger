import React from 'react';
import Modal_dashboard from '@/components/modal_dashboard';
import { getDictionary } from '@/app/[lang]/dictionaries';
import Products_Dashboard from '@/components/Product_Dashboard';
import { Menu } from '@/models/menu';

interface PageProps {
  params: { lang: string };
}

export default async function Page({ params: { lang } }: PageProps) {
  const translation = await getDictionary(lang);

  const res = await fetch("http://localhost:3000/api/menu", { cache: "no-cache" })

  const { data } = await res.json()
  return (
    <>
      <div className="w-full bg-background">


<div className="absolute top-[1%] right-[20%] left-[10%] bottom-[1%] z-[2]">
          <Modal_dashboard button={
            <button className='p-[5px] pr-[10px] pl-[10px] absolute top-[1%] right-[-25%]  bg-orange-500 rounded-[15px]'>
            Add product
         </button>
          } />
</div>
        
        <div className="z-[1] pt-[5%] p-[1%]">
          {data.map((item: Menu) => {
            return <Products_Dashboard item={item} />
          })}
        </div>

      </div>
    </>
  );
};
