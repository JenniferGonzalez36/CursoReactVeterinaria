import React from 'react'

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">Hook</span></p>
        <p className="font-bold text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">Jenny</span></p>
        <p className="font-bold text-gray-700 uppercase">Email: <span className="font-normal normal-case">correo@correo.com</span></p>
        <p className="font-bold text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">10 Diciembre 2022</span></p>
        <p className="font-bold text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quasi architecto doloremque! Unde aspernatur debitis tempore voluptas sapiente aperiam vero qui soluta eaque, ipsum sit laudantium maiores accusantium esse quia!</span></p>
      </div>
  )
}

export default Paciente