import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Slider7Item({ data, isActive, sliderwhere }) {
    const titleRef = useRef(null);

    ////////// animation on change //////////
    useEffect(() => {
        if (isActive) {
            titleRef.current.style.opacity = 1;
        } else if (!isActive) {
            if (sliderwhere) {
                titleRef.current.style.opacity = 0;
            }
        }
    }, [isActive, sliderwhere]);

    return (
        <div className="slider__item">
            <img
                src={`/image/banner/${data.photo}`}
                alt="sliderimage"
                data-swiper-parallax="300"
                data-swiper-parallax-duration="1500"
            />
            {
                ////////// item__content //////////
            }
            <div
                className="item__content"
                data-swiper-parallax="600"
                data-swiper-parallax-duration="1500">
                <div className="container">
                    <div>
                        <h2
                            className="display-1 mb-4 text-center"
                            ref={titleRef}>
                            {data.title}
                        </h2>
                        <Link href="/slider/vertical">
                            <a className="button__1 m-auto reset--style">
                                <span className="before__btn">
                                    <FaArrowRight />
                                </span>
                                <span className="txt__btn text-capitalize">
                                    discover work
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider7Item;
