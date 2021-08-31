
import MainLayout from './layouts/admin/MainLayout';
import {BrowserRouter as Router ,Switch,Route, Redirect} from "react-router-dom"
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import axios from "axios"
import AdminRoute from './AdminRoute';

axios.defaults.withCredentials = true;
axios.defaults.baseURL="http://127.0.0.1:8000/"
axios.defaults.headers.post['Accept']="application/json"
axios.defaults.headers.post['Content-Type']="application/json"
axios.interceptors.request.use(function(config){
  let token=localStorage.getItem('token');
  config.headers.Authorization=token? `Bearer  ${token}` :""
  return config;
})

function App() {

  return (
    <div className="App" >

      <Router>
          <Switch>
              <Route path="/"  exact={true} component={Home}  />
             
              <Route path="/login">
               {localStorage.getItem('token') ? <Redirect to="/" />: <Login/>}
              </Route>
              <Route path="/register">
               {localStorage.getItem('token') ? <Redirect to="/" />: <Register/>}
              </Route>

              {/* <Route path="/admin/:Subpath"  exact={true} render={(props)=><MainLayout {...props}/>}  /> */}
              <AdminRoute path="/admin/:Subpath"  />
              <Redirect from="/admin" to="/admin/dashboard"/>

          </Switch>
      </Router>

    </div>
  );
}

export default App;
