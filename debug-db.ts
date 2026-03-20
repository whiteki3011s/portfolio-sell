import mongoose from 'mongoose';
import { config } from 'dotenv';

// Load env vars
config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sharmabhay2006:2006@cluster0.98yktcp.mongodb.net/';

console.log('Testing MongoDB Connection...');
console.log('URI:', MONGODB_URI);

async function testConnection() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected successfully');

        // Define simple schema if model doesn't exist to test writes
        const TestSchema = new mongoose.Schema({ name: String });
        const TestModel = mongoose.models.Test || mongoose.model('Test', TestSchema);

        console.log('Attempting to create doc...');
        await TestModel.create({ name: 'debug-test' });
        console.log('✅ Write successful');

        console.log('Attempting to find doc...');
        const doc = await TestModel.findOne({ name: 'debug-test' });
        console.log('✅ Read successful:', doc);

        await mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('❌ Connection/Operation failed:', error);
        process.exit(1);
    }
}

testConnection();
