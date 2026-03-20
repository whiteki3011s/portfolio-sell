import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connectDB from "@/lib/mongodb";

export const authOptions: NextAuthOptions = {
    // adapter: MongoDBAdapter(clientPromise), // Removed to fix 500 error
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log('[Auth] Authorize called');

                if (!credentials?.email || !credentials?.password) {
                    console.log('[Auth] Missing credentials');
                    throw new Error("Invalid credentials");
                }

                try {
                    console.log('[Auth] Connecting to DB...');
                    await connectDB();
                    console.log('[Auth] DB Connected');

                    console.log('[Auth] Finding user: ' + credentials.email);
                    const user = await User.findOne({ email: credentials.email }).select("+password");

                    if (!user) {
                        console.log('[Auth] User not found');
                        throw new Error("Invalid credentials");
                    }
                    console.log('[Auth] User found');

                    console.log('[Auth] Checking password...');
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isPasswordCorrect) {
                        console.log('[Auth] Password incorrect');
                        throw new Error("Invalid credentials");
                    }
                    console.log('[Auth] Password correct');

                    return user;
                } catch (error) {
                    console.error('[Auth] Error in authorize:', error);
                    throw error;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt" as const,
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }: { session: any; token: any }) {
            if (token && session.user) {
                session.user.id = token.sub as string;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
