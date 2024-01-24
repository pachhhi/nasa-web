import firstWoman from "../img/first-woman.jpg"
import "../styles/section.css"
import NEW1  from "../img/NEW1.jpg"
import NEW2 from "../img/NEW2.jpg"
import NEW3 from "../img/NEW3.jpg"
import NEW4 from "../img/NEW4.jpg"
import NEW5 from "../img/NEW5.jpg"
import NEW6 from "../img/NEW6.jpg"

import Noticia from "./Noticia"

export default function Section(){
    return (
        <section>
            <img src={firstWoman} class="firstWoman"/>
            <div class="container sectionContainer">
                <h1>La primera mujer</h1>
                <small>
                La astronauta de ficción Callie Rodríguez continúa explorando el <br/>
                espacio como la primera mujer que camina en la Luna en un nuevo tomo de la serie novelada “La primera mujer” de la NASA.
                </small>
            </div>
            <div class="container news">
                <h3>News</h3>
                <p>Recibe las ultimas noticias y actualizaciones de la NASA</p>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <Noticia poster={NEW1} 
                        title="La seguridad es fundamental para la movilidad aérea avanzada" 
                        text="Lee esta historia en inglés aquí. Empresas de todo el mundo están creando nuevos e innovadores diseños de aeronaves, como…"/> 
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <Noticia poster={NEW2} 
                        title="Aviones de movilidad aérea avanzada: un viaje suave en el futuro" 
                        text="Lee esta historia en inglés aquí. Hoy en día, los pasajeros de avión esperan un viaje tranquilo con pocas turbulencias."/>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <Noticia poster={NEW3} 
                        title="Aviones de movilidad aérea avanzada: un viaje suave en el futuro" 
                        text="Lee esta historia en inglés aquí. Hoy en día, los pasajeros de avión esperan un viaje tranquilo con pocas turbulencias."/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <Noticia poster={NEW4} 
                        title="Aviones de movilidad aérea avanzada: un viaje suave en el futuro" 
                        text="Lee esta historia en inglés aquí. Hoy en día, los pasajeros de avión esperan un viaje tranquilo con pocas turbulencias."/> 
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <Noticia poster={NEW5} 
                        title="Aviones de movilidad aérea avanzada: un viaje suave en el futuro" 
                        text="Lee esta historia en inglés aquí. Hoy en día, los pasajeros de avión esperan un viaje tranquilo con pocas turbulencias."/>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <Noticia poster={NEW6} 
                        title="Aviones de movilidad aérea avanzada: un viaje suave en el futuro" 
                        text="Lee esta historia en inglés aquí. Hoy en día, los pasajeros de avión esperan un viaje tranquilo con pocas turbulencias."/>
                    </div>
                </div>
            </div>
        </section>
    )
}