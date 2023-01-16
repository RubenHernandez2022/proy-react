import{useState} from "react";

export default function Card({info}) {
  
  const [Ocultar,setOcultar]=useState(true);
  
  const mostrar=()=>{
    console.log(info)
    setOcultar(false)
  }
  
  const ocultarInfo=()=>{
    setOcultar(true)
  }
  
    
  return(
      <div className="my-5 d-flex">
        <div>
          <img src={info.image} alt={info.image}/>
          <h2>{info.name}</h2>
          <button onClick={mostrar} className={Ocultar === true ?"bg-success":"d-none"}>Now more..</button>  
        </div>

        {Ocultar ===false?
        <div>
           <button className="bg-warning" onClick={ocultarInfo}>X</button>
           <ul className="list-group">     
              <li className="list-group-item">Character Status {info.status}</li>
              <li className="list-group-item">Species {info.species}</li>
              <li className="list-group-item">Origin {info.origin.name}</li>
              <li className="list-group-item">Gender {info.gender}</li>
           </ul>
        </div>:""}
      </div>

    )

    
    
}