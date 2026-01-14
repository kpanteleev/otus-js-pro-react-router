import {createBrowserRouter} from "react-router";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary.tsx";
import {postLoader, postsLoader} from "./loaders.ts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorBoundary/>,
        children: [
            {
                index: true,
                lazy: async () => {
                    const {default: Component} = await import("../pages/HomePage");
                    return {Component};
                },
                loader: postsLoader
            },
            {
                path: "post/:id",
                lazy: async () => {
                    const {default: Component} = await import("../pages/PostPage.tsx");
                    return {Component};
                },
                loader: postLoader
            },
            {
                path: "favorites",
                lazy: async () => {
                    const {default: Component} = await import("../pages/FavoritesPage.tsx");
                    return {Component};
                },
            },
            {
                path: "about",
                lazy: async () => {
                    const {default: Component} = await import("../pages/AboutPage.tsx");
                    return {Component};
                },
            },
            {
                path: "*",
                lazy: async () => {
                    const {default: Component} = await import("../pages/NotFoundPage");
                    return {Component};
                },
            },
        ]
    }
], {});