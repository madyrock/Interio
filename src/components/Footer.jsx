import React from "react";
import { Mail, Phone, MapPin, Plus } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900  text-white md:px-24 md:py-4 sm:py-7 lg:py-10 px-4">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-x-24 gap-24">
        {/* Left Column - Address */}
        <div>
          <div className="flex items-center py-6 gap-2 mb-4">
           
            <h2 className="text-3xl font-bold">
              Interio
            </h2>
          </div>
          <h3 className="font-bold mb-2">Address</h3>
          <p className="text-sm flex items-center gap-2">
            <MapPin size={16} /> 3394 Khale Street, Terre Haute, Florence, SC 29501
          </p>
          <h3 className="font-bold mt-4 mb-2">Phone</h3>
          <p className="text-sm flex items-center gap-2">
            <Phone size={16} /> +1 234 567 890 & 91
          </p>
          <p className="text-sm">Mon - Fri: 9.00 AM to 6.00 PM</p>
          <h3 className="font-bold mt-4 mb-2">Email</h3>
          <p className="text-sm flex items-center gap-2">
            <Mail size={16} /> support@yourdomain.com
          </p>
          <p className="text-sm">info@youremail.com</p>
        </div>

        {/* Middle Column - Services */}
        <div className="flex md:flex-row md:gap-24">
        <div className="md:py-24">
          <h3 className="font-bold border-b border-gray-700 pb-2 mb-4">
            Services
          </h3>
          {[
            "Floor Design",
            "Interior Design",
            "Make Overs",
            "Architecture",
            "Decorative Services",
            "Landscape Design",
          ].map((service, index) => (
            <p key={index} className="text-sm flex items-center gap-2 py-1 cursor-pointer hover:text-green-500">
              <Plus size={14} /> {service}
            </p>
          ))}
        </div>

        {/* Right Column - Recent News */}
        <div className="md:py-24">
          <h3 className="font-bold border-b border-gray-700 pb-2 mb-4">
            Recent News
          </h3>
          {[
            { title: "Renovation Design", date: "Sep 20, 2020", img: "https://plus.unsplash.com/premium_photo-1661962739798-0af59dc30d14?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" },
            { title: "Luxury Room Design", date: "Aug 18, 2020", img: "https://5.imimg.com/data5/SELLER/Default/2022/7/GD/WA/TU/114372452/bedroom-500x500.jpeg" },
            { title: "Furnishing Design", date: "Jul 15, 2020", img: "https://i.pinimg.com/236x/79/7f/d0/797fd0824501039cd2ecf5d63395b24d.jpg" },
          ].map((news, index) => (
            <div key={index} className="flex gap-3 items-center mb-4">
              <img src={news.img} alt={news.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <h4 className="font-bold text-sm hover:text-green-500 cursor-pointer">{news.title}</h4>
                <p className="text-xs text-gray-400">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        

        
      </div>
        {/* Bottom Section */}
      <div className=" bg-lime-700">
        <p className="text-center text-sm p-2">
          &copy; 2021 Interio. All rights reserved.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
