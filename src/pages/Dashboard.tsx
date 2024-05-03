import DailyComparisonGraph from "../components/DailyComparison";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import SalesComparison from "../components/SalesComparison";
import TotalPurchase from "../components/TotalPurchase";

export default function Dashboard() {
  return (
    <div className=" px-8 pb-12">
      <Navbar />
      <div className="h-full w-full backdrop-blur bg-[#ffffff1c] mt-6 shadow-1">

      <div className="grid grid-cols-12 grid-flow-col  gap-3 mt-4">
        <div className="col-span-7  ">
          <div className="gap-1 grid grid-cols-8 h-40 p-1  ">
            <div className="col-span-2  bg-[#141414]    rounded-3xl"></div>
            <div className="col-span-2  bg-[#141414]   rounded-3xl"></div>
            <div className="col-span-2  bg-[#141414]   rounded-3xl"></div>
            <div className="flex gap-1 col-span-2">
              <div className=" w-full h-full bg-[#141414]   rounded-3xl"></div>
              <div className=" w-full h-full bg-[#141414]   rounded-3xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-4 h-[340px] gap-1 p-1 mt-3 ">
            <div className="bg-[#141414] rounded-2xl col-span-2"></div>
            <div className="bg-[#141414]  rounded-2xl col-span-1"></div>
            <div className="bg-[#141414]  rounded-2xl col-span-1"></div>
          </div>
        </div>
        <div className="col-span-5   bg-[#141414] h-[500px] rounded-2xl"></div>
      </div>
      <div className="grid grid-cols-12 gap-4  h-[280px] mt-4">
        <div className="col-span-4 rounded-2xl bg-[#141414]"> </div>
        <div className="col-span-4 rounded-2xl bg-[#141414]"> </div>
        <div className="col-span-4 rounded-2xl bg-[#141414]"> </div>
      </div>
      {/* <Hero />
      <div className="grid grid-cols-12">
        <SalesComparison  />
        <TotalPurchase />
        <TotalPurchase />
        <DailyComparisonGraph />
      </div>
      <div className="flex gap-40">
        <SalesComparison />
        <SalesComparison />
        <SalesComparison />
      </div> */}
      </div>

    </div>
  );
}
