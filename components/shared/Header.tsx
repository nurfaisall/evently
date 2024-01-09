import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/logo.svg'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItem from './NavItem'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className='w-full border'>
      <div className="wrapper flex items-center justify-between h-16">
        <Link href={"/"} className='w-36'>
          <Image src={logo} width={38} height={38} alt='Evently logo' />
        </Link>

        <div className='w-32 justify-end gap-3'>
          <SignedOut>
            <Button asChild className='rounded-full bg-cyan-400 text-white hover:scale-110 transition-all' size="lg">
              <Link href="/sign-in">Log in</Link>
            </Button>
          </SignedOut>
        </div>


        <SignedIn>
          <nav className='md:flex justify-between hidden w-full max-w-xs'>is Sign</nav>
        </SignedIn>



        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          <MobileNav />
        </SignedIn>


      </div>

    </header>
  )
}

export default Header