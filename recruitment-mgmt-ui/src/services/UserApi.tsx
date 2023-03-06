import axios from "axios";
import { API_USER_PATH } from "../Config/config";
import { RoleInterface } from "../Interface/RoleInterface";
import { clientId } from "../keycloak/ClientDetails";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addRole = async (role: RoleInterface) => {
    try {
      const response = await axios.post(`${API_USER_PATH}/clients/${clientId}/roles`, role);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to add role');
    }
  };
