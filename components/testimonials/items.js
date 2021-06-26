import { useEffect, useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { gsap } from "gsap";
import {onShowAnimation_image,onShowAnimation_showText} from "/public/js/OnShowAnimation";
import SplitText from "/public/js/SplitText";
import { animation_add, animation_clear } from "/public/js/animation";

function Items({ data, active, clicker, oldactive, handleButtons }) {
    const imgRef = useRef(null);
    const contentRef = useRef(null);
    const descriptionRef = useRef({});

    useEffect(() => {
        ////////// animation on start //////////
        onShowAnimation_showText(contentRef.current);
        onShowAnimation_image(imgRef.current);
    }, []);

    useEffect(() => {
        const eleold = descriptionRef.current[oldactive];
        const elenew = descriptionRef.current[active];

        if (clicker) {
            handleButtons(true);
            ////////// clear ele old //////////
            let clear_spliter = new SplitText(eleold);
            clear_spliter.split();
            gsap.to(elenew, { opacity: 1, pointerEvents: "inherit" });
            animation_clear(clear_spliter);

            ////////// add ele new //////////
            let add_spliter = new SplitText(elenew);
            add_spliter.split();
            animation_add(add_spliter, () => {
                gsap.to(eleold, { opacity: 0, pointerEvents: "none" });
                handleButtons(false);
            });
        }
    }, [active, clicker, oldactive, handleButtons]);

    return (
        <div className="testimonials__items">
            {
                ////////// testimonials__items //////////
            }
            <div className="row align-items-center">
                <div className="col-12 col-md-4">
                    {
                        ////////// items__image //////////
                    }
                    <div className="items__image" ref={imgRef}>
                        <span className="icon">
                            <FaQuoteRight />
                        </span>
                        {data.map((e, i) => {
                            return (
                                <div
                                    className="animate__img"
                                    key={i}
                                    style={{ position: "relative" }}>
                                    <img
                                        src={`/image/about/${e.photo}`}
                                        className={`img-fluid ${
                                            i === active && "active"
                                        }`}
                                        alt="testimonials__image"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    {
                        ////////// items__content //////////
                    }
                    <div className="items__content">
                        <div ref={contentRef}>
                            {
                                ////////////////////
                            }
                            {data.map((e, i) => {
                                return (
                                    <h5
                                        className={`text-uppercase mb-3 ${
                                            i === active && "active"
                                        }`}
                                        key={i}>
                                        {e.name} ,{" "}
                                        <span className="job" key={i}>
                                            {e.job}
                                        </span>
                                    </h5>
                                );
                            })}
                            {
                                ////////////////////
                            }
                            {data.map((e, i) => {
                                return (
                                    <p
                                        data-active={i}
                                        ref={(e) =>
                                            (descriptionRef.current[i] = e)
                                        }
                                        className={`m-0 write--one ${
                                            i === 0 && "active"
                                        }`}
                                        key={i}>
                                        {e.description}
                                    </p>
                                );
                            })}
                            {
                                ////////////////////
                            }
                            {data.map((e, i) => {
                                return (
                                    <span
                                        className={`label__4 date text-uppercase mt-3 d-block ${
                                            i === active && "active"
                                        }`}
                                        key={i}>
                                        {e.date}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;
