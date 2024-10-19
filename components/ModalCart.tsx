"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    translation: any;
}

const ModalCart: React.FC<ModalProps> = ({ translation }) => {

    const [isOpend, setIsOpend] = useState(false)

/*     useEffect(() => {
        if (isOpend) {
            document.body.style.overflow = 'hidden'; // Отключаем скролл
        } else {
            document.body.style.overflow = ''; // Восстанавливаем скролл
        }

        // Восстанавливаем скролл при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpend]);
 */

    return (
        <>
            <div className=" xs:w-[90%] sm:w-[90%] md:w-[45%] xs:px-[2%] sm:px-[1%] absolute flex-col justify-center ml-[5%] p-[1%] h-fit bg-white xs:rounded-[10px] sm:rounded-[20px]">

                <div onClick={() => setIsOpend(true)}>
                    <div className="flex bg-white text-black p-[1%] rounded-[10px] px-[2%] justify-between items-center">
                        <h2 className='xs:text-[16px] sm:text-[17px] sm:font-medium '>{translation.acide.cart}</h2>
                        <p className='xs:text-[12px] md:text-[13px] lg:text-[16px] bg-gray-200 p-[6px] pt-[2px] xs:pb-0 sm:pb-[0] md:pb-[0] xl:mb-[2px] rounded'>0</p>
                    </div>
                </div>

                {isOpend && (
                    <div className=" text-black  p-[1%] h-fit bg-white">
                        <div className="mb-[10px]">
                            <p className='xs:text-[12px] sm:text-[18px]'>тут покачто пусто :(</p>
                        </div>
                        <div className="flex items-center mb-[3%] justify-between border-t border-gray-200 pt-[2%] p-[1%]">
                            <p className='xs:text-[12px] text-[16px]'>Итогo</p>
                            <p className='xs:text-[12px] sm:text-[16px]'>0 ₽</p>
                        </div>
                        <button className='w-full xs:mb-[4%] sm:mb-[2%] xs:text-[14px] sm:text-[17px] flex justify-center items-center p-[2%] text-white rounded-[15px] bg-orange-500'>Оформить заказ</button>
                        <div className="flex justify-between">
                            <div className="flex gap-[2px] items-center">
                                <Image className='xs:p-[2%] sm:p-0' src="/images/delivery.svg" alt="delivery" width={20} height={20} />
                                <p className='xs:text-[12px] sm:text-[15px]'>Бесплатная доставка</p>
                            </div>
                            <button className='xs:text-[12px] sm:text-[15px] text-gray-400' onClick={() => setIsOpend(false)}>
                                Свернуть
                            </button>
                        </div>
                    </div>
                )}



            </div>
        </>
    );
};

export default ModalCart;