import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const products = [
  {
    id: 1,
    name: "Amul Taaza Toned Milk",
    weight: "1L",
    price: 68,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4ec64b71-d957-4ebd-afbc-abd5b7ba34fe.png",
  },
  {
    id: 2,
    name: "Lay's Cream & Onion",
    weight: "52g",
    price: 20,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d37af8d0-d2dc-4a65-81e1-29ba04c88fd3.png",
  },
  {
    id: 3,
    name: "Tata Tea Premium",
    weight: "250g",
    price: 140,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dac86be9-efab-45a4-bcfb-c8111a73742e.png",
  },
  {
    id: 4,
    name: "Fortune Oil",
    weight: "1L",
    price: 180,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d48eff5a-8d0d-4a6f-bae9-942a357ea130.png",
  },
  {
    id: 5,
    name: "Dairy Milk",
    weight: "50g",
    price: 50,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d24cf5f8-739f-4e48-8dbe-9d1e283db94b.png",
  },
  {
    id: 6,
    name: "Maggi Noodles",
    weight: "70g",
    price: 15,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9279b972-fa12-429e-90d8-5c237dfc1bc6.png",
  },
  {
    id: 7,
    name: "Aashirvaad Atta",
    weight: "5kg",
    price: 300,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/32eb38fb-7fe1-44ee-97eb-ec9948e615d9.png",
  },
  {
    id: 8,
    name: "Surf Excel",
    weight: "1kg",
    price: 120,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/def7d008-d975-4007-9d6c-7ece3c788f2b.png",
  },
  {
    id: 9,
    name: "Bisleri Water",
    weight: "2L",
    price: 30,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1771553348655-401.png",
  },
  {
    id: 10,
    name: "Kissan Jam",
    weight: "500g",
    price: 150,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/feff0546-bbcd-40c6-b710-cc93dff833d4.png",
  }
];

export default function ProductCards() {
  return (
    <>
      <h1 className="text-2xl font-bold px-10 py-8">
        Snacks & Munchies
      </h1>

      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Navigation, FreeMode]}
          navigation
          freeMode={true}  
          spaceBetween={20}
          grabCursor={true} 
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >

          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-full shadow-md rounded-xl p-3 bg-white">

                <img
                  src={product.image}
                  alt=""
                  className="w-full h-[150px] object-contain"
                />

                <h1 className="text-sm font-semibold mt-2">
                  {product.name}
                </h1>

                <p className="text-gray-500 text-sm">
                  {product.weight}
                </p>

                <div className="flex justify-between mt-3">
                  <p className="font-bold">₹{product.price}</p>

                  <button className="border border-green-600 px-3 py-1 rounded text-green-600">
                    ADD
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </>
  )
}
