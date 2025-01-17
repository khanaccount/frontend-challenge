import React from "react";
import { Routes, Route } from "react-router";
import "styles/index.scss";

import HomeLayout from "components/layouts/HomeLayout";
import AllCats from "components/pages/allCats";
import FavoriteCats from "components/pages/favoriteCats";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<AllCats />} />
                <Route path="/favorite-cats" element={<FavoriteCats />} />
            </Route>
        </Routes>
    );
};

export default App;
