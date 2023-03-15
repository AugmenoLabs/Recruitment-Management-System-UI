import axios from 'axios' ;
import { API_BASE_PATH } from '../Config/config';
import { ProjectInterface } from '../Interface/ProjectInterface';
import keycloak from '../keycloak/keycloak';
export const API_URL='/Project';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetProject = async () => {
  const token = keycloak.token
    const Response = await axios
      .get<ProjectInterface[]>(
        `${API_BASE_PATH}${API_URL}`,
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
  export const addProject = async (project: ProjectInterface) => {
    try {
      const response = await axios.post(`${API_BASE_PATH}${API_URL}`, project);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to add account');
    }
  };


 