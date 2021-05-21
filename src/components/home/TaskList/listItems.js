import React  from 'react'
import './listItems.css'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function ListItems(props){
    const items = props.items;
    


    const listitems = items.map(item => {
        
        if(item.status === 'pending'){
        return (<div className="container">
                    <div className='task-box'>
                        <div className= 'row task-box-upper' key={item.key}>
                            <div className='col-sm-1'></div>
                            <div className="col-sm-6 tasktext">
                                <p>{item.text}</p>
                            </div>
                            <div className='col-sm-4 task-box-btns'>
                                <i onClick={()=> props.checkTask(item.key)} className="fa fa-check-circle task-box-btn" aria-hidden="true"></i>
                                <i onClick={()=> props.deleteItem(item.key)} className="fa fa-trash-o task-box-btn" aria-hidden="true"></i>
                                
                            </div>
                            <div className='col-sm-1'></div>
                        </div>
                        <div className= 'row task-box-middle'>
                            <div className='col-sm-1'></div>
                            <div className='col-sm-5 task-datetime'>
                            <DatePicker selected={item.schedule} onChange={date => props.editTaskTime(item.key , date) } className='task-date' dateFormat='dd-MM-yyyy'/>
                            </div>
                            <div className='col-sm-5 task-frequency'>
                                Frequency
                            </div>
                            <div className='col-sm-1'></div>
                        </div>
                        <div className= 'row task-box-lower'>
                            <div className='col-sm-1'></div>
                            <div className='col-sm-5 task-tags'>
                             Tags
                            </div>
                            <div className='col-sm-5 task-book'>
                                Book
                            </div>
                            <div className='col-sm-1'></div>
                        </div>
                    </div>
                
                </div>
                )
        }
        return (
            <div className="container">
                    <div className='checked-task-box task-box'>
                        <div className= 'row  task-box-upper' key={item.key}>
                            <div className='col-sm-1'></div>
                            <div className="col-sm-6 checked-tasktext">
                                <p><s>{item.text}</s></p>
                            
                            </div>
                            <div className='col-sm-4 task-box-btns'>
                                <i className="fa fa-check-circle task-box-btn taskcheck-btn" aria-hidden="true"></i>
                                <i onClick={()=> props.deleteItem(item.key)} className="fa fa-trash-o task-box-btn" aria-hidden="true"></i>
                                
                            </div>
                            <div className='col-sm-1'></div>
                        </div>
                        <div className= 'row task-box-middle'>
                            <div className='col-sm-1'></div>
                            <div className='col-sm-5 task-datetime'>
                                {item.schedule}
                            </div>
                            <div className='col-sm-5 task-frequency'>
                                Frequency
                            </div>
                            <div className='col-sm-1'></div>
                        </div>
                        <div className= 'row task-box-lower'>
                            <div className='col-sm-1'></div>
                            <div className='col-sm-5 task-tags'>
                            <p>Tags</p>
                            </div>
                            <div className='col-sm-5 task-book'>
                                Book
                            </div>
                            <div className='col-sm-1'></div>
                        </div>
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
