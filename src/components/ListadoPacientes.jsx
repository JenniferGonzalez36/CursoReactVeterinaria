import Paciente from "./Paciente";

const ListadoPacientes = ({clients, setClient, deleteClient}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {clients && clients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-10">Administra tus <span className="indigo-600 font-bold">Pacientes y Citas</span></p>

          { clients.map( client => (
            <Paciente key={client.id} client={client} setClient={setClient} deleteClient={deleteClient}/>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-center text-xl mt-5 mb-10">Comienza agregando pacientes <span className="indigo-600 font-bold">y aparecerán en este lugar</span></p>
        </>)}
      

    </div>
  )
}

export default ListadoPacientes;