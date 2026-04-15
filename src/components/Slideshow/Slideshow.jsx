import { useState } from "react";
import "./Slideshow.scss";

import arrowLeft from "../../assets/arrow_back.svg";
import arrowRight from "../../assets/arrow_forward.svg";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const nextSlide = () =>
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1);
  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1);

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt="Logement"
        className="slideshow__image"
      />

      {total > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={prevSlide}
          >
            <img src={arrowLeft} alt="Image précédente" />
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextSlide}
          >
            <img src={arrowRight} alt="Image suivante" />
          </button>

          <p className="slideshow__counter">
            {currentIndex + 1} / {total}
          </p>
        </>
      )}
    </div>
  );
}

export default Slideshow;
