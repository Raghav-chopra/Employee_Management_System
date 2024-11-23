import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userdata,setUserdata]=useContext(AuthContext)
    // console.log(authdata.employee)
  return (
    <div className='bg-gray-800 p-5 rounded mt-5'>
        <div className='flex bg-red-400 mb-2 px-4 py-2 justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Name</h2>
            <h3 className='text-lg font-medium w-1/5'> NewTask</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=' overflow-auto '>
        {userdata.map((e,idx)=>{
           return <div key={idx} className='flex border-2 border-emerald-600 mb-2 px-4 py-2 justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{e.name}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{e.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{e.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{e.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{e.taskCounts.failed}</h5>
            </div>
        })}
        </div>
      
    </div>
  )
}

export default AllTask
