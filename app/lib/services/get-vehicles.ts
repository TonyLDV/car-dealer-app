import axios from "axios";

const URL =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const getAllVehicles = async () => {
  try {
    const res = await axios.get(URL);
    return res.data.Results;
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedVehicles = async (makeId: string, year: string) => {
  try {
    const res = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    return res.data.Results;
  } catch (error) {
    console.log(error);
  }
};
