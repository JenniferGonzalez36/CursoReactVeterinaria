import { useState, useEffect } from "react";
import Header from "./components/Header"; 
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});

  useEffect(() => {
    const clientsLS = JSON.parse(localStorage.getItem("clients")) ?? [];
    clientsLS.length > 0 && setClients(clientsLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const deleteClient = id => {
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