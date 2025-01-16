import { CatCards } from "~/components/common/CatCards";
import type { Route } from "./+types/all-cats";

export function meta({}: Route.MetaArgs) {
    return [{ title: "All Cats" }, { name: "description", content: "Welcome to all cats!" }];
}

export default function AllCats() {
    return (
        <>
            <CatCards isFavoritePage={false} />
        </>
    );
}
