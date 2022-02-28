import React, { useContext, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='grid grid-cols-2 items-center justify-center pt-5 mb-10'>
      <Link href={'/'} className='flex items-center justify-center'>
        <a className='text-xl font-bold text-gray-700 uppercase ml-2 md:text-center'>
          Exa Futbol
        </a>
      </Link>
    </header>
  )
}
export default Header
