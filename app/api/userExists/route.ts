import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("_id");
        return NextResponse.json({ user });
    } catch (error) {
        console.error("UserExists Error:", error);
        return NextResponse.json(
            { message: "An error occurred while checking user existence.", error: String(error) },
            { status: 500 }
        );
    }
}
