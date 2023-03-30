/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button ,Menu, Checkbox, MenuItem} from '@mui/material';
import React, { useState } from 'react'

interface Option {
  value: string;
  label: string;
}
const Filters:React.FC=() =>{
     const [filterMenuOpen, setFilterMenuOpen] = useState(false);
            const [selectedFilters, setSelectedFilters] = useState([]);
            const [selectedAccounts, setSelectedAccounts] = useState([]);
            const [selectedStatus, setSelectedStatus] = useState([]);
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            const handleFilterMenuOpen = () => {
              setFilterMenuOpen(true);
            };
          
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            const handleFilterMenuClose = () => {
              setFilterMenuOpen(false);
            };
          
            const options: Option[] = [
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ];
          
            const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOptionSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedOptions(event.target.value as string[]);
  };
            const filters = ['Honeywell', 'Amazons', 'Cyncly'];
          
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button
                  color="secondary"
                  onClick={handleFilterMenuOpen}
                  variant="contained"
                >
                  Filters
                </Button>
                <Menu
                  style={{width:'100%',height:'100%'}}
                  open={Boolean(filterMenuOpen)}
                  onClose={handleFilterMenuClose}
                >

      {filters.map((filter) => (
                    <MenuItem key={filter}>
                      <Checkbox
                        // checked={selectedFilters.indexOf(filter) !== -1}
                        // onChange={handleFilterToggle(filter)}
                      />
                      {filter}
                    </MenuItem>
                  ))}
      
                  <Button
                  //  onClick={handleApplyFilters}
                   >Apply Filters</Button>
                  
                </Menu>
              </div>
  )
}

export default Filters