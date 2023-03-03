import axios from "axios";

import { API_BASE_RELATIVE_PATH, API_BASE_PATH } from "./../Config/Config";

export const AddProductAPI = async (productname) => {
  const userDetails = localStorage.getItem("userDetail");
  const temp = JSON.parse(userDetails);
  const Response = await axios
    .get(
      `${API_BASE_PATH}${API_BASE_RELATIVE_PATH}?action=addproduct&companyid=${temp.companyid}&productname=${productname}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
  return Response;
};

export const AddModuleAPI = async (id, modulename) => {
  const userDetails = localStorage.getItem("userDetail");
  const temp = JSON.parse(userDetails);
  const Response = await axios
    .get(
      `${API_BASE_PATH}${API_BASE_RELATIVE_PATH}?action=addmodule&companyid=${temp.companyid}&prodid=${id}&modulename=${modulename}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
  return Response;
};
