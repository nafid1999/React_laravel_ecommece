import React from 'react'
import "../../assets/admin/css/styles.css"
import "../../assets/admin/js/scripts"
import {BrowserRouter as Router ,Switch,Route, Redirect} from "react-router-dom"

import Footer from './Footer';
import Navbar from "./Navbar";
import SideBar from './SideBar';
import routes from "../../routes/routes.js"
import Dashboard from '../../components/admin/Dashboard';
import Profile from '../../components/admin/Profile';
const MainLayout = (props) => {

    console.log(props)

    return (
        <div className="sb-nav-fixed">
             <Navbar/>
             <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <SideBar/>
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            <Route path="/admin/profile" name="profile" exact={true}   component={Profile}  />
                            <Route path="/admin/dashboard" name="dashboard" exact={true}   component={Dashboard}  />
                            <Redirect from="/admin" to="/admin/dashboard"/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>


             </div>

        </div>
    )
}

export default MainLayout
