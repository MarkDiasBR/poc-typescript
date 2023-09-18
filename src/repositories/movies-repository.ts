import dbConnection from "@/database/database-connection";// try {
import { QueryResult } from "pg";

export async function read(): Promise<QueryResult> {
    const { client, pool, close } = await dbConnection();
    
    const movies = await client.query(`
        SELECT *
            FROM "movies"
    ;`);

    await close(client, pool);

    return movies;
}
