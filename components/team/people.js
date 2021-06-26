import { useEffect, useRef } from "react";
import { onShowAnimation_image } from "/public/js/OnShowAnimation";

function People({ data }) {
    const imageRef = useRef(null);

    ////////// aniamtion on show //////////
    useEffect(() => {
        onShowAnimation_image(imageRef.current);
    });

    return (
        <div className="people">
            {
                ////////// people__image //////////
            }
            <div className="people__image" ref={imageRef}>
                <div className="animate__img">
                    <img src={`/image/team/${data.photo}`} alt="team" />
                </div>
            </div>
            {
                ////////// people__title //////////
            }
            <div className="people__title text-center">
                <h5 className="text-uppercase">{data.name}</h5>
                <span className="write--one text-capitalize">{data.job}</span>
            </div>
        </div>
    );
}

export default People;
