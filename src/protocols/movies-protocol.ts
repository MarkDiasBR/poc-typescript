export type Movie = {
    id: number;
    title: string;
    year: number;
    created_at?: string;
}

export type MovieData = Omit<Movie, 'id' | 'created_at' >;

export type Id = number;
