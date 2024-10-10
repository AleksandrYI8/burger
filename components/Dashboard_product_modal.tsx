"use client"

import React, { ReactNode, useEffect, useState } from 'react';
import Modal_product_patch from './Modal_product_patch';
import { Menu } from '@/models/menu';

interface ModalProps {
    Button: ReactNode;
    id: string;
    type: string;
}

const DashboardProductModal: React.FC<ModalProps> = ({ Button, id, type }) => {

    const [isOpen, setIsOpen] = useState(false);

    const deleteItem = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/${type}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                alert("Sucsess");
                location.reload();  // Перезагрузка страницы (можно улучшить)
            } else {
                throw new Error("Failed to delete item");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Произошла ошибка при удалении");
        }
    };

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);  // Закрытие модалки при клике на фон
        }
    };

    console.log(id);


    return (
        <div className="flex">
            {isOpen && (
                <div>
                    {/* Фон, покрывающий весь экран */}
                    <div
                        onClick={handleOutsideClick}
                        className="fixed inset-0 z-40">
                    </div>

                    {/* Модалка */}
                    <div
                        className="flex gap-1 relative rounded p-2 mt-5 flex-col justify-start items-start bg-gray-100 z-50"
                    >
                        <button onClick={deleteItem} className="rounded hover:bg-gray-200 p-1">Delete</button>

                        <Modal_product_patch type={type} id={id} Button={<button className="rounded hover:bg-gray-200 p-1">Change</button>} />


                    </div>
                </div>
            )}

            <div
                onClick={() => setIsOpen(!isOpen)}  // Открытие/закрытие модалки
            >
                {Button}
            </div>
        </div>
    );
};

export default DashboardProductModal;
