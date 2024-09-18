import Image from "next/image";
import Layout from "./Layout";

const arr = [1, 2, 3, 3, 3, 3, 3, 3, , 3, 3, 3, 3, 3]

export default function Home() {
    return (
        <Layout>
            <h1 className="text-[40px] text-black font-600 mt-[1vh]">Бургеры</h1>


            <div className="w-full flex-wrap bg-gray-100 flex p-[1%] gap-[2%]">
                {arr.map((item) =>
                    <div key={item} className="p-[1%] rounded-[15px] bg-white mb-[2%] w-[30%] text-black">
                        <Image className="w-full mb-[5px]" src="/burger_big.svg" alt="burger" width={200} height={200} />
                        <h2 className="text-[25px] mb-[5px]">689₽</h2>
                        <p className="text-[16px] mb-[20px]">Мясная бомба</p>
                        <p className="text-gray-400 mb-[5px]">520г</p>
                        <button className="w-full text-center bg-gray-200 p-[10px] rounded-[15px]">Добавить</button>
                    </div>
                )}
            </div>
        </Layout>
    );
}