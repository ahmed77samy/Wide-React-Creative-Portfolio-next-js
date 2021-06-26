import { useEffect, useRef } from "react";
import Link from "next/link";
import {
    onShowAnimation_image,
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function BlogItem({ data }) {
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const dateRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current);
        onShowAnimation_showText(dateRef.current);
        onShowAnimation_image(imageRef.current, "var(--black)");
    }, []);

    return (
        <div className="blog__item">
            {
                ////////// item__image //////////
            }
            <div className="item__image" ref={imageRef}>
                <div className="animate__img">
                    <img src={`/image/blog/${data.photo}`} alt="blog" className="img-fluid" />
                </div>
                <div className="item__social sp__social container">
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
                <Link href={`/blog/${data.id}`}>
                    <a className="reset--style">
                        <h4 className="text-uppercase" ref={titleRef}>
                            {data.title}
                        </h4>
                    </a>
                </Link>
                <span
                    className="write--one label__4 text-uppercase"
                    ref={dateRef}>
                    {data.date}
                </span>
            </div>
        </div>
    );
}

export default BlogItem;
