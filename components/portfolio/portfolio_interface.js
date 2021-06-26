import { useEffect, useRef } from "react";
import Link from "next/link";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function PortfolioInterface({ data, id }) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const aboutRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
        onShowAnimation_showText(aboutRef.current);
        onShowAnimation_showText(descriptionRef.current);
    }, [id]);

    const options = {
        settings: {
            overlayColor: "#000000fa",
        },
        thumbnails: {
            showThumbnails: false,
        },
    };

    return (
        <div className="portfoliointerface">
            <div className="container">
                <div className="row align-items-center">
                    {
                        ////////// portfolio__image //////////
                    }
                    <div className="col-12 col-lg-6 ">
                        <div className="portfolio__image">
                            <SimpleReactLightbox>
                                <SRLWrapper options={options}>
                                    <img
                                        src={`/image/work/${data.photo}`}
                                        alt="portfolio interface"
                                    />
                                </SRLWrapper>
                            </SimpleReactLightbox>
                            <div className="item__social sp__social">
                                <h6 className="text-uppercase">share this</h6>
                                <span>fb</span>
                                <span>tw</span>
                                <span>in</span>
                            </div>
                        </div>
                    </div>
                    {
                        ////////// portfolio__content //////////
                    }
                    <div className="col-12 col-lg-6">
                        <div className="portfolio__content">
                            <h1 className="h2__title" ref={titleRef}>
                                {data.title}
                            </h1>
                            <p className="write--one" ref={descriptionRef}>
                                {data.description}
                            </p>
                            {
                                ////////// portfolio__about //////////
                            }
                            <div
                                className="portfolio__about row"
                                ref={aboutRef}>
                                <div className="col-12 col-xl-6">
                                    <section>
                                        <h6 className="text-uppercase m-0">
                                            clients :
                                        </h6>
                                        <span className="write--one text-capitalize">
                                            {data.clients}
                                        </span>
                                    </section>
                                </div>
                                {
                                    //////////  //////////
                                }
                                <div className="col-12 col-xl-6">
                                    <section>
                                        <h6 className="text-uppercase m-0">
                                            categories :
                                        </h6>
                                        <span className="write--one text-capitalize">
                                            {data.filter}
                                        </span>
                                    </section>
                                </div>
                                {
                                    //////////  //////////
                                }
                                <div className="col-12 col-xl-6">
                                    <section>
                                        <h6 className="text-uppercase m-0">
                                            Published :
                                        </h6>
                                        <span className="write--one text-capitalize">
                                            {data.Published}
                                        </span>
                                    </section>
                                </div>
                                {
                                    //////////  //////////
                                }
                                <div className="col-12 col-xl-6">
                                    <section>
                                        <h6 className="text-uppercase m-0">
                                            awards :
                                        </h6>
                                        <span className="write--one text-capitalize">
                                            {data.awards}
                                        </span>
                                    </section>
                                </div>
                            </div>
                            {
                                //////////  //////////
                            }
                            <button className="button__2">
                                <Link href={`/portfolio/${id}`}>
                                    <a className="txt__btn reset--style text-capitalize">
                                        visit project
                                    </a>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioInterface;
