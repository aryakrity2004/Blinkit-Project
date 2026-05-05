import React from 'react'
const images = [
  { id: 1, src: "https://cdn.grofers.com/layout-engine/2022-12/paan-corner_web.png" },
  { id: 2, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-2_10.png" },
  { id: 3, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-3_9.png" },
  { id: 4, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-4_9.png" },
  { id: 5, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-5_4.png" },
{ id: 6, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-10.png" },
  { id: 7, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-7_3.png" },
  { id: 8, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-8_4.png" },
  { id: 9, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-9_3.png" },
  { id: 10, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-10.png" },
  { id: 11, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-11.png" },
  { id: 12, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-12.png" },
  { id: 13, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-13.png" },
  { id: 14, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-14.png" },
  { id: 15, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-15.png" },
  { id: 16, src: "https://cdn.grofers.com/layout-engine/2022-11/Slice-16.png" }
];




export default function Cards() {
  return (
    <div className='max-w-7xl  mx-auto overflow-hidden px-2 m-6'>
 <div className='grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-3'>
{
 
 
         images.map((data,id)=>(
        <img 
          src={data.src}
          key={id}
          alt="" 
          className='w-full rounded-lg shadow hover:scale-105 transition duration-300'
        />
        
  ))
}   
</div>
</div>
)
}  

 