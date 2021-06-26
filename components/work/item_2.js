import { useEffect, useRef } from "react";
import Link from "next/link";
import {
    onShowAnimation_hide,
    onShowAnimation_image,
} from "/public/js/OnShowAnimation";

function WorkItem2({ data }) {
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_image(imageRef.current);
        onShowAnimation_hide(titleRef.current);
    }, []);

    return (
        <div className="work__item">
            {
                ////////// item__image //////////
            }
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
            {
                ////////// item__content //////////
            }
            <div className="item__content">
                <span className="label__4 text-uppercase">{data.filter}</span>
                <Link href={`/portfolio/${data.id}`}>
                    <a className="reset--style">
                        <h3 className="h3__title m-0" ref={titleRef}>
                            {data.title}
                        </h3>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default WorkItem2;
