import type {Post} from "../types";
import PostShortItem from "./PostShortItem.tsx";

interface PostsListProps {
    posts: Post[];
}

export default function PostsList({posts}: PostsListProps) {
    if (!posts || !posts.length) return <>Posts not found</>;

    return (
        <div>
            {posts.map((post: Post) => {
                return <PostShortItem key={post.id} post={post}/>
            })}
        </div>
    )
}