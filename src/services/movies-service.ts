import { moviesProtocol } from "@/protocols/index-protocols";
import { moviesRepository } from "@/repositories/index-repositories"
import errors from "@/errors/index-errors";
import { isIntegerString } from "@/utils/services-util";

export async function read(): Promise<moviesProtocol.Movie[]> {
    const movies = await moviesRepository.read();
    return movies.rows;
}

export async function create(movie: moviesProtocol.MovieData): Promise<void> {
    const { title, year } = movie;

    const search = await moviesRepository.search(title, year);
    if (search.rowCount !== 0) {
        throw errors.conflictingResource();
    } 

    const result = await moviesRepository.create(title, year);
    if (result.rowCount === 0) {
        throw errors.internalServerError();
    }
}

export async function update(movie: moviesProtocol.MovieData, id: string): Promise<void> {
    const { title, year } = movie;

    if (!isIntegerString(id)) {
        throw errors.badRequest("Id is not valid.");
    } 

    const numericId = parseInt(id);

    const searchId = await moviesRepository.searchById(numericId);
    if (searchId.rowCount !== 1) {
        throw errors.badRequest("Id is not valid.");
    }

    const search = await moviesRepository.search(title, year);
    if (search.rowCount !== 0) {
        throw errors.conflictingResource();
    }

    const result = await moviesRepository.update(title, year, numericId);
    if (result.rowCount !== 1) {
        throw errors.internalServerError();
    } 
}

export async function deleteById(id: string): Promise<void> {
    if (!isIntegerString(id)) {
        throw errors.badRequest("Id is not valid.");
    } 

    const numericId = parseInt(id);

    const searchId = await moviesRepository.searchById(numericId);
    if (searchId.rowCount !== 1) {
        throw errors.badRequest("Id is not valid.");
    }

    const result = await moviesRepository.deleteById(numericId);
    if (result.rowCount !== 1) {
        throw errors.internalServerError();
    } 
}
