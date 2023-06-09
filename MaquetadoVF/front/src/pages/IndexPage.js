import '../styles/components/pages/IndexPage.css'

import dev1 from '../images/devs/dev1.jpg';
import dev2 from '../images/devs/dev2.jpg';
import dev3 from '../images/devs/dev3.png';
import dev4 from '../images/devs/dev4.jpg';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const IndexPage = (props) => {
    return (
        <div className="Container">
            <div className="carrousel">
                <div className="conteCarrousel">
                    <div className="itemCarrousel" id="itemCarrousel-1">
                        <div className="itemCarrouselTarjeta">
                            <img src={dev1} alt="" />
                        </div>
                        <div className="itemCarrouselArrows">
                            <Link to="#itemCarrousel-4">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                            <Link to="#itemCarrousel-2">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                    <div className="itemCarrousel" id="itemCarrousel-2">
                        <div className="itemCarrouselTarjeta">
                            <img src={dev2} alt="" />
                        </div>
                        <div className="itemCarrouselArrows">
                            <Link to="#itemCarrousel-1">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                            <Link to="#itemCarrousel-3">
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </Link>
                        </div>
                    </div>
                    <div className="itemCarrousel" id="itemCarrousel-3">
                        <div className="itemCarrouselTarjeta">
                            <img src={dev3} alt="" />
                        </div>
                        <div className="itemCarrouselArrows">
                            <Link to="#itemCarrousel-2">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                            <Link to="#itemCarrousel-4">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                    <div className="itemCarrousel" id="itemCarrousel-4">
                        <div className="itemCarrouselTarjeta">
                            <img src={dev4} alt="" />
                        </div>
                        <div className="itemCarrouselArrows">
                            <Link to="#itemCarrousel-3">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                            <Link to="#itemCarrousel-1">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IndexPage;