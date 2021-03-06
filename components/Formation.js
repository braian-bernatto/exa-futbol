import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import PlayerCard from './PlayerCard'

const Formation = () => {
  return (
    <div className='flex flex-col items-center w-full select-none'>
      <div className='cabecera-detalle relative'>
        <Image src={'/img/equipos/73.png'} width={100} height={100} />
        <h1 className='text-center text-xl font-bold mb-7 text-gray-700 uppercase rounded-full bg-white shadow-xl border-2'>
          4-4-2
        </h1>
      </div>

      <div className='relative campo select-none mb-20'>
        <div className='campo-imagen relative'>
          <div className='formation relative'>
            <PlayerCard />
          </div>
          <Image src={'/img/CAMPO-3.png'} width={1100} height={900} />
        </div>
      </div>
    </div>
  )
}

export default Formation
