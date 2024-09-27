import Link from "next/link";
import React, { Suspense } from "react";
import VehiclesList from "@/app/components/vehicle/vehicles-list";
import { getSelectedVehicles } from "@/app/lib/services/get-vehicles";

const ResultPage = async ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  const { makeId, year } = params;
  const vehicles = await getSelectedVehicles(makeId, year);

  if (vehicles.length === 0) {
    return (
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Unknown model</h1>

          <button className="bg-blue-500 hover:bg-blue-700 transition text-white px-3 py-2 rounded-md">
            <Link href="/">Back</Link>
          </button>
        </div>
        No vehicles found
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">
          {vehicles[0].Make_Name} {year}
        </h1>

        <button className="bg-blue-500 hover:bg-blue-700 transition text-white px-3 py-2 rounded-md">
          <Link href="/">Back</Link>
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <VehiclesList vehicles={vehicles} />
      </Suspense>
    </div>
  );
};

export default ResultPage;
