import React, { cache } from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Category } from '@/models/category';
import AddFormCAt from './AddFormCat';
import Image from 'next/image';
import AdminProductModal from '@/components/Dashboard_product_modal';
import Category_Dashboard from '@/components/Category_Dashboard';

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
      <div className="flex bg-background">


        <div className=" flex w-[65%] p-[1%] bg-background gap-[1%] flex-wrap">
          {data.map((item: any) => {
           return <Category_Dashboard item={item}/>
          })}
        </div>
        <div className="w-[30%] ">
          <AddFormCAt lang={lang} translation={translation} />
        </div>
      </div>
    </>
  );
};
