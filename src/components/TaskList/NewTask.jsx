import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-gray-600 rounded-xl p-2 ">
        <div className='flex justify-between p-2 items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-xl'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-bold pl-3'>{data.taskTitle}</h2>
        <p className='pl-3 mt-2 text-sm'>{data.taskDescription}</p>   
        <div className='mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm rounded-full w-full'>Accept Task</button>
        </div>
    </div>
  )
}

export default NewTask
