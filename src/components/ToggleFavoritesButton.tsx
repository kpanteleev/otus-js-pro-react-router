import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {useCallback, useMemo} from "react";
import {addToFavorites, removeFromFavorites} from "../store/favoritesSlice.ts";
import type {Post} from "../types";
import styles from "../styles/Buttons.module.css";

interface ToggleFavoritesButtonProps {
    post: Post;
}

export default function ToggleFavoritesButton({post}: ToggleFavoritesButtonProps) {
    const dispatch = useDispatch();
    const favoriteItem = useSelector((state: RootState) =>
        state.favorites.favoritesPosts.find((item) => item.id === post.id)
    );

    const handleToggleToFavorite = useCallback(() => {
        if (favoriteItem)
            dispatch(removeFromFavorites(post));
        else
            dispatch(addToFavorites(post));
    }, [favoriteItem, dispatch, post]);

    const buttonText = useMemo(() => {
        return (favoriteItem ? "Удалить из избранного" : "Добавить в избранное");
    }, [favoriteItem]);

    return (
        <button className={styles.favButton} onClick={handleToggleToFavorite}>{buttonText}</button>
    )
}