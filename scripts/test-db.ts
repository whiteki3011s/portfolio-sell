import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars explicitly
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

console.log('Testing MongoDB Connection...');
console.log('URI:', MONGODB_URI ? 'Defined (hidden)' : 'Undefined');

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is missing in .env.local');
    process.exit(1);
}

async function testConnection() {
    try {
        await mongoose.connect(MONGODB_URI!);
        console.log('✅ MongoDB Connected Successfully!');
        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('❌ Connection Failed:', error);
        process.exit(1);
    }
}

testConnection();
