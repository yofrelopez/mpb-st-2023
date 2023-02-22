

import React from 'react'
import Gallery from './Gallery'
import Carousel from 'react-material-ui-carousel'




const Actividades = () => {

  // imagenes de surf

  const surfImages:any = [
    {src:'/surf/01.jpg', alt:'surf'}, {src:'/surf/02.jpg', alt:'deporte'},
    {src:'/surf/03.jpg', alt:'Lucho Ueno'}, {src:'/surf/04.jpg', alt:'premio'},
    {src:'/surf/05.jpg', alt:'surf'}, {src:'/surf/06.jpg', alt:'surf'},
    {src:'/surf/07.jpg', alt:'surf'}, {src:'/surf/08.jpg', alt:'surf'},
  ]

   // imagenes de serenata

   const serenataImages:any = [
    {src:'/serenata/01.jpg', alt:'serenata'}, {src:'/serenata/02.jpg', alt:'zambo'},
    {src:'/serenata/03.jpg', alt:'publico'}, {src:'/serenata/04.jpg', alt:'familia'},
    {src:'/serenata/05.jpg', alt:'serenata'}
  ]

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
            <div className='flex justify-center'>
              <iframe id="ytplayer" width="360" height="520"
                src="http://www.youtube.com/embed/f5kUoroh9uo?autoplay=1&origin=https://semana-turistica-2023.vercel.app/actividades"
                />
            </div>

        </div>

        <hr/>


        <div className='px-2 py-4'>
            <h2 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6">
            🏄| CAMPEONATO DE SURF BARRANCA CLASSIC 2023 🥇
            </h2>
            <p className="text-gray-200 my-2 px-4 pb-4">
            📣 El Alcalde provincial, Luchito Ueno, estuvo presente en la ceremonia de premiación
            del campeonato de surf Barranca Classic 2023, ocasión que fue propicia para que nuestro
            burgomaestre reafirme su compromiso de fomentar y apoyar  la práctica de deportes.
            </p>

            <Carousel
              next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
              prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
            
            >
                {
                  surfImages?
                  surfImages.map( (item:any, i:any) => <Gallery key={i} src={item.src} alt={item.alt} /> )
                  : false
                }
            </Carousel>

        </div>



        <div className='px-2 py-4'>
            <h2 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6">
            📣| ¡GRAN SERENATA TURÍSTICA ! 🎺🎤
            </h2>
            <p className="text-gray-200 my-2 px-4 pb-4">
            🔰 Con mucha algarabía y entusiasmo cientos de familias y amigos se dieron cita en
            el mirador Grau para disfrutar de un gran espectáculo musical en el marco de la celebración
            por la XXIX Semana Turística de Barranca, el invitado especial Zambo Barbieri y distintas agrupaciones
            locales pusieron a bailar a todos los asistentes.
            </p>

            <Carousel>
                {
                  serenataImages?
                  serenataImages.map( (item:any, i:any) => <Gallery key={i} src={item.src} alt={item.alt} /> )
                  : false
                }
            </Carousel>

        </div>




        </div>
    </div>
  )
}

export default Actividades