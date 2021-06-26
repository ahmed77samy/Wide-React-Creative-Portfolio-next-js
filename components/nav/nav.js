import { useEffect, useRef, useState } from "react";

function Nav({ handleClcik, data, filter }) {
    const [active, setActive] = useState(0);
    const ulRef = useRef(null);
    const liRef = useRef({});

    ////////// init li active //////////

    useEffect(() => {
        data.map((e, i) => {
            if (e.label === filter) {
                setActive(i);
            }
            return false;
        });
    }, [data, filter]);

    ////////// change active //////////

    useEffect(() => {
        let ele = Array.of(...ulRef.current.children);
        ele.map((e) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active");
            }
            return false;
        });
        liRef.current[active].classList.add("active");
    }, [active]);

    return (
        <ul className="list-unstyled text-uppercase" ref={ulRef}>
            {data.map((e, i) => {
                return (
                    <li
                        ref={(e) => (liRef.current[i] = e)}
                        key={i}
                        onClick={() => {
                            handleClcik(e.label);
                            setActive(i);
                        }}
                        className={`${filter === e.label && "active"}`}>
                        {e.label}
                    </li>
                );
            })}
        </ul>
    );
}

export default Nav;
