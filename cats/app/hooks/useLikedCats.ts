import { useState, useEffect } from "react";

export const useLikedCats = (catId: string) => {
    const [heartState, setHeartState] = useState<string>("empty");

    useEffect(() => {
        const likedCats = JSON.parse(localStorage.getItem("likedCats") || "[]");

        // Если кот лайкнут то active
        if (likedCats.includes(catId)) {
            setHeartState("active");
        }
    }, [catId]);

    const updateLikedCats = (updatedLikedCats: string[]) => {
        localStorage.setItem("likedCats", JSON.stringify(updatedLikedCats));
    };

    const handleClick = () => {
        const likedCats = JSON.parse(localStorage.getItem("likedCats") || "[]");
        let updatedLikedCats: string[];

        if (heartState === "active") {
            updatedLikedCats = likedCats.filter((likedId: string) => likedId !== catId);
        } else {
            updatedLikedCats = [...likedCats, catId];
        }

        updateLikedCats(updatedLikedCats);

        setHeartState(heartState === "active" ? "empty" : "active");
    };

    const handleMouseEnter = () => {
        if (heartState !== "active") {
            setHeartState("hover");
        }
    };

    const handleMouseLeave = () => {
        if (heartState !== "active") {
            setHeartState("empty");
        }
    };

    return {
        heartState,
        handleClick,
        handleMouseEnter,
        handleMouseLeave,
    };
};
