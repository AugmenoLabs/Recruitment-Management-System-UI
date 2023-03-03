import axios from 'axios' ;
import { API_BASE_PATH } from '../Config/config';
import { AccountInterface } from '../Interface/AccountInterface';

export const API_URL='/Account';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetAccount = async () => {
    const Response = await axios
      .get<AccountInterface[]>(
        `${API_BASE_PATH}${API_URL}`
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
  