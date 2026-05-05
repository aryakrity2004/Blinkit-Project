import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const fresheners = [
  {
    id: 1,
    name: "Saunf Mukhwas",
    weight: "200g",
    price: 120,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_165407.jpg",
  },
  {
    id: 2,
    name: "Sweet Amla Candy",
    weight: "150g",
    price: 90,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_27912.jpg",
  },
  {
    id: 3,
    name: "Paan Flavoured Mukhwas",
    weight: "180g",
    price: 150,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6e295473-6bfd-4ad6-b0e3-ffd993167ec9.png",
  },
  {
    id: 4,
    name: "Elaichi Dana",
    weight: "100g",
    price: 220,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_15387.jpg",
  },
  {
    id: 5,
    name: "Mint Candy",
    weight: "120g",
    price: 60,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_110233.jpg",
  },
  {
    id: 6,
    name: "Clove Candy",
    weight: "100g",
    price: 80,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6e295473-6bfd-4ad6-b0e3-ffd993167ec9.png",
  },
  {
    id: 7,
    name: "Digestive Mukhwas Mix",
    weight: "250g",
    price: 180,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_165409.jpg",
  },
  {
    id: 8,
    name: "Sugar Coated Saunf",
    weight: "200g",
    price: 140,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_27913.jpg",
  },
  {
    id: 9,
    name: "Pudina Tablets",
    weight: "50g",
    price: 40,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_110234.jpg",
  },
  {
    id: 10,
    name: "Anardana Goli",
    weight: "100g",
    price: 70,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_165410.jpg",
  },
  {
    id: 11,
    name: "Jeera Goli",
    weight: "120g",
    price: 65,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_165411.jpg",
  },
  {
    id: 12,
    name: "Hing Peda",
    weight: "100g",
    price: 75,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1777294645672-69.png",
  },
  {
    id: 13,
    name: "Fruit Flavoured Candy",
    weight: "150g",
    price: 90,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_110235.jpg",
  },
  {
    id: 14,
    name: "Dry Paan Mukhwas",
    weight: "200g",
    price: 160,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d6913705-2ced-4845-a847-12cdf396d63c.png",
  },
  {
    id: 15,
    name: "Churan Goli",
    weight: "120g",
    price: 50,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_165412.jpg",
  },
  {
    id: 16,
    name: "Imli Candy",
    weight: "150g",
    price: 85,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_15387.jpg",
  },
  {
    id: 17,
    name: "Orange Candy",
    weight: "150g",
    price: 70,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_110236.jpg",
  },
  {
    id: 18,
    name: "Mixed Herbal Mukhwas",
    weight: "250g",
    price: 190,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_165413.jpg",
  },
  {
    id: 19,
    name: "Chocolate Mint Candy",
    weight: "120g",
    price: 110,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_110237.jpg",
  },
  {
    id: 20,
    name: "Premium Royal Mukhwas",
    weight: "300g",
    price: 250,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_320598.jpg",
  }
];

export default function MouthFreshner() {
  return (
    <div className='max-w-7xl mx-auto'>
      
      {/* Heading */}
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold py-6">
          Mouth fresheners
        </h1>
        <p className="text-green-600 font-semibold cursor-pointer">
          see all
        </p>
      </div>

      <Swiper
        modules={[Navigation, FreeMode]}
        navigation
        freeMode={true}
        spaceBetween={12}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >

        {fresheners.map((item) => (
          <SwiperSlide key={item.id}>
            
            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-3 shadow-sm hover:shadow-md transition duration-300">

              {/* Image Box */}
              <div className="bg-gray-100 rounded-lg h-[120px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-[100px] object-contain"
                />
              </div>

              {/* Delivery */}
              <p className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
                ⏱ 12 MINS
              </p>

              {/* Name */}
              <h1 className="text-sm font-semibold mt-1 leading-tight line-clamp-2">
                {item.name}
              </h1>

              {/* Weight */}
              <p className="text-xs text-gray-500 mt-1">
                {item.weight}
              </p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-sm font-bold">₹{item.price}</p>
                  <p className="text-xs text-gray-400 line-through">
                    ₹{item.price + 20}
                  </p>
                </div>

                <button className="border border-green-600 text-green-600 text-xs font-bold px-3 py-1 rounded-md hover:bg-green-600 hover:text-white transition">
                  ADD
                </button>
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}