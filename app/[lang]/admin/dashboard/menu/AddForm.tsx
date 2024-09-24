"use client"

import React, { ReactNode } from 'react';

interface AddFormProps {
    lang: string;
    translation: Record<string, string>; // Пример структуры перевода
  }
  
  const AddForm: React.FC<AddFormProps> = ({ lang }) => {


    async function onSubmit(e: any) {
        e.preventDefault()

        const fm = new FormData(e.target)

        const menu:any = {}

        fm.forEach((val: any, key: any) => (menu[key] = val))


        menu.titles = {
            ru: menu.title,
            en: menu.title,
        }

        menu.description= {
            ru: menu.description,
            en: menu.description,
        }

            const res = await fetch(`http://localhost:3000/api/menu`,{
            method : "POST",
            body: JSON.stringify(menu),
            headers: {
                "Content-Type": "application/json"
            }

            })

        console.log(res);
                
    }


    return (
        <>
            <form className="w-[40%] mx-auto space-y-6 bg-gray-100 p-6 rounded-md shadow-md" onSubmit={onSubmit}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="image">Image URL</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Enter image URL"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="title">Title</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter product title"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="weight">Weight (g)</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="weight"
                        id="weight"
                        placeholder="Enter product weight"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="price">Price ($)</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Enter product price"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="composition">Composition</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        name="composition"
                        id="composition"
                        placeholder="Enter product composition"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="description">Description</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        name="description"
                        id="description"
                        placeholder="Enter product description"
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

export default AddForm;