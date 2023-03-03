import axios from 'axios' ;

export const GetAccount = async (productname) => {
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