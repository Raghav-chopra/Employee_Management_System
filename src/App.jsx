import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashbboard from './components/Dashboard/AdminDashbboard'
import { getlocalstorage, setlocalstorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInuserdata, setloggedInuserdata] = useState(null)
  const [userdata,setUserdata]=useContext(AuthContext)
 //basically to check who is logged innn
 useEffect(() => {
  if (userdata) {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      try {
        const userdata = JSON.parse(loggedInUser);
        setUser(userdata.role);
        setloggedInuserdata(userdata.data);
      } catch (error) {
        console.error("Error parsing loggedInUser:", error);
        // Handle invalid or corrupted data here, if necessary
        setUser(null);
        setloggedInuserdata(null);
      }
    }
  }
}, [userdata]); 

 
  const handleLogin=(email,password)=>{
    if(email=="admin@me.com" && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    }
    else if(userdata){
      const employee=userdata.find((e)=>e.email==email && e.password==password);
      if(employee){
      setUser('employee')
      setloggedInuserdata(employee);
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
      }
      
    }
    else{
      alert('invalid credentials')
    }
  }
 

  return (
    <>
    {!user?<Login handleLogin={handleLogin} />:''}
    {user === "admin" ? <AdminDashbboard changeUser={setUser} /> : user === "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInuserdata} /> : null}
 
    </>
  )
}

export default App
