import { moviesProtocol } from "@/protocols/index-protocols";
import Joi from "joi";

export const MovieData = Joi.object<moviesProtocol.MovieData>({
    title: Joi.number().required();
    year: Joi.number().required(),
    genres?: Joi.array;
    imdb_url?: string;
    imdb_score?: number;
    already_watched?: boolean;
    created_at?: string;
})
