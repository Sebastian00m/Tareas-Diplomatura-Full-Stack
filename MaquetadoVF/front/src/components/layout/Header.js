import '../../styles/components/layout/Header.css'
import MyLogo from '../../images/logo.png';
import {Link} from "react-router-dom"

const Header = (props) =>{
    return(
        <header>
            <div className="logo">
                <img src={MyLogo} alt="logo de la empresa"/>
                <h1>Programa YA!</h1>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/cursos">Nuestros cursos</Link>
                <Link to="/nosotros">Sobre Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </header>
    )
}
export default Header;