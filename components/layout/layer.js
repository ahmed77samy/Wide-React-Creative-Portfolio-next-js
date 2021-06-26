import { useEffect, useRef } from "react";
import { onShowAnimation_image } from "/public/js/OnShowAnimation";
import Link from "next/link";

function Layer({ data, title }) {
    const imageRef = useRef({});

    ////////// animation on show //////////
    useEffect(() => {
        data.map((e, i) => {
            onShowAnimation_image(imageRef.current[i], "var(--sub)");
            return false;
        });
    }, [data]);

    return (
        <div className="layer setup__component__sub">
            <div className="container">
                {
                    ////////// layer__title //////////
                }
                <div className="layer__title">
                    <h3 className="text-uppercase h3__title">{title}</h3>
                </div>
                <div className="row layer__list">
                    {
                        ////////// loop on data //////////
                    }
                    {data.map((e, i) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={i}>
                                <div className="layer__item">
                                    {
                                        ////////// link img //////////
                                    }
                                    <Link href={e.dir}>
                                        <a>
                                            <div
                                                ref={(e) =>
                                                    (imageRef.current[i] = e)
                                                }>
                                                <div className="animate__img">
                                                    <img
                                                        className="img-fluid"
                                                        src={`/image/layout/${e.photo}`}
                                                        alt="page"
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    {
                                        ////////// link description //////////
                                    }
                                    <Link href={e.dir}>
                                        <a className="title reset--style">
                                            <span className="label__1 tag">
                                                {e.tag}
                                            </span>
                                            <h6 className="text-uppercase mb-0 ml-2">
                                                {e.title}
                                            </h6>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Layer;
