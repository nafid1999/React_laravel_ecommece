
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import axios from "axios"
import AdminRoute from './AdminRoute';
import React, { useState, useEffect } from 'react';
import PublicRoute from './PublicRoute';


//config for axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000/"
axios.defaults.headers.post['Accept'] = "application/json"
axios.defaults.headers.post['Content-Type'] = "application/json"

//interceptor when the user is trying to achieve an authenticated page
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer  ${token}` : ""
  return config;
})

function App() {

  // const [authenticated, setAuthenticated] = useState(false);
  // const [loading, setloading] = useState(true)
  // const history =useHistory()

  // useEffect(() => {

  //   axios.get("/api/checkAuthentication").then(res=>{

  //      if(res.data.status===200){
  //         setAuthenticated(true)

  //      }
  //      setloading(false)

  //   }).catch(err=>{

  //       if(err.response.status===401)
  //         setAuthenticated(false)
  //         setloading(false)

  //   });

  // },[])

  // if(loading){
  //   return (
  //     <div className="text-center py-5">
  //           <Spinner animation="border"/>
  //       </div>
  //   )
  // }
  return (
    <div className="App" >

      <Router>
        <Switch>
          <Route path="/login">
            {localStorage.getItem("token") ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {localStorage.getItem("token") ? <Redirect to="/" /> : <Register />}
          </Route>

          <AdminRoute path="/admin/:Subpath" />
          <Redirect from="/admin" to="/admin/dashboard" />

          <PublicRoute path="/" />


          {/* <Route path="/admin/:Subpath"  exact={true} render={(props)=><MainLayout {...props}/>}  /> */}

        </Switch>
      </Router>

    </div>
  );
}



export default App;
