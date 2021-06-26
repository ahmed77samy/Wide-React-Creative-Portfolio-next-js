import { useContext, useEffect, useRef } from "react";
import { FaTimes, FaEquals } from "react-icons/fa";
import { Power3, TweenMax } from "gsap";

import { contextNavbar } from "/public/context/index";

function Btnmenu() {
    const sptrueRef = useRef(null);
    const spfalseRef = useRef(null);
    let { menustatus, toggleStatus } = useContext(contextNavbar);

    function animate(ele, opacity, pointerEvents) {
        TweenMax.to(ele, 0.3, {
            opacity,
            ease: Power3,
            pointerEvents,
        });
    }

    {
        ////////// handleClick //////////
    }
    const handleClick = () => {
        if (!menustatus) {
            animate(spfalseRef.current, 0);
            setTimeout(() => {
                toggleStatus();
            }, 200);
        } else {
            let menu = document.querySelector("header .menu__header");
            animate(menu, 0, "none");
            animate(sptrueRef.current, 0);
            setTimeout(() => {
                toggleStatus();
            }, 200);
        }
    };

    {
        ////////// animate menu //////////
    }

    useEffect(() => {
        if (menustatus) {
            let menu = document.querySelector("header .menu__header");
            animate(menu, 1, "all");
            animate(sptrueRef.current, 1);
        } else {
            animate(spfalseRef.current, 1);
        }
    }, [menustatus]);

    return (
        <div className="btnmenu__header d-flex d-lg-none justify-content-end">
            {menustatus ? (
                <span className="spmenu" ref={sptrueRef}>
                    <FaTimes onClick={handleClick} />
                </span>
            ) : (
                <span className="spmenu" ref={spfalseRef}>
                    <FaEquals onClick={handleClick} />
                </span>
            )}
        </div>
    );
}

export default Btnmenu;
