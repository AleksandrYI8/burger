"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

export function AppWrapper({ children }: { children: ReactNode }) {
    const [dataC, setDataC] = useState<any[]>([]);
    const [dataCat, setDataCat] = useState<any[]>([]);
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
                // Fetch menu data
                const resMenu = await fetch("http://localhost:3000/api/menu", { cache: "no-cache" });
                const menuData = await resMenu.json();
                setDataC(menuData.data);
                setAlldata(menuData.data);

                // Fetch category data
                const resCategory = await fetch("http://localhost:3000/api/category", { cache: "no-cache" });
                const categoryData = await resCategory.json();
                setDataCat(categoryData.data);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [setDataC]);

    return (
        <AppContext.Provider value={{ dataC, setDataC,dataCat, setDataCat, languageData, setLanguageData, loading, setLoading, alldata, setAlldata, }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
