

import React from 'react'
import Gallery from './Gallery'
import YoutubeVideo from './YotubeVideo'



// aspecto ratio
const short = {
        height: '540',
        width:  '340',
        playerVars: {
          autoplay: 0,
        } 
    }




const Actividades = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex flex-col py-6'>
        <div className='flex flex-col h-screen overflow-auto py-6' style={{'paddingTop':'100px', 'paddingBottom':'50px'}}>



        <h1 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6" >  ACTIVIDADES </h1>
        <div className='px-2 py-4'>
            <h2 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6">
            CEREMONIA DE PAGO AL MAR COCHAMAMA - NOCHE MÍSTICA
            </h2>
            <p className="text-gray-200 my-2 px-4 pb-4">
            📣 Con motivos de la XXIX semana turística se llevó a cabo una noche mística con la puesta en escena del
            pago al mar o cocha mama en la playa Miraflores, esta tradicional ceremonia busca generar conexión con el
            entorno, la unión del alma y espíritu.
            </p>

            <YoutubeVideo idVideo={'f5kUoroh9uo'} opts={short} />

        </div>

        <hr/>


        <div className='px-2 py-4'>
            <h2 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6">
            📣| ¡GRAN SERENATA TURÍSTICA ! 🎺🎤
            </h2>
            <p className="text-gray-200 my-2 px-4 pb-4">
            🔰 Con mucha algarabía y entusiasmo cientos de familias y amigos se dieron cita en
            el mirador Grau para disfrutar de un gran espectáculo musical en el marco de la celebración
            por la XXIX Semana Turística, el invitado especial Zambo Barbieri y distintas agrupaciones
            locales pusieron a bailar a todos los asistentes.
            </p>

            <Gallery />

        </div>




        </div>
    </div>
  )
}

export default Actividades