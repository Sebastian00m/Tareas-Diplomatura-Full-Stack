import {Link} from "react-router-dom"

const Header = (props) =>{
    return(
        <header>
            <div className="logo">
                <img src='../images/logo.png' alt="logo de la empresa"/>
                <h1>Programa YA!</h1>
            </div>

            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/cursos">Nuestros cursos</Link></li>
                    <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;