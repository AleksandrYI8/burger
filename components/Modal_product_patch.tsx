"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    Button: ReactNode
}

const Modal_product_patch: React.FC<ModalProps> = ({ Button }) => {

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
                        <form className=" w-[50%] p-[1%] text-black relative  h-fit bg-background rounded-[20px]">

                            <button onClick={() => setIsOpend(false)}>
                                <Image className='absolute top-[2%] right-[1%] ' src="/images/close_white.svg" alt="closebtn" width={25} height={25} />
                            </button>

                            <div className="flex w-full gap-[5%]">

                                <div className="w-full flex flex-col gap-[2%]">

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="image">Image URL</label>
                                        <input
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            type='file'
                                            accept="image/*"
/*                                             onChange={handleFileChange}
 */                                            name="image"
                                            id="image"
                                            placeholder="Enter image URL"
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="title">Title</label>
                                        <input
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder="Enter product title"
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="title">Title_ru</label>
                                        <input
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            type="text"
                                            name="title_ru"
                                            id="title_ru"
                                            placeholder="Напишите название продукта"
                                        />
                                    </div>


                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="weight">Weight (g)</label>
                                        <input
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            type="text"
                                            name="weight"
                                            id="weight"
                                            placeholder="Enter product weight"
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="price">Price ($)</label>
                                        <input
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            type="text"
                                            name="price"
                                            id="price"
                                            placeholder="Enter product price"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="composition">Composition</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="composition"
                                            id="composition"
                                            placeholder="Enter product composition"
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="composition">Composition ru</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="composition_ru"
                                            id="composition_ru"
                                            placeholder="Напишите состав продукта"
                                        />
                                    </div>


                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="description">Description</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="description"
                                            id="description"
                                            placeholder="Enter product description"
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="description">Description ru</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="description_ru"
                                            id="description_ru"
                                            placeholder="Напишите описание продукта"
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="description">Category</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="category"
                                            id="category"
                                            placeholder="Enter product category"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="w-full mt-[20px] px-4 py-2 bg-orange-600 text-white rounded-md active:scale-[.9] transition-[.2s] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
                                type="submit"
                            >
                                Add Product
                            </button>
                        </form>
                    </div>
            )}



        </>
    );
};

export default Modal_product_patch;