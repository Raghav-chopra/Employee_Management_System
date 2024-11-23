import React, { createContext, useState,useEffect } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [userdata, setUserdata] = useState(null)
    useEffect(() => {
      setlocalstorage();
      const {employee}=getlocalstorage()
      setUserdata(employee) 
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={[userdata,setUserdata]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
