import type {Post} from "../types";
import type {LoaderFunctionArgs} from "react-router";

export async function postsLoader(): Promise<Post[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
        throw response;
    }

    return await response.json() as Promise<Post[]>;
}

export async function postLoader({params}: LoaderFunctionArgs): Promise<Post> {
    const id = Number(params.id);

    if (!params.id || Number.isNaN(id) || id <= 0) {
        throw new Response("Invalid post id", {status: 400});
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
        throw response;
    }

    return await response.json() as Promise<Post>;
}