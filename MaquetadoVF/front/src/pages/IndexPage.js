import '../styles/components/pages/IndexPage.css'

import dev1 from '../images/devs/dev1.jpg';
import dev2 from '../images/devs/dev2.jpg';
import dev3 from '../images/devs/dev3.png';
import dev4 from '../images/devs/dev4.jpg';

import { Link } from "react-router-dom";

const IndexPage = (props) => {
    return (
        <div className="holder">
        <div className="carrousel">
            <div className="conteCarrousel">
                <div className="itemCarrousel" id="itemCarrousel-1">
                    <div className="itemCarrouselTarjeta">
                        <img src={dev1} alt=""/>
                    </div>
                    <div className="itemCarrouselArrows">
                        <Link to="#itemCarrousel-4">
                            <i className="fas fa-chevron-left"></i>
                        </Link>
                        <Link to="#itemCarrousel-2">
                            <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="itemCarrousel" id="itemCarrousel-2">
                    <div className="itemCarrouselTarjeta">
                        <img src={dev2} alt=""/>
                    </div>
                    <div className="itemCarrouselArrows">
                        <Link to="#itemCarrousel-1">
                            <i className="fas fa-chevron-left"></i>
                        </Link>
                        <Link to="#itemCarrousel-3">
                            <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
                <div class="itemCarrousel" id="itemCarrousel-3">
                    <div class="itemCarrouselTarjeta">
                        <img src={dev3} alt=""/>
                    </div>
                    <div className="itemCarrouselArrows">
                        <Link to="#itemCarrousel-2">
                            <i className="fas fa-chevron-left"></i>
                        </Link>
                        <Link to="#itemCarrousel-4">
                            <i class="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="itemCarrousel" id="itemCarrousel-4">
                    <div className="itemCarrouselTarjeta">
                        <img src={dev4} alt=""/>
                    </div>
                    <div className="itemCarrouselArrows">
                        <Link to="#itemCarrousel-3">
                            <i className="fas fa-chevron-left"></i>
                        </Link>
                        <Link to="#itemCarrousel-1">
                            <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default IndexPage;