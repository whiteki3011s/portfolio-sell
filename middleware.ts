import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the path is an admin route (but not the login page)
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const session = request.cookies.get('rechrome_admin_session');

        if (!session || session.value !== 'authenticated') {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
