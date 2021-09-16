import axios from 'axios';
import React from 'react'
import {  Route } from 'react-router-dom'
import FrontendMainLayout from './layouts/frontend/FrontendMainLayout';


const PublicRoute = (props) => {

  

    return (
       <Route 
         name="main layout"
         path={props.path} 
         render={(props)=><FrontendMainLayout {...props} name="hhhhhggf"/>  }
       
       />
    )
}

export default PublicRoute
