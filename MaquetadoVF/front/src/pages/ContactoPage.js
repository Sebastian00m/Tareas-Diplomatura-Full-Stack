const ContactoPage =(props) =>{
    return (
        <main className="holder">
        <div className="contacto">
            <h2>Contacto rapido</h2>
            <form action="" className="formulario">
                <p>
                    <label for="Nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">email</label>
                    <input type="email" name=""/>
                </p>
                <p>
                    <label for="Telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="Mensaje">Mensaje</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </p>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vias de comunicación</h2>
            <p>Contactese a travez de las siguientes redes sociales oficiales</p>
            <div class="redes">
                <h4><i className="fa-solid fa-phone"></i> Telefono: 1134567897</h4>
                <h4><i className="fa-solid fa-envelope"></i> Email: contacto@gmail.com</h4>
                <h4><i className="fa-brands fa-facebook"></i> Facebook: </h4>
                <h4><i className="fa-brands fa-instagram"></i> Instagram: </h4>
                <h4><i className="fa-brands fa-whatsapp"></i> Whatsapp: </h4>
            </div>
        </div>

    </main>
    );
}
export default ContactoPage;