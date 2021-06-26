import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function PortfolioControls({ data, id }) {
    let [prev, setPrev] = useState(0);
    let [next, setNext] = useState(0);

    ////////// animation for control //////////
    useEffect(() => {
        data.map((e, i) => {
            if (e.id === id) {
                ////////// setNext //////////
                setNext(() => {
                    if (i === data.length - 1) {
                        return 0;
                    }
                    return i + 1;
                });

                ////////// setPrev //////////
                setPrev(() => {
                    if (i === 0) {
                        return data.length - 1;
                    }
                    return i - 1;
                });
            }
            return false;
        });
    }, [data, id]);

    return (
        <div className="portfoliocontrols setup__component">
            <div className="container">
                {
                    ////////// portfolio__prev //////////
                }
                <div className="controls portfolio__prev">
                    <Link
                        href={`/portfolio/${data[prev].id}`}
                        >
                        <a className="reset--style">
                            <div>
                                <h6 className="text-uppercase">
                                    {data[prev].title}
                                </h6>
                                <span className="d-flex justify-content-around align-items-center write--one text-capitalize">
                                    <FaChevronLeft /> prev work
                                </span>
                            </div>
                            <img src={`/image/work/${data[prev].photo}`} alt="prev" />
                        </a>
                    </Link>
                </div>
                {
                    ////////// portfolio__next //////////
                }
                <div className="controls portfolio__next">
                    <Link
                        href={`/portfolio/${data[next].id}`}
                        >
                        <a className="reset--style">
                            <img src={`/image/work/${data[next].photo}`} alt="next" />
                            <div>
                                <h6 className="text-uppercase">
                                    {data[next].title}
                                </h6>
                                <span className="d-flex justify-content-around align-items-center write--one text-capitalize">
                                    next work
                                    <FaChevronRight />
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PortfolioControls;
