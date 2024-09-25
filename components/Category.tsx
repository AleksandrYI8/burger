import Image from "next/image";
import Link from "next/link";
import { Key, ReactNode } from "react";

type Item = {
    _id: Key | null | undefined;
    category: ReactNode;
    id: number;
    title: string;
};

type Props = {
    arr: Item[];
};

const Category: React.FC<Props> = ({ arr }) => {
    return (
        <>
            {   arr.map((item) =>
                    <Link key={item._id} href={"/"}>
                        <li className='flex whitespace-nowrap w-[110px] gap-[5px] pt-[5px] hover:bg-orange-500 pb-[5px] p-[8px] rounded-[15px] bg-white text-black justify-center items-center' ><Image src="/images/burger_mini.svg" alt="burger" width={25} height={25}/>{item.category}</li>
                    </Link>
                )
            }
        </>
    );
};

export default Category;
