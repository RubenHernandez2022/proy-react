import "./Navegation.css";
import {NavLink} from "react-router-dom"; 

export default function Navegation () {
 
    return(
        
        <nav className="navbar navbar-expanded-lg fondo-nav ">
            <div className="container-fluid me-4">
              <h2>Rick & Morty</h2>
              <ul  className="d-flex flex-row">
                  <button className="border border-0 p-3"><NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/">Home</NavLink></button>
                  <NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/Characters"><button className="border border-0 p-3">Characters</button></NavLink>
                  <NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/Contact"><button className="border border-0 p-4">Contact</button></NavLink>
              </ul>
            </div>
        </nav>
       
        
    )
}
