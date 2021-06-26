function PaginationBlogs() {
    return (
        <div className="pagination setup__component">
            <div className="container">
                <button className="button__2 btn--small">
                    <span className="txt__btn text-uppercase">prev</span>
                </button>
                <button className="button__2 btn--small active">
                    <span className="txt__btn text-uppercase">1</span>
                </button>
                <button className="button__2 btn--small">
                    <span className="txt__btn text-uppercase">2</span>
                </button>
                <button className="button__2 btn--small">
                    <span className="txt__btn text-uppercase">3</span>
                </button>
                <button className="button__2 btn--small">
                    <span className="txt__btn text-uppercase">next</span>
                </button>
            </div>
        </div>
    );
}

export default PaginationBlogs;
