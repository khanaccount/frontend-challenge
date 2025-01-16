import { useState, useEffect } from "react";
import { fetchCats } from "~/api/cats";
import type { Cat } from "~/types/index";

export const useCatsData = () => {
    const [allCats, setCats] = useState<Cat[]>([]);
    const [page, setPage] = useState(1);
    const [hasMoreCats, setHasMoreCats] = useState(true);

    // Загружаем котов
    const loadCats = async () => {
        try {
            const newCats = await fetchCats(page);
            if (newCats.length === 0) {
                setHasMoreCats(false);
                return;
            }
            const updatedCats = [...allCats, ...newCats];
            setCats(updatedCats);
            localStorage.setItem("cats", JSON.stringify(updatedCats));
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Ошибка при загрузке котов:", error);
        }
    };

    // Загрузка котов из локального хранилища при инициализации
    useEffect(() => {
        const storedCats = localStorage.getItem("cats");
        if (storedCats) {
            setCats(JSON.parse(storedCats));
        } else {
            loadCats();
        }
    }, []);

    return { allCats, loadCats, hasMoreCats };
};
