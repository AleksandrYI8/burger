import Image from 'next/image';
import Modal from './hoc/modal';
import Count_Modal from './count_modal';

type Item = {
  id: number;
  price: number;
  title: string;
  weight: string;
};

type Props = {
  item: any;
};

const Products: React.FC<Props> = ({ item }) => {
  return (
    <>
      {         
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

              <Modal Button={<button className="w-full text-center bg-gray-200 p-[10px] rounded-[15px] active:scale-[.9] transition-[.2s]">
                Добавить
              </button>}>

                <h1 className='text-[45px] font-[500 mb-[1%]'>{item.title}</h1>
                <div className="flex w-full gap-[1%] mb-[5%]">
                  <div className="w-[45%]">
                    <Image src="/images/burger_big.svg" alt="burger_modal" width={1000} height={1000} />
                  </div>
                  <div className="w-[53%] p-[1%]">
                    <p className='text-base mb-[5px]'>Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</p>
                    <p className='text-base mb-[10px]'><span className='font-bold text-base'>Состав:</span> <br />
                      Пшеничная булочка,
                      Котлета из говядины,
                      Красный лук,
                      Листья салата,
                      Соус горчичный,
                    </p>

                    <span className=' text-gray-500'>{item.weight}</span>
                  </div>
                </div>
                <div className="mb-[2%] flex gap-[3%]">
                 <Count_Modal item={item.price}/>

                </div>

              </Modal>


            </div>
          

        
      }
    </>
  );
};

export default Products;
