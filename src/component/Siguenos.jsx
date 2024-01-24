import "../styles/siguenos.css"
import twitter from "../img/twitter-logo.jpg";
import youtube from "../img/youtube-logo.jpg";
import instagram from "../img/instagram-logo.jpg";
import facebook from "../img/facebook-logo.jpg";

export default function Siguenos(){
    return (
        <div class="container redesContainer">
            <h3>Follow us</h3>
            <div class="flex">
                <img src={twitter}/>
                <a href="https://twitter.com/NASA_es">Twitter</a>
            </div>
            <hr/>
            <div class="flex">
                <img src={youtube}/>
                <a href="https://www.youtube.com/NASA_es">Youtube</a>
            </div>
            <hr/>
            <div class="flex">
                <img src={instagram}/>
                <a href="https://www.instagram.com/nasa_es/">Instagram</a>
            </div>
            <hr/>
            <div class="flex">
                <img src={facebook}/>
                <a href="https://www.facebook.com/NASAes/">Facebook</a>
            </div>
            
        </div>
    )
}