import { useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { onShowAnimation_image } from "/public/js/OnShowAnimation";

function WorkItem3({ data, index }) {
    ////////// animation in show //////////
    useEffect(() => {
        onShowAnimation_image(document.querySelector(`.animation_img${index}`));
    }, [index]);

    return (
        <div className="work__item">
            {
                ////////// item__image //////////
            }
            <div className={`item__image animation_img${index}`}>
                <div className="animate__img">
                    <img src={`/image/work/${data.photo}`} alt="workitem" />
                </div>
            </div>
            {
                ////////// item__content //////////
            }
            <div className="item__content">
                {
                    ////////// item__group //////////
                }
                <div className="item__group">
                    <span className="label label__4">{data.filter}</span>
                    <h4 className="text-uppercase">{data.title}</h4>
                    <p className={`write--one animation_p${index}`}>
                        {data.description}
                    </p>
                    <Link href={`/portfolio/${data.id}`}>
                        <a className="button__1 reset--style">
                            <span className="before__btn">
                                <FaArrowRight />
                            </span>
                            <span className="txt__btn text-capitalize">
                                view case
                            </span>
                        </a>
                    </Link>
                </div>
                {
                    ////////// item__group //////////
                }
                <div className="item__group">
                    <div className="sp__social">
                        <h6 className="text-uppercase">share this</h6>
                        <a
                            href="https://www.facebook.com/"
                            className="reset--style">
                            fb{" "}
                        </a>
                        <a href="https://twitter.com/" className="reset--style">
                            tw{" "}
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            className="reset--style">
                            ln{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkItem3;
