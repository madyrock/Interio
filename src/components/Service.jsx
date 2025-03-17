import React from 'react'
import { PaintRoller } from 'lucide-react';

const products = [
    { id: 1, name: "Modern Sofa", price: "$299", img: "https://source.unsplash.com/400x300/?sofa" },
    { id: 2, name: "Wooden Chair", price: "$149", img: "https://source.unsplash.com/400x300/?chair" },
    { id: 3, name: "Stylish Lamp", price: "$99", img: "https://source.unsplash.com/400x300/?lamp" },
    { id: 4, name: "Luxury Bed", price: "$499", img: "https://source.unsplash.com/400x300/?bed" },
  ];

const Service = () => {
  return (
    <div id='service' className="container mx-auto px-4 py-24">
        <div className='pb-10 text-center'>
        <h2 className="text-3xl font-bold text-center mb-8">Service We Provide</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg h-80 rounded-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative group">
              <div className="">
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 text-center flex flex-col items-center justify-start">
            <PaintRoller size={40}   />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam vel velit deleniti reiciendis fugiat odit aperiam id consectetur adipisci? Officia ea hic itaque nesciunt nobis vitae rerum quod accusantium laboriosam!</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service