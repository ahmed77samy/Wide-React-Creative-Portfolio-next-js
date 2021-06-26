import Portfolio4 from "../../components/portfolio/portfolio4";
import Header from "../../components/header/header"

function PortfolioTwoColumns() {
    return (
        <>
            <Header />
            <div className="portfoliotwocolumns__page">
                <Portfolio4 />
            </div>
        </>
    );
}

export default PortfolioTwoColumns;
