import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import Portfolio from '../models/Portfolio';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkPortfolios() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sharmabhay2006:2006@cluster0.98yktcp.mongodb.net/');
        console.log('Connected to DB');

        const portfolios = await Portfolio.find({});
        console.log('Found', portfolios.length, 'portfolios');

        portfolios.forEach(p => {
            console.error(`ID: ${p._id}`);
            console.error(`Title: ${p.title}`);
            console.error(`Price: ${p.price}`);
            console.error('---');
        });

        await mongoose.disconnect();
    } catch (error) {
        console.error(error);
    }
}

checkPortfolios();
