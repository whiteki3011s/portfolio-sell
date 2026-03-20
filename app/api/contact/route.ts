import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        const contact = await Contact.create(body);

        return NextResponse.json(
            { success: true, data: contact },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Something went wrong' },
            { status: 400 }
        );
    }
}
