'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface MenuItemProps {
    image: string;
    title: string;
    price: string | number;
    description: string;
    delay?: number;
}

export default function MenuItem({ image, title, price, description, delay = 0 }: MenuItemProps) {
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
            <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="h-64 relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-xl font-bold">{title}</p>
                        <p className="text-3xl font-bold mt-1">
                            {typeof price === 'number' ? `GHS ${price}` : price}
                        </p>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
} 