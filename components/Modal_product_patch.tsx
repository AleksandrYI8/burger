"use client";

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

interface Item {
    titles: {
        en: string;
        ru: string;
    };
    description: {
        en: string;
        ru: string;
    };
    composition: {
        en: string;
        ru: string;
    };
    weight?: string; // Укажите тип по необходимости
    price?: number; // Укажите тип по необходимости
    category?: string;
    images?: any
}

interface ModalProps {
    Button: ReactNode;
    id: string;
    type: any
}

const Modal_product_patch: React.FC<ModalProps> = ({ Button, id, type }) => {
    const [item, setItem] = useState<Item | null>(null);
    const [isOpend, setIsOpend] = useState(false);
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


        const formData = new FormData();
        if (file) {
            formData.append("image", file);
        }

        try {
            let imageUrl: string | null = null;

            // Если файл загружен, загружаем его
            if (file) {
                const response = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setMessage(errorData.message || "Image upload failed");
                    return;
                }

                const data = await response.json();
                imageUrl = data.data; // Получаем URL загруженного изображения
            } else {
                // Если файл не загружен, используем текущее изображение
                imageUrl = item?.images;
            }



            const fm = new FormData(e.target)

            const product: any = {}

            fm.forEach((val: any, key: any) => (product[key] = val))

            product.images = imageUrl

            product.titles = {
                ru: product.title_ru,
                en: product.title,
            }

            product.composition = product.composition_ru && product.composition
                ? {
                    ru: product.composition_ru,
                    en: product.composition,
                }
                : item?.composition;

            product.description = product.description_ru && product.description
                ? {
                    ru: product.description_ru,
                    en: product.description,
                }
                : item?.description;

            const res = await fetch(`http://localhost:3000/api/${type}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log(res);

            if (res.status == 200 || res.status == 201) {
                alert("success")
            }

        } catch (error) {
            setMessage("Something went wrong: " + error);
        }
    }




    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/${type}/${id}`, {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch item");
                }

                const { data } = await response.json();
                setItem(data);
                console.log("Item fetched:", data);
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while fetching data");
            }
        };

        if (id) {
            fetchItem();
        }
    }, [id]);

    useEffect(() => {
        if (isOpend) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

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
                    className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                    style={{
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(10px)"
                    }}>
                    <form onSubmit={onSubmit} className="w-[50%] p-[1%] text-black relative h-fit bg-background rounded-[20px]">
                        <button onClick={() => setIsOpend(false)} type="button">
                            <Image className='absolute top-[2%] right-[1%]' src="/images/close_white.svg" alt="closebtn" width={25} height={25} />
                        </button>

                        <div className="flex w-full gap-[5%]">
                            <div className="w-full flex flex-col gap-[2%]">

                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-white"
                                        htmlFor="image"
                                    >
                                        Upload Image
                                    </label>
                                    <input
                                        className="w-full  text-black  bg-gray-50 border border-gray-300 rounded-lg cursor-pointer file:w-[40%] file:p-3 file:mr-4 file:h-full file:rounded-lg file:border-0 file:font-medium file:bg-gray-300 file:text-black hover:file:bg-blue-100"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        name="image"
                                        id="image"
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
                                        defaultValue={item?.titles?.en || ''}
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="title_ru">Title RU</label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        type="text"
                                        name="title_ru"
                                        id="title_ru"
                                        placeholder="Напишите название продукта"
                                        defaultValue={item?.titles?.ru || ''}
                                    />
                                </div>

                                {item?.weight &&
                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="weight">Weight (g)</label>
                                        <input
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            type="text"
                                            name="weight"
                                            id="weight"
                                            placeholder="Enter product weight"
                                            defaultValue={item?.weight || ''}
                                        />
                                    </div>
                                }

                                {item?.price &&
                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="price">Price ($)</label>
                                        <input
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            type="text"
                                            name="price"
                                            id="price"
                                            placeholder="Enter product price"
                                            defaultValue={item?.price || ''}
                                        />
                                    </div>
                                }
                            </div>

                            {item?.composition &&
                                <div className="w-full">

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="composition">Composition</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="composition"
                                            id="composition"
                                            placeholder="Enter product composition"
                                            defaultValue={item?.composition?.en || ''}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="composition_ru">Composition RU</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="composition_ru"
                                            id="composition_ru"
                                            placeholder="Напишите состав продукта"
                                            defaultValue={item?.composition?.ru || ''}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="description">Description</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="description"
                                            id="description"
                                            placeholder="Enter product description"
                                            defaultValue={item?.description?.en || ''}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="description_ru">Description RU</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="description_ru"
                                            id="description_ru"
                                            placeholder="Напишите описание продукта"
                                            defaultValue={item?.description?.ru || ''}
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="category">Category</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="category"
                                            id="category"
                                            placeholder="Enter product category"
                                            defaultValue={item?.category || ''}
                                        />
                                    </div>
                                </div>
                            }

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
