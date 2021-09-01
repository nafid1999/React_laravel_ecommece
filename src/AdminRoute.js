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
//interceptors
// axios.interceptors.response.use(response=>console.log("respone"),err=>{
//   console.log("interceptors")
//   if(err.response.status===401){
//      swal("Unthorized",err.response.data.message,"warning")
//     history.push("/")
//   }
//   return Promise.reject(err)
// })

// axios.interceptors.response.use(response=>console.log("respnse2"),err=>{
//   console.log("interceptors")

//    if(err.response.status===403){
//       swal("Forbedden",err.response.data.message,"warning")
//      history.push("/")
//    }
//    return Promise.reject(err)

// })
  useEffect(() => {
    console.log("hhhhoohhhh")

    axios.get("/api/checkAuthentication").then(res=>{
      console.log("hhhhoohhhh")

       if(res.data.status===200){
          console.log("hhhhhhhh")
          setAuthenticated(true)
          console.log(loading)

       }
       setloading(false)

    }).catch(err=>{
      if(err.response.status===403){
              swal("Forbedden",err.response.data.message,"warning")
             history.push("/")
      }else if(err.response.status===401){
            swal("Unthorized",err.response.data.message,"warning")
            history.push("/login")
        }
    })

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
