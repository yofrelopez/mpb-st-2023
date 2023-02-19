
import React from 'react'



const Nosotros = () => {

  return (
    <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex flex-col py-6'>

        <div className='flex flex-col h-screen overflow-auto py-6' style={{'paddingTop':'100px', 'paddingBottom':'50px'}}>

            <h1 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6" >  RESEÑA HISTÓRICA </h1>

            <p className="text-gray-200 my-2 px-4 ">
                Barranca es una provincia de pasado histórico y de importantes atractivos turísticos, Tres extensos valles nutren sus hermosas tierras fértiles;
                Pativilca, Fortaleza y Supe. Sus cinco distritos; Paramonga, Pativilca, Barranca, Supe Puerto y Supe son privilegiados al estar en contacto con el
                mar de nuestro litoral.
            </p>

            <p className="text-gray-200 my-2 px-4 pb-4">
                Esta ciudad ofrece a sus visitantes como atractivo principal, su circuito de playas, sus balnearios son lugares muy concurridos por turistas nacionales y extranjeros, los cinco distritos tienen algo que contarle al mundo, su aporte a la historia es de relevancia mundial; museos de sitio, ruinas y huacas indígenas, restos arqueológicos con miles de años de antigüedad, excelentes servicios de restaurantes con sus generosa y reconocida
                gastronomía, hoteles y su gente siempre hospitalaria.
            </p>

            <h2 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6">PRINCIPALES ATRACTIVOS TURÍSTICOS </h2>


                <ul className="list-disc p-2 pl-6 text-gray-200 my-2 px-4 pb-4">
                    <li>  Caral </li>
                    <li>  Áspero </li>
                    <li>  Plaza de Armas </li>
                    <li>  Museo Bolivariano </li>
                    <li>  Cristo Redentor </li>
                    <li>  Fortaleza </li>
                    <li>  La Casa de las Brujas </li>
                    
                </ul>


            <h2 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6">
                PLAYAS
            </h2>
            <p className="text-gray-200 my-2 px-4 pb-4">
                Hay 6 distintas playas con diferentes características cada una, y todas conforman uno de los principales atractivos de la provincia de Barranca. Al
                norte se encuentra Chorrillos, luego sigue la playa Miraflores en ambas encontraras excelentes lugares donde degustar nuestra gastronomía, luego
                encontramos la playa Puerto Chico, tradicional caleta de pescadores y de mar tranquilo, al sur está el Colorado, con un pequeño complejo municipal
                de piscinas, a esta playa le sigue la Bandurria y continúa Atarraya. En el siguiente distrito, Supe Puerto encontramos una playa turística conocida
                como La Isla del Faraón, promete a sus visitantes una conexión con la calma y la paz que ofrece el océano, del mismo modo, en Supe Pueblo se
                encuentran las playas Caleta Vidal, Quitacalzón, entre otras.
            </p>

        </div>

    </div>
  )
}

export default Nosotros