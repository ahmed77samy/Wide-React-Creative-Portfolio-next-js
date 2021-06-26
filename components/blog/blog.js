import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import BlogItem from "./item";
import { bloglist } from "/public/js/blog";

function Blog() {
    const titleRef = useRef(null);

    ////////// filter bloglist //////////
    const bloglatest = bloglist.filter((e, i) => {
        return i > bloglist.length - 1 - 3;
    });

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    });

    return (
        <div className="blog setup__component">
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
                            <div className="col-12 col-lg-4" key={i}>
                                <BlogItem data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Blog;
