import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkEnvAndDB() {
    console.log('--- Checking Environment Variables ---');
    const requiredVars = ['MONGODB_URI', 'NEXTAUTH_SECRET', 'NEXTAUTH_URL'];
    const missingVars = [];

    for (const v of requiredVars) {
        if (process.env[v]) {
            console.log(`✅ ${v} is set`);
        } else {
            console.log(`❌ ${v} is MISSING`);
            missingVars.push(v);
        }
    }

    if (process.env.MONGODB_URI) {
        console.log('\n--- Testing MongoDB Connection ---');
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('✅ MongoDB connected successfully');
            console.log('Connection state:', mongoose.connection.readyState);
            await mongoose.disconnect();
            console.log('Disconnected');
        } catch (error) {
            console.error('❌ MongoDB connection failed:', error);
        }
    } else {
        console.log('\n❌ Skipping DB test because MONGODB_URI is missing');
    }
}

checkEnvAndDB();
