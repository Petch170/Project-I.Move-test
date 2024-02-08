import React, { useState } from 'react'
import { logo } from '../../assets/Picture';

export const Navbarmember = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) 
    }

  return (
    <nav className='bg-[#EADBC8] sticky p-2'>
        <div className="flex items-center justify-between">
        <div className="navlogobar flex  items-center">
        <img
          className="nav w-12 h-12"
          src={logo}
          alt="icon"
        />
        <a className="Logo hover:cursor-pointer font-bold">I.MOVE</a>
      </div>


            {/* troggle */}
            <div className='md:hidden'>
                <button id='menu-toggle' className='' onClick={toggleMenu}>
                    <svg 
                    fill='none' 
                    stroke='currentColor' 
                    strokeLinecap='round' 
                    strokeLinejoin='round' 
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    className='w-6 h-6'>
                        <path d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>
            </div>


            <ul className='hidden md:flex space-x-4'>
            <li><a href='/Contact' className=''>Contact</a></li>
            <li><a href='/Aboutus' className=''>About</a></li>
            <li><a href='/login' className=''>Login</a></li>
            <li><a href='/signup' className=''>Sign up</a></li>
            </ul>
            
        </div>

    {/* Mobile */}
    {isMenuOpen ? (<ul className='flex-col md:hidden'>
            <li className='py-2'><a href='/Contact' className=''>Contact</a></li>
            <li className='py-2'><a href='/Aboutus' className=''>About</a></li>
            <li className='py-2'><a href='/login' className=''>Login</a></li>
            <li className='py-2'><a href='/signup' className=''>Sign up</a></li>
            </ul>
            ) : null}
    

    </nav>
  )
}
