import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [
            params.id,
        ]);

        if (result.rows.length === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch user" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { name, email } = await request.json();

        const result = await pool.query(
            "UPDATE users SET name = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
            [name, email, params.id]
        );

        if (result.rows.length === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update user" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const result = await pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [params.id]
        );

        if (result.rows.length === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "User deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete user" },
            { status: 500 }
        );
    }
}
