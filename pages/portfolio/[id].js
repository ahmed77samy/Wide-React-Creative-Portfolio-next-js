import Header from "../../components/header/header"
import PortfolioInterface from "../../components/portfolio/portfolio_interface";
import PortfolioDetails from "../../components/portfolio/portfolio_details";
import PortfolioParts from "../../components/portfolio/portfolio_parts";
import PortfolioControls from "../../components/portfolio/portfolio_controls";
import { worklist } from "/public/js/work";



export const getStaticPaths = async () => {
    const paths = worklist.map(portfolio => {
        return {
            params: {id: portfolio.id}
        }
    });
    return {paths,fallback:false}
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const targetitem = worklist.filter((e, i) => {
        return e.id === id;
    });
    return {
        props: {targetitem , id}
    }
}

function PortfolioSingle({targetitem , id}) {
    return (
        <>
            <Header />
            <div className="portfoliosingle__page">
                <PortfolioInterface data={targetitem[0]} id={id} />
                <PortfolioDetails data={targetitem[0]} id={id} />
                <PortfolioParts data={targetitem[0]} id={id} />
                <PortfolioControls data={worklist} id={id} />
            </div>
        </>
    );
}

export default PortfolioSingle;
