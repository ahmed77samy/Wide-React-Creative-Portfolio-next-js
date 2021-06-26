import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import People from "./people";
import { team } from "/public/js/team";

function Team() {
    const titleRef = useRef(null);

    const options = {
        settings: {
            overlayColor: "#000000fa",
        },
        thumbnails: {
            thumbnailsAlignment: "center",
        },
    };

    ////////// aniamtion on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="team setup__component">
            <div className="container">
                <div>
                    <span className="label__2">our team</span>
                    <h2 className="h2__title" ref={titleRef}>
                        EXPERT PEOPLE
                    </h2>
                </div>
                <SimpleReactLightbox>
                    {
                        ////////// loop on team item //////////
                    }
                    <SRLWrapper options={options}>
                        <div className="row">
                            {team.map((e, i) => {
                                return (
                                    <div className="col-12 col-lg-3" key={i}>
                                        <People data={e} />
                                    </div>
                                );
                            })}
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
            </div>
        </div>
    );
}

export default Team;
