import {
    Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';


import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React, { useState } from 'react';

interface Field {
    id: number;
    value: string;
  }
const CandidateCompensation: React.FunctionComponent = () => {
  const [offer, setoffer] = React.useState('');
  const [fields, setFields] = useState<Field[]>([{ id: 0, value: '' }]);

  const handleAddField:any = () => {
    setFields([...fields, { id: fields.length, value: '' }]);
  };

  const handleRemoveField :any = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleFieldChange :any= (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, id: number) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setFields(updatedFields);
  };


  const handleChange: any = (event: SelectChangeEvent) => {
    setoffer(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        style={{ marginLeft: '1rem', marginRight: '2rem' }}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          margin="normal"
          style={{ width: '40%' }}
          label="Current Ctc"
          type="text"
          name="experience"
          size="small"
        />

        <TextField
          margin="normal"
          style={{ width: '40%' }}
          label="Expected Ctc"
          type="text"
          name="vacancies"
          size="small"
        />
 <TextField
          margin="normal"
          style={{ width: '40%' }}
          label="Vendor Name"
          type="text"
          name="experience"
          size="small"
        />
        <FormControl style={{ width: '40%' ,marginTop:'0.6rem'}} size="small">
          <InputLabel id="demo-simple-select-label">Has Any Offer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={offer}
            label="Has Any Offer"
            onChange={handleChange}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>

        {offer === 'yes' ? (
          <>

            {/* <TextField
              margin="normal"
              style={{ width: '40%' }}
              label="Offered Company Name"
              type="text"
              name="vacancies"
              size="small"
            />
            <TextField
              margin="normal"
              style={{ width: '40%' }}
              label="Offered Ctc"
              type="text"
              name="vacancies"
              size="small"
            /> */}
           
      {fields.map((field) => (
        <div key={field.id}>
          
           
          <TextField
           style={{ width: '32%',marginLeft:'7rem' }}
            label={`Offered Company ${field.id + 1}`}
            value={field.value}
            onChange={(event) => handleFieldChange(event, field.id)}
            variant="outlined"
            size='small'
            margin="normal"
          />
         
           <TextField
            style={{ width: '30%' ,marginLeft:'1rem'}}
            label={`Offered Ctc ${field.id + 1}`}
            value={field.value}
            size='small'
            onChange={(event) => handleFieldChange(event, field.id)}
            variant="outlined"
            margin="normal"
          />
         
        <Button  style={{marginTop:'1rem',marginLeft:'0rem'}}   onClick={() => handleRemoveField(field.id)}  ><RemoveCircleIcon /></Button>
      
        </div>
      ))}
       <Button onClick={handleAddField} variant='contained' style={{marginTop:'1rem',marginLeft:'-1rem'}} >
Add Field        
      </Button>
    
          </>
        ) : (
          ''
        )}
      </Grid>
    </>
  );
};

export default CandidateCompensation;
