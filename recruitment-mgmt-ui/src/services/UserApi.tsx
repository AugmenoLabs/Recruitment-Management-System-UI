import axios from 'axios';
import { API_USER_PATH } from '../Config/config';
import { AccountUserInterface } from '../Interface/AccountUserInterface';
import { RoleInterface } from '../Interface/RoleInterface';
import { UserInterface } from '../Interface/UserInterface';
import { clientId } from '../keycloak/ClientDetails';
import { getToken } from '../keycloak/GetToken';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addRole = async (role: RoleInterface, token: string) => {
  try {
    const response = await axios.post(
      `${API_USER_PATH}/clients/${clientId}/roles`,
      role,
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add role');
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addUser = async (users: UserInterface, token: string) => {
  try {
    const response = await axios.post(`${API_USER_PATH}/users`, users, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add role');
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getAllRoles = async (token: string) => {
  try {
    // const token = await getToken();
    const response = await axios.get<RoleInterface[]>(
      `${API_USER_PATH}/clients/${clientId}/roles`,
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const assignRoles = async (
  id: string | undefined,
  roles: RoleInterface[],
  token: string
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await axios.post(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${API_USER_PATH}/users/${id}/role-mappings/clients/${clientId}`,
      roles,
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const deleteRoles = async (roles: RoleInterface) => {
  try {
    const token = await getToken();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    const response = await axios.delete(
      `${API_USER_PATH}/roles-by-id/${roles.id}`,
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getUser = async (token: string) => {
  try {
    // const token = await getToken();
    const response = await axios.get<AccountUserInterface[]>(
      `${API_USER_PATH}/users`,
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const deleteUser = async (user: UserInterface) => {
  try {
    const token = await getToken();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    const response = await axios.delete(`${API_USER_PATH}/users/${user.id}`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const roleMapping = async (id: string | undefined, token: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await axios.get<RoleInterface[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${API_USER_PATH}/users/${id}/role-mappings/clients/${clientId}`,
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
