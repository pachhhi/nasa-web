import { useState } from "react"
import "../styles/aside.css"
import NASASCIENCE from "../component/NASASCIENCE";
import SPACEPLACE from "../component/SPACEPLACE"
import NASAAERONAUTIC from "../component/NASAAERONAUTIC"



export default function Aside(){

    const [content, setContent] = useState(0);

    const changeContent = (newContent) => {
        setContent(newContent)
    }

    return (<div >
        <aside class="container">
            <button onClick={() => setContent(0)}>NASA science
                <div>
                    
                </div>
            </button>
                
            <button onClick={() => setContent(1)}>Space place for kids</button>
            <button onClick={() => setContent(2)}>NASA aeronautics</button>
        </aside>
        <hr/>

        {content === 0 && <NASASCIENCE/>}
        {content === 1 && <SPACEPLACE/>}
        {content === 2 && <NASAAERONAUTIC/>}
        
        
    </div>)
}