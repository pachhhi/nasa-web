import "../styles/NASAAERONAUTIC.css"
import nebulous from "../img/nebulous.jpg"


export default function NASASCIENCE(){
    return (
        <div class="container content">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <h1>Ciencia de la NASA</h1>
                    <small>
                        <h3>For all</h3>
                        La ciencia es la clave para descubrir los secretos del universo: uniendo a la humanidad con cada descubrimiento, expandiendo nuestro conocimiento y despertando nuestra imaginación. Al navegar por las arenas del tiempo y el espacio, la ciencia da contexto y significado a mediciones grandes y pequeñas. ¿Sabías que existen tantas estrellas en el universo como hay granos de arena en la Tierra? La nueva era de los descubrimientos científicos de la NASA acaba de comenzar, ¡y tú eres parte de ella!
                    </small> <br/>
                    <div class="vm">
                        <a href="https://www.youtube.com/@NASA">For more click here.</a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <img class="aeronautic" src={nebulous}/>
                </div>
            <hr/>
            </div>
        </div>
    )
}