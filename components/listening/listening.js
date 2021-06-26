import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";
import { BsPlay } from "react-icons/bs";

function Listening() {
    const contentRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(contentRef.current);
    }, []);
    return (
        <div className="listening">
            <div className="container-fluid">
                {
                    ////////// listening__content //////////
                }
                <div className="listening__content">
                    <div ref={contentRef}>
                        <div>
                            <h2 className="h2__title text-center">
                                Do you want to relax? <br /> listen now
                            </h2>
                        </div>
                        <div className="play m-auto">
                            <BsPlay />
                        </div>
                    </div>
                </div>
            </div>
            {
                ////////// listening__overlay //////////
            }
            <div className="listening__overlay"></div>
        </div>
    );
}

export default Listening;
