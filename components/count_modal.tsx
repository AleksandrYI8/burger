"use client"

import React, { ReactNode, useState } from 'react';

interface Count_ModalProps {
    item: number;
    btn_add: any

}

const Count_Modal: React.FC<Count_ModalProps> = ({item, btn_add}) => {

    const [count, setCount] = useState(1)

    if(count > 9){
        setCount(9)
    }
    if(count < 1){
        setCount(1)
    }

    return (
        <>
            <button className="w-[40%] md:text-base lg:text-lg text-white text-center bg-background rounded-[15px] active:scale-[.9] transition-[.2s]">
                {btn_add}
            </button>

            <div className="bg-gray-200 flex justify-between w-[15%] items-center rounded-[15px]">
                <button onClick={() => setCount(count - 1)} className="w-[40%] ms:text-ms lg:text-lg scale-[1.5]  text-center p-[10px] rounded-[15px] ">
                    -
                </button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)} className="w-[40%] ms:text-ms lg:text-lg scale-[1.5]  text-center p-[10px] rounded-[15px] ">
                    +
                </button>
            </div>
            <div className="w-[32%] flex items-center justify-end">
                <p className='md:text-xl lg:text-xl  xl:text-4xl'>{+item * +count} ₽</p>
            </div>
        </>
    );
};

export default Count_Modal;