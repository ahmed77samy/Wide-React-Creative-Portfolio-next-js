import Header from "../../components/header/header"
import Blogs from "../../components/blog/blogs";
import PaginationBlogs from "../../components/blog/pagination_blogs";

function BlogThreeColumns() {
    return (
        <>
            <Header />
            <div className="blogthreecolumns__page">
                <Blogs />
                <PaginationBlogs />
            </div>
        </>
    );
}

export default BlogThreeColumns;
