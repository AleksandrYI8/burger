"use client"

import React, { ReactNode, useEffect, useState } from 'react';
import Modal_product_patch from './Modal_product_patch';

interface ModalProps {
    Button: ReactNode;
    id: string;
    type: string;
}

const DashboardProductModal: React.FC<ModalProps> = ({ Button, id, type }) => {

    const [item, setItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/${type}/${id}`, {
                    method: "GET",
                });

                if (response.ok) {
                    const data = await response.json();
                    setItem(data);
                    console.log("Item fetched:", data);
                } else {
                    throw new Error("Failed to fetch item");
                }
            } catch (error) {
                console.error("Ошибка:", error);
                alert("Произошла ошибка при получении данных");
            }
        };

        fetchItem();
    }, [id, type]);  // Добавлен массив зависимостей для предотвращения лишних вызовов

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
                        <Modal_product_patch Button={<button className="rounded hover:bg-gray-200 p-1">Change</button>} />

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
