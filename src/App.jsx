import { useState } from "react";
import Header from "./components/Header"; 
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario clients={clients} setClients={setClients} client={client}/>
        <ListadoPacientes clients={clients} setClient={setClient}/>
      </div>
    </div>
  )
}

export default App