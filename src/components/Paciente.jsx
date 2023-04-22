import React from 'react'

const Paciente = ( {client, setClient} ) => {
  const {name, owner, email, date, symtoms} = client;

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{name}</span></p>
        <p className="font-bold text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{owner}</span></p>
        <p className="font-bold text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
        <p className="font-bold text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{date}</span></p>
        <p className="font-bold text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{symtoms}</span></p>
        <div className='flex justify-between mt-10'>
          <button type="button" className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white foint-bold uppercase rounded-lg'
          onClick={() => setClient(client)}
          >
            Editar
          </button>
          <button type="button" className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white foint-bold uppercase rounded-lg'>
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Paciente