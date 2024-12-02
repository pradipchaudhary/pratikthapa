import { Pool } from "pg";

const DATABASE_URL = process.env.DATABASE_URL;

export const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Ensure proper SSL connection (required by Neon)
    },
});

export const connect = async () => {
    try {
        const client = await pool.connect();

        // check if the connection successful
        if (client) {
            console.log("Connected to the database");
            client.release(); // Release the client back to the pool
        }
    } catch (error: unknown) {
        console.error("Error connecting to the database:", error);
        throw new Error("Failed to connect to the database");
    }
};

export default pool;
