import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {FavoritesState, Post} from "../types";

const initialState: FavoritesState = {
    favoritesPosts: []
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<Post>) => {
            const post = action.payload;
            const existingPost = state.favoritesPosts.find(item => item.id === post.id);

            if (!existingPost) {
                state.favoritesPosts.push({...post});
            }
        },
        removeFromFavorites: (state, action: PayloadAction<Post>) => {
            state.favoritesPosts = state.favoritesPosts.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;