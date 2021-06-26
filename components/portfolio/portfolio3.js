import { Swiper, SwiperSlide } from "swiper/react";

import { worklist } from "/public/js/work";
import WorkItem3 from "../work/item_3";

function Portfolio3() {
    return (
        <div className="portfolio_3 setup__component">
            <div className="container-fluid">
                {
                    ////////// portfolio__list //////////
                }
                <div className="portfolio__list row">
                    <Swiper
                        slidesPerView={3}
                        speed={1000}
                        threshold={10}
                        grabCursor={true}
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
                        {worklist.map((e, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <WorkItem3 data={e} index={i} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Portfolio3;
