import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Portfolio from '@/models/Portfolio';

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const portfolio = await Portfolio.findById(id);

        if (!portfolio) {
            return NextResponse.json({ error: 'Portfolio not found' }, { status: 404 });
        }

        return NextResponse.json(portfolio);
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const body = await req.json();

        const portfolio = await Portfolio.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!portfolio) {
            return NextResponse.json({ error: 'Portfolio not found' }, { status: 404 });
        }

        return NextResponse.json(portfolio);
    } catch (error) {
        console.error('Error updating portfolio:', error);
        return NextResponse.json({ error: 'Failed to update portfolio' }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const portfolio = await Portfolio.findByIdAndDelete(id);

        if (!portfolio) {
            return NextResponse.json({ error: 'Portfolio not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Portfolio deleted successfully' });
    } catch (error) {
        console.error('Error deleting portfolio:', error);
        return NextResponse.json({ error: 'Failed to delete portfolio' }, { status: 500 });
    }
}
