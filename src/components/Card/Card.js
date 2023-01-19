import{useState} from "react";
import "./Card.css"

export default function Card({info}) {
  
  const [Ocultar,setOcultar]=useState(true);
  
  const mostrar=()=>{
    setOcultar(false)
  }
  
  const ocultarInfo=()=>{
    setOcultar(true)
  }
  
    
  return(
      <div className="d-flex flex-row">
        <div className="d-flex  mb-4 ms-2 tarjeta"> 
            <div className="d-flex flex-column aling-items-center p-2">
               <img src={info.image} alt={info.image}/>
               <h2 className="d-flex justify-content-center color-name">{info.name}</h2>
               <button onClick={mostrar} className={Ocultar === true ?"d-flex align-self-end boton-show":"d-none"}>Show more..</button>  
            </div>
           
            {Ocultar ===false?
            <div className="d-flex flex-column align-items-center ancho-tarjeta">
              <button className="cierre-menu d-flex align-self-end me-5 mt-5" onClick={ocultarInfo}>X</button>
              <ul>     
                 <li className="lista-info resaltar">Character Status {info.status}</li>
                 <li className="lista-info">Species <li className="resaltar">{info.species}</li></li>
                 <li className="lista-info">Origin  <li className="resaltar">{info.origin.name}</li></li>
                 <li className="lista-info" >Gender <li className="resaltar">{info.gender}</li></li>
              </ul>
            </div>:""
            }
        </div> 
      </div>

    );

    
}
// list-group    
// list-group-item
// list-group-item
// list-group-item