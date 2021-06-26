import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import { slider7 } from "/public/js/slider";
import Slider7Item from "./slider_7_item";

SwiperCore.use([Navigation, Pagination]);

function Slider7() {
    const [sliderlength, setSliderLength] = useState(0);
    const [sliderwhere, setSliderWhere] = useState(0);

    return (
        <div className="slider7">
            {
                ////////// swiper container //////////
            }
            <Swiper
                direction="vertical"
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
                    el: ".slider7 .slider__timeline",
                    type: "progressbar",
                    progressbarFillClass: "timeline__progress",
                }}>
                {
                    ////////// slider__content //////////
                }
                <div className="container-fluid">
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
                                <FaAngleDown />
                            </button>
                            <button className="swiper-button-prev button__arrow">
                                <FaAngleUp />
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
                {slider7.map((e, i) => {
                    return (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <Slider7Item
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

export default Slider7;
