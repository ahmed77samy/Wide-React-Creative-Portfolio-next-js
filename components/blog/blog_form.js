import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function BlogForm({ id }) {
    const titleRef = useRef(null);
    const formRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
        onShowAnimation_showText(formRef.current);
    }, [id]);

    return (
        <form className="blogform setup__component">
            <div className="container">
                <h3 className="h3__title" ref={titleRef}>
                    add comment
                </h3>
                <div className="row" ref={formRef}>
                    {
                        ////////// blog__groups //////////
                    }
                    <div className="col-12 col-lg-6">
                        {
                            ////////////////////
                        }
                        <div className="blog__group">
                            <label
                                htmlFor="your name"
                                className="text-uppercase">
                                name
                            </label>
                            <input
                                className="input__1"
                                id="name"
                                placeholder="Type Your Name"
                            />
                        </div>
                        {
                            ////////////////////
                        }
                        <div className="blog__group">
                            <label
                                htmlFor="your email"
                                className="text-uppercase">
                                email
                            </label>
                            <input
                                className="input__1"
                                id="email"
                                placeholder="Type Your Email"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {
                            ////////////////////
                        }
                        <div className="blog__group h-100">
                            <label htmlFor="message" className="text-uppercase">
                                your message
                            </label>
                            <textarea
                                className="input__1"
                                id="message"
                                placeholder="Type Your message"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        {
                            ////////////////////
                        }
                        <div className="blog__group">
                            <button className="button__2">
                                <span className="txt__btn text-uppercase">
                                    send Message
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BlogForm;
