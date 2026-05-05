import React from 'react'
import { FaCaretDown, FaSearch, FaShoppingCart, FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className='shadow bg-white w-full fixed top-0 z-50 left-0'>

      {/* Top Section */}
      <div className='flex md:grid md:grid-cols-12 items-center justify-between px-4 py-3 md:h-20'>

        {/* Logo (Desktop only) */}
        <div className='hidden md:flex md:col-span-2 items-center border-r cursor-pointer border-gray-300 h-full'>
          <h1 className='text-yellow-400 text-3xl lg:text-4xl font-bold'>
            blink<span className='text-green-500'>it</span>
          </h1>
        </div>

        {/* Delivery */}
        <div className='flex flex-col md:col-span-3 cursor-pointer md:px-4'>
          <h2 className='text-sm md:text-base lg:text-lg font-bold'>
            Delivery in 18 minutes
          </h2>
          <div className='flex items-center gap-1 text-xs md:text-sm text-gray-600'>
            <p className='truncate max-w-[200px] md:max-w-full'>
              B62, Pocket B, South City I...
            </p>
            <FaCaretDown />
          </div>
        </div>

        {/* Desktop Search */}
        <div className='hidden md:flex md:col-span-4 items-center px-2 lg:px-4'>
          <div className='relative w-full'>
            <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
            <input 
              type="text" 
              placeholder='Search...' 
              className='w-full pl-10 pr-3 py-2 lg:py-3 rounded-lg bg-gray-50 shadow outline-none focus:ring-1 focus:ring-green-400'
            />
          </div>
        </div>

        {/* Desktop Right */}
        <div className='hidden md:flex md:col-span-3 items-center justify-end gap-6 px-4'>
          <button className='text-lg font-medium cursor-pointer hover:text-green-600'>
            Login
          </button>

          <button className='bg-green-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'>
            <FaShoppingCart/> 
            <span className='font-bold'>My Cart</span>
          </button>
        </div>

        {/* ✅ Mobile User Icon (NOW FIXED CENTER RIGHT) */}
        <div className='md:hidden flex items-center justify-center'>
          <FaRegUserCircle className='text-3xl cursor-pointer' />
        </div>

      </div>

      {/* Mobile Search */}
      <div className='px-4 pb-3 md:hidden'>
        <div className='relative w-full'>
          <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
          <input 
            type="text" 
            placeholder='Search...' 
            className='w-full pl-10 pr-3 py-2 rounded-lg bg-gray-50 shadow outline-none'
          />
        </div>
      </div>

    </header>
  )
}