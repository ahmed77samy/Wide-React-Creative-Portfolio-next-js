import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

function BlogInterface({ data }) {
    const options = {
        settings: {
            overlayColor: "#000000fa",
        },
        thumbnails: {
            showThumbnails: false,
        },
    };

    return (
        <div className="bloginterface">
            {
                ////////// blog__image //////////
            }
            <div className="blog__image">
                <div className="overlay"></div>
                <SimpleReactLightbox>
                    <SRLWrapper options={options}>
                        <img
                            src={`/image/blog/${data.photo}`}
                            alt="blog single"
                        />
                    </SRLWrapper>
                </SimpleReactLightbox>
                <div className="item__social sp__social">
                    <h6 className="text-uppercase">share this</h6>
                    <span>fb</span>
                    <span>tw</span>
                    <span>in</span>
                </div>
            </div>
        </div>
    );
}

export default BlogInterface;
