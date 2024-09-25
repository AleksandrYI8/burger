// components/Layout.tsx
import Image from 'next/image';
import { ReactNode } from 'react';
import Category from '@/components/Category';
import { getDictionary } from '../dictionaries';

interface LayoutProps {
  children: React.ReactNode;
  translation: {
    header: { deliv: string, headerTitle: string, headerTitleSec: string, category: any };
    acide: { cart: string };
    footer: { number: string; media: string };
  };
}

const Layout = async ({ children, translation }: LayoutProps) => {


  const res_cat = await fetch('http://localhost:3000/api/category', {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    }
  });

  const data_cat = await res_cat.json();
  console.log(data_cat)

  return (
    <div className="bg-gray-100">
      <header className=' bg-gray-100 w-full mb-[3vh]'>
        <div className="bg-background rounded-b-[60%] mb-[30px]">
          <Image className='mx-auto pt-[10px] mb-[40px]' src="/images/logo.svg" alt="logo" width={150} height={100} />
          <div className="flex mx-auto pb-[60px] gap-[50px] justify-center items-center">
            <Image src="/images/burger.svg" alt="burder" width={250} height={250} />
            <div className="">
              <h1 className='mb-5 leading-[7vh] text-[50px] font-bold text-white'> {translation.header.headerTitle} <br /> <span className='text-orange-600' >{translation.header.headerTitleSec}</span></h1>
              <p className='text-[16px] pl-[5px]'>{translation.header.deliv}<span className='font-bold'>599₽</span></p>
            </div>
          </div>
        </div>
        <ul className=" flex gap-[3%] scrollbar-hidden pr-[5  %] pl-[5%] overflow-x-auto ">
          <Category arr={data_cat.data} />
        </ul>

      </header>
      <div className="flex w-full">
        <aside className='mt-[10vh] sticky top-[5%] h-[20vh]  rounded-[15px] w-[25%] bg-white text-black ml-[5%] p-[1%]'>
          <div className="flex  justify-between border-b mb-[10px] items-center">
            <h2 className='text-[25px] font-bold'>{translation.acide.cart}</h2>
            <p className='bg-gray-200 p-[6px] pt-[2px] pb-[2px] rounded'>0</p>
          </div>
          <div className="">
            <p>тут покачто пусто :(</p>
          </div>
        </aside>
        <main className='w-[75%] pl-[2%] bg-gray-100' >{children}</main>
      </div>
      <footer className=' text-black flex justify-between bg-white pl-[5%] pt-[2%] pr-[10%] pb-[2%] w-full' >
        <Image src="/images/footerLogo.svg" alt="logo" width={300} height={200} />

        <div className="flex gap-[20%]">
          <div className="">
            <h3 className='whitespace-nowrap text-[24px] mb-[10px]' >{translation.footer.number}</h3>
            <p className='whitespace-nowrap text-center'>+7(930)833-38-11</p>
          </div>


          <div className="">
            <h3 className='whitespace-nowrap text-[24px] mb-[10px]' >{translation.footer.media}</h3>
            <div className="flex gap-[20px] justify-center">
              <Image src="/images/wk.svg" alt="wk" width={25} height={25} />
              <Image src="/images/tg.svg" alt="tg" width={25} height={25} />
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;
