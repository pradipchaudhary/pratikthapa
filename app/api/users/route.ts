import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
    try {
        const result = await pool.query(
            "SELECT * FROM users ORDER BY created_at DESC"
        );
        return NextResponse.json(result.rows);
    } catch (error: unknown) {
        console.error(
            "Error fetching users:",
            error instanceof Error ? error.message : error
        );
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        const result = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, password]
        );

        return NextResponse.json(result.rows[0]);
    } catch (error: unknown) {
        console.error(
            "Error creating user:",
            error instanceof Error ? error.message : error
        );
        return NextResponse.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
    }
}
