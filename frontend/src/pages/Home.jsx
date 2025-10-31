import './../styles/pages/Home.css'
import logoFeria from '../assets/images/logo-feria.png'

function Home() {
    return(
        <div id="home">
            <img id='logo-feria' src={logoFeria} alt="" />

            <p>
                Bienvenido/a a RDRAB '25, la primera feria americana
                virtual originaria de la Zona Oeste del Gran 
                Buenos Aires. Si bien esta es una feria virtual, posee
                su sede física en Aldo Bonzi, para aquellos clientes
                que opten por la presencialidad, sea para el retiro
                de un artículo previamente seleccionado y pagado a 
                través de este medio o también para conocer los
                artículos disponibles y comprar en el momento. Ante 
                cualquier consulta que tenga, no dude en contactarnos, 
                puede encontrar nuestros medios de contacto en dicha 
                sección. Deseamos que tenga una buena experiencia.
            </p>
        </div>
    )
 }
 
export default Home