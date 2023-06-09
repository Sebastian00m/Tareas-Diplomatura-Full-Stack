import '../styles/components/pages/ContactoPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
                <div>
                    <h2>Contacto rapido</h2>
                    <form action="" className="formulario">
                        <p>
                            <label for="Nombre">Nombre</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="email">email</label>
                            <input type="email" name="" />
                        </p>
                        <p>
                            <label for="Telefono">Telefono</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="Mensaje">Mensaje</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </p>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
                <div className="datos">
                    <h2>Otras vias de comunicación</h2>
                    <p>Contactese a travez de las siguientes redes sociales oficiales</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} />   Telefono: 1134567897</li>
                            <li><FontAwesomeIcon icon={faEnvelope} />   Email: contacto@gmail.com</li>
                            <li><FontAwesomeIcon icon={faFacebook} />   Facebook:</li>
                            <li><FontAwesomeIcon icon={faInstagram} />   Instagram:</li>
                            <li><FontAwesomeIcon icon={faWhatsapp} />   Whatsapp:</li>
                        </ul>
                </div>
        </main>
    );
}
export default ContactoPage;