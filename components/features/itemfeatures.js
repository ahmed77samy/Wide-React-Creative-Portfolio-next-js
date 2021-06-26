import { useEffect, useRef } from "react";
// import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function ItemFeatures({ data }) {
    const featRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        // onShowAnimation_showText(featRef.current);
    }, []);

    return (
        <div className="features__feat" ref={featRef}>
            {
                ////////// feat__image //////////
            }
            <div className="feat__image">
                <img className="img-fluid" src={`/image/featuers/${data.photo}`} alt="feat" />
            </div>
            {
                ////////// feat__details //////////
            }
            <div className="feat__details text-center text-capitalize">
                {data.title}
            </div>
        </div>
    );
}

export default ItemFeatures;
