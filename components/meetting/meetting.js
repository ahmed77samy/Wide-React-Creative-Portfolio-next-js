import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";
import { BsPlay } from "react-icons/bs";

function Meetting() {
    const contentRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(contentRef.current);
    }, []);

    return (
        <div className="metting">
            <div className="container-fluid">
                {
                    ////////// metting__content //////////
                }
                <div className="metting__content">
                    <div ref={contentRef}>
                        <div>
                            <h2 className="h2__title text-center">
                                Are you late for the meeting? <br /> watch now
                            </h2>
                        </div>
                        <div className="play m-auto">
                            <BsPlay />
                        </div>
                    </div>
                </div>
            </div>
            {
                ////////// metting__overlay //////////
            }
            <div className="metting__overlay"></div>
        </div>
    );
}

export default Meetting;
