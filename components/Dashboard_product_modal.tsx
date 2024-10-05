"use client"

import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    Button: ReactNode
}

const AdminProductModal: React.FC<ModalProps> = ({ Button }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMouseLeave = () => {
        setIsOpen(false); // Закрываем модальное окно, когда курсор покидает его
    };

    const handleMouseEnter = () => {
        setIsOpen(true); // Закрываем модальное окно, когда курсор покидает его
    };

    return (
        <><div className="flex">

            {isOpen && (
                <div
                    className="flex gap-[2%] rounded p-[5px] pr-[10px] pl-[10px] mt-[20px] flex-col justify-start items-start  bg-gray-100"
                    onMouseLeave={handleMouseLeave}
                >
                    <button className='rounded hover:bg-gray-200 p-[5px]'>Delete</button>
                    <button className='rounded hover:bg-gray-200 p-[5px]'>Change</button>
                </div>
            )}

            <div
                onMouseEnter={handleMouseEnter}
                onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                {Button}
            </div>
        </div>



        </>
    );
};

export default AdminProductModal;