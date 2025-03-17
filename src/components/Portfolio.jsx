import React from 'react';

const products = [
  { id: 1, name: "Hall Decor",  img: "https://media.istockphoto.com/id/1357529194/photo/3d-rendering-of-a-modern-styled-living-room-with-fireplace.jpg?s=612x612&w=0&k=20&c=bBBhHQnZLal9xoH9fGhAEg33CDVF0msBfB7l9cLTU_s=", category: 'architecture' },
  { id: 2, name: "Interior Design", img: "https://c4.wallpaperflare.com/wallpaper/550/125/107/picture-modern-living-room-interior-design-wallpaper-preview.jpg", category: 'interior' },
  { id: 3, name: "Decore", img: "https://images5.alphacoders.com/134/1347177.png", category: 'decore' },
  { id: 4, name: "Luxury room", img: "https://static.vecteezy.com/system/resources/thumbnails/036/108/696/small_2x/ai-generated-living-room-interior-design-with-sofa-minimal-aesthetic-3d-rendered-photo.jpg", category: 'interior' },
  { id: 5, name: "Small Kitchen", img: "https://thumbs.dreamstime.com/b/luxurious-modern-living-room-fireplace-mountain-views-dusk-stylish-features-large-elegant-furnishings-breathtaking-330457459.jpg", category: 'architecture' },
  { id: 6, name: "Stylist Apartment", img: "https://thumbs.dreamstime.com/b/luxurious-modern-mansion-living-room-fireplace-stunning-mountain-view-dusk-spacious-features-large-elegant-330457652.jpg", category: 'architecture' },
  { id: 7, name: "Guest House", img: "https://www.yankodesign.com/images/design_news/2020/06/all-black-interior-designs-that-will-inspire-you-to-adapt-this-modern-minimal-trend/01-Black-Interior-Design-Inspiration_yankodesign2.jpg", category: 'interior' },
  { id: 8, name : "Art Residence", img: "https://www.yankodesign.com/images/design_news/2020/06/all-black-interior-designs-that-will-inspire-you-to-adapt-this-modern-minimal-trend/05-Black-Interior-Design-Inspiration_Alpine-Cabin_yankodesign.jpg", category: 'decore' },
];

const Portfolio = ({ filter, onFilterClick }) => {
  const filteredItems = filter === 'all' ? products : products.filter(item => item.category === filter);

  return (
    <div id='portfolio' className="container mx-auto px-4 p-24">
      <div className='flex items-center justify-center pb-10'>
        <ul className='flex space-x-4 lisstyle-none '>
          <li className=' cursor-pointer hover:text-lime-500 hover:underline transition-all' onClick={() => onFilterClick('all')}>All</li>
          <li className=' cursor-pointer hover:text-lime-500 hover:underline transition-all' onClick={() => onFilterClick('architecture')}>Architecture</li>
          <li className=' cursor-pointer hover:text-lime-500 hover:underline transition-all' onClick={() => onFilterClick('interior')}>Interior</li>
          <li className=' cursor-pointer hover:text-lime-500 hover:underline transition-all' onClick={() => onFilterClick('decore')}>Decore</li>
        </ul>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((product) => (
          <div key={product.id} className=" bg-white shadow-lg rounded-lg overflow-hidden hover:color-rose-500">
            <div className="group relative w-full h-full">
              <img src={product.img} alt={product.name} className=" w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 text-center"></div>
              <div className=' absolute inset-5 overflow-auto w-full scrollbar-hide  '>
                <h2 className='text-white opacity-0 group-hover:opacity-100 text-2xl font-bold absolute top-1/8 md:-top-8 p-10'>{product.name}</h2>
                <p className='text-white opacity-0 group-hover:opacity-100 text-sm absolute top-1/3 md:top-2 p-10 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque beatae quas! Hic quisquam, ratione vel accusamus, a, praesentium doloremque dolorem eum explicabo sequi quam quasi rem est aperiam necessitatibus?</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;