"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

export function AppWrapper({ children }: { children: ReactNode }) {
    const [dataC, setDataC] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/menu", {
                    cache: "no-cache",
                });
                const result = await res.json();
                setDataC(result.data); // Установка данных в состояние
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchData();
    }, [setDataC]);

    return (
        <AppContext.Provider value={{ dataC, setDataC }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
