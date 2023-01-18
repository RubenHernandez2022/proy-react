import Navegation from "../Navegation/Navegation";
import Filters from "../Filters/Filter";
import SectionCards from "../SectionCards/SectionCards";
import "./Characters.css";

import {useEffect,useState} from "react";
import{Fragment} from "react"

export default function Characters () {
    
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
    
    const mostrarValor=(event)=>{
    
        if(event.target.checked){    
             let datoFiltro=event.target.value;
             if(datoFiltro === "Alive" || datoFiltro === "Dead"){
              let resultado= datos.filter((ch)=>ch.status===datoFiltro)
              setDatos(resultado)
             } 

            if(datoFiltro === "Female" || datoFiltro === "Male"){
             let resultado= datos.filter((ch)=>ch.gender===datoFiltro)
             setDatos(resultado)
            } 

            if(datoFiltro === "unknown"){
            let resultado= datos.filter((ch)=>ch.origin.name===datoFiltro)
            setDatos(resultado)
            } 
        }else{
            setDatos(infoCompleta)
        }
    }   
    
    const traerInfo=async()=>{
      let info= await fetch("https://rickandmortyapi.com/api/character")
                      .then(respuesta => respuesta.json())
                      .catch(error => console.log("HAY UN ERROR!!" +error))
      return info
    }
    
    const mostarInfo= async ()=>{
        let dato= await traerInfo()
        let infoPersonajes=dato.results
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }
   
    useEffect(()=>{
        mostarInfo()
    },[]) 
    
    return( 
      <Fragment>
        <Navegation/>
        <main className="container">
            <section className="sec-filtro py-5 ">
              <h2 >Filters</h2>
              <div className="d-flex justify-content-between flex-wrap">
                 <Filters  nombreFiltro="Character Alive" datoFiltro="Alive" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Character Dead" datoFiltro="Dead" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Female" datoFiltro="Female" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Male" datoFiltro="Male" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Origin Unknown" datoFiltro="unknown" muestraValor={mostrarValor}/>
              </div>
            </section>
             
            <SectionCards datos={datos}/>
             
        </main>
      </Fragment>
    )
    
}