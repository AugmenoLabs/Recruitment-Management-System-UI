import axios from "axios";
import { API_BASE_PATH } from "../Config/config";
import { CandidateInterface } from "../Interface/CandidateInterface";
import { VendorInterface } from "../Interface/VendorInterface";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetVendor = async () => {
    const Response = await axios
      .get<CandidateInterface[]>(
        `${API_BASE_PATH}/Vendor`
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
    return Response;
  };


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  export const addVendor = async (vendor:VendorInterface) => {
    try {
      const response = await axios.post(`${API_BASE_PATH}/Vendor`, vendor);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to add vendor');
    }
  };


 