import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function Contact() {
    const formRef = useRef(null);
    const titleRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(formRef.current);
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="contact setup__component">
            <div className="container">
                <div>
                    <span className="label__2">send your message</span>
                    <h2 className="h2__title" ref={titleRef}>
                        contact us
                    </h2>
                </div>
                <form ref={formRef}>
                    <div className="row">
                        {
                            ////////// contact__groups //////////
                        }
                        <div className="col-12 col-lg-6">
                            {
                                ////////////////////
                            }
                            <div className="contact__group">
                                <label
                                    htmlFor="name"
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
                            <div className="contact__group">
                                <label
                                    htmlFor="email"
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
                            <div className="contact__group h-100">
                                <label
                                    htmlFor="message"
                                    className="text-uppercase">
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
                            <div className="contact__group">
                                <button className="button__2">
                                    <span className="txt__btn text-uppercase">
                                        send Message
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
