import React from 'react';

const TotalPurchase: React.FC = () => {
  return (
    <div className="shadow-[0_0_20px_rgba(255,255,255,.8)]  col-span-2 rounded-2xl text-white p-3 ml-5 inline-block  h-full w-[185px]  mt-8" >
      <div className="text-lg font-bold">Total Purchase</div>
      <div className="mt-2">
        <div>Cash / 23</div>
        <div className="ml-2">322.61 AED</div>
      </div>
      <div className="mt-1">
        <div>Credit / 11</div>
        <div className="ml-2">322.61 AED</div>
      </div>
    </div>
  );
};

export default TotalPurchase;
