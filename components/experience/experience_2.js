import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
    onShowAnimation_hide,
    onShowAnimation_image,
    onShowAnimation_Writer,
} from "/public/js/OnShowAnimation";
import SplitText from "/public/js/SplitText";

gsap.registerPlugin(ScrollTrigger);

function Experience2() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const progressRef = useRef({});
    const progressValue = useRef({});

    const [progress] = useState([
        {
            title: "java script",
            value: "97",
        },
        {
            title: "creative",
            value: "94",
        },
        {
            title: "php",
            value: "80",
        },
    ]);

    ////////// animation prgressbar //////////
    useEffect(() => {
        progress.map((e, i) => {
            let tl = new TimelineMax({
                scrollTrigger: {
                    trigger: progressRef.current[i],
                    start: "top 80%",
                },
                onUpdate: function () {
                    if (progressValue.current[i]) {
                        progressValue.current[i].innerHTML = Math.floor(
                            tl.progress() * e.value
                        );
                    }
                },
            });
            tl.to(progressRef.current[i], 2, {
                value: e.value,
            });

            return false;
        });
    }, [progress]);

    ////////// animation in show //////////
    useEffect(() => {
        let spliter = new SplitText(descriptionRef.current);
        spliter.split();

        onShowAnimation_image(imageRef.current);
        onShowAnimation_Writer(descriptionRef.current, spliter);
        onShowAnimation_hide(titleRef.current);
    }, []);

    return (
        <div className="experience2 setup__component">
            <div className="container">
                <div>
                    <span className="label__2">our experience</span>
                    <h2 className="h2__title">Check my cv</h2>
                </div>
                <div className="row align-items-center">
                    {
                        ////////// experience__image //////////
                    }
                    <div className="col-12 col-lg-6">
                        <div className="experience__image" ref={imageRef}>
                            <div className="animate__img">
                                <img
                                    src="/image/experience/1.jpg"
                                    alt="i'm"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        {
                            ////////// experience__content //////////
                        }
                        <div className="experience__content">
                            <div>
                                <span className="label__4">Web Designer</span>
                                <h4 className="text-uppercase" ref={titleRef}>
                                    ahmed samy
                                </h4>
                            </div>
                            <p className="write--one m-0" ref={descriptionRef}>
                                My name is Bernard Sydney. I am a Web Developer,
                                and I'm very passionate and dedicated to my work
                            </p>
                        </div>
                        {
                            ////////// experience__prgoress //////////
                        }
                        <div className="experience__prgoress">
                            {progress.map((e, i) => {
                                return (
                                    <div className="group__prgoress" key={i}>
                                        {
                                            ////////// prgoress__content //////////
                                        }
                                        <div className="prgoress__content">
                                            <h6 className="m-0 text-uppercase">
                                                {e.title}
                                            </h6>
                                            <span
                                                ref={(e) =>
                                                    (progressValue.current[i] =
                                                        e)
                                                }>
                                                0
                                            </span>
                                        </div>
                                        {
                                            ////////// progress //////////
                                        }
                                        <progress
                                            ref={(e) =>
                                                (progressRef.current[i] = e)
                                            }
                                            max="100"
                                            value="0"></progress>
                                    </div>
                                );
                            })}
                        </div>
                        {
                            ////////// button__2 //////////
                        }
                        <Link href="/main/home_personal">
                            <a className="button__2 btn--small reset--style">
                                <span className="txt__btn reset--style text-capitalize">
                                    download cv
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience2;
