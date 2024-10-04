"use client"

import { Category } from '@/models/category';
import React, { ReactNode, useState } from 'react';

interface AddFormCatProps {
    lang: string;
    translation: Record<string, string>; // Пример структуры перевода
}

const AddFormCAt: React.FC<AddFormCatProps> = () => {

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

            const category: any = {}

            fm.forEach((val: any, key: any) => (category[key] = val))

            category.images = data.data

            category.titles = {
                ru: category.title_ru,
                en: category.title,
            }

            const res = await fetch(`http://localhost:3000/api/category`, {
                method: "POST",
                body: JSON.stringify(category),
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


    return (
        <>
            <form className="w-[40%] mx-auto space-y-6 text-black bg-gray-100 p-6 rounded-md shadow-md" onSubmit={onSubmit}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="image">Category URL</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        name="images"
                        id="images"
                        placeholder="Enter image URL"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="image">Category</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter your category"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="image">Category ru</label>
                    <input
                        className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="title_ru"
                        id="title_ru"
                        placeholder="Напишите свою категорию"
                    />
                </div>

                <button
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                >
                    Add Product
                </button>
            </form>



        </>
    );
};

export default AddFormCAt;