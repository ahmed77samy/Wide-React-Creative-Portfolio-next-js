import { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

import { education, work, statistics } from "/public/js/aboutme";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
    const titleRef = useRef(null);
    const statisticsRef = useRef(null);
    const firstgroupRef = useRef(null);
    const secondgroupRef = useRef({});
    const thirdgroupRef = useRef({});

    ////////// animation in start //////////
    useEffect(() => {
        onShowAnimation_showText(firstgroupRef.current);
        onShowAnimation_hide(titleRef.current, "var(--black)");

        education.map((e, i) => {
            onShowAnimation_showText(secondgroupRef.current[i]);
            return false;
        });

        work.map((e, i) => {
            onShowAnimation_showText(thirdgroupRef.current[i]);
            return false;
        });
    }, []);

    ////////// animation count load //////////
    useEffect(() => {
        const items = document.querySelectorAll(".aboutme .countLoad");
        gsap.from(items, {
            textContent: 0,
            duration: 3,
            ease: "Power1.easeIn",
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: statisticsRef.current,
                start: "top 80%",
            },
        });
    }, []);

    return (
        <div className="aboutme setup__component">
            <div className="container">
                {
                    ////////// aboutme__title //////////
                }
                <div className="aboutme__title">
                    <span className="label__2">about me</span>
                    <h2 className="h2__title" ref={titleRef}>
                        main information
                    </h2>
                </div>
                {
                    ////////// aboutme__group //////////
                }
                <div className="row">
                    <div className="col-12">
                        <div className="aboutme__group">
                            <div className="group__description">
                                <h6 className="write--less text-uppercase">
                                    bio
                                </h6>
                            </div>
                            <div className="group__content">
                                <p
                                    className="m-0 write--one"
                                    ref={firstgroupRef}>
                                    Ahmed Samy is a web designer from egypt. He
                                    works in his little studio-home for
                                    galleries around the world. His work has
                                    been featured in the most important
                                    galleries in the five continents. Also,
                                    Kilian is one of the most recognizable
                                    painters in our time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hr__1"></div>
                    {
                        ////////// aboutme__group //////////
                    }
                    <div className="col-12">
                        <div className="aboutme__group">
                            <div className="group__description">
                                <h6 className="write--less text-uppercase">
                                    education
                                </h6>
                            </div>
                            <div className="group__content">
                                {education.map((e, i) => {
                                    return (
                                        <div
                                            className="d-flex flex-column flex-sm-row"
                                            key={i}
                                            ref={(e) =>
                                                (secondgroupRef.current[i] = e)
                                            }>
                                            <div>
                                                <span className="mr-5 label__1">
                                                    {e.date}
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="text-uppercase h5">
                                                    {e.title}
                                                </h6>
                                                <p className="m-0 write--one">
                                                    {e.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="hr__1"></div>
                    {
                        ////////// aboutme__group //////////
                    }
                    <div className="col-12">
                        <div className="aboutme__group">
                            <div className="group__description">
                                <h6 className="write--less text-uppercase">
                                    work history
                                </h6>
                            </div>
                            <div className="group__content">
                                {work.map((e, i) => {
                                    return (
                                        <div
                                            className="d-flex flex-column flex-sm-row"
                                            key={i}
                                            ref={(e) =>
                                                (thirdgroupRef.current[i] = e)
                                            }>
                                            <div>
                                                <span className="mr-5 label__1">
                                                    {e.date}
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="text-uppercase h5">
                                                    {e.title}
                                                </h6>
                                                <p className="m-0 write--one">
                                                    {e.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="hr__1"></div>
                    {
                        ////////// aboutme__statistics //////////
                    }
                    <div className="col-12">
                        <div
                            className="aboutme__statistics row"
                            ref={statisticsRef}>
                            {statistics.map((e, i) => {
                                return (
                                    <div className="col-12 col-lg-4" key={i}>
                                        <div className="statistics__item">
                                            <span className="mr-2 countLoad">
                                                {e.num}
                                            </span>
                                            <h5 className="text-uppercase m-0">
                                                {e.title}
                                            </h5>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
