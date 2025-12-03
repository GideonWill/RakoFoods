'use client';
import { useInView } from 'react-intersection-observer';
import { IconType } from 'react-icons';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div 
            ref={ref}
            className={`transform transition-all duration-700 ease-out ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl transform transition-transform duration-300 hover:scale-110">
                        {icon}
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                    {title}
                </h3>
                <p className="text-gray-600 text-center">
                    {description}
                </p>
            </div>
        </div>
    );
} 