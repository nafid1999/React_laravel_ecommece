
import MainLayout from './layouts/admin/MainLayout';
import {BrowserRouter as Router ,Switch,Route, Redirect} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/admin/dashboard" exact  component={(props) => (<MainLayout {...props} data={"dashboarbd page"}/>)} />
              <Redirect from="/admin" to="/admin/dashboard"/>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
