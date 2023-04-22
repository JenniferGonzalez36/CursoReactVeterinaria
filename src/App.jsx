import { useState } from "react";
import Header from "./components/Header"; 
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});

  const deleteClient = (id) => {
    const updatedClients = clients.filter(client => client.id !== id);
    setClients(updatedClients);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario clients={clients} setClients={setClients} client={client} setClient={setClient}/>
        <ListadoPacientes clients={clients} setClient={setClient} deleteClient={deleteClient}/>
      </div>
    </div>
  )
}

export default App