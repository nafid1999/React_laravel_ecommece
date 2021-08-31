import axios from 'axios';
import React,{useState,useEffect}from 'react'
import { Redirect, Route } from 'react-router-dom'
import MainLayout from './layouts/admin/MainLayout'
import { Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory } from 'react-router'


const AdminRoute = (props) => {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setloading] = useState(true)
  const history =useHistory()

  useEffect(() => {

    axios.get("/api/checkAuthentication").then(res=>{

       if(res.data.status===200){
          console.log("hhhhhhhh")
          setAuthenticated(true)
          console.log(loading)

       }
       setloading(false)

    }).catch(err=>{
          swal("Warning",err.response.statusText,"warning")
       history.push("/")
    
    });

  },[])

  if(loading){
    return (
      <div className="text-center py-5">
            <Spinner animation="border" />
        </div>
    )
  }
  console.log(props)
    return (
       <Route 
         path={props.path} exact={true} 
         render={(props)=>authenticated?
          <MainLayout {...props}/> :
          <Redirect to="/login" />
        }
       
       />
    )
}

export default AdminRoute
