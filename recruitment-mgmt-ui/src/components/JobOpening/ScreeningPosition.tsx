import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { CandidateInterface } from '../../Interface/CandidateInterface';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import DownloadResume from '../Resume/downloadResume';
import {Box} from '@mui/material';
import PreviewResume from '../Resume/PreviewResume';
import ResumeAction from '../Resume/ResumeAction';

export interface Props {
  positionid: string;
}

const ScreeningPosition: React.FunctionComponent<Props> = ({ positionid }) => {

  const [candidateData, setCandidateData] = useState<CandidateInterface[]>([]);
  const API_URL = 'http://localhost:5141/api/v1/CandidateProfile';
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await axios.get<CandidateInterface[]>(API_URL);
        const response = result.data.filter(x => x.openPositionId === positionid);
        setCandidateData(response);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
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
              // textAlign: 'center'
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
        data={candidateData}
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
        // enableRowSelection
        positionActionsColumn="last"
        enableColumnActions={false}
        muiTableHeadCellProps={{
          sx: {
            '& .Mui-TableHeadCell-Content': {
              // justifyContent: 'center',
              fontWeight: 500,
              color: 'black',
            },
          },
        }}
        muiTableProps={{
          sx: {
            tableLayout: 'auto',
            // align: 'center',
            marginLeft: '1%',
            marginRight: '1%',
            width: '98%',
          },
        }}
        muiTableHeadRowProps={{
          sx: {
            background: '#9fd7fc',
            borderStyle: 'solid',
            borderColor: '#a9d6f5',
          },
        }}
        muiTableBodyProps={{
          sx: {
            // height: 100,
            background: '#e3f2fc',
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: 2,
          },
        }}
        renderRowActions={({ row }) => (
          <div>
            <Box display="flex" justifyContent="flex-start" alignItems="center" style={{marginLeft:'-1rem'}}>
              <DownloadResume id={row.id} />
              <PreviewResume data = {row.original.resume} />
              <ResumeAction name= {row.original.candidateName} id={row.id}/>  
            </Box>
          </div>
        )}
      />
    </>
  );
};

export default ScreeningPosition;
