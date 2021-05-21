import React , {Component} from 'react'
import './home.css'
import FormDialog from './TaskInput/taskForm'
import ListItems from './TaskList/listItems'
import DateRange from './TaskList/daterangepicker'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [] ,
            currenttask: {text: '' , schedule: new Date(2020 , 11 ,2) , key: Date.now() , tags:[] , book: '' , frequency:'' , status:"pending" ,credit: ''},
            tags:[],
            startdate: new Date(2021, 4, 1) ,
            changetime: 1,
            today: 0,
            adder: false

        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.editTaskTime = this.editTaskTime.bind(this)
        this.checkTask = this.checkTask.bind(this)
        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
    }
    
    onOpenModal = () => {
        this.setState({
            adder: true
        })
    }

    onCloseModal = () => {
        this.setState({
            adder: false 
        })
    }

    onSubmit(taskvalue , taskcredit){
        this.setState({
            currenttask:{text: taskvalue , status:'pending' , key:Date.now() , credit: taskcredit} 
            
        })
        if(this.state.currenttask !== ''){
            const newTask = this.state.currenttask
            if(newTask.text !== ''){
                const newlist = [newTask, ...this.state.items ]
                this.setState({
                    items: newlist,
                    currenttask: {text:''},
                    changetime: this.state.changetime+1
                    
                })
            }
            
            
        } 
        
        
    }

 
     
    deleteItem(key){
        const filtereditems = this.state.items.filter(task => 
            task.key!== key )

            this.setState({
                items: filtereditems
            })
    }
   
    editTaskTime(key, date) {
            
            const editedTasklist = this.state.items.map( item  => {
                if(item.key === key){
                    return {...item, schedule:date}
                }
                return item
            })
              
               this.setState({
                   items: editedTasklist
               })
       
      }


      checkTask(key) {
            
        const editedTasklist = this.state.items.map( item  => {
            if(item.key === key){
                return {...item, status: 'completed'}
            }
            return item
        })
          
           this.setState({
               items: editedTasklist
           })
           console.log(editedTasklist)
  }

    render(){
        

        return(

            <div className="Container">
                <div className="row">





{/* ---------------------------------------------------Task card---------------------------------------------------*/}


                    <div className='col-sm-6 task-section '>


                        <div className="cards container">
                            <div className='row'>
                                <div className="selected-range col-sm-8 ">
                                    <div className='rangepicker'><DateRange/></div> 
                                </div>
                                <div className="taskinput col-sm-4 ">
                                    <FormDialog  onsubmit={this.onSubmit}/>
                                </div>
                                
                            </div>
                            <div className='row'>
                                <div className="scroll col-sm-12">
         {/* --------------------------------------------------- List of items ---------------------------------------------------*/}
                                    <ListItems items={this.state.items} deleteItem={this.deleteItem} editTaskTime={this.editTaskTime} checkTask={this.checkTask}/>                    
         {/* ---------------------------------------------------list ends ---------------------------------------------------*/}
                                </div>
                            </div>  
                        </div>


                    </div>
                    
{/* ---------------------------------------------------Task card end ---------------------------------------------------*/}



{/* ---------------------------------------------------Progress chart ---------------------------------------------------*/}
                    <div className='col-sm-6 progress-chart'>


                        <div className="cards container">
                            <div className='row'>
                                <div className='col-sm-12 heading'>
                                    
                                </div>
                            </div>
                            <div className='row'>
                               
                                <div className='col-sm-11 chart-area'>
                                   
                                </div>
                                
                                <div className='col-sm-1 '>
                                    
                                    </div>  
                                
                            </div>
                
                        </div>

                    </div>

{/* ---------------------------------------------------Progress chart ---------------------------------------------------*/}
                </div>
                
            </div>
        )
    }
}


export default HomePage ;