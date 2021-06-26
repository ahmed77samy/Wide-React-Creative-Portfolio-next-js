import { useEffect, useRef } from "react";
import { FaHubspot, FaRegClock, FaIoxhost } from "react-icons/fa";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function Contact2() {
    const titleRef = useRef(null);
    const detailsRef = useRef(null);
    const formRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(detailsRef.current);
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
                <div className="row" style={{ rowGap: "var(--px50)" }}>
                    {
                        ////////// contact__details //////////
                    }
                    <div className="col-12 col-lg-5">
                        <div className="contact__details" ref={detailsRef}>
                            {
                                ////////// contact__groups //////////
                            }
                            <div className="contact__group">
                                <div className="mr-2">
                                    <FaHubspot />
                                </div>
                                <div>
                                    <h5 className="text-uppercase">
                                        center support
                                    </h5>
                                    <p className="m-0 write--one">
                                        the idea started form the amazing
                                        <br />
                                        sunrise we have here in our park.
                                    </p>
                                </div>
                            </div>
                            {
                                ////////////////////
                            }
                            <div className="contact__group">
                                <div className="mr-2">
                                    <FaRegClock />
                                </div>
                                <div>
                                    <h5 className="text-uppercase">hours</h5>
                                    <p className="m-0 write--one text-uppercase">
                                        MON-FRI 9:00 - 20:00
                                        <br />
                                        WEEKENDS 7:00 - 23:00
                                    </p>
                                </div>
                            </div>
                            {
                                ////////////////////
                            }
                            <div className="contact__group">
                                <div className="mr-2">
                                    <FaIoxhost />
                                </div>
                                <div>
                                    <h5 className="text-uppercase">shifts</h5>
                                    <p className="m-0 write--one text-uppercase">
                                        first shifts 9:00 - 15:00
                                        <br />
                                        second shifts 15:00 - 20:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <form ref={formRef}>
                            <div className="row">
                                {
                                    ////////// form //////////
                                }
                                <div className="col-12">
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
                                </div>
                                {
                                    ////////////////////
                                }
                                <div className="col-12">
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
                                {
                                    ////////////////////
                                }
                                <div className="col-12">
                                    <div className="contact__group">
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
                                {
                                    ////////////////////
                                }
                                <div className="col-12">
                                    <button className="button__2">
                                        <span className="txt__btn text-uppercase">
                                            send Message
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact2;
