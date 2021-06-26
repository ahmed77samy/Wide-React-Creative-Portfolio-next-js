import { useState, useEffect, useRef } from "react";
import SplitText from "/public/js/SplitText";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";
import { animation_clear, animation_add } from "/public/js/animation";
import gsap from "gsap";

function SocialItem({ data, title }) {
    const [active, setActive] = useState(0);
    const [clicker, setClicker] = useState(false);
    const groupRef = useRef(null);

    ////////// handleClick //////////
    const handleClick = (i) => {
        let eleold = document.querySelector(
            `.animation${title} .clients__testimonials p[data-active="${active}"]`
        );
        let elenew = document.querySelector(
            `.animation${title} .clients__testimonials p[data-active="${i}"]`
        );

        if (i !== active) {
            setClicker(true);
            ////////// clear //////////

            let clear_split = new SplitText(eleold);
            clear_split.split();
            gsap.to(elenew, { opacity: 1, pointerEvents: "inherit" });
            animation_clear(clear_split, () => {});

            setActive(i);
            ////////// add //////////

            let write_split = new SplitText(elenew);
            write_split.split();

            animation_add(write_split, () => {
                gsap.to(eleold, { opacity: 0, pointerEvents: "none" });
                setClicker(false);
            });
        }
    };

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(groupRef.current);
    }, []);

    return (
        <div className={`group__testimonials animation${title}`} ref={groupRef}>
            <p className="text-uppercase label__3 label">{title}</p>
            {
                ////////// clients__testimonials //////////
            }
            <div className="clients__testimonials">
                {data.map((e, i) => {
                    return (
                        <label
                            key={i}
                            className={`text-capitalize ${
                                i === active && "active"
                            }`}>
                            {e.name} , {e.job}
                        </label>
                    );
                })}
                <div style={{ position: "relative" }}>
                    {data.map((e, i) => {
                        return (
                            <p
                                key={i}
                                data-active={i}
                                className={`write--one ${i === 0 && "active"}`}>
                                {e.description}
                            </p>
                        );
                    })}
                </div>
            </div>
            {
                ////////// control__testimonials //////////
            }
            <div className="control__testimonials sp__social">
                {data.map((e, i) => {
                    return (
                        <span
                            className={`${i === active && "active"} ${
                                clicker && "disabeld"
                            }`}
                            onClick={() => handleClick(i)}
                            key={i}>
                            0{i + 1}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default SocialItem;
