import  "./Home.css";
import ListItemHome from "../ListItem/ListItemHome";

export default function Home() {

    return(
        
        <div className="centrado-home w-50 d-flex flex-column justify-content-center align-items-center ">  
           
                <h1 className="titulo-home">Proyecto - Rick & Morty</h1>
                <nav>
                   <ul className="d-flex justify-content-between">
                      <ListItemHome dato="Characters" infoPath="/Characters"/>
                      <ListItemHome dato="Contact" infoPath="/Contact"/>
                   </ul>
                </nav>
        </div> 
        
    )
}
  
   