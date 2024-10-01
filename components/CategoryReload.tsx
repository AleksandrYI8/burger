  import Image from "next/image";
  import Link from "next/link";
  import { Key, ReactNode } from "react";
    
  type Props = {
    item: any;
    lang: any;
  };
  
  const CategoryReload: React.FC<Props> = ({ item, lang}) => {
      return (
          <>
              {   
                      <Link key={item.id} href={"/"}>
                          <li className='flex whitespace-nowrap w-[110px] gap-[5px] pt-[5px] hover:bg-orange-500 pb-[5px] p-[8px] rounded-[15px] bg-white text-black justify-center items-center' >
                            <Image src={item.images || ""} alt="burger" width={25} height={25}/>
                            {item.titles[lang]}
                            </li>
                      </Link>
                  
              }
          </>
      );
  };

  export default CategoryReload;
