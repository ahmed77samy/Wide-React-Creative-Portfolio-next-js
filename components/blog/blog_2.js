import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import BlogItem2 from "./item_2";
import { bloglist } from "/public/js/blog";

function Blog() {
    const titleRef = useRef(null);
    const sizeitem = [1, 4];

    ////////// filter bloglist //////////
    const bloglatest = bloglist.filter((e, i) => {
        return i > bloglist.length - 1 - 4;
    });

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="blog_2 setup__component">
            <div className="container">
                <div>
                    <span className="label__2">our blog</span>
                    <h2 className="h2__title" ref={titleRef}>
                        LATEST BLOG POSTS
                    </h2>
                </div>
                {
                    ////////// loop on BlogItem //////////
                }
                <div className="row">
                    {bloglatest.map((e, i) => {
                        return (
                            <div
                                className={`col-12 ${
                                    sizeitem.some((e) => i + 1 === e)
                                        ? "col-lg-8"
                                        : "col-lg-4"
                                }`}
                                key={i}>
                                <BlogItem2 data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Blog;
