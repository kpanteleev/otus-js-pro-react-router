import {useLoaderData} from "react-router";
import type {Post} from "../types";
import ToggleFavoritesButton from "../components/ToggleFavoritesButton.tsx";

export default function PostPage() {
    const post = useLoaderData() as Post;

    return (
        <>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
            <ToggleFavoritesButton post={post}/>
        </>
    );
}