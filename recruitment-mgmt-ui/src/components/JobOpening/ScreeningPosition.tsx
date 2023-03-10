import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { CandidateInterface } from '../../Interface/CandidateInterface';
// import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import DownloadResume from '../Resume/downloadResume';
import {Box, MenuItem, Tooltip} from '@mui/material';
import PreviewResume from '../Resume/PreviewResume';

export interface Props {
  positionid: string;
}


const ScreeningPosition: React.FunctionComponent<Props> = ({ positionid }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [open, setOpen] = useState<boolean>(true);
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
        const data = result.data.filter(x => x.openPositionId === positionid);
        console.log(data)
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
        accessorKey: 'id',
        header: 'Id',
        size: 50
      },
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        size: 50,
        muiTableBodyCellProps: ({ cell }) => ({
            sx: {
              cursor: 'pointer',
              whiteSpace: 'pre-line',
              wordWrap: 'break-word',
              textAlign: 'center'
            },
          }),
      },
      // {
      //   accessorKey: 'contactNumber',
      //   header: 'Contact No.',
      //   size: 50,
      //   muiTableBodyCellProps: ({ cell }) => ({
      //       sx: {
      //         cursor: 'pointer',
      //         whiteSpace: 'pre-line',
      //         wordWrap: 'break-word',
      //         textAlign: 'center'
      //       },
      //     }),
      // },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        getRowId={(originalRow) => originalRow.id}
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10, 20, 50],
        }}
        initialState={{
          density: 'compact',
          columnVisibility: { id: false },
          pagination: { pageSize: 5, pageIndex: 0 },
        }}
        enableRowNumbers
        enableDensityToggle={false}
        enableRowActions
        positionActionsColumn="last"
        enableColumnActions={false}
        renderRowActions={({ row }) => (
          <div>
            <Box display="flex" justifyContent="flex-start" alignItems="center" style={{marginLeft:'-1rem'}}>
              <Tooltip title = "Download the Resume"><DownloadResume id={row.id} /></Tooltip>
              <Tooltip title = "Preview the Resume"><PreviewResume id = {row.id} data = {data}/></Tooltip>
            </Box>
          </div>
        )}
        renderRowActionMenuItems={({row,table ,closeMenu }) => [
          <MenuItem
            key={0}
          >
            Select
          </MenuItem>,
          <MenuItem
            key={1}
          >
            Reject
          </MenuItem>,
        ]}
      />
    </>
  );
};

export default ScreeningPosition;
