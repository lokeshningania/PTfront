import React , { useState} from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

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
  taskbtn: {
    padding: theme.spacing(1),
    textAlign: 'center',
    marginTop:theme.spacing(1),
    display: 'block',
    color: theme.palette.text.secondary,
  },
  quote: {
    padding: theme.spacing(1),
    textAlign: 'center',
    fontFamily: 'times',
    fontSize: '30px'
    

  } ,
  author:{
    padding: theme.spacing(1),
    textAlign: 'end',
    fontSize: '20px'
  }
}));




export default function Motivation() {
  const [open, setOpen] = useState(false);
  
  const [quote , setquote] = useState('')
  const [author , setauthor] = useState('')
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
 
      setOpen(false); 
  };
  
  const fetchquote =() => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setquote(data.quotes[0].text);
      setauthor(data.quotes[0].author);
    });
  }

  return (
    <div className={classes.root} >
      <Button  color="primary" onClick={handleClickOpen}>
        <Paper className={classes.taskbtn} >
        Motivation
        </Paper>
      </Button>
      <Dialog open={open} onClose={handleClose} variant='inline' aria-labelledby="form-dialog-title" fullWidth = {true}>
        <DialogTitle id="form-dialog-title"></DialogTitle>
        
        
        <DialogContent >
        <Grid container spacing={3} direction= 'row' justify='center' >
          <p className={classes.quote}>{quote}</p><br></br>
          <p className={classes.author}>{author}</p>
         
        </Grid> 
          
        </DialogContent>
       
        
        <DialogActions>
          <Button onClick={fetchquote} color="primary">
            Next
          </Button>
          <Button onClick={handleClose} color="primary" >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}