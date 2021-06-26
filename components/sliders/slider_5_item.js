import { useEffect, useRef } from "react";
import Link from "next/link";
import { animation_show, animation_hide } from "/public/js/animation";

function Slider5Item({ data, sliderwhere, index }) {
    const contentRef = useRef(null);

    ////////// animation on change //////////
    useEffect(() => {
        // show //
        if (sliderwhere) {
            if (sliderwhere - 1 === index) {
                animation_show(contentRef.current, {
                    duration: 1,
                    delay: 0.3,
                });
            }
            // hide //
            else {
                animation_hide(contentRef.current, {
                    duration: 1,
                    delay: 0.3,
                });
            }
        }
    }, [index, sliderwhere]);

    return (
        <div className="slider__item">
            <div className="row m-0">
                {
                    ////////// left //////////
                }
                <div className="col-12 col-lg-6 p-0">
                    <img
                        src={`/image/banner/${data.photo}`}
                        alt="sliderimage"
                        data-swiper-parallax="200%"
                        data-swiper-parallax-duration="1500"
                    />
                </div>
                {
                    ////////// right //////////
                }
                <div className="col-12 col-lg-6 p-0">
                    <img
                        className="d-none d-lg-block"
                        src={`/image/banner/${data.photo}`}
                        alt="sliderimage"
                        data-swiper-parallax="200%"
                        data-swiper-parallax-duration="1500"
                        style={{
                            filter: "grayscale(100%)",
                        }}
                    />

                    {
                        ////////// item__content //////////
                    }
                    <div
                        className="item__content"
                        data-swiper-parallax="200%"
                        data-swiper-parallax-duration="1500"
                        ref={contentRef}>
                        {
                            ////////// item__group //////////
                        }
                        <div className="item__group">
                            <span className="label__2">{data.tag}</span>
                            <h2 className="h2__title">{data.title}</h2>
                        </div>
                        {
                            ////////// item__group //////////
                        }
                        <div className="item__group">
                            <p className="write--one">{data.description}</p>
                        </div>
                        {
                            ////////// item__group //////////
                        }
                        <div className="item__group">
                            <Link href="/slider/duplicated_gray">
                                <a className="button__2 reset--style">
                                    <span className="txt__btn reset--style text-capitalize">
                                        discover work
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider5Item;
