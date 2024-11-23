import React,{useState} from 'react'

const Header = (props) => {
// const [username, setusername] = useState(" ")
// if(!data){
//   setusername("Admin")
// }
// else{
//   setusername(data.name)
// }
 const logOutUser=()=>{
  // localStorage.removeItem("loggedInUser")
  // window.location.reload()
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
 }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello<br/><span className='text-3xl font-semibold'>username 👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-white font-bold px-5 py-2 rounded-full text-md'>Log Out</button>
    </div>
  )
}

export default Header
 