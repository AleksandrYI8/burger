"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

export function AppWrapper({ children }: { children: ReactNode }) {
    const [dataC, setDataC] = useState<any[]>([]);
    const [languageData, setLanguageData] = useState<any>({
        ru: "Меню",
        en: "Menu"
    });
    const [loading, setLoading] = useState(true)
    const [alldata, setAlldata] = useState<any[]>([])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch("http://localhost:3000/api/menu", {
                    cache: "no-cache",
                });
                const result = await res.json();
                setDataC(result.data); // Установка данных в состояние
                setAlldata(result.data)

            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [setDataC]);

    return (
        <AppContext.Provider value={{ dataC, setDataC, languageData, setLanguageData, loading, setLoading, alldata, setAlldata }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
