import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import { layerhome, layerslider, layerportfolio } from "/public/js/layout";
import Layer from "./layer";

function Layout() {
    const titleRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--sub)");
    }, []);

    return (
        <div className="layout setup__component">
            <div className="container">
                {
                    ////////// layout__title //////////
                }
                <div className="layout__title">
                    <span className="label__2">components</span>

                    <h2 className="h2__title" ref={titleRef}>
                        prefect layout
                    </h2>
                </div>
                {
                    ////////// layout__layers //////////
                }
                <div className="layout__layers">
                    <Layer data={layerhome} title="home page layer" />
                    <Layer data={layerslider} title="slider layer" />
                    <Layer data={layerportfolio} title="portfolio layer" />
                </div>
            </div>
        </div>
    );
}

export default Layout;
