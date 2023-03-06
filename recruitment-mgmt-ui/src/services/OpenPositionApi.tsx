import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { API_BASE_PATH } from '../Config/config';
import { RequisitionInterface } from '../Interface/RequisitionInterface';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetOpenPositionById = async (id:string | undefined) => {
    const Response = await axios
      .get(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${API_BASE_PATH}/OpenPosition/${id}`
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
  export const addJobOpening = async (opening: RequisitionInterface) => {
    try {
      const response = await axios.post(`${API_BASE_PATH}/OpenPosition`, opening);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to add account');
    }
  };