import { useEffect, useRef } from "react";
import { productItem } from "/public/js/experience";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function Products() {
    const titleRef = useRef(null);
    const itemRef = useRef({});

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
        productItem.map((e, i) => {
            onShowAnimation_showText(itemRef.current[i]);
            return false;
        });
    }, []);

    return (
        <div className="products setup__component">
            <div className="container">
                {
                    ////////// products__title //////////
                }
                <div className="products__title">
                    <span className="label__2">services company</span>
                    <h2 className="h2__title" ref={titleRef}>
                        Our best services
                    </h2>
                </div>
                {
                    ////////// products__content //////////
                }
                <div className="products__content">
                    <div className="row">
                        {productItem.map((e, i) => {
                            return (
                                <div className="col-12 col-lg-4" key={i}>
                                    {
                                        ////////// products__item //////////
                                    }
                                    <div
                                        className="products__item"
                                        ref={(e) => (itemRef.current[i] = e)}>
                                        {
                                            ////////// item__header //////////
                                        }
                                        <div className="item__header">
                                            <span className="mr-2">
                                                {e.icon}
                                            </span>
                                            <h4 className="text-uppercase">
                                                {e.title}
                                            </h4>
                                        </div>
                                        <div className="joiner hr__1"></div>
                                        {
                                            ////////// item__body //////////
                                        }
                                        <div className="item__body">
                                            <p className="m-0 write--one">
                                                {e.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
