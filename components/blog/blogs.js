import BlogItem from "./item";
import { bloglist } from "/public/js/blog";

function Blogs() {
    return (
        <div className="blogs setup__component">
            <div className="container">
                {
                    ////////// loop on BlogItem //////////
                }
                <div className="row">
                    {bloglist.map((e, i) => {
                        return (
                            <div className="col-12 col-lg-4" key={i}>
                                <BlogItem data={e} index={i} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
