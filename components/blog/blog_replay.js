function BlogReplay({ data }) {
    return (
        <div className="blog__replays d-none">
            {data.map((r, i) => {
                return (
                    <div className="blog__replay" key={i}>
                        {
                            ////////// replay__image //////////
                        }
                        <div className="replay__image">
                            <img src={`/image/blog/${r.photo}`} alt="replayphoto" />
                        </div>
                        {
                            ////////// replay__content //////////
                        }
                        <div className="replay__content">
                            <div className="d-flex">
                                <h6 className="text-uppercase m-0">
                                    {r.name} ,
                                </h6>
                                <span className="date ml-2">{r.date}</span>
                            </div>
                            <p className="mb-0 write--one">{r.comment}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default BlogReplay;
