import { useContext } from 'react'
import React,{useState} from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setlocalstorage } from '../../utils/LocalStorage'

const CreateTask = () => {
    const [userdata,setUserdata]=useContext(AuthContext)


    const [taskTitle, settaskTitle] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assign, setassign] = useState('')
    const [category, setcategory] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [newtask, setnewtask] = useState({})


    // const submithandler=((e)=>{
    //     e.preventDefault()
    //     // console.log(taskTitle,taskDate,assign,category,taskDescription)
        
    //     setnewtask({taskTitle,taskDate,assign,category,taskDescription,active:false,newtask:true,failed:false,completd:false})
    //     //now i have to save data to local storage
    //     const data=userdata;
    //     // console.log(data)
    //     data.forEach((e) => {
    //         // console.log(e.name);
    //         if(assign==e.name){
    //             // console.log('yahi  hai vo banda')
    //             console.log(e.tasks)
    //             e.tasks.push(newtask)
    //             e.taskCounts.newTask=e.taskCounts.newTask+1;
    //         }
    //     });
    //     setUserdata(data)
    //     console.log(data)
    //     settaskTitle('')
    //     settaskDate('')
    //     setassign('')
    //     setcategory('')
    //     settaskDescription('')
        
    // })
    const submithandler = (e) => {
        e.preventDefault();
    
        // Create the new task
        const newTask = {
            taskTitle,
            taskDate,
            assign,
            category,
            taskDescription,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };
    
        // Get the current userdata from state
        const data = [...userdata]; // Create a copy of userdata to avoid direct mutation
    
        // Find the employee and uptaskDate their task list
        data.forEach((employee) => {
            if (assign === employee.name) {
                employee.tasks.push(newTask); // Add the new task to the employee's task list
                employee.taskCounts.newTask = (employee.taskCounts.newTask || 0) + 1; // UptaskDate the task count
            }
        });
    
        // UptaskDate the React state
        setUserdata(data);
    
        // UptaskDate local storage
        localStorage.setItem('employees', JSON.stringify(data)); // Save the uptaskDated data back to local storage
    
        // Reset form fields
        settaskTitle('');
        settaskDate('');
        setassign('');
        setcategory('');
        settaskDescription('');
    };
    
  return (
    <div className="mt-8">
    <form onSubmit={(e)=>{
        submithandler(e);
    }} className="flex w-full bg-gray-800 shadow-2xl rounded-lg overflow-hidden flex-wrap items-start justify-between p-3 ">
        {/* Left Column */}
        <div className="w-full md:w-1/2 px-2 space-y-3">
            <div>
                <h3 className="text-lg font-semibold mb-1 text-purple-400">Task Title</h3>
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={taskTitle}
                    onChange={(e)=>{
                        settaskTitle(e.target.value)
                    }}
                    className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-1 text-pink-400">Date</h3>
                <input
                    type="Date"
                    value={taskDate}
                    onChange={(e)=>{
                        settaskDate(e.target.value)
                    }}
                    className="w-full p-2 rounded bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 outline-none"
                />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-1 text-green-400">Assign To</h3>
                <input
                    type="text"
                    placeholder="Employee Name"
                    value={assign}
                    onChange={(e)=>{
                        setassign(e.target.value)
                    }}
                    className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 outline-none"
                />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-1 text-orange-400">Category</h3>
                <input
                    type="text"
                    placeholder="design, dev, etc"
                    value={category}
                    onChange={(e)=>{
                        setcategory(e.target.value)
                    }}
                    className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
            </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 px-2">
            <h3 className="text-lg font-semibold mb-1 text-red-400">Description</h3>
            <textarea
                cols="30"
                rows="4"
                placeholder="Add detailed task Description..."
                value={taskDescription}
                    onChange={(e)=>{
                        settaskDescription(e.target.value)
                    }}
                className="w-full p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
            ></textarea>
        </div>

        {/* Button */}
        <div className="w-full mt-3 text-center">
            <button
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
            >
                Create Task
            </button>
        </div>
    </form>
</div>

  )
}

export default CreateTask
