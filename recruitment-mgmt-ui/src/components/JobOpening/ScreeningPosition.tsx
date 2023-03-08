import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { CandidateInterface } from '../../Interface/CandidateInterface';
// import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import DownloadResume from '../Resume/downloadResume';
import {Box} from '@mui/material';

export interface Props {
  positionid: string;
}

const ScreeningPosition: React.FunctionComponent<Props> = ({ positionid }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState<boolean>(true);
  // const handleClickOpen = (): void => {
  //     setOpen(true);
  //   };
  const [data, setData] = useState<CandidateInterface[]>([]);
  const API_URL = 'http://localhost:5141/api/v1/CandidateProfile';
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await axios.get<CandidateInterface[]>(API_URL);
        // const data = result.data.filter(x => x.openPositionId === positionId);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    console.log(data);

    // setOpen(true)
  }, []);

  const columns = useMemo<Array<MRT_ColumnDef<CandidateInterface>>>(
    () => [
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        size: 50,
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
        header: 'Contact No.',
        size: 50,
        muiTableBodyCellProps: ({ cell }) => ({
            sx: {
              cursor: 'pointer',
              whiteSpace: 'pre-line',
              wordWrap: 'break-word',
            },
          }),
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10, 20, 50],
        }}
        initialState={{
          density: 'compact',
          columnVisibility: { id: false },
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
            tableLayout: 'auto',
            align: 'center',
            '&::-webkit-scrollbar':{
                overflow:'hidden',
              }
          },
        }}
        // enableColumnResizing
        // positionActionsColumn="last"
        displayColumnDefOptions={{
          'mrt-row-actions': {
            size: 40,
            muiTableHeadCellProps: {
              align: 'center',
            },
          },
        }}
        enableRowActions
        positionActionsColumn="last"
        enableColumnActions={false}
        renderRowActions={({ row }) => (
          <div>
            <Box display="flex" justifyContent="flex-start" alignItems="center" style={{marginLeft:'-1rem'}}>
              <DownloadResume id={row.id} />
            
           
            </Box>
          </div>
        )}
      />
    </>
  );
};

export default ScreeningPosition;
