import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/logo.svg'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'

function Header() {
  return (
    <header className='w-full border'>
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className='w-36'>
          <Image src={logo} width={128} height={38} alt='Evently logo'/>
        </Link>

      <div className='flex w-32 justify-end gap-3'>
        <SignedOut>
          <Button asChild className='rounded-full' size="lg">
            <Link href="/sign-in"></Link>
          </Button>
        </SignedOut>

      </div>

      </div>

    </header>
  )
}

export default Header