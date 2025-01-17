import { useState, useEffect, useRef } from "react";
import { fetchCats } from "api/cats";
import type { Cat } from "types";

export const useCatsData = () => {
    const [allCats, setCats] = useState<Cat[]>([]);
    const [page, setPage] = useState(1);
    const [hasMoreCats, setHasMoreCats] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const isInitialLoad = useRef(true); // Флаг для контроля первой загрузки

    const loadCats = async () => {
        if (isLoading) return; // Предотвращаем повторный вызов

        setIsLoading(true);
        try {
            const newCats = await fetchCats(page);
            if (newCats.length === 0) {
                setHasMoreCats(false);
                return;
            }
            setCats((prevCats) => [...prevCats, ...newCats]);
            localStorage.setItem("cats", JSON.stringify([...allCats, ...newCats]));
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Ошибка при загрузке котов:", error);
        } finally {
            setIsLoading(false); // Сбрасываем флаг загрузки
        }
    };

    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false; // Первый вызов эффекта
            const storedCats = localStorage.getItem("cats");
            if (storedCats) {
                setCats(JSON.parse(storedCats));
            } else {
                loadCats();
            }
        }
    }, []);

    return { allCats, loadCats, hasMoreCats, isLoading };
};
