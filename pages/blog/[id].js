import Header from "../../components/header/header"
import BlogInterface from "../../components/blog/blog_interface";
import BlogDetails from "../../components/blog/blog_details";
import BlogParts from "../../components/blog/blog_parts";
import BlogAuthor from "../../components/blog/blog_author";
import BlogComments from "../../components/blog/blog_comments";
import BlogForm from "../../components/blog/blog_form";
import BlogControls from "../../components/blog/blog_controls";
import { bloglist } from "/public/js/blog";

export const getStaticPaths = async () => {
    const paths = bloglist.map(portfolio => {
        return {
            params: {id: portfolio.id}
        }
    });
    return {paths,fallback:false}
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const targetitem = bloglist.filter((e, i) => {
        return e.id === id;
    });
    return {
        props: {targetitem , id}
    }
}

function BlogSingle({targetitem , id}) {
    return (
        <>
            <Header />
            <div className="blogsingle__page">
                <BlogInterface data={targetitem[0]} />
                <BlogDetails data={targetitem[0]} id={id} />
                <BlogParts data={targetitem[0]} id={id} />
                <BlogAuthor data={targetitem[0]} id={id} />
                <BlogComments data={targetitem[0]} id={id} />
                <BlogForm id={id} />
                <BlogControls data={bloglist} id={id} />
            </div>
        </>
    );
}

export default BlogSingle;
