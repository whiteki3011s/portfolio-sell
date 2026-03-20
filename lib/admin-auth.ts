import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'rechrome2025';
const SESSION_COOKIE_NAME = 'rechrome_admin_session';

export async function verifyPassword(password: string): Promise<boolean> {
    return password === ADMIN_PASSWORD;
}

export async function createSession(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
    });
}

export async function deleteSession(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getSession(): Promise<string | undefined> {
    const cookieStore = await cookies();
    return cookieStore.get(SESSION_COOKIE_NAME)?.value;
}

export async function isAuthenticated(): Promise<boolean> {
    const session = await getSession();
    return session === 'authenticated';
}
