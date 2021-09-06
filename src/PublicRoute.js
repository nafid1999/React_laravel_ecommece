import axios from 'axios';
import React from 'react'
import {  Route } from 'react-router-dom'
import FrontendMainLayout from './layouts/frontend/FrontendMainLayout';


const PublicRoute = (props) => {

  

    return (
       <Route 
         path={props.path} 
         render={(props)=><FrontendMainLayout {...props}/>  }
       
       />
    )
}

export default PublicRoute
