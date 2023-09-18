import { Pool, PoolClient, PoolConfig } from 'pg';
import { databaseUtil } from "@/utils/index-utils";
import logs from '@/logs/index-logs';
import dotenv from 'dotenv';

dotenv.config();

type DatabaseConnection = {
    client: PoolClient;
    pool: Pool;
    close: (client: PoolClient, pool: Pool) => Promise<void>;
};

  
async function dbConnection(): Promise<DatabaseConnection> {
    
    const configDatabase: PoolConfig = {   
        connectionString: process.env.DATABASE_URL
    };
        
    if (process.env.NODE_ENV === "production") configDatabase.ssl = true;
    
    const pool = new Pool(configDatabase);
    
    let client = await pool.connect();
    
    const { name, port } = databaseUtil.stringConsoleFormatter(process.env.DATABASE_URL);

    logs.dbConnection(name,port);

    async function close(client: PoolClient, pool: Pool): Promise<void> {
        client.release();
        await pool.end();
    }

    return { client, pool, close };
}

export default dbConnection;
