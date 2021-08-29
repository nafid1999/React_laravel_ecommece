
import MainLayout from './layouts/admin/MainLayout';
import {BrowserRouter as Router ,Switch,Route, Redirect} from "react-router-dom"
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
function App() {

  return (
    <div className="App">

      <Router>
          <Switch>
              {/* <Route path="/admin/dashboard" exact  component={(props) => (<MainLayout {...props} data={"dashboarbd page"}/>)} /> */}
              <Route path="/admin/:Subpath"  exact={true} render={(props)=><MainLayout {...props}/>}  />
              <Redirect from="/admin" to="/admin/dashboard"/>

          </Switch>
      </Router>

    </div>
  );
}

export default App;
