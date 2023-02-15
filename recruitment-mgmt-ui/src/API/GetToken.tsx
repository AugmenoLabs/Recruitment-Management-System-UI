import axios from "axios";
import qs from "qs";
import { Connection } from "./keycloakConnection";

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

export const getToken = async () => {
    try {
      const response = await axios.post(`/realms/master/protocol/openid-connect/token`, qs.stringify(
        Connection
      ),{headers});
      console.log("abc",response.data);
      return response.data.access_token;
      
    } catch (error) {
      
      console.error(error);
    }
  };

 
  