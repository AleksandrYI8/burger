import React, { cache } from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Category } from '@/models/category';
import AddFormCAt from './AddFormCat';
import Image from 'next/image';
import AdminProductModal from '@/components/Dashboard_product_modal';
import Category_Dashboard from '@/components/Category_Dashboard';
import ModalCategory from '@/components/ModalCategory';

interface PageProps {
  params: { lang: string };
}

export default async function Page({ params: { lang } }: PageProps) {
  const translation = await getDictionary(lang);

  const res = await fetch('http://localhost:3000/api/category', { cache: 'no-cache' })
  const { data } = await res.json()

  console.log(data);


  return (
    <>
      <div className="w-full bg-background">


          <ModalCategory button={
            <button className='p-[5px] pr-[10px] pl-[10px] absolute top-[1%] right-[1%] active:scale-[.9] transition-[.2s] active:bg-orange-400  bg-orange-500 rounded-[15px]'>
              Add product
            </button>
          } />

        <div className="z-[1] flex flex-wrap gap-[1%] pt-[5%] p-[1%]">
          {data.map((item: Category) => {
            return <Category_Dashboard item={item} />
          })}
        </div>

      </div>
    </>
  );
};
