import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import { CandidateInterface } from '../../Interface/CandidateInterface';
import { IconButton, Tooltip } from '@mui/material';
// import { saveAs } from 'file-saver';
// import { useParams } from 'react-router-dom';

interface props {
  id: string;
}
const DownloadResume: React.FunctionComponent<props> = ({ id }) => {
  const API_URL = `http://localhost:5141/api/v1/CandidateProfile`;
  const [data, setData] = useState<CandidateInterface>({
    candidateName: '',
    email: '',
    contactNumber: 0,
    yearOfExperience: '',
    residentialAddress: '',
    permanenetAddress: '',
    position: '',
    account: '',
    project: '',
    status: '',
    Hired: '',
    gender: '',
    noticeperiod: '',
    employment: '',
    selectedJobtype: '',
    currentctc: 0,
    expectedctc: 0,
    hasoffer: false,
    fileName: '',
    fileExt: '',
    resume: '',
    vendorId: '',
    vendorName: '',
    selectedVendorId: '',
    id: '',
    "qualification": "",
    "openPositionId": "",
    primarySkills:'',
    secondarySkills:'',
    
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      const fetchData = await axios.get(`${API_URL}/${id}`);
      setData(fetchData.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();

    // downloadFile(data.resume);
    // console.log('abc', data);
    // console.log("file", )
  }, [id]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const APIcall = () => {
    const base64String = data.resume;
    const byteCharacters = atob(base64String);
    
    // console.log(base64String);

    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = data.fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <IconButton
        // style={{ marginLeft: '1rem' }}
      >
        <Tooltip title = "Download the Resume"><DownloadIcon onClick={APIcall} /></Tooltip>
      </IconButton>
    </>
  );
};

export default DownloadResume;
