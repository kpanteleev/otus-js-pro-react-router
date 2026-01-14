import type {Post} from "../types";
import {Link} from "react-router";
import ToggleFavoritesButton from "./ToggleFavoritesButton.tsx";
import styles from "../styles/PostItem.module.css";

interface PostItemProps {
    post: Post;
}

export default function PostShortItem({post}: PostItemProps) {
    return (
        <div className={styles.postCard}>
            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <div>{post.body}</div>
            <div>
                <ToggleFavoritesButton post={post}/>
            </div>
        </div>
    );
}