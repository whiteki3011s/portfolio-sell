import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import Portfolio from '../models/Portfolio';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function updatePrices() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log('Connected to DB');

        const portfolios = await Portfolio.find({});
        console.log(`Found ${portfolios.length} portfolios to update.`);

        for (const p of portfolios) {
            let newPrice = p.price;

            // Simple heuristic to convert $ to ₹
            if (p.price.includes('$')) {
                const numericPrice = parseFloat(p.price.replace('$', '').replace(',', ''));
                if (!isNaN(numericPrice)) {
                    // Convert to INR (approx 83 rate) and round to nearest 99
                    // e.g. 199 * 83 = 16517 -> 16999
                    // e.g. 49 * 83 = 4067 -> 3999

                    let inr = numericPrice * 83;

                    // Rounding logic for "attractive" pricing
                    if (inr < 5000) {
                        inr = Math.ceil(inr / 1000) * 1000 - 1; // 3999
                    } else {
                        inr = Math.ceil(inr / 1000) * 1000 - 1; // 14999
                    }

                    newPrice = `₹${inr.toLocaleString('en-IN')}`;
                }
            } else if (!p.price.includes('₹')) {
                // If no currency symbol, assume it was dollars or just set a default
                newPrice = '₹14,999';
            }

            if (newPrice !== p.price) {
                console.log(`Updating "${p.title}": ${p.price} -> ${newPrice}`);
                p.price = newPrice;
                await p.save();
            }
        }

        console.log('All prices updated successfully.');
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error updating prices:', error);
        process.exit(1);
    }
}

updatePrices();
