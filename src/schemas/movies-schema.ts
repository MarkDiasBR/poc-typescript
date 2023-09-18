import { moviesProtocol } from "@/protocols/index-protocols";
import Joi from "joi";

export const movie = Joi.object<moviesProtocol.MovieData>({
    title: Joi.string().required(),
    year: Joi.number().integer().min(1800).max(2100).required()
})
