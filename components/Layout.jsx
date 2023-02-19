

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
            <link rel="icon" href="/favicon.ico" />


            {/* google font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet" />

            
        </Head>

        {children}

        <Footer />
    </>
  )
}
