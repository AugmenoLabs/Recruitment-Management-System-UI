import React, { useEffect, useMemo, useState } from 'react';
import { Box,Typography } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import Feedback from './Feedback';
import { InterviewInterface } from '../../Interface/InterviewInterface';
import axios from 'axios';


// interface AllCandidateTableData {
//   name: string;
//   vendor:string,
//   mobile: string;
//   email: string;
//   experience:number;
//   position: string;
//   account:string,
//   project:string,
//   interviewer:string,
//   Schedule:string,
// }

// const data: AllCandidateTableData[] = [
//   {
//     name: 'Sneha Kothari',
//     vendor:'linkedin',
//     mobile: '9099876543',
//     email: 'a@gmail.com',
//     experience:3,
//     position: 'Frontend',
//     account:'Honeywell',
//     project:'RMS',
//    interviewer:'Anshu',
//    Schedule:'14/02//23 2:30pm'
//   },
//   {
//     name: 'Anshu Wadhwani',
//     vendor:'linkedin',
//     mobile: '9099876543',
//     email: 'a@gmail.com',
//     experience:2,
//     position: 'Frontend',
//     account:'LG',
//     project:'XDR',
//     interviewer:'Anshu',
//     Schedule:'14/02//23 2:30pm'
//   },
//   {
//     name: 'Sanjeev',
//     vendor:'Naukari',
//     mobile: '9099876543',
//     email: 'a@gmail.com',
//     experience:3,
//     position: 'Frontend',
//     account:'Honeywell',
//     project:'RMS',
//     interviewer:'Anshu',
//     Schedule:'14/02//23 2:30pm'
//   },
//   {
//     name: 'Sneha Kothari',
//     vendor:'Naukari',
//     mobile: '9099876543',
//     email: 'a@gmail.com',
//     experience:5,
//     position: 'Frontend',
//     account:'Honeywell',
//     project:'RMS',
//     interviewer:'Anshu',
//     Schedule:'14/02//23 2:30pm'
//   },
//   {
//     name: 'Anshu Wadhwani',
//     vendor:'Naukari',
//     mobile: '9099876543',
//     email: 'a@gmail.com',
//     experience:5,
//     position: 'Frontend',
//     account:'Honeywell',
//     project:'RMS',
//     interviewer:'Anshu',
//     Schedule:'14/02//23 2:30pm'
//   },
// ];



const InterviewDetailTable: React.FunctionComponent = () => {
  
    const [data, setData] = useState<InterviewInterface[]>([]);
    const API_URL = 'http://localhost:5141/api/v1/ScheduleInterview';
    
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      const fetchData = async () => {
        try {
          const result = await axios.get<InterviewInterface[]>(API_URL);
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      }; 
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchData();
      console.log(data);
    }, []);
     
  const columns = useMemo<Array<MRT_ColumnDef<InterviewInterface>>>(
    () => [
      {
        accessorKey: 'name',
        header: 'Candidate Name',
        // size:70,
      },
      {
        accessorKey: 'contactNumber',
        header: 'Contact No.',
        // size:120,
      },
      {
        accessorKey: 'cceMail',
        header: 'Email',
        // size:120,
      },
      {
        accessorKey: 'experience',
        header: 'Experience',
        // size:80,
      },
      {
        accessorKey: 'position',
        header: 'Position',
        // size:60,
      },
      {
        accessorKey: 'account',
        header: 'Account',
        // size:120,
      },
      {
        accessorKey: 'project',
        header: 'Project',
        // size:120,
      },
      {
        accessorKey: 'interviewerName',
        header: 'Interviewer Name',
        // size:120,
      },
      {
        accessorKey: 'scheduledTimeFrom',
        header: 'Scheduled Date',
        // size:80,
      },

     
    ],
    []
  );

  return (
    <Box>
    <Typography
      gutterBottom
      variant="h5"
      sx={{
        paddingLeft: '2rem',
        paddingTop: '1.2rem',
        margin: 0,
        fontWeight: 600,
        fontSize: '30px',
        marginBottom: '2%',
      }}
      className="tableheader"
    >
      Interview Details
    </Typography>
    <MaterialReactTable
      columns={columns}
      data={data}
      //    enableColumnActions={false}
      //    enableColumnFilters={false}

      muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10, 20, 50],
      }}
      initialState={{
        density: 'compact',
        columnVisibility: { Contact: false, email: false },
        pagination: { pageSize: 5, pageIndex: 0 },
      }}
      enableDensityToggle={false}
      muiTableHeadCellProps={{
        sx: {
          '& .Mui-TableHeadCell-Content': {
            justifyContent: 'left',
            fontWeight: 600,
            color: 'blue',
          },
        },
      }}
      muiTableProps={{
        sx: {
          tableLayout: 'fixed',
          align: 'center',

          marginLeft: '2%',
        },
      }}
      //   enableColumnFilterModes
      //   enableColumnOrdering
      //   enableGrouping
      //   enablePinning
      enableRowActions
      getRowId={(row)=>row.candidateId}
      //   enableRowSelection
      enableColumnResizing
      positionActionsColumn="last"
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 150,

          muiTableHeadCellProps: {
            align: 'center',
          },
        },
      }}
      enableColumnActions={false}
      renderRowActions={({ row }) => (
        <div>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Feedback  candidateId={row.id}/>
            {/* <EditCandidateStatus /> */}
          </Box>
        </div>
      )}
    />
    </Box>
  );

};

export default InterviewDetailTable;
