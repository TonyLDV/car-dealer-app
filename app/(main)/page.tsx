import React, { Suspense } from "react";
import { getAllVehicles } from "../lib/services/get-vehicles";
import VehicleFilter from "../components/vehicle/vehicle-filter";

const Home = async () => {
  const vehicles = await getAllVehicles();

  return (
    <div className="w-full h-full flex flex-col items-center p-3">
      <h1 className="text-white text-4xl font-bold">Car Dealer App</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <VehicleFilter data={vehicles} />
      </Suspense>
    </div>
  );
};

export default Home;
