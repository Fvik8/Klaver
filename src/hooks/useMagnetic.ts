import { useRef, useState, useEffect } from "react";

export const useMagnetic = (intensity: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      if (Math.abs(distanceX) < width && Math.abs(distanceY) < height) {
        setPosition({ 
          x: distanceX * intensity, 
          y: distanceY * intensity 
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return { ref, x: position.x, y: position.y };
};
