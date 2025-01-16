import React from "react";
import { NavLink, useLocation } from "react-router";
import s from "./index.module.scss";

export const NavBar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className={s.nav}>
            <ul className={s.lists}>
                <li>
                    <NavLink to="/" className={location.pathname === "/" ? `${s.linkActive}` : ""}>
                        Все котики
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorite-cats"
                        className={location.pathname === "/favorite-cats" ? `${s.linkActive}` : ""}
                    >
                        Любимые котики
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
