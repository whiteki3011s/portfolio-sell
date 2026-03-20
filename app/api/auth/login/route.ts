import { NextResponse } from 'next/server';
import { verifyPassword, createSession } from '@/lib/admin-auth';

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        const isValid = await verifyPassword(password);

        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid password' },
                { status: 401 }
            );
        }

        await createSession();

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
