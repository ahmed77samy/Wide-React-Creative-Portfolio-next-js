import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import WorkItem3 from "./item_3";
import { worklist } from "/public/js/work";

function Work3() {
    const titleRef = useRef(null);

    ////////// filter worklist //////////
    const filterlist = worklist.filter((e, i) => {
        return i > worklist.length - 1 - 6;
    });

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="work_3 setup__component">
            <div className="container">
                <span className="label__2">our work</span>
                <h2 className="h2__title" ref={titleRef}>
                    AWESOME PORTFOLIO
                </h2>
            </div>
            {
                ////////// work__list //////////
            }
            <div className="work__list">
                <Swiper
                    slidesPerView={3}
                    speed={1000}
                    threshold={10}
                    loop={true}
                    breakpoints={{
                        "@0": {
                            slidesPerView: 1,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                        },
                    }}>
                    {
                        ////////// loop on worklist //////////
                    }
                    {filterlist?.map((e, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <WorkItem3 data={e} index={i} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default Work3;
