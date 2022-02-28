import React, { useState } from 'react'
import Image from 'next/image'

const PlayerCard = ({ players }) => {
  const [isTop, setTop] = useState([])
  const toggle = i => {
    if (isTop.indexOf(i) === -1) {
      setTop([i])
    }
  }

  return (
    <>
      {players.map((player, index) => (
        <div
          key={index}
          className={`card ${player.position.toUpperCase()} flex items-center justify-center`}
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
              <Image src={player.image} width={180} height={160} />
            </div>
            <div className='player-details absolute top-10 left-12 w-10 flex flex-col items-center'>
              <p className='player-rating text-4xl font-bold'>
                {player.rating}
              </p>
              <p className='player-position text-1xl font-bold'>
                {player.position}
              </p>
              <span className='player-country'>
                <Image src={player.country} width={35} height={20} />
              </span>
              <span className='player-team'>
                <Image src={player.team} width={40} height={40} />
              </span>
            </div>
            <div className='player-name absolute bottom-32 uppercase text-xl text-center font-semibold'>
              {player.name}
            </div>
            <div className='player-stats absolute flex justify-start uppercase justify-between'>
              <div className='flex flex-col justify-start'>
                <div>
                  {player.stats.pac} <span className='font-semibold'>pac</span>
                </div>
                <span>
                  {player.stats.sho} <span className='font-semibold'>sho</span>
                </span>
                <span>
                  {player.stats.pas} <span className='font-semibold'>pas</span>
                </span>
              </div>
              <div className='flex flex-col justify-start'>
                <span>
                  {player.stats.dri} <span className='font-semibold'>dri</span>
                </span>
                <span>
                  {player.stats.def} <span className='font-semibold'>def</span>
                </span>
                <span>
                  {player.stats.phy} <span className='font-semibold'>phy</span>
                </span>
              </div>
            </div>
            <footer className='absolute text-dark-gold -bottom-4 text-center text-xl font-bold uppercase rounded-full bg-white shadow-xl border-2 px-5'>
              {player.position}
            </footer>
          </div>
        </div>
      ))}
    </>
  )
}

export default PlayerCard
