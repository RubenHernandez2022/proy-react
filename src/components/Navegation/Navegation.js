import "./Navegation.css";
import {NavLink} from "react-router-dom"; 

export default function Navegation () {
 
    return(
        
        <nav className="navbar navbar-expanded-lg fondo-nav ">
            <div className="container-fluid me-4">
              <h2>Rick & Morty</h2>
              <ul  className="d-flex flex-row">
                  <NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/"><li className="border border-0 p-3 subra" >Home</li></NavLink>
                  <NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/Characters" activeClassName="active"><li className="border border-0 p-3 subra" >Characters</li></NavLink>
                  <NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/Contact" activeClassName="active"><li className="border border-0 p-4 subra">Contact</li></NavLink>
              </ul>
            </div>
        </nav>
       
        
    )
}
