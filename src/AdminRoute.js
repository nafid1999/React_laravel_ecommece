import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MainLayout from './layouts/admin/MainLayout'

const AdminRoute = (props) => {
  console.log(props)
    return (
       <Route 
         path={props.path} exact={true} 
         render={(props)=>localStorage.getItem('token')?
          <MainLayout {...props}/> :
          <Redirect to="/login" />
        }
       
       />
    )
}

export default AdminRoute
