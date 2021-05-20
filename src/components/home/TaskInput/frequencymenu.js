import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from './datetimepicker'






export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div  >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Frequency
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
        
        <DialogContent >
          
            <TextField
              autoFocus
              id="name"
              label="Enter Task"
              type="text"
              fullWidth
              
            />
          
          <TextField
            fullWidth
            id="name"
            label="Task Credits"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            
          />

          
          
          <DatePicker />      
          
          
        </DialogContent>
        
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}