import PostsList from "../components/PostsList.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../store";

export default function FavoritesPage() {
    const {favoritesPosts} = useSelector((state: RootState) => state.favorites);

    return (
        <>
            <h1>My favorites posts</h1>
            <PostsList posts={favoritesPosts}/>
        </>
    )
}