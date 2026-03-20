'use client';

import { useState } from 'react';

export function useContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');

        // Reset after 3 seconds
        setTimeout(() => {
            setStatus('idle');
            // Optional: Reset form fields here if we had access to them
            (e.target as HTMLFormElement).reset();
        }, 3000);
    };

    return {
        status,
        handleSubmit,
        isSubmitting: status === 'submitting',
        isSuccess: status === 'success'
    };
}
