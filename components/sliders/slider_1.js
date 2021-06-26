import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Parallax, Navigation } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Slider1Item from "./slider_1_item";
import { slider1 } from "/public/js/slider";

SwiperCore.use([Pagination, Parallax, Navigation]);

function Slider1() {
    const [sliderlength, setSliderLength] = useState(0);
    const [sliderwhere, setSliderWhere] = useState(0);

    return (
        <div className="slider">
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
                    nextEl: ".slider .swiper-button-next",
                    prevEl: ".slider .swiper-button-prev",
                }}
                onInit={(sw) => {
                    setSliderLength(sw.snapGrid.length);
                    setSliderWhere(sw.realIndex + 1);
                }}
                pagination={{
                    clickable: true,
                    el: ".slider__content .slider__timeline",
                    type: "progressbar",
                    progressbarFillClass: "timeline__progress",
                }}>
                <div className="container-fluid">
                    {
                        ////////// slider__content //////////
                    }
                    <div className="slider__content">
                        {
                            ////////// sp__social //////////
                        }
                        <div className="sp__social">
                            <a
                                href="https://www.facebook.com/"
                                className="reset--style">
                                fb{" "}
                            </a>
                            <a
                                href="https://twitter.com/"
                                className="reset--style">
                                tw{" "}
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="reset--style">
                                ln{" "}
                            </a>
                        </div>
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
                        {
                            ////////// content__inner //////////
                        }
                        <div className="content__inner">
                            <main>
                                <h1 className="display-1">wide portfolio</h1>
                            </main>
                        </div>
                    </div>
                </div>
                {
                    ////////// loop on SwiperSlide //////////
                }
                {slider1.map((e, i) => {
                    return (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <Slider1Item
                                    data={e}
                                    isActive={isActive}
                                    sliderwhere={sliderwhere}
                                />
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Slider1;
