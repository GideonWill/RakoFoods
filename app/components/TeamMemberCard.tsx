'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface TeamMemberCardProps {
    image: string;
    name: string;
    role: string;
    bio: string;
    delay?: number;
}

export default function TeamMemberCard({ image, name, role, bio, delay = 0 }: TeamMemberCardProps) {
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
            <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300">
                <div className="h-80 relative bg-gray-100 overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center 20%" }}
                        className="rounded-t-lg transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                        {name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    );
} 