import React from 'react';

const SalesComparison: React.FC = () => {
  return (
    <div className="flex col-span-3">
      <div className="mt-8 shadow-[0_0_20px_rgba(255,255,255,.8)] h-full rounded-2xl text-white inline-block max-w-max p-4">
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold">Sales with Comparison</div>
          <div className="flex items-center">
            <div className="text-green-500 mr-1 pl-[150px]">+3</div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-violet mr-2"></div>
              <div>Dining</div>
              <div className="ml-auto">30%</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-lightviolet mr-2"></div>
              <div>Takeaway</div>
              <div className="ml-auto">18%</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-pink mr-2"></div>
              <div>Delivery</div>
              <div className="ml-auto">16%</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-yellow mr-2"></div>
              <div>Talabat</div>
              <div className="ml-auto">14%</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-orange mr-2"></div>
              <div>Zomato</div>
              <div className="ml-auto">12%</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-lightred mr-2"></div>
              <div>Swiggy</div>
              <div className="ml-auto">10%</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-full w-16 bg-violet text-white flex items-center justify-center">99 AED</div>
            <div className="h-full w-16 bg-lightviolet text-white flex items-center justify-center">86 AED</div>
            <div className="h-full w-16 bg-pink text-white flex items-center justify-center">68 AED</div>
            <div className="h-full w-16 bg-yellow text-black flex items-center justify-center">55 AED</div>
            <div className="h-full w-16 bg-orange text-black flex items-center justify-center">51 AED</div>
            <div className="h-full w-16 bg-lightred text-white flex items-center justify-center">45 AED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesComparison;
