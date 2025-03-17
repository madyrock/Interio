import React from "react";
import { Monitor, FileText, Home } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Request a meeting",
    description: "We have a long and proud history given to interior and architecture.",
    icon: <Monitor size={50} className="text-gray-800" />,
  },
  {
    id: "02",
    title: "Needs and planning",
    description: "We have a long and proud history given to interior and architecture.",
    icon: <FileText size={50} className="text-gray-800" />,
  },
  {
    id: "03",
    title: "Let's make it happen",
    description: "We have a long and proud history given to interior and architecture.",
    icon: <Home size={50} className="text-gray-800" />,
  },
];

const Work = () => {
  return (
    <>
    <div id='work' className='py-24 text-center'>
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-6">
        
        
        
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-center text-center max-w-xs">
          {/* Dotted Line & Arrow */}
          {index !== 0 && (
            <div className="absolute left-[-60px] top-1/2 hidden lg:block">
              <svg width="80" height="24">
                <line x1="0" y1="12" x2="70" y2="12" stroke="gray" strokeWidth="2" strokeDasharray="5,5" />
                <polygon points="70,12 60,6 60,18" fill="gray" />
              </svg>
            </div>
          )}

          {/* Step Content */}
          <div className="relative w-36 h-36 flex items-center justify-center border-2 border-dashed rounded-full">
            {step.icon}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
              {step.id}
            </div>
          </div>
          <h3 className="font-bold text-lg mt-4">{step.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{step.description}</p>
        </div>
      ))}
    </section>
    </>
  );
};

export default Work;
