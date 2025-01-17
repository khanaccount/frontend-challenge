import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router";
import "react-loading-skeleton/dist/skeleton.css";
import { useInView } from "react-intersection-observer";

import { Card } from "./Card";

import { useLoadingState } from "hooks/useLoadingState";
import { useFavoriteCatsPage } from "hooks/useFavoriteCatsPage";
import { useCatsData } from "hooks/useCatsData";

export const CatCards: React.FC<{ isFavoritePage?: boolean }> = ({ isFavoritePage = false }) => {
    const [isButtonUsed, setIsButtonUsed] = useState<boolean>(false);

    const favoriteCats = useFavoriteCatsPage(isFavoritePage);
    const isLoaded = useLoadingState();
    const { allCats, loadCats, hasMoreCats } = useCatsData();
    const { ref, inView } = useInView({ threshold: 1 });

    useEffect(() => {
        if (inView && isButtonUsed && hasMoreCats) {
            loadCats();
        }
    }, [inView, isButtonUsed, hasMoreCats]);

    const catsToRender = isFavoritePage ? favoriteCats : allCats;

    return (
        <>
            <div className={s.cards}>
                {!isLoaded
                    ? Array.from({ length: 15 }).map((_, index) => (
                          <Skeleton key={index} width={225} height={225} />
                      ))
                    : catsToRender.map((cat, index) => (
                          <Card key={`${cat.id}-${index}`} id={cat.id} url={cat.url} />
                      ))}
            </div>

            {isFavoritePage && !favoriteCats.length ? (
                <div className={s.noLikesBlock}>
                    <p className={s.text}>Вы не лайкнули котиков :(</p>
                    <Link to="/" className={s.backLink}>
                        вернуться назад
                    </Link>
                </div>
            ) : (
                !isFavoritePage && (
                    <>
                        {!isButtonUsed && (
                            <button
                                className={s.downloadMoreBtn}
                                onClick={() => {
                                    loadCats();
                                    setIsButtonUsed(true);
                                }}
                            >
                                загрузить еще котиков
                            </button>
                        )}
                        {isButtonUsed && hasMoreCats && <div ref={ref} />}
                    </>
                )
            )}
        </>
    );
};
