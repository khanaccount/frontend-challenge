import { useState, useEffect } from "react";

export const useLoadingState = () => {
    const [isLoaded, setIsLoaded] = useState<Boolean>(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return isLoaded;
};
