import React, { useRef } from "react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { StyleSwiper, AutoplayProgress, SvgAutoplay, StyleSwiperSlide, Section, Img } from "./style";

function Slider({ imagesBackground }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Section>
      <StyleSwiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        loop="true"
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {imagesBackground.map((image, index) => {
          return (
            <StyleSwiperSlide key={index}>
              <picture>
                <source srcSet={`${image.webp} 1x, ${image.webp2} 2x`} type="image/webp" />
                <Img src={image.src} srcSet={image.srcSet} alt="nature" />
              </picture>
            </StyleSwiperSlide>
          );
        })}
        <AutoplayProgress slot="container-end">
          <SvgAutoplay viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </SvgAutoplay>
          <span ref={progressContent}></span>
        </AutoplayProgress>
      </StyleSwiper>
    </Section>
  );
}

export default Slider;
