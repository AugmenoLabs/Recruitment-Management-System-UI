import axios from "axios";
import { API_USER_PATH } from "../Config/config";
import { PasswordInterface } from "../Interface/PasswordInterface";

export const ResetPassword = async (
    id: string | undefined,
    pass: PasswordInterface,
    token: string
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const response = await axios.put(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${API_USER_PATH}/users/${id}/reset-password`,
        pass,
        {
          headers: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };