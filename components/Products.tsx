import Image from 'next/image';

type Item = {
  id: number;
  price: number;
  title: string;
  weight: string;
};

type Props = {
  arr: Item[];
};

const Products: React.FC<Props> = ({ arr }) => {
  return (
    <>
      {
        arr.map((item) => (
          <div
            key={item.id}
            className="p-[1%] rounded-[15px] bg-white mb-[2%] w-[30%] text-black"
          >
            <Image
              className="w-full mb-[5px]"
              src="/images/burger_big.svg"
              alt="burger"
              width={200}
              height={200}
            />
            <h2 className="text-[25px] font-600 mb-[5px]">{item.price} ₽</h2>
            <p className="text-[16px] mb-[20px]">{item.title}</p>
            <p className="text-gray-400 mb-[5px]">{item.weight}</p>
            <button className="w-full text-center bg-gray-200 p-[10px] rounded-[15px]">
              Добавить
            </button>
          </div>
        ))
      }
    </>
  );
};

export default Products;
