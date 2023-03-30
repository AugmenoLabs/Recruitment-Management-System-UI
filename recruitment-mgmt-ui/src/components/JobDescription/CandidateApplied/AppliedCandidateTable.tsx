import React, { useMemo,useState,useEffect } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import ScheduleInterview from '../../ScheduleInterview/ScheduleInterview';
import EditCandidateStatus from './EditCandidateStatus';
import { Box } from '@mui/material';
import { CandidateData } from '../../../Interface/CandidateData';
import { API_BASE_PATH } from '../../../Config/config';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const AppliedCandidateTable: React.FunctionComponent = () => {
  const [data, setData] = useState<CandidateData[]>([]);
  const { id } = useParams<{ id: '' }>();
  // useEffect(() => {
  //   GetCandidateByPositionId(positionid)
  //     .then((response: any) => {
  //       setData(response.data);
  //     })
  //     .catch((error: any) => console.log('error', error));
  // }, []);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchCandidate = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const response = await axios.get<CandidateData[]>(  `${API_BASE_PATH}/CandidateProfile/CandidateProfileByOpenPositionId?openPositionId=${id}`);
       // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
       if(response?.data){
        setData(response.data);
       }
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCandidate();
  }, [id]);
   
  const columns = useMemo<Array<MRT_ColumnDef<CandidateData>>>(
    () => [
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        size:160,
        muiTableBodyCellProps: ({ cell }) => ({
       
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'vendorName',
        header: 'Vendor',
        size:90,
        muiTableBodyCellProps: ({ cell }) => ({
       
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'contactNumber',
        header: 'Contact',
        size:110,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        // size:70,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size:90,
      },
      {
        accessorKey: 'screening',
        header: 'Screening',
        size:90,
      },
      {
        accessorKey: 'L1',
        header: 'L1',
        size:70,
      },
      {
        accessorKey: 'L2',
        header: 'L2',
        size:70,
      },
      {
        accessorKey: 'Managerial',
        header: 'Managerial',
        size:110,
      },
      {
        accessorKey: 'HR',
        header: 'HR',
        size:70,
      },
      {
        accessorKey: 'Offer',
        header: 'Offer',
        size:80,
      },
      {
        accessorKey: 'Hired',
        header: 'Hired',
        size:80,
      },
      
    ],
    []
  );

  return (
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
            fontWeight: 500,
            color: 'black',
          },
        },
      }}
      muiTableProps={{
        sx: {
          tableLayout: 'auto',
          marginLeft: '1%',
          marginRight: '1%',
          width: '98%',
//           height:'80%',
// '&::-webkit-scrollbar':{
//   overflow:'hidden',
// }
          
        },
      }}
      //   enableColumnFilterModes
      //   enableColumnOrdering
      //   enableGrouping
      //   enablePinning
      enableRowActions
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
      getRowId={(row)=>row.id}
      enableColumnActions={false}
      muiTableHeadRowProps={{
        sx: {
         background:'#9fd7fc',
         borderStyle: 'solid',
         borderColor: '#a9d6f5',
        },
      }}

      muiTableBodyProps={{
        sx: {
          background:'#e3f2fc',
          borderStyle: 'solid',
          borderColor: 'blue',
          borderWidth: 2,
        },      
      }}   
      renderRowActions={({ row }) => (
        <div>
          <Box display="flex" justifyContent="flex-start" alignItems="center" >
            <ScheduleInterview candidateId={row.id}/>
            <EditCandidateStatus />
          </Box>
        </div>
      )}
    />
  );
};

export default AppliedCandidateTable;
