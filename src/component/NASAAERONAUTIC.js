import "../styles/NASAAERONAUTIC.css"
import aeronautic from "../img/aeronautic.jpg"


export default function NASAAERONAUTIC(){
    return (
        <div class="container content">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <h1>Aeronautica de la NASA</h1>
                    <small>
                        <h3>For all</h3>
                        Gracias a los avances tecnológicos desarrollados por la NASA, la industria de la aviación está mejor equipada que nunca para transportar a pasajeros y carga de manera segura y eficiente a destinos en todo el mundo. De hecho, todos los aviones estadounidenses que vuelan hoy día, así como todos los controles de tráfico aéreo de los Estados Unidos, utilizan, de alguna manera u otra, tecnología desarrollada por la NASA. 
                    </small> <br/>
                    <div class="vm">
                        <a href="https://www.youtube.com/@NASA">View more.</a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        
                    <img class="aeronautic" src={aeronautic}/>
                    
                </div>
                <hr/>
            </div>
        </div>
    )
}