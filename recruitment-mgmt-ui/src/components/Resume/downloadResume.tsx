import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import { CandidateInterface } from '../../Interface/CandidateInterface';
import { Button, IconButton } from '@mui/material';
import { saveAs } from 'file-saver';
import { useParams } from 'react-router-dom';
const DownloadResume: React.FunctionComponent = () => {
  const API_URL = `http://localhost:5141/api/v1/CandidateProfile`;
  const [data, setData] = useState({
    "candidateName": '',
  "email": '',
  "contactNumber": 0,
  "yearOfExperience":'',
  "residentialAddress": '',
  "permanenetAddress": '',
  "position":'',
  "account":'',
  "project":'',
  "status":'',
  "Hired":'',
  "gender": '',
  "noticeperiod":'',
  "employment":'',
  "selectedJobtype":'',
  "currentctc":0,
  "expectedctc":0,
  "hasoffer":false,
  "fileName": '',
  "fileExt": '',
  "resume": '',
  "vendorId": '',
  "vendorName": '',
  "selectedVendorId":'',
  "id":'',
  
 
  

  });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      const fetchData = await axios.get(`${API_URL}/${id}`);
      setData(fetchData.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    console.log("data",data);
  }, [id]);

//   const base64String =
//     'ICAvLyoNCiAgIC8vICAkICogJA0KICAgLy8qICQgKiAkICoNCi8vJCAqICQgKiAkICogJA0KDQojaW5jbHVkZSA8aW9zdHJlYW0+DQp1c2luZyBuYW1lc3BhY2Ugc3RkOw0KDQppbnQgbWFpbigpIHsNCiAgICBpbnQgbj00Ow0KICAgIGludCBhID0gbjsNCiAgICBmb3IoaW50IGk9MDtpPD1uO2krKyl7DQogICAgICAgIGZvcihpbnQgaz0wO2s8PWE7aysrKXsNCiAgICAgICAgICAgY291dDw8IiAiOyANCiAgICAgICAgfQ0KICAgICAgICBhLS07DQogICAgICAgIGlmKGklMj09MCl7DQogICAgICAgIGZvcihpbnQgaj0wO2o8KCgyKmkpLTEpO2orKyl7DQogICAgICAgICAgICBpZihqJTI9PTApew0KICAgICAgICAgICAgICAgY291dDw8IiQiOyANCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgZWxzZXsNCiAgICAgICAgICAgICAgIGNvdXQ8PCIqIjsNCiAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIA0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgICAgIGVsc2V7DQogICAgICAgICAgICBmb3IoaW50IGo9MDtqPCgoMippKS0xKTtqKyspew0KICAgICAgICAgICAgaWYoaiUyPT0wKXsNCiAgICAgICAgICAgICAgIGNvdXQ8PCIqIjsgDQogICAgICAgICAgICB9DQogICAgICAgICAgIGVsc2V7DQogICAgICAgICAgICAgICBjb3V0PDwiJCI7DQogICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICANCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIA0KICAgICAgICB9DQogICAgICAgICAgICBjb3V0PDwiXG4iOw0KICAgICAgICB9DQogICAgDQoJY291dDw8IkdmRyEiOw0KCXJldHVybiAwOw0KfQ0KDQoNCjIuIA0KI2luY2x1ZGU8Yml0cy9zdGRjKysuaD4NCiNpbmNsdWRlIDxpb3N0cmVhbT4NCnVzaW5nIG5hbWVzcGFjZSBzdGQ7DQoNCmJvb2wgYmFsYW5jZShzdHJpbmcgcyl7DQogICAgc3RhY2s8Y2hhcj5zdDsNCiAgICBjaGFyIHg7DQogICAgZm9yKGludCBpPTA7aTxzLmxlbmd0aCgpO2krKyl7DQogICAgICAgIGlmKHNbaV0gPT0gJ1snKQ0KICAgICAgICB7DQogICAgICAgICAgICBzdC5wdXNoKHNbaV0pOw0KICAgICAgICAgICAgY29udGludWU7DQogICAgICAgIH0NCiAgICAgICAgaWYocy5lbXB0eSgpKQ0KICAgICAgICByZXR1cm4gZmFsc2U7DQogICAgICAgIHN3aXRjaChzW2ldKXsNCiAgICAgICAgICAgIGNhc2UgJ10nOg0KICAgICAgICANCiAgICAgICAgeD1zdC50b3AoKTsNCiAgICAgICAgc3QucG9wKCk7DQogICAgICAgIGlmKHg9PSdbJykNCiAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgICAgICANCiAgICAgICAgfQ0KICAgIA0KICAgIH0NCiAgICByZXR1cm4gc3QuZW1wdHkoKTsNCn0NCmludCBtYWluKCkgew0KICAgIA0KICAgIHN0cmluZyBzID0iW11bXVtdW10iOw0KICAgIGlmKGJhbGFuY2UocykpDQogICAgY291dDw8InZhbGlkIjsNCiAgICBlbHNlDQogICAgY291dDw8Im5vdCB2YWxpZCI7DQoJY291dDw8IkdmRyEiOw0KCXJldHVybiAwOw0KfQ==';
//   const fileName = 'string';

  const downloadFile = () => {
    const base64String = data.resume
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const fileBlob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'filename.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <IconButton 
      style={{marginLeft :'1rem'}}
      onClick={downloadFile}>
        <DownloadIcon />
      </IconButton>
    </>
  );
};

export default DownloadResume;
