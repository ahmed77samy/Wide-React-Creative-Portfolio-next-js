import Header from "../../components/header/header"
import Blogs2 from "../../components/blog/blogs_2";
import PaginationBlogs from "../../components/blog/pagination_blogs";

function BlogMonster() {
    return (
        <>
            <Header />
            <div className="blogmonster__page">
                <Blogs2 />
                <PaginationBlogs />
            </div>
        </>
    );
}

export default BlogMonster;
