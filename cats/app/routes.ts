import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [index("routes/all-cats.tsx"), route("favorite-cats", "routes/favorite-cats.tsx")]),
] satisfies RouteConfig;
