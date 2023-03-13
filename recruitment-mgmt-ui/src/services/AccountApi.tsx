import axios from 'axios' ;

import { API_BASE_PATH } from '../Config/config';
import { AccountInterface } from '../Interface/AccountInterface';
import { AddAccountInterface } from '../Interface/AddAccountInterface';
import keycloak from '../keycloak/keycloak';
export const API_URL='/Account';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetAccount = async () => {
  const token = keycloak.token;
    const Response = await axios
      .get<AccountInterface[]>(
        `${API_BASE_PATH}${API_URL}`,
        {
          headers: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(token);
        return response;
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
    return Response;
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  export const addAccount = async (payload: AddAccountInterface) => {
    try {
      const response = await axios.post(`${API_BASE_PATH}${API_URL}`, payload);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to add account');
    }
  };


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  