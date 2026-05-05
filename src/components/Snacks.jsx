import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const products = [ 
  { 
    id: 1, 
    name: "Rolling Paper Classic", 
    weight: "50 leaves", 
    price: 50, 
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/529d271f-6cdf-46ac-8c0d-8e08a7fff711.png" 
  }, 
    { 
      id: 2, 
        name: "Slim Rolling Papers", 
        weight: "32 leaves", 
        price: 60, 
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/37ab1363-93f0-4958-a8df-b9280f99cd40.png"
      }, 
    {
       id: 3, 
        name: "Mint Flavoured Paper",
         weight: "33 leaves",
          price: 80,
           image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/25cf9c8e-dd48-4c82-8847-e9eb1924fea1.png"
           }, 
    { 
      id: 4,
         name: "Strawberry Paper",
          weight: "33 leaves", 
          price: 85, 
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fc153e5c-be97-4142-848e-a88e3233efc0.png"
        }, 
    { 
      id: 5,
         name: "Hemp Rolling Paper", 
         weight: "50 leaves", 
         price: 120, 
         image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/773d01bf-0b61-4fcc-8b70-27365c13de43.png"
         }, 
    { 
      id: 6, 
        name: "Pre Rolled Cones", 
        weight: "6 pcs", 
        price: 150,
         image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/735bf21f-8827-4706-991a-3fce6076e758.png"
         }, 
    { 
      id: 7,
         name: "Filter Tips", 
         weight: "100 tips",
          price: 70,
           image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/45d1fa15-a996-4dd8-b701-4ea99fec93f7.png"
           }, 
    { 
      id: 8, 
        name: "Charcoal Filters", 
        weight: "10 pcs", 
        price: 200, 
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9b1fa8de-4bc4-4963-8ec2-b312e1eaa037.png"
       }, 
    { 
      id: 9, 
        name: "Rolling Machine",
         weight: "1 unit",
          price: 250, 
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/235ce6cb-a9df-4bfd-8f95-8912390fc473.png"
         }, 
    { 
      id: 10,
         name: "Rolling Tray", 
         weight: "1 unit", 
         price: 300,
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/29e5a696-7b8c-429e-b97a-23020203769a.png"
        }, 
    { 
      id: 11, 
        name: "Storage Pouch",
         weight: "1 unit", 
         price: 220, 
         image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c70c9ac8-00d3-49ba-9107-09bab824a548.png"
        }, 
    { 
      id: 12, 
        name: "Herbal Mix", 
        weight: "50g", 
        price: 150, 
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1eae9060-c109-4621-8f5c-d153c00dd64f.png"
      }, 
    { 
      id: 13, 
        name: "Flavoured Mix",
         weight: "50g",
          price: 180, 
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4d4e3a00-8cc9-4481-a97d-9476a50a3b19.png"
        }, 
    { 
      id: 14,
        name: "Combo Pack",
        weight: "Multiple", 
        price: 250,
        image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
       }, 
    { 
      id: 15,
        name: "Mini Rolling Kit", 
        weight: "1 set", 
        price: 400, 
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1ddec1da-514b-4b9e-a37e-ca9f82d61d4d.png"
       },
    { 
      id: 16, 
        name: "Eco Paper",
        weight: "50 leaves", 
        price: 130,
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1ddec1da-514b-4b9e-a37e-ca9f82d61d4d.png"
      }, 
    { 
      id: 17,
        name: "Transparent Paper",
        weight: "40 leaves",
        price: 200, 
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/497b0d54-d159-4ddb-91ec-27915ea8a028.png"
      }, 
    { 
      id: 18,
        name: "Flavoured Tips",
        weight: "50 tips", 
        price: 90,
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214"
      }, 
    { 
      id: 19,
        name: "Storage Box", 
        weight: "1 unit", 
        price: 350, 
        image: "https://images.unsplash.com/photo-1590080877777-7d2b1c4d6c9d"
       },
    { 
      id: 20, 
        name: "Rolling Kit Pro", 
        weight: "1 set",
        price: 500, 
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338"
    } 
    ]; 

export default function Snacks() {
  return (
    <div className='max-w-7xl mx-auto'>
      
      {/* Heading */}
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold py-6">
          Rolling paper & tobacco
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

        {products.map((item) => (
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