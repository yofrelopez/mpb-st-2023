


import Link from 'next/link'
import React from 'react'



export const Footer = () => {
  return (
    <>
    
        <footer className=" fixed bottom-0 left-0 z-20 w-full p-4 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 md:flex md:items-center md:justify-between md:p-6 ">
            <span className="text-sm text-green-600 sm:text-center ">© 2023 <Link href="/" className="hover:underline">                       
             | Municipalidad Provincial de Barranca™</Link></span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">


            </ul>
        </footer>


    </>
  )
}
