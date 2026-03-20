
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

console.log('Starting script...');
console.log('URI:', MONGODB_URI ? 'Found' : 'Not Found');

if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined');
    process.exit(1);
}

const PortfolioSchema = new mongoose.Schema({
    title: String,
    demoUrl: String,
    category: String
}, { strict: false });

const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);

async function checkDemos() {
    try {
        console.log('Connecting to DB...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to DB');

        const portfolios = await Portfolio.find({});
        console.log(`Found ${portfolios.length} portfolios`);

        portfolios.forEach(p => {
            console.log(`ID: ${p._id}, Title: ${p.title}, DemoURL: '${p.demoUrl}'`);
        });

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected');
    }
}

checkDemos();
