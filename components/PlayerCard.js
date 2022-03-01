import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clienteAxios from '../config/axios'

const PlayerCard = () => {
  const [players, setPlayers] = useState([])

  useEffect(async () => {
    const res = await clienteAxios.get(
      '/api/jugadors?sort=suplente:desc&populate=*'
    )
    setPlayers(res.data.data)
  }, [])

  const [isTop, setTop] = useState([])
  const toggle = i => {
    if (isTop.indexOf(i) === -1) {
      setTop([i])
    }
  }

  return (
    <>
      {players.length > 0
        ? players.map((player, index) => (
            <div
              key={index}
              className={`card ${
                player.attributes.suplente
                  ? `SUP-${index + 1} mt-20`
                  : player.attributes.posicion.data.attributes.abreviaturaEng.toUpperCase()
              } flex items-center justify-center select-none`}
              onClick={() => {
                toggle(index)
              }}
            >
              <div
                className={`player-card ${
                  isTop.indexOf(index) !== -1 ? 'z-20' : 'z-10'
                } flex flex-col items-center text-dark-gold`}
              >
                <Image src={'/img/CARD-1.png'} width={230} height={330} />
                <div className='card-image absolute top-14 right-7 overflow-hidden'>
                  <Image
                    src={
                      process.env.backendURL +
                      player.attributes.imagen.data.attributes.url
                    }
                    width={180}
                    height={160}
                  />
                </div>
                <div className='player-details absolute top-10 left-12 w-10 flex flex-col items-center'>
                  <p className='player-rating text-4xl font-bold'>
                    {player.attributes.rating}
                  </p>
                  <p className='player-position text-1xl font-bold'>
                    {player.attributes.posicion.data.attributes.abreviaturaEng.toUpperCase()}
                  </p>
                  <span className='player-country'>
                    <Image
                      src={player.attributes.pais.data.attributes.url}
                      width={35}
                      height={20}
                    />
                  </span>
                  <span className='player-team'>
                    <Image
                      src={player.attributes.equipo.data.attributes.url}
                      width={40}
                      height={40}
                    />
                  </span>
                </div>
                <div className='player-name-container absolute bottom-32 uppercase text-xl text-center font-semibold w-56 flex justify-center'>
                  <span className='player-name-slider'>
                    <h2
                      className={`player-name ${
                        player.attributes.nombre.length > 15
                          ? 'player-name-long'
                          : ''
                      }`}
                    >
                      {player.attributes.nombre}
                    </h2>
                  </span>
                </div>
                <div className='player-stats absolute flex justify-start uppercase justify-between'>
                  <div className='flex flex-col justify-start'>
                    <div>
                      {player.attributes.velocidad}{' '}
                      <span className='font-semibold'>pac</span>
                    </div>
                    <span>
                      {player.attributes.tiro}{' '}
                      <span className='font-semibold'>sho</span>
                    </span>
                    <span>
                      {player.attributes.pase}{' '}
                      <span className='font-semibold'>pas</span>
                    </span>
                  </div>
                  <div className='flex flex-col justify-start'>
                    <span>
                      {player.attributes.regate}{' '}
                      <span className='font-semibold'>dri</span>
                    </span>
                    <span>
                      {player.attributes.defensa}{' '}
                      <span className='font-semibold'>def</span>
                    </span>
                    <span>
                      {player.attributes.fisico}{' '}
                      <span className='font-semibold'>phy</span>
                    </span>
                  </div>
                </div>
                <footer className='absolute text-dark-gold -bottom-4 text-center text-xl font-bold uppercase rounded-full bg-white shadow-xl border-2 px-5'>
                  {player.attributes.posicion.data.attributes.abreviaturaEng.toUpperCase()}
                </footer>
              </div>
            </div>
          ))
        : ''}
    </>
  )
}

export default PlayerCard
