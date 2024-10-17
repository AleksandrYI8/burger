"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    children: ReactNode,
    Button: ReactNode
}

const Modal: React.FC<ModalProps> = ({ children, Button }) => {

    const [isOpend, setIsOpend] = useState(false)

    useEffect(() => {
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


    return ( 
        <>
            <div onClick={() => setIsOpend(true)}>
                {Button}
            </div>

            {isOpend && (
                <div
                    className="fixed  top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                    style={{
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(10px)"
                    }}>
                    <div className="sm:w-[80%] md:w-[80%] lg:w-[60%] xl:w-[50%] p-[1%] relative h-fit bg-white rounded-[20px]">
                        <button className='absolute right-[2%] top-[3%]' onClick={() => setIsOpend(false)}>
                            <Image src="/images/close_btn.svg" alt="close_btn" width={30} height={30} />
                        </button>
                        {children}
                    </div>
                </div>
            )}



        </>
    );
};

export default Modal;