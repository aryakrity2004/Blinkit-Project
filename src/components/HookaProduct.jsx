import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const hookahProducts = [
  {
    id: 1,
    name: "Classic Glass Hookah",
    weight: "1 unit",
    price: 1299,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/34e3de82-d44e-46cb-85d5-75d4b7eed7a9.png",
  },
  {
    id: 2,
    name: "Mini Travel Hookah",
    weight: "1 unit",
    price: 899,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/32eb38fb-7fe1-44ee-97eb-ec9948e615d9.png",
  },
  {
    id: 3,
    name: "Premium Steel Hookah",
    weight: "1 unit",
    price: 1999,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/def7d008-d975-4007-9d6c-7ece3c788f2b.png",
  },
  {
    id: 4,
    name: "Designer Hookah Set",
    weight: "1 unit",
    price: 2499,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8b6de978-4424-4350-a588-53fe8ce4d3a5.png",
  },
  {
    id: 5,
    name: "Portable Hookah Kit",
    weight: "1 set",
    price: 1499,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/eaefddd0-768f-4fe2-acaf-faef5d827730.png",
  },
  {
    id: 6,
    name: "Hookah Pipe Hose",
    weight: "1 pc",
    price: 299,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1775639482125-153.png",
  },
  {
    id: 7,
    name: "Silicone Hookah Hose",
    weight: "1 pc",
    price: 499,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1771553348655-401.png",
  },
  {
    id: 8,
    name: "Hookah Bowl Ceramic",
    weight: "1 pc",
    price: 199,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1771553348655-401.png",
  },
  {
    id: 9,
    name: "Hookah Glass Base",
    weight: "1 pc",
    price: 599,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776687553173-322.png",
  }
 
];

export default function HookaProduct() {
  return (
    <div className='max-w-7xl mx-auto'>
       <style>
        {`
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 14px;
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 20px;
            height: 20px;
          }
        `}
      </style>

      
      {/* Heading */}
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold py-6">
          Hookah
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

        {hookahProducts.map((item) => (
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