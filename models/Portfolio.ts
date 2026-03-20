import mongoose, { Schema, model, models } from 'mongoose';

export interface IPortfolio {
    _id?: string;
    id: string; // slug
    title: string; // name in template
    description: string;
    longDescription: string;
    category: 'Minimal' | '3D' | 'Brutalist' | 'Dark' | 'Light' | 'Playful' | 'Editorial' | 'Professional' | 'Clean';
    targetAudience: 'Developer' | 'Designer' | 'Photographer' | 'Creative' | 'Agency' | 'Business' | 'Lawyer' | 'Doctor' | 'Architect' | 'Consultant' | 'Professional';
    images: string[];
    thumbnail: string;
    technologies: string[];
    features: string[];
    badges: ('New' | 'Best Seller' | 'Popular')[];
    price: string;
    demoUrl?: string;
    client?: string;
    projectUrl?: string;
    completedDate?: Date;
    featured: boolean;
    published: boolean;
    views: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const PortfolioSchema = new Schema<IPortfolio>(
    {
        id: {
            type: String,
            required: [true, 'ID is required'],
            unique: true,
            trim: true,
        },
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            maxlength: [100, 'Title cannot exceed 100 characters'],
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true,
            maxlength: [1000, 'Description cannot exceed 1000 characters'],
        },
        longDescription: {
            type: String,
            required: [true, 'Long description is required'],
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
        },
        targetAudience: {
            type: String,
            required: [true, 'Target audience is required'],
        },
        images: {
            type: [String],
            default: [],
        },
        thumbnail: {
            type: String,
            required: [true, 'Thumbnail is required'],
        },
        technologies: {
            type: [String],
            default: [],
        },
        features: {
            type: [String],
            default: [],
        },
        badges: {
            type: [String],
            default: [],
        },
        price: {
            type: String,
            required: [true, 'Price is required'],
        },
        demoUrl: {
            type: String,
            trim: true,
        },
        client: {
            type: String,
            trim: true,
        },
        projectUrl: {
            type: String,
            trim: true,
        },
        completedDate: {
            type: Date,
            default: Date.now,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        published: {
            type: Boolean,
            default: true,
        },
        views: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

// Create indexes
PortfolioSchema.index({ category: 1, published: 1 });
PortfolioSchema.index({ featured: 1, published: 1 });
PortfolioSchema.index({ createdAt: -1 });

const Portfolio = models.Portfolio || model<IPortfolio>('Portfolio', PortfolioSchema);

export default Portfolio;
