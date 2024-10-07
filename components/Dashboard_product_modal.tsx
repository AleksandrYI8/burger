"use client"

import React, { ReactNode, useState } from 'react';

interface ModalProps {
    Button: ReactNode;
    id: string;
    type: string;
}

const AdminProductModal: React.FC<ModalProps> = ({ Button, id, type }) => {


    const deleteItem = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/${type}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                alert("sucsess");
                location.reload()
                console.log(response);
                
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Произошла ошибка");
        }


    };

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
                    <button onClick={deleteItem} className='rounded hover:bg-gray-200 p-[5px]'>Delete</button>
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