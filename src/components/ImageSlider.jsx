import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { radialGreenGradientButton, radialGreenGradientButtonHover } from '../utils/gradients';

export default function ImageSlider({images}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const [isHoverLeft,setIsHoverLeft] = useState(false);
  const [isHoverRight,setIsHoverRight] = useState(false);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
  };

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    startTimer(); 
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    startTimer(); 
  };

  return (
    <div className="relative md:flex md:items-center md:gap-[20px] w-full md:max-w-[65dvw] mx-auto">
      <button className="text-white text-xl bg-green-500 p-2 rounded-full aspect-square w-[44px] h-[44px] md:flex items-center justify-center hidden cursor-pointer transition-all duration-300" 
        style={{ 
          background: isHoverLeft ? radialGreenGradientButtonHover : radialGreenGradientButton,
        }}
        onClick={()=>prevSlide()} 
        onMouseEnter={() => setIsHoverLeft(true)}
        onMouseLeave={() => setIsHoverLeft(false)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-auto rounded-md transition duration-500"
      />
      <button className="text-white text-xl bg-green-500 p-2 rounded-full aspect-square w-[44px] h-[44px] md:flex items-center justify-center hidden cursor-pointer transition-all duration-300" 
        style={{ 
          background: isHoverRight ? radialGreenGradientButtonHover : radialGreenGradientButton,
        }}
        onClick={()=>nextSlide()} 
        onMouseEnter={() => setIsHoverRight(true)}
        onMouseLeave={() => setIsHoverRight(false)}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}