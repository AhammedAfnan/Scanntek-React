import React from 'react';

const DailyComparisonGraph: React.FC = () => {
  return (
    <div className="shadow-[0_0_20px_rgba(255,255,255,.8)] text-white p-4 w-1/2  left-2/4 bottom-[260px] h-[400px]">
      <div className="text-lg font-bold text-center mb-4">Daily wise comparison</div>
      <div className="flex justify-between items-center mb-4">
        <div></div> {/* Empty div for spacing */}
        <div className="flex items-center">
          <div>Month</div>
          <div className="bg-white text-black p-2 rounded-md ml-2">Day</div>
        </div>
      </div>
      <div className="flex items-end justify-start">
        <div className="w-20 flex flex-col items-start mr-4">
          <div className="mb-4">Price</div>
          <div>3000</div>
          <div className="mt-3">2000</div>
          <div className="mt-3">1000</div>
          <div className="mt-3">0</div>
        </div>
        <div className="flex-grow relative h-32">
          {/* Your graph or data visualization here */}
        </div>
      </div>
      <div className="flex justify-center mt-4"> {/* Centering container */}
        <div className="flex flex-row justify-center"> {/* Centering numbers */}
          <div className="mr-4">1</div>
          <div className="mr-4">2</div>
          <div className="mr-4">3</div>
          <div className="mr-4">4</div>
          <div className="mr-4">5</div>
          <div className="mr-4">6</div>
          <div className="mr-4">7</div>
          <div className="mr-4">8</div>
          <div className="mr-4">9</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
};

export default DailyComparisonGraph;
