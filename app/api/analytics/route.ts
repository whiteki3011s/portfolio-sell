import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Analytics, { IAnalytics } from '@/models/Analytics';
import Portfolio from '@/models/Portfolio';

export async function GET() {
    try {
        await connectDB();

        // Get or create analytics document
        let analyticsDoc = (await Analytics.findOne().lean()) as (IAnalytics & { _id: any; __v?: number }) | null;

        let analytics: IAnalytics;
        if (!analyticsDoc) {
            const newAnalytics = await Analytics.create({
                totalVisits: 0,
                portfolioViews: 0,
                contactSubmissions: 0,
                popularPortfolios: [],
                visitsData: [],
            });
            analytics = newAnalytics.toObject() as IAnalytics;
        } else {
            // Safely convert Mongoose lean document to IAnalytics
            analytics = {
                _id: analyticsDoc._id?.toString(),
                totalVisits: analyticsDoc.totalVisits || 0,
                portfolioViews: analyticsDoc.portfolioViews || 0,
                contactSubmissions: analyticsDoc.contactSubmissions || 0,
                popularPortfolios: analyticsDoc.popularPortfolios || [],
                visitsData: analyticsDoc.visitsData || [],
                lastUpdated: analyticsDoc.lastUpdated || new Date(),
            };
        }

        // Get total portfolio views
        const portfolios = await Portfolio.find().lean();
        const totalPortfolioViews = portfolios.reduce((sum: number, p: any) => sum + (p.views || 0), 0);

        // Get popular portfolios
        const popularPortfolios = portfolios
            .sort((a: any, b: any) => (b.views || 0) - (a.views || 0))
            .slice(0, 5)
            .map((p: any) => ({
                portfolioId: p._id?.toString() || '',
                title: p.title,
                views: p.views || 0,
            }));

        // Generate mock visits data for the last 7 days
        const visitsData = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (6 - i));
            return {
                name: date.toLocaleDateString('en-US', { weekday: 'short' }),
                visits: Math.floor(Math.random() * 50) + 20,
            };
        });

        // Generate mock project views data
        const projectViewsData = Array.from({ length: 6 }, (_, i) => {
            const date = new Date();
            date.setMonth(date.getMonth() - (5 - i));
            return {
                name: date.toLocaleDateString('en-US', { month: 'short' }),
                views: Math.floor(Math.random() * 100) + 50,
            };
        });

        const response = {
            totalVisits: analytics.totalVisits || Math.floor(Math.random() * 1000) + 500,
            portfolioViews: totalPortfolioViews,
            contactSubmissions: analytics.contactSubmissions || Math.floor(Math.random() * 50) + 10,
            totalPortfolios: portfolios.length,
            popularPortfolios,
            visitsData,
            projectViewsData,
            lastUpdated: new Date().toISOString(),
        };

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return NextResponse.json(
            { error: 'Failed to fetch analytics' },
            { status: 500 }
        );
    }
}
