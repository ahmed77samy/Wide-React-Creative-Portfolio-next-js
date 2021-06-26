import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import Items from "./items";
import { clients } from "/public/js/testimonials";

function Testimonials() {
    const [active, setActive] = useState(0);
    const [oldactive, setOldActive] = useState(0);
    const [clicker, setClicker] = useState(false);
    const [disabeld, setDisabeld] = useState(false);
    const titleRef = useRef(null);

    ////////// increase //////////
    const increase = () => {
        if (!clicker) {
            setClicker(true);
        }
        if (clicker) {
            setOldActive(active);
        }
        setActive((ac) =>
            ac >= clients.length - 1 ? (ac = 0) : (ac = ac + 1)
        );
    };

    ////////// decrease //////////
    const decrease = () => {
        if (!clicker) {
            setClicker(true);
        }
        if (clicker) {
            setOldActive(active);
        }
        setActive((ac) =>
            ac <= 0 ? (ac = clients.length - 1) : (ac = ac - 1)
        );
    };

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="testimonials setup__component">
            <div className="container">
                <div>
                    <span className="label__2">our testimonials</span>
                    <h2 className="h2__title" ref={titleRef}>
                        they trust us
                    </h2>
                </div>
                {
                    ////////// testimonials__list //////////
                }
                <div
                    className="testimonials__list"
                    data-active={`0${active + 1}`}>
                    <Items
                        data={clients}
                        active={active}
                        oldactive={oldactive}
                        clicker={clicker}
                        handleButtons={setDisabeld}
                    />
                </div>
                {
                    ////////// testimonials__controls //////////
                }
                <div className="testimonials__controls">
                    <button
                        className="button__arrow prev mr-4"
                        onClick={decrease}
                        disabled={disabeld}>
                        <FaAngleLeft />
                    </button>
                    <button
                        className="button__arrow next"
                        onClick={increase}
                        disabled={disabeld}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
