import mongoose from 'mongoose';
import Portfolio from '../models/Portfolio';
import { portfolioTemplates } from '../lib/portfolioTemplates';

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sharmabhay2006:2006@cluster0.98yktcp.mongodb.net/');
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await Portfolio.deleteMany({});
        console.log('🗑️  Cleared existing portfolios');

        // Transform data to match new schema
        const portfolios = portfolioTemplates.map(template => ({
            id: template.id,
            title: template.name,
            description: template.description,
            longDescription: template.longDescription,
            category: template.category,
            targetAudience: template.targetAudience,
            thumbnail: template.thumbnail,
            technologies: template.technologies,
            features: template.features,
            badges: template.badges || [],
            price: template.price,
            demoUrl: template.demoUrl || `/demos/${template.id}`,
            featured: template.badges?.includes('Best Seller') || template.badges?.includes('New') || false,
            published: true,
            views: Math.floor(Math.random() * 1000) + 100,
            completedDate: new Date()
        }));

        // Insert new data
        await Portfolio.insertMany(portfolios);
        console.log(`✨ Seeded ${portfolios.length} portfolios`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
