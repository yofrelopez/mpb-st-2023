

import Image from 'next/image';
import {Layout} from '../components/Layout';
import EventCard from '../components/EventCard';
import { datosEventos } from '../data/datos'



export default function Home() {
  return (
    <>
      <Layout>
        <div
          className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex flex-col'
        >
                  
          <div className='flex justify-center h-[calc(100vh-0px)]'>          

            <Image
                src="/logo_1.png"
                alt="Semana Turística"
                width={300}
                height={384}
                className="self-center"            
              />            

          </div>


          <div className="flex flex-col justify-center items-center min-h-[calc(100vh-50vh)] bg-white">

            <h2 className="p-3 text-5xl font-bold text-white font-display text-transparent bg-gradient-to-br from-green-400 to-green-800 animate-gradient">
            
              LUCHITO
            </h2>
            <h2 className="text-5xl font-bold text-green-600 font-display">
              UENO
            </h2>

          </div>

          

          



          <div>
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-50vh)] bg-amber-300">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                Cronograma de Actividades
              </h1>
            </div>
          </div>

          <div className='p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 mb-6'>
            {
              datosEventos ?
              datosEventos.map( e => (
                <EventCard
                  key={e.id}
                  pic={e.pic}
                  fecha={e.fecha}
                  Lugar={e.Lugar}
                  descripcion={e.descripcion}
                  nombre={e.nombre}
                  hora={e.hora}
                />
              ) )
              : false
              
            }

          </div>



        </div>






      </Layout>
      
    </>
  )
}
