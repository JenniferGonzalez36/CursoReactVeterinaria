import {useState, useEffect} from 'react'; //Importando los Hooks "useState" y "useEffect"

const Formulario = () => {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symtoms, setSymtoms] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if([name, owner, email, date, symtoms].includes("")){
            console.log("Hay al menos un campo vacío.");
        } else {
            console.log("Todos llenos");
        }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Segimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
             >
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Nombre Mascota {name}</label>
                    <input id="pet" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={name} onChange={ (e) => setName(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input id="owner" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={owner} onChange={ (e) => setOwner(e.target.value) }
                    />                
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input id="email" type="email" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email} onChange={ (e) => setEmail(e.target.value) }
                    />                
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Fecha</label>
                    <input id="date" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={date} onChange={ (e) => setDate(e.target.value) }
                    />                
                </div>
                <div className="mb-5">
                    <label htmlFor="symtoms" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea name="" id="symtoms" cols="30" rows="10" placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={symtoms} onChange={ (e) => setSymtoms(e.target.value) }
                    />
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all " value="Agregar paciente"/>
            </form>
        </div>
    )
}

export default Formulario