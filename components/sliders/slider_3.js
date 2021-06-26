import { useState } from "react";
import { FaGg, FaRegClock, FaArrowRight, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

import { slider3 } from "/public/js/slider";

function Slider3() {
    const [feat] = useState([
        {
            title: "Available all day long",
            description:
                "lorem Ipsum is simply dummy text orem Ipsum is simply dummy text orem Ipsum is simply",
            icon: <FaGg />,
        },
        {
            title: "I work full time",
            description:
                "lorem Ipsum is simply dummy text orem Ipsum is simply dummy text orem Ipsum is simply",
            icon: <FaRegClock />,
        },
    ]);

    return (
        <div
            className="slider3"
            style={{
                background: `url("/image/banner/${slider3.photo}") center`,
                backgroundSize: "cover",
            }}>
            <div className="overlay">
                <div className="container">
                    <div className="slider__content">
                        {
                            ////////// content_title //////////
                        }
                        <div className="content__title text-center">
                            <h1 className="text-uppercase m-0 display-3">
                                i'm free lancer
                            </h1>
                        </div>
                        {
                            ////////// content_feat //////////
                        }
                        <div className="content__feat row d-none d-sm-flex">
                            {
                                ////////// loop on feat item //////////
                            }
                            {feat.map((e, i) => {
                                return (
                                    <div className="col-12 col-lg-6" key={i}>
                                        <div className="item__group">
                                            <div className="group__icon">
                                                <span>{e.icon}</span>
                                            </div>
                                            <div className="group__content">
                                                <h3 className="text-uppercase">
                                                    {e.title}
                                                </h3>
                                                <p className="m-0 write--one">
                                                    {e.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {
                            ////////// button__1 //////////
                        }
                        <Link href="/main/home_personal">
                            <a className="button__1 mx-auto reset--style">
                                <span className="before__btn">
                                    <FaArrowRight />
                                </span>
                                <span className="txt__btn text-capitalize">
                                    hire me now
                                </span>
                            </a>
                        </Link>
                        {
                            ////////// sp__social //////////
                        }
                        <div className="sp__social">
                            <a
                                href="https://www.facebook.com/"
                                className="reset--style">
                                fb{" "}
                            </a>
                            <a
                                href="https://twitter.com/"
                                className="reset--style">
                                tw{" "}
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="reset--style">
                                ln{" "}
                            </a>
                        </div>
                        {
                            ////////// button__scroll //////////
                        }
                        <button
                            className="button__scroll d-none d-sm-block"
                            onClick={() => {
                                window.scrollTo({
                                    top: window.innerHeight,
                                    behavior: "smooth",
                                });
                            }}>
                            <p className="sp__container">
                                <span className="show">scroll'down</span>
                                <span className="hide">scroll'down</span>
                            </p>
                            <span>
                                <FaChevronDown />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider3;
