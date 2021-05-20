import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FrequencyMenu from './frequencymenu'
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from './datetimepicker'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop:theme.spacing(2),
    display: 'block',
    color: theme.palette.text.secondary,
  },
}));




export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Task
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth = {true}>
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
        
        
        <DialogContent >
        <Grid container spacing={3} direction= 'row' justify='space-between'>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <TextField
                autoFocus
                id="name"
                label="Enter Task"
                type="text"
                fullWidth

              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} direction= 'row' justify='space-between'>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                id="name"
                label="Task Credits"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
            
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                id="name"
                label="Task Credits"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
            
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} direction= 'row' justify='space-between'>  
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <FrequencyMenu  />
            </Paper>
          </Grid>
        
          
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <DatePicker  />
            </Paper>
          </Grid>
        </Grid> 
          
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