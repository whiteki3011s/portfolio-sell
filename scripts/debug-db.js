const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sharmabhay2006:2006@cluster0.98yktcp.mongodb.net/';

const fs = require('fs');
const logFile = path.resolve(process.cwd(), 'debug-output.txt');

function log(msg) {
    fs.appendFileSync(logFile, msg + '\n');
    console.log(msg);
}

log('Testing MongoDB Connection...');
log('URI: ' + MONGODB_URI);
log('NEXTAUTH_SECRET present: ' + (!!process.env.NEXTAUTH_SECRET));
log('NEXTAUTH_URL present: ' + (!!process.env.NEXTAUTH_URL));
if (process.env.NEXTAUTH_URL) log('NEXTAUTH_URL: ' + process.env.NEXTAUTH_URL);

async function testConnection() {
    try {
        await mongoose.connect(MONGODB_URI);
        log('✅ Connected successfully');

        // Define simple schema if model doesn't exist to test writes
        const TestSchema = new mongoose.Schema({ name: String });
        const TestModel = mongoose.models.Test || mongoose.model('Test', TestSchema);

        log('Attempting to create doc...');
        await TestModel.create({ name: 'debug-test' });
        log('✅ Write successful');

        log('Attempting to find doc...');
        const doc = await TestModel.findOne({ name: 'debug-test' });
        log('✅ Read successful: ' + JSON.stringify(doc));

        await mongoose.connection.close();
        log('Connection closed');
    } catch (error) {
        log('❌ Connection/Operation failed: ' + error);
        process.exit(1);
    }
}

testConnection();
