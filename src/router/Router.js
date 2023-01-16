import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../components/Home/Home";
import Characters from "../components/Characters/Characters";
import Contact from "../components/Contact/Contact";

export default function Router(){
    return(<BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Characters" element={<Characters/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>

    )
}