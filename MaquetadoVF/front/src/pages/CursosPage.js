import '../styles/components/pages/CursosPage.css'

import fullstack from '../images/full stack.png';
import phyton from '../images/phyton.png';
import nodejs from '../images/nodejs.jpg';
import react from '../images/react-logo.jpg';
const CursosPage = (props) => {
    return (
        <main className="holder">
            <div className='Container'>
                <h2>Nuestros Cursos</h2>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus? Quia accusantium illo veritatis excepturi necessitatibus quis vel deleniti quisquam minima non dicta quasi, fuga quaerat quae. Perferendis, nobis tempore.
                    Quo perspiciatis deleniti fugiat. Soluta illum perspiciatis doloribus laudantium esse. Explicabo quis odit modi earum voluptas culpa officia mollitia id quod rerum, illo, iusto praesentium laudantium quos vitae, doloribus natus?
                    Impedit assumenda animi voluptatum, quia facilis eligendi nisi veritatis provident ullam optio minus laborum id sequi aperiam nostrum facere dolores dolor excepturi quibusdam voluptas? Reprehenderit animi eum ex optio exercitationem?</p>
                <div className="carta">
                    <img src={fullstack} alt="full-stack" />
                    <div className="info">
                        <h3>Desarrollo web Full Stack</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, mollitia neque in consectetur
                            libero
                            hic. Quam fuga, saepe, consequatur natus asperiores reprehenderit quibusdam est impedit vitae
                            quis
                            perspiciatis placeat! Nihil?</p>
                        <button>mas info</button>
                    </div>
                </div>
                <div className="carta">
                    <img src={phyton} alt="Python" />
                    <div class="info">
                        <h3>Desarrollo Backend con Python</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, mollitia neque in consectetur
                            libero
                            hic. Quam fuga, saepe, consequatur natus asperiores reprehenderit quibusdam est impedit vitae
                            quis
                            perspiciatis placeat! Nihil?</p>
                        <button>mas info</button>
                    </div>
                </div>
                <div className="carta">
                    <img src={nodejs} alt="Nodejs" />
                    <div className="info">
                        <h3>Desarrollo Backend con Nodejs</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, mollitia neque in consectetur
                            libero
                            hic. Quam fuga, saepe, consequatur natus asperiores reprehenderit quibusdam est impedit vitae
                            quis
                            perspiciatis placeat! Nihil?</p>
                        <button>mas info</button>
                    </div>
                </div>
                <div className="carta">
                    <img src={react} alt="React" />
                    <div className="info">
                        <h3>Desarrollo Frontend con React</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, mollitia neque in consectetur
                            libero
                            hic. Quam fuga, saepe, consequatur natus asperiores reprehenderit quibusdam est impedit vitae
                            quis
                            perspiciatis placeat! Nihil?</p>
                        <button>mas info</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default CursosPage