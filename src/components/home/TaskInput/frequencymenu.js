import React , {useState} from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from './datetimepicker'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxHeight: 70
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop:theme.spacing(2),
    display: 'block',
    color: theme.palette.text.secondary,
  },
}));




export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.enterFUntil(Until)
    setOpen(false);
  };


  const [Until , setUntil] = useState('')
  const enterUntil = e => {
    setUntil(e)
   
  }
  const [Repeat , setRepeat] = useState('')
  const enterRepeat = e => {
    setRepeat(e.target.value)
    props.enterFRepeat(e.target.value)
    console.log(Repeat)
   
  }

  return (
    <div className={classes.root} >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Frequency
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Details</DialogTitle>
        
        
        <DialogContent >
        <Grid container spacing={3} direction= 'row' justify='flex-start'>
         
          <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Repeat</InputLabel>
                    <Select native defaultValue={1} id="grouped-native-select" onChange={enterRepeat }>
                        <option aria-label="None" value="" />
                            <optgroup >
                                <option value={1}>Every Day</option>
                                <option value={2}>Every Alternate Day</option>
                                <option value={3}>Every Week On this Day</option>
                                <option value={4}>On this Day of Every Month</option>
                                <option value={5}>On this Date of Every Month</option>
                                <option value={6}>Select Multiple days a week</option>
                                <option value={7}>Custom Selection</option>
                            </optgroup>
                    </Select>
            </FormControl>
            </Paper>
            </Grid>
        </Grid>
       
        <Grid container spacing={3} direction= 'row' justify='flex-start'>    
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              Until !
              <DatePicker enterUntil={enterUntil} />
            </Paper>
          </Grid>
        </Grid> 
          
        </DialogContent>
       
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}