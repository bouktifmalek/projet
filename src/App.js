import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import  AddEvent from "./components/AddEvent";
import Event from "./components/Event";
import User from "./components/User";
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/Home" element={<Home />} />
       <Route path="/Login" element={<Login/>} />
       <Route path="/Registre" element={< Signup/>} />
       <Route path="/ajouteEvenement" element={<AddEvent />} />
       <Route path="/ListeUtilisateur" element={< User/>} />
       <Route path="/ListeEvent" element={<Event />} />

        </Routes>
      

    </BrowserRouter>
  )
}

export default App

