import NASA from "../img/nasa-logo.png"
import "../styles/footer.css";

export default function Footer(){
    return (
        <div class="footer">
            <img src={NASA} alt="" srcset="" />
            <div class="footerText">
                <h6>The National Aeronautics and Space Administration</h6>
                <h7>NASA explores the unknown in air and space,  innovates for the benefit of humanity, and inspires <br/> the world through discovery.</h7>
            </div>
        </div>
    )
}