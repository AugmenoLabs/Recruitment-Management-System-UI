import axios from 'axios' ;
import { API_BASE_PATH } from '../Config/config';
import { InterviewInterface } from '../Interface/InterviewInterface';
import keycloak from '../keycloak/keycloak';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetScheduleInterview = async () => {
  const token = keycloak.token;
    const Response = await axios
      .get<InterviewInterface[]>(
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