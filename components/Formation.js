import React, { useState } from 'react'
import Image from 'next/image'

const Formation = () => {
  const players = [
    {
      name: 'locura',
      score: 87,
      position: 'RST',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'LST',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'RCM',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'LCM',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'LW',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'RW',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'CAM',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'LCB',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'RCB',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'cb',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'locura',
      score: 87,
      position: 'CAM',
      country: '/img/paises/py.svg',
      team: '/img/equipos/10.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/fer_uvpvwj.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'olivera',
      score: 30,
      position: 'GK',
      country: '/img/paises/ar.svg',
      team: '/img/equipos/1.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1645580528/denis_qemqen.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    },
    {
      name: 'bernatto',
      score: 90,
      position: 'ST',
      country: '/img/paises/jp.svg',
      team: '/img/equipos/11.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646017153/fotocarnet_vryrav.png',
      stats: {
        pac: 85,
        sho: 92,
        pas: 79,
        dri: 95,
        def: 34,
        phy: 40
      }
    }
  ]

  const [isTop, setTop] = useState([])
  const toggle = i => {
    if (isTop.indexOf(i) === -1) {
      setTop([i])
    }
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='cabecera-detalle'>
        <Image src={'/img/equipos/10.png'} width={100} height={100} />
        <h1 className='text-center text-xl font-bold mb-7 text-gray-700 uppercase rounded-full bg-white shadow-xl border-2'>
          4-4-2
        </h1>
      </div>

      <div className='relative campo'>
        <div className='formation relative'>
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
                  <p className='player-rating text-4xl font-bold'>87</p>
                  <p className='player-position text-1xl font-bold'>MD</p>
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
                      {player.stats.pac}{' '}
                      <span className='font-semibold'>pac</span>
                    </div>
                    <span>
                      {player.stats.sho}{' '}
                      <span className='font-semibold'>sho</span>
                    </span>
                    <span>
                      {player.stats.pas}{' '}
                      <span className='font-semibold'>pas</span>
                    </span>
                  </div>
                  <div className='flex flex-col justify-start'>
                    <span>
                      {player.stats.dri}{' '}
                      <span className='font-semibold'>dri</span>
                    </span>
                    <span>
                      {player.stats.def}{' '}
                      <span className='font-semibold'>def</span>
                    </span>
                    <span>
                      {player.stats.phy}{' '}
                      <span className='font-semibold'>phy</span>
                    </span>
                  </div>
                </div>
                <footer className='absolute -bottom-4 text-center text-xl font-bold text-gray-700 uppercase rounded-full bg-white shadow-xl border-2 px-5'>
                  {player.position}
                </footer>
              </div>
            </div>
          ))}
        </div>
        <div className=''>
          <Image src={'/img/CAMPO-3.png'} width={1100} height={900} />
        </div>
      </div>
    </div>
  )
}

export default Formation
