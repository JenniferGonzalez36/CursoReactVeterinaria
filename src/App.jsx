import { useState } from "react";
import Header from "./components/Header"; 
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPasientes] = useState([]);

  const printAguacate = () => {
    console.log("Aguacate");
  }

  return (
    <div className="container mx-auto mt-20">
      <Header numbers={1} isAdmin={false} fn={printAguacate}/>
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App