import { useEffect, useRef } from "react";
import Link from "/public/js/activelink";

function Ulitems({ details }) {
    const liRef = useRef(null);

    useEffect(() => {
        {
            ////////// drop down in mobile //////////
        }
        if (liRef.current) {
            liRef.current.onclick = function () {
                for (const item of document.querySelectorAll("ul .dropdown")) {
                    if (item !== this.querySelector("ul")) {
                        item.classList.remove("show");
                    }
                }
                this.querySelector("ul").classList.toggle("show");
            };
        }
    }, []);
    return (
        <li ref={details.dropdown && liRef}>
            <Link  href={details.target} exact={details.target === "/"} activeClassName="active">
                <a className="reset--style" onClick={(e) => {
                    details.dropdown && e.preventDefault();
                }}>
                    {details.title}
                </a>
            </Link>
            {
                ////////// drop down //////////
            }
            {details.dropdown && (
                <ul className="dropdown list-unstyled">
                    {details.dropdown.map((e, i) => {
                        return (
                            <li key={i}>
                                <Link href={e.target} activeClassName="active">
                                    <a className="reset--style">
                                        {e.title}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
}

export default Ulitems;
