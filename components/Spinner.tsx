import React from 'react'
import { MdEco } from 'react-icons/md'

export const Spinner = () => {
    return (
        <section className='w-full h-40 mx-auto flex flex-col items-center justify-center'>

        <div className="w-20 h-20 animate-spin">
          <MdEco className="w-full h-full text-primary" />
        </div>
        <h2 className='text-lg text-primary '>Chargement de vos résultats<span className='animate-ping text-5xl ps-2'>.</span><span className='animate-ping delay-75 text-5xl'>.</span><span className='animate-ping delay-150 text-5xl'>.</span></h2>
        </section>
  )
}
