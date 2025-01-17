import { useState, useEffect } from "react";

export const useLoadingState = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return isLoaded;
};
