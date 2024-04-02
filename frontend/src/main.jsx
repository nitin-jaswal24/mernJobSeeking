import React, {createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
export const Context=createContext({isAuthorized:false,jobCount:0});

const AppWrapper=()=>{
  const [isAuthorized,setIsAuthorized]=useState(false);
  const [user,setUser]=useState({})
  const [count,setCount]=useState(0);
  const [jobCount,setJobCount]=useState(0)

  return (
    <Context.Provider value={{isAuthorized,setIsAuthorized,user,setUser,jobCount,setJobCount}}>
      <App></App>
    </Context.Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
)
