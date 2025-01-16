import { CatCards } from "~/components/common/CatCards";
import type { Route } from "./+types/favorite-cats";

export function meta({}: Route.MetaArgs) {
    return [{ title: "Favorite Cats" }, { name: "description", content: "Welcome to Favorite Cats!" }];
}

export default function FavoriteCats() {
    return (
        <>
            <CatCards isFavoritePage={true} />
        </>
    );
}
