import Navegation from "../Navegation/Navegation"; 
import "./Contact.css";

import {useState} from"react";
import{Fragment} from "react"


export default function Contact(){
  
    let[inputNombre,setInputNombre]=useState(" ")
    
    const registerData=(event)=>{
        setInputNombre(event.target.value)
    }
  
    const mostrar=()=>{
        console.log(inputNombre)
    }
  
  return(
      <Fragment>
        <Navegation/>
        <main className="container-fluid recuadro-contacto">
            
            <div class=" color-contacto d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2>Contact</h2>
                <h3>Dejanos tu información así podemos contactarte</h3>
                <form className="row g-3 p-5">
                    <div className="col-md-6">
                       <label htmlFor="nombre" className="form-label">Nombre</label>
                       <input 
                           type="text" className="form-control"
                           id="nombre" value={inputNombre}
                           onChange={registerData}
                           onBlur={mostrar}
                        />
                    </div>
                    <div className="col-md-6">
                       <label htmlFor="correo" className="form-label">Email</label>
                       <input type="email" className="form-control" id="correo"/>
                    </div>
                    <div className="col-12">
                       <label htmlFor="mensaje" className="form-label">Mensaje</label>  
                       <textarea className="form-control" id="mensaje"></textarea>
                    </div>
                    <div className="col-12">
                       <button type="=submit" className="btn boton-contacto">Sign in</button>
                    </div>
                </form>
            </div> 
        </main>  
      </Fragment> 
    ) 
}
