

import React from 'react'
import { Navegador } from './Navegador'
import { Footer } from './Footer'
import Head from 'next/head'



export const Layout = ({children}) => {
  return (
    <>
        <Navegador/>
        <Head>
            <title>Semana Turística</title>
            <meta name="description" content="XXIX Semana Turística - Barranca 2023" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />


            <meta property="og:type" content="website"></meta>
            <meta property = 'og:description' content= 'Cronograma de Actividades de la XXIX Semana Turística de Barranca'/>
            <meta property = 'og:image' itemprop="image" content='/images/fb_image.jpg'/>
            <meta property = 'og:url' content='https://semana-turistica-2023.vercel.app/'/>
            <meta property = 'og:site_name' content='XXIX Semana Turística'/>
            <meta property= "og:title" content="XXIX Semana Turística"></meta>

            
            <link rel="icon" href="/fav.ico" />


            {/* google font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" />

            
        </Head>

        {children}

        <Footer />
    </>
  )
}
