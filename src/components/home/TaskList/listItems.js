import React  from 'react'
import './listItems.css'

import DatePicker from '../TaskInput/datetimepicker'

import "react-datepicker/dist/react-datepicker.css";
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
      marginTop:theme.spacing(1),
      display: 'block',
      height:60,

      
      color: 'black',
    },
  }));
  

function ListItems(props){
    const classes = useStyles();
    const items = props.items;
    


    const listitems = items.map(item => {
        
        if(item.status === 'pending'){
        return (
            <div className='container'>
                <div className='row'>
                <div className='col-sm-1'></div>
                <div className='col-sm-10 task-box'>
            <div className={classes.root}>

           
               <Grid container spacing={0} direction= 'row' justify='center' >
                    
                    <Grid item xs={8} sm={8}>
                        <Paper className={classes.paper} style={{overflowY: 'scroll' , wordWrap: 'break-word'}}>
                        <div className= 'task-box-upper' key={item.key}>    
                            <p>{item.text}</p>
                         </div>
                         </Paper> 
                    </Grid>
                    <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper}>
                        <div className='task-box-btns'>
                                <i onClick={()=> props.checkTask(item.key)} className="fa fa-check-circle task-box-btn" aria-hidden="true"></i>
                                <i onClick={()=> props.deleteItem(item.key)} className="fa fa-trash-o task-box-btn" aria-hidden="true"></i>
                                <i className='task-box-btn credit'>Credit - {item.credit}</i>
                                </div>
                                
                        
                                </Paper> 
                    </Grid>
                </Grid>
                            
                <Grid container spacing={0} direction= 'row' justify='flex-start' >     
                    <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper}>
                                <DatePicker variant='outlined'/>
                                </Paper> 
                    </Grid>
                    <Grid item xs={6} sm={6}>  
                    <Paper className={classes.paper}>  
                                {item.frequency.repeat}
                                </Paper> 

                     </Grid> 
                </Grid>   

                <Grid container spacing={0} direction= 'row' justify='flex-start' >     
                    <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper}>
                                Tags
                                </Paper> 
                    </Grid>
                    <Grid item xs={6} sm={6}>   
                    <Paper className={classes.paper}>
                               Taskbook
                               </Paper> 
                     </Grid> 
                </Grid>             
                            
                </div>  
                 
                </div>
                <div className='col-sm-1'></div> 
                </div>
                    
               
                </div>
                )
        }
        return (
            <div className='container'>
                <div className='row'>
                <div className='col-sm-1'></div>
                <div className='col-sm-10 checked task-box'>
            <div className={classes.root}>

           
               <Grid container spacing={0} direction= 'row' justify='center' >
                    
                    <Grid item xs={8} sm={8}>
                        <Paper className={classes.paper} style={{overflowY: 'scroll' , wordWrap: 'break-word'}}>
                        <div className= 'task-box-upper' key={item.key}>    
                            <p><s>{item.text}</s></p>
                         </div>
                         </Paper> 
                    </Grid>
                    <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper}>
                    <div className='task-box-btns'>
                                <i onClick={()=> props.checkTask(item.key)} className="fa fa-check-circle task-box-btn checked-icon" aria-hidden="true"></i>
                                <i onClick={()=> props.deleteItem(item.key)} className="fa fa-trash-o task-box-btn" aria-hidden="true"></i>
                                <i className='task-box-btn credit'>Credit - {item.credit}</i>
                                </div>
                                </Paper> 
                    </Grid>
                </Grid>
                            
                <Grid container spacing={0} direction= 'row' justify='flex-start' >     
                    <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper}>
                                <DatePicker variant='outlined'/>
                                </Paper> 
                    </Grid>
                    <Grid item xs={6} sm={6}>  
                    <Paper className={classes.paper}>  
                                Frequency
                                </Paper> 

                     </Grid> 
                </Grid>   

                <Grid container spacing={0} direction= 'row' justify='flex-start' >     
                    <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper}>
                                Tags
                                </Paper> 
                    </Grid>
                    <Grid item xs={6} sm={6}>   
                    <Paper className={classes.paper}>
                               Taskbook
                               </Paper> 
                     </Grid> 
                </Grid>             
                            
                </div>  
                 
                </div>
                <div className='col-sm-1'></div> 
                </div>
                    
               
                </div>
        )
    })


    return(
        <div className='list'>
            <div className='row'>
                <div className='col-sm-1'></div>
                <div className='col-sm-5 tags-in-task-box'>
                Tags
                </div>
                <div className='col-sm-5 books-in-task-box'>Book</div>
                <div className='col-sm-1'></div>
                   
                
            </div>
            <div className='row'>
                <div className='col-sm-12 tasks-part'>
                    {listitems}
                    
                </div>
            </div>
            
        </div>
    )
}

export default ListItems;
