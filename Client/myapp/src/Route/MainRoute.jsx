import React from 'react'
import {Route ,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Login from './../pages/Login';
import Dashboard from './../pages/Dashboard';
import ProjectsList from './../components/ProjectsList';
import ProjectCreate from './../pages/ProjectCreate';

const MainRoute = () => {

  return (
    <Routes>
       <Route  path='/' element={<Home/> } />
        <Route path='/login' element={<Login/>} />
         <Route path='/Dashboard' element={<Dashboard/>}   />
         <Route  path='/projectlist' element={<ProjectsList/>} />
         <Route  path='/projectcreate' element={<ProjectCreate/>} />
         
    </Routes>
  )
}

export default MainRoute