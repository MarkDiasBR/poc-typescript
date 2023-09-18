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

export async function search(title: string, year: number): Promise<QueryResult> {
    const { client, pool, close } = await dbConnection();
    
    const movies = await client.query(`
        SELECT *
            FROM "movies"
            WHERE "title" = $1
            AND "year" = $2
    ;`, [title, year]);

    await close(client, pool);

    return movies;
}

export async function searchById(id: number): Promise<QueryResult> {
    const { client, pool, close } = await dbConnection();
    
    const movies = await client.query(`
        SELECT *
            FROM "movies"
            WHERE "id" = $1
    ;`, [id]);

    await close(client, pool);

    return movies;
}

export async function create(title: string, year: number): Promise<QueryResult> {
    const { client, pool, close } = await dbConnection();
    
    const result = await client.query(`
        INSERT
            INTO "movies" ("title", "year")
            VALUES ($1, $2)
    ;`, [title, year]);

    await close(client, pool);

    return result;
}

export async function update(title: string, year: number, id: number): Promise<QueryResult> {
    const { client, pool, close } = await dbConnection();
    
    const result = await client.query(`
        UPDATE "movies"
            SET "title" = $1, "year" = $2
            WHERE "id" = $3
    ;`, [title, year, id]);

    await close(client, pool);

    return result;
}

export async function deleteById(id: number): Promise<QueryResult> {
    const { client, pool, close } = await dbConnection();
    
    const result = await client.query(`
        DELETE
            FROM "movies"
            WHERE "id" = $1
    ;`, [id]);

    await close(client, pool);

    return result;
}
