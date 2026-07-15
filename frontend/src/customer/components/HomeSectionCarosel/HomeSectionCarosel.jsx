import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { mens_kurta } from "../../../Data/mens_kurta";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeSectionCarosel = ({data,sectionName}) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const totalItems = items.length;
  const visibleItems = 5; // ek screen me approx items

  const handleNext = () => {
    carouselRef.current.slideNext();
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    carouselRef.current.slidePrev();
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="border">
      <h2 className ="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableDotsControls
          disableButtonsControls
          mouseTracking
          autoWidth
        />

        {/* RIGHT BUTTON */}
        {currentIndex < totalItems - visibleItems && (
          <Button
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              zIndex: 50,
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* LEFT BUTTON */}
        {currentIndex > 0 && (
          <Button
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
              zIndex: 50,
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
