import React, { ReactNode } from 'react';
import AddForm from './AddForm';

interface pageProps {
    children: ReactNode;
}

const page: React.FC<pageProps> = () => {
    return (
        <>
        <AddForm children={undefined}/>

        </>
    );
};

export default page;