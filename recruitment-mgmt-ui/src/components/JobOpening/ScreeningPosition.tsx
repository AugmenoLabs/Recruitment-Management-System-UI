import React, {useState, useEffect, useMemo} from "react"
import axios from 'axios';
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import {CandidateInterface} from '../../Interface/CandidateInterface';
// import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
// import { useNavigate } from 'react-router-dom';

export interface Props{
    positionId : string,
}
const ScreeningPosition: React.FunctionComponent<Props> = ({positionId}) =>{
    const [open, setOpen] = useState<boolean>(true)
    const [data, setData] = useState<CandidateInterface[]>([])
    const API_URL = 'http://localhost:5141/api/v1/CandidateProfile';
    // const history = useNavigate();
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

        setOpen(true)
      }, []);

      const columns = useMemo<Array<MRT_ColumnDef<CandidateInterface>>>(
        () => [
            {
                accessorKey: 'candidateName',
                header: 'Candidate Name',
                size:70,
              
            },
            {
                accessorKey: 'contactNumber',
                header: 'Contact Number',
                size:70,
            },
            {
                accessorKey: 'resume',
                header: 'Resume',
                size:70,
            }
        ], []
      )

      const onClose = ():void => {
        setOpen(false)
      }

    return(
        <>
            <Dialog open={open}>
                <DialogContent>
                    <MaterialReactTable
                        columns={columns}
                        data={data}
                        muiTablePaginationProps={{
                            rowsPerPageOptions: [5, 10, 20, 50],
                        }}
                        initialState={{
                            density: 'compact',
                            columnVisibility: { id:false,},
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
                            marginLeft: '1%',
                            },
                        }}
                        // enableColumnResizing
                        // positionActionsColumn="last"
                        displayColumnDefOptions={{
                            'mrt-row-actions': {
                            size: 50,
                            muiTableHeadCellProps: {
                                align: 'center',
                            },
                            },
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    {/* <Button variant="contained" onClick={() => setOpen(false)}>
                        Cancel
                    </Button> */}
                    <Button variant="contained" onClick={onClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ScreeningPosition