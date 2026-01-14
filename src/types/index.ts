export interface  Post {
    id: number;
    title: string;
    body: string;
}

export interface FavoritesState{
    favoritesPosts: Post[];
}