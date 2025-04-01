import { useState } from 'react';
import logo from '../../assets/Logo.svg'
import { navLinks } from './constants'
import { MdClose, MdMenu } from 'react-icons/md';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className='w-full px-4 py-2 bg-white'>
      <div className='w-full max-w-6xl flex mx-auto justify-between items-center relative'>
        {/* Logo */}
        <a href="#" className="text-lg font-bold md:text-xl z-20">
          <img src={logo} alt="logo" className="size-28 md:size-32" />
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center justify-center gap-12">
          {navLinks.map((item, index) => (
            <div className='flex items-center font-rubik' key={index}>
                  <ul>
                      
              <a href='#' >
              <li className="cursor-pointer hover:text-[#F53855] transition-colors">{item.label}</li>
                  </a>
                  </ul>
                  
            </div>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className='hidden md:flex items-center justify-center font-rubik space-x-4'>
          <button className='hover:text-[#F53855] transition-colors'>Sign in</button>
          <button className='border text-[#F53855] border-[#F53855] px-8 py-2 rounded-full hover:bg-[#F53855] hover:text-white transition-colors'>Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className="md:hidden z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-10 flex flex-col items-center justify-center md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center space-y-8">
            {/* Navigation Links - Mobile */}
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((item, index) => (
                <div className='font-rubik text-lg' key={index}>
                  <ul>
                    <li className="cursor-pointer hover:text-[#F53855] transition-colors">{item.label}</li>
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Auth Buttons - Mobile */}
            <div className='flex flex-col items-center font-rubik space-y-4 mt-6'>
              <button className='hover:text-[#F53855] transition-colors text-lg'>Sign in</button>
              <button className='border text-[#F53855] border-[#F53855] px-8 py-2 rounded-full hover:bg-[#F53855] hover:text-white transition-colors'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};