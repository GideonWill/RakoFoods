'use client';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

export default function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div ref={ref} className="text-center mb-12">
            <h2 
                className={`text-3xl sm:text-4xl font-bold mb-4 transform transition-all duration-700 ${
                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${light ? 'text-white' : 'text-gray-800'}`}
            >
                {title}
                <div className={`h-1 w-24 mx-auto mt-4 transform transition-all duration-700 delay-300 ${
                    inView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                } ${light ? 'bg-white' : 'bg-primary'}`} />
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-3xl mx-auto transform transition-all duration-700 delay-150 ${
                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${light ? 'text-gray-200' : 'text-gray-600'}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
} 