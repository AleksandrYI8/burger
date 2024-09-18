// components/Layout.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}


const arr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4]

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-100">
      <header className=' bg-gray-100 w-full mb-[3vh]'>
        <div className="bg-background rounded-b-[60%] mb-[30px]">
          <Image className='mx-auto pt-[10px] mb-[40px]' src="/logo.svg" alt="logo" width={150} height={100} />
          <div className="flex mx-auto pb-[60px] gap-[50px] justify-center items-center">
            <Image src="/burger.svg" alt="burder" width={250} height={250} />
            <div className="">
              <h1 className='mb-5 leading-[7vh] text-[50px] font-bold text-white'> Только самые <br /> <span className='text-orange-600' >сочные бургеры</span></h1>
              <p className='text-[16px] pl-[5px]'>Бесплатная доставка от <span className='font-bold'>599₽</span></p>
            </div>
          </div>
        </div>
        <ul className=" flex gap-[3%] scrollbar-hidden pr-[5%] pl-[5%] overflow-x-auto ">
          {arr.map((item) =>
            <Link key={item} href={"/"}>
              <li className='flex whitespace-nowrap w-[110px] gap-[5px] pt-[5px] hover:bg-orange-500 pb-[5px] p-[8px] rounded-[15px] bg-white text-black justify-center items-center' ><img src="/burger_mini.svg" alt="burger" />Бургеры</li>
            </Link>
          )}
        </ul>

      </header>
      <div className="flex w-full">
        <aside className='mt-[10vh] sticky top-[10%] h-[20vh]  rounded-[15px] w-[25%] bg-white text-black ml-[5%] p-[1%]'>
          <div className="flex  justify-between border-b mb-[10px] items-center">
            <h2 className='text-[25px] font-bold'>Корзина</h2>
            <p className='bg-gray-200 p-[6px] pt-[2px] pb-[2px] rounded'>0</p>
          </div>
          <div className="">
            <p>тут покачто пусто :(</p>
          </div>
        </aside>
        <main className='w-[75%] pl-[2%] bg-gray-100' >{children}</main>
      </div>
      <footer className=' text-black flex justify-between bg-white pl-[5%] pt-[2%] pr-[10%] pb-[2%] w-full' >
        <Image src="/footerLogo.svg" alt="logo" width={300} height={200} />

        <div className="flex gap-[20%]">
        <div className="">
          <h3 className='whitespace-nowrap text-[24px] mb-[10px]' >Номер для заказа</h3>
          <p className='whitespace-nowrap text-center'>+7(930)833-38-11</p>
        </div>


        <div className="">
          <h3 className='whitespace-nowrap text-[24px] mb-[10px]' >Мы в соцсетях</h3>
          <div className="flex gap-[20px] justify-center">
            <img src="/wk.svg" alt="wk" />
            <img src="/tg.svg" alt="tg" />
          </div>
        </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;
