"use client";

import { useState, useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
  poster?: string;
  width?: number;
  height?: number;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const AutoplayVideo: React.FC<AutoplayVideoProps> = ({
  src,
  className = "",
  poster,
  width,
  height,
  loop = true,
  muted = true,
  controls = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.3, // video starts playing when 30% visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        // Optionally handle autoplay being prevented by browser policies
      });
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      width={width}
      height={height}
      loop={loop}
      muted={muted}
      playsInline
      controls={controls}
    >
      <source src={src} type={`video/${src.split(".").pop()}`} />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoplayVideo;
