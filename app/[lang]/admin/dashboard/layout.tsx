"use client"


import Link from 'next/link';
import React, { ReactNode } from 'react';

interface DashboardProps {
    children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }: { children: ReactNode }) => {


    return (
        <>
            <div className="flex">

                <aside className='w-[20%] fixed top-0 bottom-0 p-[1%] bg-orange-500 h-[100vh]'>
                    <h1 className='text-3xl mb-[5%] font-medium'>Dashboard</h1>

                    <div className="flex flex-col text-xl mb-[70vh] gap-[1%]">
                        <Link href="/admin/dashboard/menu">
                            <button
                                className='w-full hover:bg-gray-200 flex justify-start p-[1%] rounded-md hover:text-blue-950 transition-[.3s]'
                            >Menu</button>
                        </Link>
                        <Link href="/admin/dashboard/menu">
                            <button
                                className='w-full hover:bg-gray-200 flex justify-start p-[1%] rounded-md hover:text-blue-950 transition-[.3s]'
                            >Orders</button>
                        </Link>
                        <Link href="/admin/dashboard/menu">
                            <button
                                className='w-full hover:bg-gray-200 flex justify-start p-[1%] rounded-md hover:text-blue-950 transition-[.3s]'
                            >Users</button>
                        </Link>

                        <Link href="/admin/dashboard/category">
                            <button
                                className='w-full hover:bg-gray-200 flex justify-start p-[1%] rounded-md hover:text-blue-950 transition-[.3s]'
                            >Category</button>
                        </Link>
                    </div>

                    <Link href="/">
                        <button
                            className='w-full text-xl hover:bg-gray-200 flex justify-start p-[1%] rounded-md hover:text-blue-950 transition-[.3s]'
                        >Log out</button>
                    </Link>


                </aside>
                <main className='w-[80%] h-[100vh] ml-[20%] bg-background'>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Dashboard;