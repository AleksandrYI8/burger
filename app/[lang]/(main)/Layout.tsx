import Image from 'next/image';
import { Category } from '@/models/category';
import CategoryReload from '@/components/CategoryReload';
import React, { useState } from 'react';
import { AppWrapper } from '@/context';
import AllButtonCategory from '@/components/All_btn_category';
import Modal from '@/components/hoc/modal';
import ModalCart from '@/components/ModalCart';

interface LayoutProps {
  children: React.ReactNode;
  translation: {
    header: { deliv: string, headerTitle: string, headerTitleSec: string, category: any };
    acide: { cart: string };
    footer: { number: string; media: string };
  };
  lang: any;
}


const Layout = async ({ children, translation, lang }: LayoutProps) => {

  const res = await fetch("http://localhost:3000/api/category", { cache: "no-cache" });
  const { data } = await res.json();

  return (
    <AppWrapper>
      <div className="bg-gray-100">
        <header className=' bg-gray-100 w-full mb-[3vh]'>
          <div className="bg-background rounded-b-[60%] sm:mb-[15px] md:mb-[30px]">
            <Image className='mx-auto pt-[10px] mb-[40px]' src="/images/logo.svg" alt="logo" width={150} height={100} />
            <div className="flex mx-auto sm:pb-[30px] md:pb-[60px] sm:gap-[20px] md:gap-[30px] lg:gap-[50px] justify-center items-center">
              <div className="sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-fit">
                <Image src="/images/burger.svg" alt="burder" width={250} height={250} />
              </div>
              <div className="">
                <h1 className='mb-5 sm:leading-[6vh] md:leading-[7vh]  lg:leading-[9vh] xl:leading-[9vh] 2xl:leading-[6vh] sm:text-[25px] md:text-[35px]  lg:text-[50px] font-bold text-white'> {translation.header.headerTitle} <br /> <span className='text-orange-600' >{translation.header.headerTitleSec}</span></h1>
                <p className='sm:text-[14px] md:text-[14px] lg:text-[16px] pl-[5px]'>{translation.header.deliv}<span className='font-bold'>599₽</span></p>
              </div>
            </div>
          </div>
          <ul className=" flex sm:gap-[2%] sm:mb-[10px] md:mb-[0] md:gap-[3%] lg:gap-[2%] scrollbar-hidden pr-[5%] pl-[5%] overflow-x-auto ">
            <AllButtonCategory lang={lang} translation={translation} />
            {data.map((item: Category) => {
              return <CategoryReload item={item} lang={lang} />
            })}
          </ul>
          <div className="sm:block md:hidden relative mb-[15vh]">
            <ModalCart translation={translation}>
            </ModalCart>
          </div>

        </header>
        <div className="flex w-full">
          <aside className='sm:hidden md:block md:mt-[5vh] lg:mt-[13vh] xl:mt-[10vh] sticky top-[5%] h-[20vh]  rounded-[15px] w-[25%] bg-white text-black ml-[5%] p-[1%]'>
            <div className="flex  justify-between border-b mb-[10px] items-center">
              <h2 className='md:text-[16px] lg:text-[23px] xl:text-[25px] font-bold'>{translation.acide.cart}</h2>
              <p className='md:text-[13px] lg:text-[16px] bg-gray-200 p-[6px] pt-[2px] md:pb-[0] xl:mb-[2px] rounded'>0</p>
            </div>
            <div className="">
              <p>тут покачто пусто :(</p>
            </div>
          </aside>
          <main className='w-[75%] pl-[2%] bg-gray-100' >
            {children}
          </main>
        </div>
        <footer className=' text-black flex justify-between bg-white pl-[5%] pt-[2%] pr-[10%] pb-[2%] w-full' >
          <div className="sm:w-[20%] md:w-[20%] lg:w-[25%]">
            <Image src="/images/footerLogo.svg" alt="logo" width={300} height={200} />
          </div>

          <div className="flex md:gap-[10%] lg:gap-[20%]">
            <div className="">
              <h3 className='whitespace-nowrap md:text-[16px] lg:text-[22px] xl:text-[24px] mb-[10px]' >{translation.footer.number}</h3>
              <p className='whitespace-nowrap md:text-[13px] text-center'>+7(930)833-38-11</p>
            </div>


            <div className="">
              <h3 className='whitespace-nowrap md:text-[16px] lg:text-[22px] xl:text-[24px] mb-[10px]' >{translation.footer.media}</h3>
              <div className="flex md:gap-[10px] gap-[20px] justify-center">
                <Image src="/images/wk.svg" alt="wk" width={25} height={25} />
                <Image src="/images/tg.svg" alt="tg" width={25} height={25} />
              </div>
            </div>

          </div>
        </footer>
      </div>
    </AppWrapper >
  );

};

export default Layout;
