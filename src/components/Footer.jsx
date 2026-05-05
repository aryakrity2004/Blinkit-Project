import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='w-full mt-16 py-10 px-4 sm:px-6'>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-center lg:text-left'>
        
        {/* Left Section */}
        <div>
          <h1 className='text-2xl font-semibold mb-4'>Useful Links</h1>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-600 text-sm justify-items-center lg:justify-items-start'>
            <p>Blog</p>
            <p>Partner</p>
            <p>Recipes</p>
            <p>Privacy</p>
            <p>Franchise</p>
            <p>Bistro</p>
            <p>Terms</p>
            <p>Seller</p>
            <p>District</p>
            <p>FAQs</p>
            <p>Warehouse</p>
            <p>Blinkit Ambulance</p>
            <p>Security</p>
            <p>Deliver</p>
            <p>Contact</p>
            <p>Resources</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className='flex items-center justify-center lg:justify-between gap-4 mb-4'>
            <h1 className='text-2xl font-semibold'>Categories</h1>
            <span className='text-green-500 cursor-pointer font-semibold'>See All</span>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-rows-4 gap-2 text-gray-600 text-sm justify-items-center lg:justify-items-start'>
            <p>Vegetables & Fruits</p>
            <p>Dairy & Breakfast</p>
            <p>Munchies</p>
            <p>Cold Drinks & Juices</p>
            <p>Instant & Frozen Food</p>
            <p>Tea, Coffee & Milk</p>
            <p>Bakery & Biscuits</p>
            <p>Sweet Tooth</p>
            <p>Atta, Rice & Dal</p>
            <p>Dry Fruits, Masala & Oil</p>
            <p>Sauces & Spreads</p>
            <p>Chicken, Meat & Fish</p>
            <p>Paan Corner</p>
            <p>Organic & Premium</p>
            <p>Baby Care</p>
            <p>Pharma & Wellness</p>
            <p>Cleaning Essentials</p>
            <p>Home Furnishing</p>
            <p>Personal Care</p>
            <p>Pet Care</p>
            <p>Beauty & Cosmetics</p>
            <p>Magazines</p>
            <p>Kitchen & Dining</p>
            <p>Fashion & Accessories</p>
            <p>Electronics & Electricals</p>
            <p>Stationery Needs</p>
            <p>Books</p>
            <p>Toys & Games</p>
            <p>Print Store</p>
            <p>E-Gift Cards</p>
            <p>Rakhi Gifts</p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-10 pt-6'>

        {/* Row 1 */}
        <div className='bg-gray-50 py-6 px-4 rounded-lg flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 text-center lg:text-left'>

          {/* Left */}
          <p className='text-gray-500 text-sm'>
            © Blink Commerce Private Limited, 2016-2026
          </p>

          {/* Center */}
          <div className='flex flex-col sm:flex-row items-center gap-3'>
            <span className='text-sm font-medium'>Download App</span>

            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className='h-8'
              alt=""
            />

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className='h-8'
              alt=""
            />
          </div>

          {/* Right */}
          <div className='flex gap-3 justify-center'>
            <div className='bg-black text-white p-2 rounded-full'><FaFacebookF /></div>
            <div className='bg-black text-white p-2 rounded-full'><FaTwitter /></div>
            <div className='bg-black text-white p-2 rounded-full'><FaInstagram /></div>
            <div className='bg-black text-white p-2 rounded-full'><FaLinkedinIn /></div>
          </div>

        </div>

        {/* Row 2 */}
        <p className='text-gray-500 text-sm mt-4 text-center lg:text-left leading-relaxed'>
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
        </p>

      </div>

    </footer>
  )
}