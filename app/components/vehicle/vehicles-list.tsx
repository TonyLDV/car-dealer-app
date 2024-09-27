import React from "react";
import VehicleItem from "./vehicle-item";
import { VehicleModelType } from "../../lib/types";

const VehiclesList = ({ vehicles }: { vehicles: VehicleModelType[] }) => {
  if (vehicles.length === 0) {
    return <div>No vehicles found</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-4 p-3">
      {vehicles.map((vehicle) => (
        <VehicleItem vehicle={vehicle} key={vehicle.Model_ID} />
      ))}
    </div>
  );
};

export default VehiclesList;
