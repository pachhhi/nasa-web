import "../styles/noticia.css"

export default function Noticia(props){
    return (
        <div>
            <img src={props.poster} class="poster"/>
            <h5>{props.title}</h5>
            <p>
                {props.text}
            </p>
        </div>
    )
}

