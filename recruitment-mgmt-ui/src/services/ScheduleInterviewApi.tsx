import axios from 'axios' ;
import { API_BASE_PATH } from '../Config/config';
import { InterviewInterface } from '../Interface/InterviewInterface';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetScheduleInterview = async () => {
    const Response = await axios
      .get<InterviewInterface[]>(
        `${API_BASE_PATH}/CandidateProfile`
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
    return Response;
  };