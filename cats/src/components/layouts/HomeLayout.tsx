import { Outlet } from "react-router";
import { NavBar } from "components/common/NavBar";

export default function Layout() {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}
