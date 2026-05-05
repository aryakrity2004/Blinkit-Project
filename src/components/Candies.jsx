import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const candiesAndGums = [
  {
    id: 1,
    name: "Center Fresh Chewing Gum",
    weight: "35g",
    price: 50,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60",
  },
  {
    id: 2,
    name: "Orbit Sugar Free Gum",
    weight: "30g",
    price: 60,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
  },
  {
    id: 3,
    name: "Happydent White Gum",
    weight: "28g",
    price: 55,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/61e21313-bdbc-4d60-a3a3-1e6ebf60a1f8.png",
  },
  {
    id: 4,
    name: "Mentos Mint Candy",
    weight: "38g",
    price: 40,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a53c3639-417c-4cbe-80b2-79ebd53c6c96.png",
  },
  {
    id: 5,
    name: "Pulse Candy",
    weight: "100g",
    price: 45,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d8054f9a-05f8-4047-91f6-e96f6af723ed.png",
  },
  {
    id: 6,
    name: "Alpenliebe Caramel Candy",
    weight: "150g",
    price: 70,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2d959fe7-48c2-4aee-8739-784a380ddfd9.png",
  },
  {
    id: 7,
    name: "Eclairs Chocolate Candy",
    weight: "120g",
    price: 65,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    id: 8,
    name: "Boomer Bubble Gum",
    weight: "25g",
    price: 30,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
  },
  {
    id: 9,
    name: "Big Babol Bubble Gum",
    weight: "20g",
    price: 25,
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f",
  },
  {
    id: 10,
    name: "Kaccha Mango Bite",
    weight: "110g",
    price: 50,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66f6a250-ddc2-4352-863e-924bdd1979b0.png",
  },
  {
    id: 11,
    name: "Lollipop Candy Mix",
    weight: "200g",
    price: 120,
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc",
  },
  {
    id: 12,
    name: "Fruit Jelly Candy",
    weight: "180g",
    price: 90,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ce6ff11d-2b2e-4043-8d6c-f0926eaf5efa.png",
  },
  {
    id: 13,
    name: "Choco Filled Candy",
    weight: "140g",
    price: 80,
    image: "https://cdn.grofers.com/app/images/products/full_screen/pro_165409.jpg",
  },
  {
    id: 14,
    name: "Mint Tablets",
    weight: "50g",
    price: 35,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
  },
  {
    id: 15,
    name: "Assorted Candy Pack",
    weight: "250g",
    price: 150,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  }
];

export default function  Candies() {
  return (
    <div className='max-w-7xl mx-auto'>

      {/* Heading */}
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold py-6">
          Candies & Gums
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

        { candiesAndGums.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition duration-300">

              <div className="bg-gray-100 rounded-lg h-[120px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-[100px] object-contain"
                />
              </div>

              <p className="text-[10px] text-gray-500 mt-2">
                ⏱ 12 MINS
              </p>

              <h1 className="text-sm font-semibold mt-1 line-clamp-2">
                {item.name}
              </h1>

              <p className="text-xs text-gray-500 mt-1">
                {item.weight}
              </p>

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