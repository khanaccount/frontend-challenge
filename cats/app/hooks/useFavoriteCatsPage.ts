import { useState, useEffect } from "react";
import type { Cat } from "~/types/index";

export const useFavoriteCatsPage = (isFavoritePage: boolean) => {
    const [cats, setCats] = useState<Cat[]>([]);

    useEffect(() => {
        const storedCats = localStorage.getItem("cats");
        const storedLikedCats = localStorage.getItem("likedCats");

        if (storedCats) {
            const allCats = JSON.parse(storedCats);
            if (isFavoritePage && storedLikedCats) {
                const likedCats = JSON.parse(storedLikedCats);
                setCats(allCats.filter((cat: Cat) => likedCats.includes(cat.id)));
            } else {
                setCats(allCats);
            }
        }
    }, [isFavoritePage]);

    return cats;
};
