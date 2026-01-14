import {useLoaderData} from "react-router";
import type {Post} from "../types";
import PostsList from "../components/PostsList.tsx";

export default function HomePage() {
    const posts = useLoaderData() as Post[];

    return (
        <>
            <h1>All posts</h1>
            <PostsList posts={posts}/>
        </>
    )
}