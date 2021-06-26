import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function Client2({ data }) {
    const clientRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(clientRef.current);
    }, []);

    return (
        <div className="client__cilents" ref={clientRef}>
            {
                ////////// overlay //////////
            }
            <div className="overlay">
                <a href="https://www.google.com" target="balnk">
                    <img className="img-fluid" src={`/image/clients/${data.photo}`} alt="client" />
                </a>
            </div>
        </div>
    );
}

export default Client2;
