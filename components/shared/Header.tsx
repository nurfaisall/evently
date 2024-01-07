import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/logo.svg'

function Header() {
  return (
    <header className='w-full border'>
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className='w-36'>
          <Image src={logo} width={128} height={38} alt='Evently logo'/>
        </Link>

      <div className='flex w-32 justify-end gap-3'>
        
      </div>

      </div>

    </header>
  )
}

export default Header