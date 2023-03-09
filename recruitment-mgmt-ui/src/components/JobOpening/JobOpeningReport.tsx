
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import { Avatar, Box, Grid, MenuItem, Typography } from '@mui/material';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';
import { RequisitionInterface } from '../../Interface/RequisitionInterface';
import { fontFamily, fontSize } from '@mui/system';

export interface JobOpeningProps{
  users:JobOpeningInterface[];
}

const JobOpeningReport: React.FunctionComponent<JobOpeningProps>= ({users}) => {  

 // const[users,setUsers]=useState<RequisitionInterface[]>([]);
 const history = useNavigate();
 // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
 const handleRowClick = (row: MRT_Row<JobOpeningInterface>) => {
  const id=row.getValue('id')
   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
 return(
   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
   history(`/jobdescription/${id}`)
 )
   };

   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
   const handleapplyjobs = (row: MRT_Row<JobOpeningInterface>) => {
     const id=row.getValue('id')
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      history(`/applyforjobs/${id}`)
    )
      };
   const navigatetojd = (): void => {
     history('/applyforjobs');
   };


 // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
 // const navigatetoapply = (rowData:any) => {
 //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unused-expressions, array-callback-return
 //   history(`/jobdescription/${rowData.id}`);
 // };

 
 const [data, setData] = useState<JobOpeningInterface[]>([]);

 const API_URL = 'http://localhost:5141/api/v1/OpenPosition/OpenPositionsReport';

 useEffect(() => {
   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
   const fetchData = async () => {
     try {
       const result = await axios.get<JobOpeningInterface[]>(API_URL);
       setData(result.data);
       console.log(result.data);

     } catch (error) {
       console.error(error);
     }
   };
   // eslint-disable-next-line @typescript-eslint/no-floating-promises
   fetchData();
   console.log(data);
 }, []);

 const [validationErrors, setValidationErrors] = useState<{
   [cellId: string]: string;
 }>({});
 const handleSaveRowEdits: MaterialReactTableProps<JobOpeningInterface>['onEditingRowSave'] =
   async ({ exitEditingMode, row, values }) => {
     // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
     if (!Object.keys(validationErrors).length) {
   data[row.index]=values
     
       setData([...data]);
       exitEditingMode(); 
     }
   };

 // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
 const handleCancelRowEdits = () => {
   setValidationErrors({});
 };
 const handleDeleteRow = useCallback(
   (row: MRT_Row<JobOpeningInterface>) => {
     if (
       // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
       !confirm(`Are you sure you want to delete ${row.getValue('accountName')}`)
     ) {
       return;
     }

     data.splice(row.index, 1);
     setData([...data]);
   },
   [data],
 );
 const getCommonEditTextFieldProps = useCallback(
   (
     cell: MRT_Cell<JobOpeningInterface>,
   ): MRT_ColumnDef<JobOpeningInterface>['muiTableBodyCellEditTextFieldProps'] => {
     return {
       // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
       error: !!validationErrors[cell.id],
       helperText: validationErrors[cell.id],
       onBlur: (event) => {
         const isValid =
           cell.column.id === 'accountName'
             ? validateRequired(event.target.value)
             :  validateRequired(event.target.value);
         if (!isValid) {
         
           setValidationErrors({
             ...validationErrors,
             [cell.id]: `${cell.column.columnDef.header} is required`,
           });
         } else {
        
           // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
           delete validationErrors[cell.id];
           setValidationErrors({
             ...validationErrors,
           });
         }
       },
     };
   },
   [validationErrors],
 );
 
 const columns = useMemo<Array<MRT_ColumnDef<JobOpeningInterface>>>(
   () => [
    
     {
       accessorKey: 'id',
       header: 'ID',
       size:70,     
     },
     {
      id: 'accountandprojectinfo',
      header: 'Account & Project',
      Cell:({renderedCellValue, row}) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Grid container>
            <Grid item lg = {2}>
              <Avatar alt={row.original.jobId} src='.'                
                sx = {{
                   backgroundColor: 'lightblue',   
                }}
              >
              </Avatar>
            </Grid>
            <Grid item lg = {10}>
              <Typography sx = {{ paddingLeft: 3,}}>
                <Grid 
                  sx = {{
                    fontFamily: 'cursive',
                    fontWeight: 'bold',
                    color: 'darkred',
                    fontSize: 15,
                  }}
                >
                   {row.original.jobId}
                </Grid>
              
              </Typography>
              <Typography 
                    sx = {{ 
                        paddingLeft: 3,                        
                        fontWeight: 'bold',                       
                        fontSize: 12,
                      }}>
                      Account : {row.original.account}
              </Typography >
              <Typography   sx = {{ 
                        paddingLeft: 3,                        
                        fontWeight: 'bold',                       
                        fontSize: 12,
                      }}>
                      Project : {row.original.project}</Typography>
              
            </Grid>
          </Grid>           
          
          {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
          <span>{renderedCellValue}</span>
        </Box>
      ),
     },     
     {
      id: 'openpositioninfo',
      header: 'Open Positions',
      Cell:({renderedCellValue, row}) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >         

             <Grid container>
                <Grid item lg = {12}>
                    <Typography>Position Title   : {row.original.jobTitle}</Typography>
                    <Typography><b>Open Positions :</b> {row.original.noOfPositions}</Typography>
                    <Typography><b>Budget Range   :</b>  {row.original.budget}</Typography>
                    <Typography><b>Job Post Date  :</b> {'08-March-2023'}</Typography>
                </Grid>
             </Grid> 
            
            <span>{renderedCellValue}</span>
        </Box>
      ),
     },
     {
      id: 'screeninginfo',
      header: 'Screening Info',
      Cell:({renderedCellValue, row}) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >      
             <Grid container>
                <Grid item lg = {12}>
                  <Typography><b>Profile Received :</b> {row.original.totalApplied}</Typography>
                  <Typography><b>Screenings       :</b>  {row.original.screenings}</Typography>
                  <Typography><b>Hired            :</b> {row.original.onboarded}</Typography>
                </Grid>
             </Grid>
           
            <span>{renderedCellValue}</span>
        </Box>
      ),
     },    
    {
      id: 'workflowinfo',
      header: 'Work Flow Info',
      Cell:({renderedCellValue, row}) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
              <Grid container>
                <Grid item lg = {12}>
                    <Typography><b>Level 1 :</b> {row.original.l1s}</Typography>
                    <Typography><b>Level 2 :</b>  {row.original.l2s}</Typography>
                    <Typography><b>Manager :</b> {row.original.managerials}</Typography>
                    <Typography><b>HR      :</b> {row.original.hr}</Typography>   
                </Grid>
             </Grid>         
                   
          
          {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
          <span>{renderedCellValue}</span>
        </Box>
      ),
     },    
   ],
   [getCommonEditTextFieldProps]
 );
 return (
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
           justifyContent: 'center',
           fontWeight: 500,
           color: 'black',
         },
       },
     }}
     muiTableProps={{
       sx: {
         tableLayout: 'auto',
         align: 'center',
         marginLeft: '1%',
         marginRight: '1%',
         width: '98%',
       },
       
     }}

     enableRowActions
     editingMode="modal" 

     onEditingRowSave={handleSaveRowEdits}
     onEditingRowCancel={handleCancelRowEdits}

     renderRowActionMenuItems={({row,table ,closeMenu }) => [
       <MenuItem
         key={0}
         onClick={()=>{ handleapplyjobs(row); }}
         sx={{ m: 0 }}
       >
         Apply
       </MenuItem>,
       <MenuItem
         key={1}
         onClick={() => {
           // Send email logic...
           table.setEditingRow(row)
         }}
         sx={{ m: 0 }}
       >
         Edit
       </MenuItem>,
       <MenuItem
         key={2}
         onClick={() => {
           // Send email logic...
           handleDeleteRow(row)
         }}
         sx={{ m: 0 }}
       >
         Delete
       </MenuItem>,
     ]}
     enableColumnResizing
     positionActionsColumn="last"
     displayColumnDefOptions={{
       'mrt-row-actions': {
         size: 50,

         muiTableHeadCellProps: {
           align: 'center',
         },
       },
     }}
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
        height: 300,
        background:'#e3f2fc',
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: 2,
      },      
    }}   
   />
 );
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/strict-boolean-expressions
const validateRequired = (value: string) => !!value.length;

export default JobOpeningReport;
