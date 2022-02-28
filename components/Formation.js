import React, { useState } from 'react'
import Image from 'next/image'
import PlayerCard from './PlayerCard'

const Formation = () => {
  const players = [
    {
      name: 'denis',
      rating: 87,
      position: 'RST',
      country: '/img/paises/py.svg',
      team: '/img/equipos/cerro.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646074652/denis-2_uahfql.png',
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
      rating: 87,
      position: 'LST',
      country: '/img/paises/py.svg',
      team: '/img/equipos/cerro.png',
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
      rating: 87,
      position: 'RCM',
      country: '/img/paises/py.svg',
      team: '/img/equipos/cerro.png',
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
      rating: 87,
      position: 'LCM',
      country: '/img/paises/py.svg',
      team: '/img/equipos/cerro.png',
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
      rating: 87,
      position: 'LW',
      country: '/img/paises/py.svg',
      team: '/img/equipos/cerro.png',
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
      rating: 87,
      position: 'RW',
      country: '/img/paises/py.svg',
      team: '/img/equipos/olimpia.png',
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
      rating: 87,
      position: 'LCB',
      country: '/img/paises/py.svg',
      team: '/img/equipos/olimpia.png',
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
      name: 'denis',
      rating: 87,
      position: 'RCB',
      country: '/img/paises/py.svg',
      team: '/img/equipos/5.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646074652/denis-2_uahfql.png',
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
      name: 'ocampos',
      rating: 78,
      position: 'cb',
      country: '/img/paises/py.svg',
      team: '/img/equipos/cerro.png',
      image:
        'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646074437/ramiro_lcbrzp.png',
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
      rating: 87,
      position: 'CAM',
      country: '/img/paises/py.svg',
      team: '/img/equipos/guaireña.png',
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
      rating: 30,
      position: 'GK',
      country: '/img/paises/ar.svg',
      team: '/img/equipos/rubio-nu.png',
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
      rating: 90,
      position: 'ST',
      country: '/img/paises/jp.svg',
      team: '/img/equipos/10.png',
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

  return (
    <div className='flex flex-col items-center w-full mb-20'>
      <div className='cabecera-detalle'>
        <Image src={'/img/equipos/73.png'} width={100} height={100} />
        <h1 className='text-center text-xl font-bold mb-7 text-gray-700 uppercase rounded-full bg-white shadow-xl border-2'>
          4-4-2
        </h1>
      </div>

      <div className='relative campo'>
        <div className='formation relative'>
          <PlayerCard players={players} />
        </div>
        <div className=''>
          <Image src={'/img/CAMPO-3.png'} width={1100} height={900} />
        </div>
      </div>
    </div>
  )
}

export default Formation
