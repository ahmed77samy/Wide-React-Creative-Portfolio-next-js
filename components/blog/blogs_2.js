import BlogItem2 from "./item_2";
import { bloglist } from "/public/js/blog";

function Blogs2() {
    const sizeitem = [
        1,
        4,
        5,
        8,
        9,
        12,
        13,
        16,
        17,
        20,
        21,
        24,
        25,
        28,
        29,
        32,
    ];

    return (
        <div className="blogs setup__component">
            <div className="container">
                {
                    ////////// loop on BlogItem //////////
                }
                <div className="row">
                    {bloglist.map((e, i) => {
                        return (
                            <div
                                className={`col-12 ${
                                    sizeitem.some((e) => i + 1 === e)
                                        ? "col-lg-8"
                                        : "col-lg-4"
                                }`}
                                key={i}
                                style={{
                                    height: "min-content",
                                }}>
                                <BlogItem2 data={e} index={i} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Blogs2;
