"use client"

import Image from 'next/image';
import React, { ReactNode } from 'react';

interface pageProps {
    children: ReactNode;
}

const page: React.FC<pageProps> = () => {
    return (
        <>
            <div className="bg-orange-500 w-full flex justify-center items-center">
                <h1 className="text-[50px]">Welcome to admin panel of FreMeal</h1>
            </div>
            <div className="flex justify-center h-[90vh] items-center">
                <div className="spin-animation">
                    <Image
                        style={{
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                        }}
                        src="/images/burger.svg"
                        alt="burger"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
            <style jsx>{`
                @keyframes spin {
                    from {
                        transform: rotateY(0deg);
                    }
                    to {
                        transform: rotateY(360deg);
                    }
                }

                .spin-animation {
                    animation: spin 2s infinite linear;
                }
            `}</style>
        </>
    );
};

export default page; 