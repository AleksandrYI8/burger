"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

type Props = {
    button: any
}

const Modal_dashboard: React.FC<Props> = ({ button }) => {

    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };


    async function onSubmit(e: any) {
        e.preventDefault()


        if (!file) {
            setMessage("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            // Проверяем на успешность и корректно обрабатываем ответ
            if (!response.ok) {
                const errorData = await response.json();
                setMessage(errorData.message || "Image upload failed");
                return;
            }

            const data = await response.json();
            setMessage(data.message);



            const fm = new FormData(e.target)

            const menu: any = {}

            fm.forEach((val: any, key: any) => (menu[key] = val))

            menu.images = data.data

            menu.titles = {
                ru: menu.title_ru,
                en: menu.title,
            }

            menu.description = {
                ru: menu.description_ru,
                en: menu.description,
            }

            menu.composition = {
                ru: menu.composition_ru,
                en: menu.composition,
            }


            const res = await fetch(`http://localhost:3000/api/menu`, {
                method: "POST",
                body: JSON.stringify(menu),
                headers: {
                    "Content-Type": "application/json"
                }

            })

            console.log(res);

            if (res.status == 200 || res.status == 201) {
                alert("success")
            }






        } catch (error) {
            setMessage("Something went wrong: " + error);
        }
    }




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
                {button}
            </div>

            {isOpend && (

                <div
                    className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[55]"
                    style={{
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(10px)"
                    }}>
                    <form className=" w-[50%] p-[1%] text-black relative  h-fit bg-background rounded-[20px]" onSubmit={onSubmit}>

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
                                        onChange={handleFileChange}
                                        name="image"
                                        id="image"
                                        placeholder="Enter image URL"
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="composition">Composition ru</label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        name="composition_ru"
                                        id="composition_ru"
                                        placeholder="Напишите состав продукта"
                                        required
                                    />
                                </div>


                                <div className='w-full'>
                                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="description">Description</label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        name="description"
                                        id="description"
                                        placeholder="Enter product description"
                                        required
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="description">Description ru</label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        name="description_ru"
                                        id="description_ru"
                                        placeholder="Напишите описание продукта"
                                        required
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="description">Category</label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        name="category"
                                        id="category"
                                        placeholder="Enter product category"
                                        required
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

/*  <div

<div className="">
                        <button className='absolute right-[2%] top-[3%]' onClick={() => setIsOpend(false)}>
                            <Image src="/images/close_btn.svg" alt="close_btn" width={30} height={30} />
                        </button>
                        {children}
                    </div>
                </div> */


export default Modal_dashboard;