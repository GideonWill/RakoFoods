"use client";

import { useState, useRef, useEffect, TouchEvent } from "react";
import Link from "next/link";
import AutoplayVideo from "./AutoplayVideo";

interface VideoItem {
  src: string;
  title?: string;
  description?: string;
}

const VideoGallery = ({ videos }: { videos: VideoItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const startDragX = useRef<number>(0);
  const currentDragX = useRef<number>(0);
  const dragOffset = useRef<number>(0);

  useEffect(() => {
    // Auto advance carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    startDragX.current = e.touches[0].clientX;
    dragOffset.current = 0;
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'none';
    }
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    
    touchEndX.current = e.touches[0].clientX;
    currentDragX.current = e.touches[0].clientX;
    dragOffset.current = currentDragX.current - startDragX.current;
    
    if (carouselRef.current) {
      const translateX = -currentIndex * 100 + (dragOffset.current / carouselRef.current.clientWidth * 100);
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
  };
  
  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    
    isDragging.current = false;
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-in-out';
    }
    
    const swipeThreshold = 75;
    const swipeDistance = touchEndX.current - touchStartX.current;
    
    if (swipeDistance < -swipeThreshold && currentIndex < videos.length - 1) {
      // Swipe left - go to next
      setCurrentIndex(currentIndex + 1);
    } else if (swipeDistance > swipeThreshold && currentIndex > 0) {
      // Swipe right - go to previous
      setCurrentIndex(currentIndex - 1);
    } else {
      // Return to original position if swipe wasn't strong enough
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
    dragOffset.current = 0;
  };

  const goToNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-title text-3xl mb-8">See Our Services in Action</h2>
      
      {/* Featured Video Carousel */}
      <div className="relative overflow-hidden rounded-lg bg-black mb-12">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0"
              style={{ width: "100%" }}
            >
              <div className="relative h-[500px] overflow-hidden">
                <AutoplayVideo
                  src={video.src}
                  className="w-full h-full object-cover"
                  controls={true}
                  muted={true}
                  loop={true}
                />
                {video.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-xl font-semibold">{video.title}</h3>
                    {video.description && <p>{video.description}</p>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
          <button
            onClick={goToPrevious}
            className="bg-white bg-opacity-30 rounded-full p-2 text-white disabled:opacity-50"
            aria-label="Previous slide"
            disabled={currentIndex === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="bg-white bg-opacity-30 rounded-full p-2 text-white disabled:opacity-50"
            aria-label="Next slide"
            disabled={currentIndex === videos.length - 1}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {videos.slice(0, 4).map((video, index) => (
          <div key={index} className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <AutoplayVideo
              src={video.src}
              className="w-full h-full object-cover"
              muted={true}
              loop={true}
              controls={false}
            />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link href="/gallery" className="btn-primary text-lg px-10 py-3">
          View Full Gallery
        </Link>
      </div>
    </div>
  );
};

export default VideoGallery; 