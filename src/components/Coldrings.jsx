import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const coldDrinksData = [
  {
    id: 1,
    name: "Saunf Mukhwas",
    weight: "200g",
    price: 120,
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc",
  },
  {
    id: 2,
    name: "Sweet Amla Candy",
    weight: "150g",
    price: 90,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2089e070-1be5-4b4d-addf-22023a924904.png",
  },
  {
    id: 3,
    name: "Paan Flavoured Mukhwas",
    weight: "180g",
    price: 150,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/41096594-6517-4e63-86a0-d768720bc149.png",
  },
  {
    id: 4,
    name: "Elaichi Dana",
    weight: "100g",
    price: 220,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/be3489e9-2172-4fc5-9100-9402f94ce9a1.png",
  },
  {
    id: 5,
    name: "Mint Candy",
    weight: "120g",
    price: 60,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c07cfc12-07c6-4ab9-a214-8ea9b923626e.png",
  },
  {
    id: 6,
    name: "Clove Candy",
    weight: "100g",
    price: 80,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/87508b43-2dad-4d1c-a5d5-e55106f2c891.png",
  },
  {
    id: 7,
    name: "Digestive Mukhwas Mix",
    weight: "250g",
    price: 180,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d64e8283-e674-47f3-bfe7-d25bc6a9076e.png",
  },
  {
    id: 8,
    name: "Sugar Coated Saunf",
    weight: "200g",
    price: 140,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
  },
   {
    id: 9,
    name: "Wild Vitamin Drink ",
    weight: "200g",
    price: 150,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4706ef08-e081-4e95-9491-6febacfaac1c.png",
  }
  ,
  {
    id:10,
    name:"Krishna’s Diabic Care Juice",
    weight:"300g",
    price:300,
    image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0f2cbdb6-c89a-4138-8a98-7f04188c1805.png"

  }
]

export default function ColdDrinks() {
  return (
    <div className='max-w-7xl mx-auto'>

      {/* Heading */}
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold py-6">
          Cold Drinks & Juices
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

        {coldDrinksData.map((item) => (
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