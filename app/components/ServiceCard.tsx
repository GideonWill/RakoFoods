'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    delay?: number;
}

export default function ServiceCard({ image, title, description, icon, delay = 0 }: ServiceCardProps) {
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
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="group relative h-64">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {icon && (
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {icon}
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
} 