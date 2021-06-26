import { useEffect, useRef } from "react";
import { onShowAnimation_image } from "/public/js/OnShowAnimation";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

function BlogParts({ data, id }) {
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
        data.parts.map((e, i) => {
            onShowAnimation_image(imageRef.current[i]);
            return false;
        });
    }, [data, id]);

    return (
        <div className="blogparts setup__component">
            <SimpleReactLightbox>
                <SRLWrapper options={options}>
                    <div className="container">
                        <div className="row m-0">
                            {data.parts.map((e, i) => {
                                return (
                                    <div
                                        className="col-12 col-lg-6 p-1"
                                        key={i}
                                        ref={(e) => (imageRef.current[i] = e)}>
                                        <div className="animate__img">
                                            <img
                                                src={`/image/blog/${e}`}
                                                alt="blog parts"
                                                className="img-fluid"
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

export default BlogParts;
