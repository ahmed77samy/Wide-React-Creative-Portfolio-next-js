import { useEffect, useRef } from "react";
import Link from "next/link";
import {
    onShowAnimation_hide,
    onShowAnimation_image,
    onShowAnimation_Writer,
} from "/public/js/OnShowAnimation";
import SplitText from "/public/js/SplitText";

function WorkItem({ data }) {
    const descriptionRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        let split = new SplitText(descriptionRef.current);
        split.split();

        onShowAnimation_Writer(descriptionRef.current, split);
        onShowAnimation_hide(titleRef.current);
        onShowAnimation_image(imageRef.current);
    }, []);

    return (
        <div className={`work__item ${data.filter}`}>
            <div className="row align-items-center">
                {
                    ////////// item__image //////////
                }
                <div className="col-12 col-lg-8">
                    <div className="item__image" ref={imageRef}>
                        <div className="animate__img">
                            <img
                                src={`/image/work/${data.photo}`}
                                alt="work-img"
                                className="img-fluid"
                            />
                        </div>
                        <div className="item__social sp__social">
                            <h6 className="text-uppercase">share this</h6>
                            <span>fb</span>
                            <span>tw</span>
                            <span>in</span>
                        </div>
                    </div>
                </div>
                {
                    ////////// item__content //////////
                }
                <div className="col-12 col-lg-4">
                    <div className="item__content">
                        <span className="label__4 text-uppercase">
                            {data.filter}
                        </span>
                        <h3 className="h3__title" ref={titleRef}>
                            {data.title}
                        </h3>
                        <p ref={descriptionRef}>{data.description}</p>
                        <Link href={`/portfolio/${data.id}`}>
                            <a className="button__2 reset--style">
                                <span className="txt__btn reset--style text-capitalize">
                                    discover work
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;
