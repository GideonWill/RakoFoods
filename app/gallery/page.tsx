"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback, TouchEvent } from "react";

export default function Gallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [modalVideoIndex, setModalVideoIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const startDragX = useRef<number>(0);
  const currentDragX = useRef<number>(0);
  const dragOffset = useRef<number>(0);

  const setVideoRef = useCallback(
    (element: HTMLVideoElement | null, index: number) => {
      videoRefs.current[index] = element;
    },
    []
  );

  const videos = [
    {
      src: "/images/kitchen.mp4",
      title: "Our Kitchen",
      description: "Behind the scenes of our culinary magic",
    },
    {
      src: "/images/yog3.mp4",
      title: "Yoghurt Making",
      description: "Our homemade yoghurt process",
    },
    {
      src: "/images/yog250ml.mp4",
      title: "Yoghurt Production",
      description: "250ml yoghurt packaging process",
    },
    {
      src: "/images/sob1.mp4",
      title: "Sobolo Preparation",
      description: "Traditional drink making process",
    },
    {
      src: "/images/desert.mp4",
      title: "Dessert Making",
      description: "Creating sweet delights",
    },
    {
      src: "/images/atsomo.mp4",
      title: "Atsomo Making",
      description: "Traditional Ghanaian dish preparation",
    },
    {
      src: "/images/thekitchen.mp4",
      title: "Kitchen Tour",
      description: "A comprehensive look at our kitchen",
    },
    {
      src: "/images/thumbnail1.mp4",
      title: "Food Preparation",
      description: "Our chefs in action",
    },
    {
      src: "/images/thumbnail2.mp4",
      title: "Culinary Showcase",
      description: "Showcasing our dishes",
    },
    {
      src: "/images/thumbnail3.mp4",
      title: "Local Bar Services",
      description: "Our Local Bar Services",
    },
    {
      src: "/images/thumbnail4.mp4",
      title: "Food Presentation",
      description: "Artistic food presentation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            video.play().catch((error) => {
              console.log("Autoplay prevented:", error);
            });
          } else {
            const video = entry.target as HTMLVideoElement;
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedVideo) {
        closeModal();
      }
    };

    if (selectedVideo) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
    };
  }, [selectedVideo]);

  const handleVideoClick = (videoSrc: string) => {
    const index = videos.findIndex((video) => video.src === videoSrc);
    setModalVideoIndex(index);
    setSelectedVideo(videoSrc);
  };

  const handleNextVideo = useCallback(() => {
    const nextIndex = (modalVideoIndex + 1) % videos.length;
    setModalVideoIndex(nextIndex);
    setSelectedVideo(videos[nextIndex].src);
  }, [modalVideoIndex, videos]);

  const handlePreviousVideo = useCallback(() => {
    const prevIndex = (modalVideoIndex - 1 + videos.length) % videos.length;
    setModalVideoIndex(prevIndex);
    setSelectedVideo(videos[prevIndex].src);
  }, [modalVideoIndex, videos]);

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const handleModalClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

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
    
    const swipeThreshold = 100;
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

  // Modal touch handlers for swiping between videos
  const handleModalTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    e.stopPropagation();
  };
  
  const handleModalTouchEnd = (e: TouchEvent) => {
    const swipeThreshold = 100;
    const swipeDistance = e.changedTouches[0].clientX - touchStartX.current;
    
    if (swipeDistance < -swipeThreshold) {
      // Swipe left - next video
      handleNextVideo();
    } else if (swipeDistance > swipeThreshold) {
      // Swipe right - previous video
      handlePreviousVideo();
    }
    
    // Reset value
    touchStartX.current = 0;
    e.stopPropagation();
  };

  // Add gesture hint for mobile users
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    if (selectedVideo) {
      // Show swipe hint for 3 seconds when modal opens
      setShowSwipeHint(true);
      const timer = setTimeout(() => {
        setShowSwipeHint(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [selectedVideo]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of memorable events and culinary creations.
          </p>
        </div>
      </section>

      {/* Video Carousel */}
      <section className="section-padding bg-gray-100" id="video-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Video Highlights</h2>
          <div className="relative overflow-hidden rounded-lg bg-black">
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
                  <div
                    className="relative rounded-lg overflow-hidden bg-black cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleVideoClick(video.src)}
                  >
                    <div className="relative h-[500px] overflow-hidden">
                      <video
                        ref={(el) => setVideoRef(el, index)}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4 z-10">
                          <h3 className="text-2xl font-semibold mb-2">
                            {video.title}
                          </h3>
                          <p className="text-base">{video.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Buttons for Mobile */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10 md:hidden">
              <button
                onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                className="bg-white bg-opacity-30 rounded-full p-2 text-white"
                aria-label="Previous slide"
                disabled={currentIndex === 0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => currentIndex < videos.length - 1 && setCurrentIndex(currentIndex + 1)}
                className="bg-white bg-opacity-30 rounded-full p-2 text-white"
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
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleModalClick}
        >
          <div className="relative w-full max-w-5xl mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePreviousVideo();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Previous video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextVideo();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Next video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Swipe Hint Overlay */}
            {showSwipeHint && (
              <div className="absolute inset-0 flex items-center justify-between px-10 z-20 pointer-events-none">
                <div className="bg-black bg-opacity-60 text-white p-2 rounded-lg transform transition-opacity duration-500">
                  <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Swipe</span>
                </div>
                <div className="bg-black bg-opacity-60 text-white p-2 rounded-lg transform transition-opacity duration-500">
                  <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm">Swipe</span>
                </div>
              </div>
            )}

            <video
              key={selectedVideo}
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleModalTouchStart}
              onTouchEnd={handleModalTouchEnd}
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Wedding Gallery */}
      <section className="section-padding" id="wedding-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Wedding Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/wed.jpg"
                alt="Wedding Event"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/wedding1.jpg"
                alt="Wedding Event"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/wedding.jpg"
                alt="Wedding Event"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Gallery */}
      <section className="section-padding bg-gray-100" id="birthday-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Birthday Celebrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/birthday.jpg"
                alt="Birthday Celebration"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/b2.jpg"
                alt="Birthday Celebration"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/b3.jpg"
                alt="Birthday Celebration"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seminar Gallery */}
      <section className="section-padding" id="seminar-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Seminars & Corporate Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/yg.jpg"
                alt="Seminar Event"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/seminar.jpg"
                alt="Seminar Event"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/event.jpg"
                alt="Seminar Event"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funeral Gallery */}
      <section className="section-padding bg-gray-100" id="funeral-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Funeral Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/funeral.jpg"
                alt="Funeral Service"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/fun1.jpg"
                alt="Funeral Service"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/fun2.jpg"
                alt="Funeral Service"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
