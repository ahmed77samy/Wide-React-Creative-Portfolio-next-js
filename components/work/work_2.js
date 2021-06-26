import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";
import { worklist } from "/public/js/work";
import WorkItem2 from "./item_2";

function Work2() {
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
        <div className="work_2 setup__component">
            <div className="container-fluid">
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <span className="label__2">our work</span>
                        <h2 className="h2__title" ref={titleRef}>
                            Latest product
                        </h2>
                    </div>
                </div>

                <div className="work_list row">
                    {
                        ////////// loop on worklist //////////
                    }
                    {filterlist.map((e, i) => {
                        return (
                            <div
                                className="item__parent col-12 col-md-6 col-lg-4"
                                key={i}>
                                <WorkItem2 data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Work2;
