import "../styles/NASAAERONAUTIC.css"
import spaceplace from "../img/space-place.jpg"


export default function SPACEPLACE(){
    return (
        <div class="container content">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <h1>Space Place</h1>
                    <small>
                        <h3>For all</h3>
                        El galardonado sitio web Space Place de la NASA atrae a los niños de primaria superior a las ciencias espaciales y terrestres a través de juegos interactivos, actividades prácticas, artículos divertidos y videos cortos. Con material en inglés y español y numerosos recursos para niños, padres y maestros, Space Place tiene algo para todos.
                    </small> <br/>
                    <div class="vm">
                        <a href="https://www.youtube.com/@NASA">For more click here.</a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <img class="aeronautic" src={spaceplace}/>
                </div>
            <hr/>
            </div>
        </div>
    )
}