import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import Client from "./client";
import { client } from "/public/js/client";

function Clients() {
    const titleRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="cilents setup__component">
            <div className="container">
                {
                    ////////// cilents__title //////////
                }
                <div className="cilents__title">
                    <span className="label__2">our clients</span>
                    <h2 className="h2__title" ref={titleRef}>
                        OUR REPUTATION
                    </h2>
                </div>
                <div className="row">
                    {
                        ////////// loop on cilents //////////
                    }
                    {client.map((e, i) => {
                        return (
                            <div className="col-12 col-sm-6 col-lg-3" key={i}>
                                <Client data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Clients;
