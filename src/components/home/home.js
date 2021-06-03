import React , {Component} from 'react'
import './home.css'
import FormDialog from './TaskInput/taskForm'
import ListItems from './TaskList/listItems'
import DateRange from './TaskList/daterangepicker'
import SideBar from '../navigation/SideBar';
import Progress from './Progress/progress'
import Motivation from './motivation'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [] ,
            currenttask: {text: '' , schedule: new Date() , key: Date.now() , tags:[] , book: '' , frequency:{repeat:'' , until:''} , status:"pending" ,credit: ''},
            tags:[],
            startdate: new Date(2021, 4, 1) ,
            changetime: 1,
            today: 0,
            adder: false,
            startrange: new Date(),
            endrange:new Date(),
            taskbooks:[{key: 1 , bookname:'book1' },{key: 2 , bookname:'book2' },{key: 3 , bookname:'book3' }], 
            book:'',
            allcredits:[],
            todaycredits:{date: new Date(), total: 0 , achieved: 0}

        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.onFSubmit = this.onFSubmit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.editTaskTime = this.editTaskTime.bind(this)
        this.checkTask = this.checkTask.bind(this)
        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.addTaskBook = this.addTaskBook.bind(this)
        this.getStartDateRange = this.getStartDateRange.bind(this)
        this.getEndDateRange = this.getEndDateRange.bind(this)
    }

    getStartDateRange(sdate ){
        this.setState({
            startrange:sdate 
           
        })
    }
    getEndDateRange(edate){
        this.setState({
            
            endrange:edate
        })
    }
    
    onOpenModal = () => {
        this.setState({
            adder: true
        })
    }

    addTaskBook(e){
        const newBook = e.target.value
        if(newBook !== ''){
            const newlist = [newBook, ...this.state.taskbooks]
            this.setState({
                taskbooks: newlist,
            })
        }
    }

    onCloseModal = () => {
        this.setState({
            adder: false 
        })
    }
async onSubmit(taskvalue , schedule ,taskcredit , repeat , until ){
    await this.setState({
        currenttask:{text:taskvalue , credit:taskcredit , frequency:{repeat:repeat , until:until} , status:"pending" , key: Date.now() , schedule: schedule}
    })
    this.onFSubmit()
    
    
    
    console.log('working')

}

    onFSubmit(){
        if(this.state.currenttask !== ''){
            const newTask = this.state.currenttask
            console.log(newTask)
            if(newTask.text !== ''){
                const newlist = [newTask, ...this.state.items ]
                this.setState({
                    items: newlist,
                    currenttask: {text:'' , credit: '' },
                    changetime: this.state.changetime+1
                    
                })
            }
            
        
        } 
        console.log(this.state.items[0])

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
                const credit = this.state.todaycredits.achieved+parseInt(item.credit)
                this.setState({
                    todaycredits:{achieved: credit}
                })
                if(item.status === 'pending'){
                    return {...item, status: 'completed'}
                }
                else{
                    return {...item, status: 'pending'}
                }
            }
            return item
        })
           
           this.setState({
               items: editedTasklist
           })
           console.log(editedTasklist)
           console.log(this.state.todaycredits.achieved)
  }

    render(){
        

        return(
            

            
            <div className="Container">
                <SideBar taskbooks={this.state.taskbooks}/>
                <div className="row">





{/* ---------------------------------------------------Task card---------------------------------------------------*/}


                    <div className='col-sm-6 task-section '>


                        <div className="cards container">
                            <div className='row'>
                                <div className="selected-range col-sm-8 ">
                                    <div className='rangepicker'><DateRange getStartDateRange={this.getStartDateRange} getEndDateRange={this.getEndDateRange}/></div> 
                                </div>
                                <div className="taskinput col-sm-4 ">
                                    <FormDialog onTaskText={this.onTaskText} onTaskCredit={this.onTaskCredit} onTaskFrequency={this.onTaskFrequency} onsubmit={this.onSubmit}/>
                                </div>
                                
                            </div>
                            <div className='row'>
                                <div className="scroll col-sm-12">
         {/* --------------------------------------------------- List of items ---------------------------------------------------*/}
                                    <ListItems items={this.state.items} deleteItem={this.deleteItem} editTaskTime={this.editTaskTime} checkTask={this.checkTask} startrange={this.state.startrange} endrange={this.state.endrange}/>                    
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
                                <div className='col-sm-12 motivation'>
                                <Motivation />
                                </div>
                            </div>
                            <div className='row'>
                               
                                <div className='col-sm-11 chart-area'>
                                    <Progress/>
                                   
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