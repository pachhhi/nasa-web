import "../styles/home.css";

// import img
import earth from "../img/earth.jpg"
import  nebulous  from "../img/nebulous.jpg";
import  nasalogo  from "../img/nasa-logo.png"

export default function Home(){
    return <div>
        <nav>
                <img class="background" src={earth} alt="" />
                <img src={nasalogo} />

                <div class="container containerNav">
                    <strong>NASA</strong>
                    <p>Explore the universe and descovery the world with us</p>
                </div>
        </nav>
    </div>
}