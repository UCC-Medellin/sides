import { useEffect, useState } from "react";

export default function ImageSlider({images}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full md:max-w-[65dvw] mx-auto">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-auto rounded-md transition duration-500"
      />
    </div>
  );
}