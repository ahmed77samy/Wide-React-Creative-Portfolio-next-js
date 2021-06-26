import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { worklist } from "/public/js/work";
import WorkItem4 from "../work/item_4";
import { navwork } from "/public/js/nav";
import Nav from "../nav/nav";

function Portfolio4() {
    const filterRef = useRef(null);

    const [filter, setFilter] = useState("all");
    const [empty, setEmpty] = useState(false);

    ////////// filter //////////

    useEffect(() => {
        const children = [...filterRef.current.children];

        ////////// filter target ele hide //////////

        let t_hide = children.filter((e) => {
            return filter === "all" ? false : !e.classList.contains(filter);
        });

        t_hide.map((e) => {
            e.style.opacity = 0;

            setTimeout(() => {
                e.style.display = "none";
                ScrollTrigger.refresh();
            }, 300);

            return false;
        });

        ////////// filter target ele show //////////

        let t_show = children.filter((e) => {
            return filter === "all" ? true : e.classList.contains(filter);
        });

        if (t_show.length === 0) {
            setEmpty((e) => true);
        } else {
            setEmpty((e) => false);
            t_show.map((e) => {
                e.style.display = "block";

                setTimeout(() => {
                    e.style.opacity = 1;
                }, 300);
                return false;
            });
        }
    }, [filter]);

    return (
        <div className="portfolio_4 setup__component">
            <div className="container">
                {
                    ////////// portfolio__nav //////////
                }
                <div className="portfolio__nav">
                    <Nav
                        handleClcik={(e) => {
                            setFilter(e);
                        }}
                        filter={filter}
                        data={navwork}
                    />
                </div>
                {empty && (
                    <div className="col-12 text-center text-uppercase">
                        <h3>
                            This filter ({filter}) does not contain any items
                        </h3>
                    </div>
                )}
                {
                    ////////// portfolio__list //////////
                }
                <div className="portfolio__list row" ref={filterRef}>
                    {worklist.map((e, i) => {
                        return (
                            <div
                                className={`item__parent col-12 col-md-6 ${e.filter}`}
                                key={i}>
                                <WorkItem4 data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Portfolio4;
