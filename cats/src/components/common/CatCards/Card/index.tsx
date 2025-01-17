import React from "react";
import s from "./index.module.scss";

import heartEmpty from "assets/svg/heart.svg";
import heartActive from "assets/svg/heartAvtive.svg";
import heartHover from "assets/svg/heartHover.svg";
import { useLikedCats } from "hooks/useLikedCats";
import type { Cat } from "types";

export const Card: React.FC<Cat> = ({ id, url: imageUrl }) => {
    const { heartState, handleClick, handleMouseEnter, handleMouseLeave } = useLikedCats(id);

    const heartImages: Record<string, string> = {
        hover: heartHover,
        active: heartActive,
        empty: heartEmpty,
    };

    return (
        <div className={s.card}>
            <img className={s.catImg} src={imageUrl} alt="Cat" />
            <img
                className={`${s.heartSvg} ${heartState === "active" ? s.active : ""}`}
                src={heartImages[heartState]}
                alt="Heart"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    );
};
