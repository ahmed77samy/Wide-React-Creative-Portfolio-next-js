import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function BlogDetails({ data, id }) {
    const descriptionRef = useRef({});

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(descriptionRef.current[0]);
        onShowAnimation_showText(descriptionRef.current[1]);
    }, [id]);

    return (
        <div className="blogdetails setup__component">
            <div className="container">
                {
                    ////////// blog__title //////////
                }
                <div className="blog__title">
                    <span className="label__4">
                        {data.category} / {data.author} / {data.date}
                    </span>
                    <h1 className="h3__title">{data.title}</h1>
                </div>
                <p
                    className="write--one"
                    ref={(e) => (descriptionRef.current[0] = e)}>
                    {data.description}
                </p>
                <p
                    className="write--one mb-0"
                    ref={(e) => (descriptionRef.current[1] = e)}>
                    {data.fulldescription}
                </p>
            </div>
        </div>
    );
}

export default BlogDetails;
