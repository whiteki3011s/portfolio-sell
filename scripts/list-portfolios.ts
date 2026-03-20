
import connectDB from '../lib/mongodb';
import Portfolio from '../models/Portfolio';

async function listPortfolios() {
    await connectDB();
    const portfolios = await Portfolio.find({});

    console.log("Found " + portfolios.length + " portfolios.");
    portfolios.forEach(p => {
        console.log(`ID: ${p._id} | Title: ${p.title} | Slug: ${p.id} | Demo: ${p.demoUrl}`);
    });

    process.exit(0);
}

listPortfolios().catch(console.error);
