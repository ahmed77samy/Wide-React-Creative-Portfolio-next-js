import { useEffect, useRef } from "react";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { onShowAnimation_image } from "/public/js/OnShowAnimation";

function PortfolioParts({ data, id }) {
    const imageRef = useRef({});

    const options = {
        settings: {
            overlayColor: "#000000fa",
        },
        thumbnails: {
            thumbnailsAlignment: "center",
        },
    };

    ////////// animation on show //////////
    useEffect(() => {
        data.parts?.map((e, i) => {
            onShowAnimation_image(imageRef.current[i]);
            return false;
        });
    }, [data, id]);

    return (
        <div className="portfolioparts setup__component">
            <SimpleReactLightbox>
                <SRLWrapper options={options}>
                    <div className="container-fluid">
                        {
                            ////////// loop on data parts //////////
                        }
                        <div className="row justify-content-center">
                            {data.parts.map((e, i) => {
                                return (
                                    <div
                                        className="col-12 col-lg-4 p-1"
                                        key={i}
                                        ref={(e) => (imageRef.current[i] = e)}>
                                        <div className="animate__img">
                                            <img
                                                src={`/image/work/${e}`}
                                                alt="portfolio parts"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    );
}

export default PortfolioParts;
