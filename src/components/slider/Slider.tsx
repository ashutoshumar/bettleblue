"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Slider.module.css";
import SliderCard from "./sliderCard/SliderCard";

const Slider: React.FC = () => {
  const sliderArray: number[] = [1, 2, 3, 4, 5, 6];
  const [width, setWidth] = useState<number>(0);
  const dragSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dragSliderRef.current) {
      setWidth(dragSliderRef.current.scrollWidth - dragSliderRef.current.offsetWidth);
    }
  }, []);

  const handleScroll = (direction: "left" | "right"): void => {
    const { current } = dragSliderRef;
    const scrollAmount: number = window.innerWidth > 1800 ? 270 : 210;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFTs Video</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon & enjoy Nfts Video</p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={Style.slider_box_itmes} ref={dragSliderRef}>
          <motion.div
            className={Style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((el: number) => (
              <SliderCard key={el}  />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
