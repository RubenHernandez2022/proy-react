import "./Navegation.css";
import {Link} from "react-router-dom"; 

export default function Navegation () {
    return(
        
            <nav className="navbar navbar-expanded-lg w-100 fondo-nav">
               <div className="container-fluid">
                   <h2>Rick & Morty</h2>
                   <ul className="d-flex flex-row">
                      <button className="border border-0 p-3"><Link style={{color:'inherit',textDecoration:'inherit'}} to="/">Home</Link></button>
                      <button className="border border-0 p-3"><Link style={{color:'inherit',textDecoration:'inherit'}} to="/Characters">Characters</Link></button>
                      <button className="border border-0 p-3"><Link style={{color:'inherit',textDecoration:'inherit'}} to="/Contact">Contact</Link></button>
                    </ul>
                </div>
            </nav>
       
        
    )
}
