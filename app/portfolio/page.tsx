import Navbar from '@/components/Navbar';
import PortfolioGallery from '@/components/PortfolioGallery';
import Footer from '@/components/Footer';
import connectDB from '@/lib/mongodb';
import Portfolio from '@/models/Portfolio';

async function getPortfolios() {
    try {
        await connectDB();
        const portfolios = await Portfolio.find({ published: true }).lean();

        // Serialize and map data
        return portfolios.map((item: any) => ({
            ...item,
            _id: item._id.toString(),
            id: item.id || item._id.toString(),
            name: item.name || item.title,
            title: item.title || item.name,
            createdAt: item.createdAt?.toISOString(),
            updatedAt: item.updatedAt?.toISOString(),
        }));
    } catch (error) {
        console.error('Failed to fetch portfolios:', error);
        return [];
    }
}

export default async function PortfolioPage() {
    const portfolios = await getPortfolios();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <PortfolioGallery initialPortfolios={portfolios} />
            <Footer />
        </main>
    );
}
