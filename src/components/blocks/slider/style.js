import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Section = styled.section`
  width: 100%;
`;

export const StyleSwiper = styled(Swiper)`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const StyleSwiperSlide = styled(SwiperSlide)`
  display: grid;
`;

export const AutoplayProgress = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333333;
`;

export const SvgAutoplay = styled.svg`
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
`;

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  grid-area: 1/1/-1/-1;
`;
