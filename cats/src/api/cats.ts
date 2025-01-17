export const fetchCats = async (page: number) => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}&api_key=live_d8RDW1GKyJYoN6oVgbRAhklxZu9iVO0qSWuGsnim91Ke79v8TI762gpFx2HmA7Lp`
    );
    const data = await response.json();

    return data;
};
