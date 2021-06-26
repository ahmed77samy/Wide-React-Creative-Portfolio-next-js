import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function BlogControls({ data, id }) {
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
        <div className="blogcontrols setup__component">
            <div className="container">
                {
                    ////////// blog__prev //////////
                }
                <div className="controls blog__prev">
                    <Link
                        href={`/blog/${data[prev].id}`}
                        >
                        <a className="reset--style">
                            <div>
                                <h6 className="text-uppercase text-center">
                                    {data[prev].title}
                                </h6>
                                <span className="d-flex justify-content-around align-items-center write--one text-capitalize">
                                    <FaChevronLeft /> prev work
                                </span>
                            </div>
                            <img src={`/image/blog/${data[prev].photo}`} alt="prev" />
                        </a>
                    </Link>
                </div>
                {
                    ////////// blog__next //////////
                }
                <div className="controls blog__next">
                    <Link
                        href={`/blog/${data[next].id}`}
                        >
                        <a className="reset--style">
                            <img src={`/image/blog/${data[next].photo}`} alt="next" />
                            <div>
                                <h6 className="text-uppercase  text-center">
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

export default BlogControls;
