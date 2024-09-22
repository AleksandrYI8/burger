import Link from "next/link";

type Item = {
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
                    <Link key={item.id} href={"/"}>
                        <li className='flex whitespace-nowrap w-[110px] gap-[5px] pt-[5px] hover:bg-orange-500 pb-[5px] p-[8px] rounded-[15px] bg-white text-black justify-center items-center' ><img src="/images/burger_mini.svg" alt="burger" />{item.title}</li>
                    </Link>
                )
            }
        </>
    );
};

export default Category;
