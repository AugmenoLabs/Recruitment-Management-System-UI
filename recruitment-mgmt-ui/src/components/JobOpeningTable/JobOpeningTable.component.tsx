import React, {  useMemo } from 'react';
import {  useNavigate } from 'react-router-dom';
import MaterialReactTable, { MRT_ColumnDef } from  'material-react-table';
interface JobOpeningData {
    id: number;
    position: string;
    account: string;
    team: string;
    openposition: number;
    totalcandidate: number;
    experience: string;
    skills: string;
    postedon: string;
  }

const data: JobOpeningData[] = [
    {
        id: 2301,
        position: 'Frontend Developer',
        account: 'Honeywell',
        team: 'XDR',
        openposition: 2,
        totalcandidate: 10,
        experience: '3',
        skills: 'React/MUI/JS',
        postedon: '07/01/2023',
      },
      {
        id: 2302,
        position: 'Backend Developer',
        account: 'LG',
        team: 'RMS',
        openposition: 5,
        totalcandidate: 0,
        experience: '3',
        skills: '.Net/C#',
        postedon: '07/01/2023',
      },
      {
        id: 2303,
        position: 'Frontend Developer',
        account: 'Honeywell',
        team: 'XDR',
        openposition: 2,
        totalcandidate: 10,
        experience: '3',
        skills: 'React/MUI/JS',
        postedon: '07/01/2023',
      },
      {
        id: 2304,
        position: 'Devops',
        account: 'Flipkart',
        team: 'TMS',
        openposition: 2,
        totalcandidate: 10,
        experience: '3',
        skills: 'React/MUI/JS',
        postedon: '07/01/2023',
      },
      {
        id: 2305,
        position: 'Frontend Developer',
        account: 'Honeywell',
        team: 'Polaris',
        openposition: 2,
        totalcandidate: 10,
        experience: '3',
        skills: 'React/MUI/JS',
        postedon: '07/01/2023',
      },
      {
        id: 2306,
        position: 'Frontend Developer',
        account: 'Honeywell',
        team: 'XDR',
        openposition: 2,
        totalcandidate: 10,
        experience: '3',
        skills: 'React/MUI/JS',
        postedon: '07/01/2023',
      },
      {
        id: 2307,
        position: 'Frontend Developer',
        account: 'Honeywell',
        team: 'XDR',
        openposition: 2,
        totalcandidate: 10,
        experience: '3',
        skills: 'React/MUI/JS',
        postedon: '07/01/2023',
      },
      {
        id: 2308,
        position: 'Frontend Developer',
        account: 'Honeywell',
        team: 'XDR',
        openposition: 2,
        totalcandidate: 10,
        experience: '3',
        skills: 'React/MUI/JS',
        postedon: '07/01/2023',
      },
];

const JobOpeningTable:React.FunctionComponent = () => {
  const history=useNavigate();
  const navigatetoapply=():void=>{
    history('/jobdescription')}
 
  const columns = useMemo<Array<MRT_ColumnDef<JobOpeningData>>>(
    () => [
      {
        accessorKey: 'id', 
        header: 'JobID',
      
      },
      {
        accessorKey: 'position',
        header: 'Position',
      },
      {
        accessorKey: 'account', 
        header: 'Account',
      },
      {
        accessorKey: 'team',
        header: 'Team',
      },
      {
        accessorKey: 'openposition',
        header: 'Open Position',
      },
      {
        accessorKey: 'totalcandidate',
        header: 'Total Candidate',
      },
      {
        accessorKey: 'experience',
        header: 'Experience',
      },
      {
        accessorKey: 'skills',
        header: 'Skills',
      },
      {
        accessorKey: 'postedon',
        header: 'Posted On',
      },
    ],
    [],
  );
  

  return <MaterialReactTable columns={columns}

   data={data}
//    enableColumnActions={false}
//    enableColumnFilters={false}
   muiTablePaginationProps={{
    rowsPerPageOptions: [5,10,20,50]
  }}
  muiTableBodyRowProps={({ row }) => ({
    onClick: (event) => {
      navigatetoapply();
    },
    sx: {
      cursor: 'pointer', 
    },
  })}
  muiTableProps={{
    sx: {
      tableLayout: 'fixed',
      marginLeft:'2%',marginRight:'2%'
    },
  }}
   />;
  
};

export default JobOpeningTable;


