"use client"

import { Category } from '@/models/category';
import React, { ReactNode } from 'react';

interface AddFormCatProps {
    lang: string;
    translation: Record<string, string>; // Пример структуры перевода
  }
  
  const AddFormCAt: React.FC<AddFormCatProps> = () => {


    async function onSubmit(e: any) {
        e.preventDefault()

        const fm = new FormData(e.target)

        const Category:any = {}

        fm.forEach((val: any, key: any) => (Category[key] = val))

            const res = await fetch(`http://localhost:3000/api/category`,{
            method : "POST",
            body: JSON.stringify(Category),
            headers: {
                "Content-Type": "application/json"
            }

            })

            console.log(res);
            

        if(res.status == 200 || res.status == 201 ){
            alert("success")
        }
                
    }


    return (
        <>
            <form className="w-[40%] mx-auto space-y-6 bg-gray-100 p-6 rounded-md shadow-md" onSubmit={onSubmit}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="image">Category URL</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="category_img"
                        id="category_img"
                        placeholder="Enter image URL"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="image">Category</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Enter your category"
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