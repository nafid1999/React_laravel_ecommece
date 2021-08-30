
import MainLayout from './layouts/admin/MainLayout';
import {BrowserRouter as Router ,Switch,Route, Redirect} from "react-router-dom"
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import axios from "axios"

axios.defaults.withCredentials = true;
axios.defaults.baseURL="http://localhost:8000/"
axios.defaults.headers.post['Accept']="application/json"
axios.defaults.headers.post['Content-Type']="application/json"

function App() {

  return (
    <div className="App" >

      <Router>
          <Switch>
              {/* <Route path="/admin/dashboard" exact  component={(props) => (<MainLayout {...props} data={"dashboarbd page"}/>)} /> */}
              <Route path="/"  exact={true} component={Home}  />
              <Route path="/login"  exact={true} component={Login}  />
              <Route path="/register"  exact={true} component={Register}  />

              <Route path="/admin/:Subpath"  exact={true} render={(props)=><MainLayout {...props}/>}  />
              <Redirect from="/admin" to="/admin/dashboard"/>

          </Switch>
      </Router>

    </div>
  );
}

export default App;
