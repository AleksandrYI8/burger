"use client"

import { AppWrapper } from '@/context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';

interface DashboardProps {
    children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }: { children: ReactNode }) => {

    const pathName = usePathname()

    return (
    <AppWrapper>


            <div className="flex">

                <aside className='w-[20%] flex flex-col justify-between fixed top-0 bottom-0 p-[1%] bg-orange-500 h-[100vh]'>

                    <div className="">

                        <Link href={"/admin/dashboard"}>
                            <h1 className='text-3xl mb-[5%] font-medium'>Dashboard</h1>
                        </Link>
                        <div className="flex flex-col text-[22px] gap-[1%]">
                            <Link href="/admin/dashboard/menu">
                                <button
                                    className={`w-full  gap-[10px] flex items-center  justify-start p-[1%] rounded-md  transition-[.3s] ${pathName=== "/ru/admin/dashboard/menu" ? "bg-gray-200 text-black" : ""}`}
                                    >
                                    Menu</button>
                            </Link>
                            <Link href="/admin/dashboard/menu">
                                <button
                                    className={`w-full  gap-[10px] flex items-center  justify-start p-[1%] rounded-md  transition-[.3s] ${pathName=== "/ru/admin/dashboard/orders" ? "bg-gray-200 text-black" : ""}`}
                                    >Orders</button>
                            </Link>
                            <Link href="/admin/dashboard/menu">
                                <button
                                    className={`w-full  gap-[10px] flex items-center  justify-start p-[1%] rounded-md  transition-[.3s] ${pathName=== "/ru/admin/dashboard/users" ? "bg-gray-200 text-black" : ""}`}
                                    >Users</button>
                            </Link>

                            <Link href="/admin/dashboard/category">
                                <button
                                    className={`w-full gap-[10px] flex items-center  justify-start p-[1%] rounded-md  transition-[.3s] ${pathName=== "/ru/admin/dashboard/category" ? "bg-gray-200 text-black" : ""}`}
                                    >Category</button>
                            </Link>
                        </div>
                    </div>

                    <Link href="/">
                        <button
                            className='w-full text-[22px] hover:bg-gray-200 flex justify-start p-[1%] rounded-md hover:text-black transition-[.3s]'
                            >Log out</button>
                    </Link>


                </aside>
                <main className='w-[80%] h-[100vh] ml-[20%] bg-background'>
                    {children}
                </main>
            </div>
    </AppWrapper>
    );
};

export default Dashboard;