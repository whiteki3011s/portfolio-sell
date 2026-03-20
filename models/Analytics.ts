import mongoose, { Schema, model, models } from 'mongoose';

export interface IAnalytics {
    _id?: string;
    totalVisits: number;
    portfolioViews: number;
    contactSubmissions: number;
    popularPortfolios: Array<{ portfolioId: string; views: number }>;
    visitsData: Array<{ date: string; visits: number }>;
    lastUpdated: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>(
    {
        totalVisits: {
            type: Number,
            default: 0,
        },
        portfolioViews: {
            type: Number,
            default: 0,
        },
        contactSubmissions: {
            type: Number,
            default: 0,
        },
        popularPortfolios: [
            {
                portfolioId: { type: String, required: true },
                views: { type: Number, default: 0 },
            },
        ],
        visitsData: [
            {
                date: { type: String, required: true },
                visits: { type: Number, default: 0 },
            },
        ],
        lastUpdated: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const Analytics = models.Analytics || model<IAnalytics>('Analytics', AnalyticsSchema);

export default Analytics;
