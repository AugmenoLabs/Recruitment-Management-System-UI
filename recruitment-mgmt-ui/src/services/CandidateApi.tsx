import axios from 'axios' ;
import { API_BASE_PATH } from '../Config/config';
import { CandidateInterface } from '../Interface/CandidateInterface';
import keycloak from '../keycloak/keycloak';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetCandidate = async () => {
  const token = keycloak.token;
    const Response = await axios
      .get<CandidateInterface[]>(
        `${API_BASE_PATH}/CandidateProfile`,
        {
          headers: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Authorization: `Bearer ${token}`,
          },
        }
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
export const addCandidate = async (candidate: CandidateInterface) => {
    try {
      const response = await axios.post(`${API_BASE_PATH}/CandidateProfile`, candidate);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to add account');
    }
  };




  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  