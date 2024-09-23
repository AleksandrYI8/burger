import React, { ReactNode } from 'react';

interface pageProps {
    children: ReactNode;
}

const page: React.FC<pageProps> = () => {
    return (
        <>
            <h1>admin</h1>
        </>
    );
};

export default page; 