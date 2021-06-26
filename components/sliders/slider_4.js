import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { slider4 } from "/public/js/slider";
import Slider4Item from "./slider_4_item";

SwiperCore.use([Navigation, Pagination]);

function Slider4() {
    const [sliderlength, setSliderLength] = useState(0);
    const [sliderwhere, setSliderWhere] = useState(0);

    return (
        <div className="slider4">
            {
                ////////// swiper container //////////
            }
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                speed={1600}
                threshold={10}
                parallax={true}
                grabCursor={true}
                onSlideChange={(sw) => {
                    setSliderWhere(sw.realIndex + 1);
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                onInit={(sw) => {
                    setSliderLength(sw.snapGrid.length);
                    setSliderWhere(sw.realIndex + 1);
                }}
                pagination={{
                    clickable: true,
                    el: ".slider4 .slider__timeline",
                    type: "progressbar",
                    progressbarFillClass: "timeline__progress",
                }}>
                {
                    ////////// slider__content //////////
                }
                <div className="slider__content">
                    <div className="row m-0">
                        <div className="col-12 col-lg-6 offset-lg-6">
                            <div
                                className="content__container"
                                data-where={`0${sliderwhere}`}>
                                {
                                    ////////// slider__timeline //////////
                                }
                                <div
                                    className="slider__timeline"
                                    data-where={`0${sliderwhere}`}
                                    data-length={`0${sliderlength}`}></div>
                                {
                                    ////////// slider__controls //////////
                                }
                                <div className="slider__controls">
                                    <button className="swiper-button-next button__arrow">
                                        <FaAngleRight />
                                    </button>
                                    <button className="swiper-button-prev button__arrow">
                                        <FaAngleLeft />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    ////////// loop on SwiperSlide //////////
                }
                {slider4.map((e, i) => {
                    return (
                        <SwiperSlide key={i}>
                            {() => (
                                <Slider4Item
                                    data={e}
                                    index={i}
                                    sliderwhere={sliderwhere}
                                    sliderlength={sliderlength}
                                />
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Slider4;
