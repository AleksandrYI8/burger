import Image from 'next/image';
import { Category } from '@/models/category';
import CategoryReload from '@/components/CategoryReload';
import React, { useState } from 'react';
import { AppWrapper } from '@/context';
import AllButtonCategory from '@/components/All_btn_category';
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
          <div className=" bg-background xs:rounded-b-[40%] sm:rounded-b-[60%] xs:mb-[20px] sm:mb-[15px] md:mb-[30px]">
            <Image className='mx-auto pt-[10px] xs:mb-[20px] sm:mb-[40px]' src="/images/logo.svg" alt="logo" width={150} height={100} />
            <div className="flex xs:flex-col-reverse sm:flex-row mx-auto pb-[25px] sm:pb-[30px] md:pb-[60px] sm:gap-[20px] md:gap-[30px] lg:gap-[50px] justify-center items-center">
              <div className="xs:w-[45%] sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-fit">
                <Image src="/images/burger.svg" alt="burder" width={250} height={250} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className='xs:mb-[15px] sm:mb-5 xs:leading-[30px] sm:leading-[27px] md:leading-[35px]  lg:leading-[9vh] xl:leading-[9vh] 2xl:leading-[6vh] xs:text-[30px] xs:text-center  sm:text-[25px] md:text-[35px]  lg:text-[50px] font-bold text-white'> {translation.header.headerTitle} <br /> <span className='text-orange-600' >{translation.header.headerTitleSec}</span></h1>
                <p className='xs:mb-[20px] sm:mb-0 xs:text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] pl-[5px]'>{translation.header.deliv}<span className='font-bold'>599₽</span></p>
              </div>
            </div>
          </div>
          <ul className=" flex xs:gap-[3%] xs:mb-[10px] sm:gap-[2%] sm:mb-[10px] lg:mb-[0] md:gap-[3%] lg:gap-[2%] scrollbar-hidden pr-[5%] pl-[5%] overflow-x-auto ">
            <AllButtonCategory lang={lang} translation={translation} />
            {data.map((item: Category) => {
              return <CategoryReload item={item} lang={lang} />
            })}
          </ul>
          <div className="sm:block lg:hidden relative mb-[70px]">
            <ModalCart translation={translation}>
            </ModalCart>
          </div>

        </header>
        <div className="flex w-full">
          <aside className='xs:hidden sm:hidden lg:block md:mt-[5vh] lg:mt-[13vh] xl:mt-[10vh] sticky top-[5%] h-[20vh]  rounded-[15px] w-[25%] bg-white text-black ml-[5%] p-[1%]'>
            <div className="flex  justify-between border-b mb-[10px] items-center">
              <h2 className='md:text-[16px] lg:text-[23px] xl:text-[25px] font-bold'>{translation.acide.cart}</h2>
              <p className='md:text-[13px] lg:text-[16px] bg-gray-200 p-[6px] pt-[2px] md:pb-[0] xl:mb-[2px] rounded'>0</p>
            </div>
            <div className="">
              <p>тут покачто пусто :(</p>
            </div>
          </aside>
          <main className='xs:w-[90%] xs:ml-[5%] lg:ml-[0] lg:w-[75%] sm:pl-[0] lg:pl-[2%] bg-gray-100' >
            {children}
          </main>
        </div>
        <footer className='text-black flex sm:text-[14px] xs:flex-col sm:flex-row justify-between xs:gap-[2vh] sm:gap-0 bg-white pl-[5%] pt-[2%] pr-[10%] pb-[2%] w-full'>
          <div className="xs:w-[75%] sm:w-[25%] md:w-[25%] lg:w-[25%]">
            <Image src="/images/footerLogo.svg" alt="logo" width={300} height={200} />
          </div>

          <div className="flex xs:flex-col sm:flex-row xs:justify-start xs:gap-[2vh] sm:gap-[10%] md:gap-[10%] lg:gap-[20%]">
            <div>
              <h3 className='whitespace-nowrap xs:text-[16px] sm:text-[14px] md:text-[16px] lg:text-[22px] xl:text-[24px] xs:mb-0 sm:mb-[10px]' >{translation.footer.number}</h3>
              <p className='whitespace-nowrap xs:text-[16px] sm:text-[14px] md:text-[13px] xs:text-start sm:text-center'>+7(930)833-38-11</p>
            </div>


            <div className="">
              <h3 className='whitespace-nowrap sm:text-[14px] md:text-[16px] lg:text-[22px] xl:text-[24px] xs:mb-0 sm:mb-[10px]' >{translation.footer.media}</h3>
              <div className="flex xs:gap-[10px] sm:gap-[10px] md:gap-[10px] gap-[20px] xs:justify-start sm:justify-center">
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
