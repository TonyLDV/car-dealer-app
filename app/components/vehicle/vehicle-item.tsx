import React from "react";
import { VehicleModelType } from "../../lib/types";

const VehicleItem = ({ vehicle }: { vehicle: VehicleModelType }) => {
  return (
    <button>
      <div className="flex items-start flex-col p-3 gap-4 border-2 border-[grey] rounded-md text-white hover:border-white transition-all duration-300">
        <h1 className=" text-2xl font-bold">{vehicle.Model_Name}</h1>
        <p>Brand: {vehicle.Make_Name}</p>
        <p>Model: {vehicle.Model_Name}</p>
        <p>ID: {vehicle.Make_ID}</p>
      </div>
    </button>
  );
};

export default VehicleItem;
