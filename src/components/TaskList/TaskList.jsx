import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
 
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex justify-start items-center gap-2 py-5 w-full flex-nowrap  mt-10'>
      {/* <AcceptedTask/>
      <NewTask/>
      <CompletedTask/>
      <FailedTask/> */}
      {data.tasks.map((e,idx)=>{
     
          if(e.active){
            return <AcceptedTask key={idx} data={e}/>
          }
          if(e.newTask ){
            return<NewTask key={idx} data={e}/>
          }
          if(e.completed){
            return <CompletedTask key={idx} data={e}/>
          }
          if(e.failed){
            return <FailedTask key={idx} data={e}/>
          }
      })}
      
    </div>
  )
}

export default TaskList
