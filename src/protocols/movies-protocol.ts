export type Movie = {
    id: number;
    title: string;
    year: number;
    genres?: Genre[];
    imdb_url?: string;
    imdb_score?: number;
    already_watched?: boolean;
    created_at?: string;
}

export type MovieData = Omit<Movie, 'id' | 'created_at' >;

export type Genre = "Action"
    | "Adventure"
    | "Animation"
    | "Comedy"
    | "Crime"
    | "Drama"
    | "Family"
    | "Fantasy"
    | "Horror"
    | "Musical"
    | "Mystery"
    | "Romance"
    | "Sci-Fi"
    | "Thriller"
    | "Western"
    | "Biography"
    | "Documentary"
    | "History"
    | "War"
    | "Sport";
