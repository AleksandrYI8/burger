import React, { ReactNode } from 'react';

interface pageProps {
    children: ReactNode;
}

const page: React.FC<pageProps> = () => {
    return (
        <>
            <div className="bg-orange-500 w-full flex justify-center items-center" >
                <h1 className='text-[50px]'>Welcome to admin panel of FreMeal</h1>
            </div>
        </>
    );
};

export default page; 