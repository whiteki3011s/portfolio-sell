'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import PortfolioForm from '@/components/admin/PortfolioForm';
import { IPortfolio } from '@/models/Portfolio';

export default function EditPortfolioPage() {
    const params = useParams();
    const [portfolio, setPortfolio] = useState<IPortfolio | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res = await fetch(`/api/portfolio/${params.id}`);
                if (res.ok) {
                    const data = await res.json();
                    setPortfolio(data);
                }
            } catch (error) {
                console.error('Error fetching portfolio:', error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchPortfolio();
        }
    }, [params.id]);

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex justify-center py-20">
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
            </AdminLayout>
        );
    }

    if (!portfolio) {
        return (
            <AdminLayout>
                <div className="text-center py-20">Portfolio not found</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <PortfolioForm initialData={portfolio} isEditing={true} />
        </AdminLayout>
    );
}
