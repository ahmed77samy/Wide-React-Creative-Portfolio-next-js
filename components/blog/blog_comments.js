import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";
import BlogReplay from "./blog_replay";

function BlogComments({ data, id }) {
    const titleRef = useRef(null);
    const commentsRef = useRef({});

    ////////// handleClick //////////
    const handleClick = (e) => {
        let replayEle = [
            ...e.target.parentElement.parentElement.parentElement.children,
        ].filter((e, i) => {
            return e.classList.contains("blog__replays");
        });

        replayEle[0].classList.toggle("d-none");
    };

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");

        data.comments.map((e, i) => {
            onShowAnimation_showText(commentsRef.current[i]);
            return false;
        });
    }, [data, id]);

    return (
        <div className="blogcomments setup__component">
            <div className="container">
                <h3 className="h3__title" ref={titleRef}>
                    {data.comments.length} comments
                </h3>
                {
                    ////////// blog__comments //////////
                }
                <div className="blog__comments">
                    {data.comments.map((e, i) => {
                        return (
                            <div
                                className="blog__comment"
                                key={i}
                                ref={(e) => (commentsRef.current[i] = e)}>
                                {
                                    ////////// comment__image //////////
                                }
                                <div className="comment__image">
                                    <img src={`/image/blog/${e.photo}`} alt="commentphoto" />
                                </div>
                                {
                                    ////////// comment__content //////////
                                }
                                <div className="comment__content">
                                    <div className="d-flex">
                                        <h6 className="text-uppercase m-0">
                                            {e.name} ,
                                        </h6>
                                        <span className="date ml-2">
                                            {e.date}
                                        </span>
                                    </div>
                                    <p className="mb-0 write--one">
                                        {e.comment}
                                    </p>
                                    {
                                        ////////// blog__actions //////////
                                    }
                                    <form className="blog__actions">
                                        <input
                                            className="input__1 input--small"
                                            id="email"
                                            placeholder="Leave Replay"
                                        />
                                        <button className="button__2 btn--small ml-3">
                                            <span className="txt__btn text-uppercase">
                                                replay
                                            </span>
                                        </button>
                                    </form>
                                    {
                                        ////////// blog__show //////////
                                    }
                                    <div className="blog__show">
                                        {e.replay && e.replay.length !== 0 && (
                                            <div className="text-center">
                                                <span
                                                    className="show"
                                                    onClick={handleClick}>
                                                    show {e.replay.length}{" "}
                                                    replay
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    {
                                        ////////// blog__replays //////////
                                    }
                                    {e.replay && e.replay.length !== 0 && (
                                        <BlogReplay data={e.replay} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default BlogComments;
