import { useEffect, useRef } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function Client({ data }) {
    const clientRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(clientRef.current);
    }, []);

    return (
        <div className="client__cilents" ref={clientRef}>
            {
                ////////// Item__First //////////
            }
            <a
                href="https://www.google.com/"
                target="balnk"
                className="Item__First d-flex justify-content-center align-items-center text-capitalize">
                {data.link}.
                <RiArrowRightUpLine />
            </a>
            {
                ////////// Item__second //////////
            }
            <div className="Item__second d-flex justify-content-center align-items-center h-100">
                <img className="img-fluid" src={`/image/clients/${data.photo}`} alt="client" />
            </div>
        </div>
    );
}

export default Client;
