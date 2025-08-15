import Header from "./components/Header/header";
import Contato from "./pages/Contato/page";
import Galeria from "./pages/Galeria/page";
import Home from "./pages/Home/page";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


  export default function App(){
    return(
      <>
      
        <Router>
          
          <Header/>

        <Routes>
            
            <Route path="/Home" element={<Home />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Galeria" element={<Galeria />} />
          

        </Routes>

       </Router>
       
      </>
    )
  }