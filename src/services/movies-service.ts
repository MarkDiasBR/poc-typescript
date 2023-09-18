import { moviesProtocol } from "@/protocols/index-protocols";
import { moviesRepository } from "@/repositories/index-repositories"

export async function read(): Promise<moviesProtocol.Movie[]> {
    const movies = await moviesRepository.read();

    return movies.rows;
}
