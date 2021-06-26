import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function BlogAuthor({ data, id }) {
    const authorRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(authorRef.current);
    }, [id]);

    return (
        <div className="blogauthor setup__component">
            <div className="container">
                <div className="blog__author" ref={authorRef}>
                    {
                        ////////// author__image //////////
                    }
                    <div className="author__image">
                        <img src={`/image/blog/${data.authorImg}`} alt="blog author" />
                    </div>
                    {
                        ////////// author__content //////////
                    }
                    <div className="author__content">
                        <h5 className="text-uppercase m-0">{data.author}</h5>
                        <p className="mb-0 write--one">{data.authorcomment}</p>
                        <div className="sp__social">
                            <span>fb</span>
                            <span>tw</span>
                            <span>in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogAuthor;
