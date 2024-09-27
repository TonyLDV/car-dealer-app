"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import { VehicleType } from "../../lib/types";

type VehicleProps = {
  data: VehicleType[];
};

const VehicleFilter: FC<VehicleProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const [selectedCarBrand, setSelectedCarBrand] = useState<string>("");
  const [selectedCarYear, setSelectedCarYear] = useState<string>("");

  const modelYears = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (currentYear - i).toString()
  );

  const isDisabled = !selectedCarBrand || !selectedCarYear;

  const handleVehicleBrandChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCarBrand(e.target.value);
  };

  const handleVehicleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCarYear(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-black h-full">
      <select
        className="p-2 rounded-md outline-none focus:outline-none h-11"
        onChange={handleVehicleBrandChange}
        value={selectedCarBrand}
      >
        <option value="">Select Vehicle Brand</option>

        {data.map((vehicle) => (
          <option key={vehicle.MakeId} value={vehicle.MakeId}>
            {vehicle.MakeName}
          </option>
        ))}
      </select>

      <select
        className="p-2 rounded-md outline-none focus:outline-none w-full h-11"
        onChange={handleVehicleYearChange}
        value={selectedCarYear}
      >
        <option value="">Select Model Year</option>
        {modelYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <button
        disabled={isDisabled}
        className="bg-blue-500 hover:bg-blue-700 transition text-white py-2 px-4 rounded-md disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        <Link href={`/result/${selectedCarBrand}/${selectedCarYear}`}>
          Next
        </Link>
      </button>
    </div>
  );
};

export default VehicleFilter;
