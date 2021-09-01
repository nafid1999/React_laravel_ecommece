import React from 'react'
import "../../assets/admin/css/styles.css"
import "../../assets/admin/js/scripts.js"
import {BrowserRouter as Router ,Switch,Route, Redirect} from "react-router-dom"

import Footer from './Footer';
import Navbar from "./Navbar";
import SideBar from './SideBar';
import routes from "../../routes/routes.js"
import Dashboard from '../../components/admin/Dashboard';
import Profile from '../../components/admin/Profile';
import Categories from '../../components/admin/Categories';
import Products from '../../components/admin/Products';
const MainLayout = (props) => {

    console.log(props)

    return (
        <div className="sb-nav-fixed" style={{backgroundColor:""}}>
             <Navbar />
             <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <SideBar/>
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            <Route path="/admin/profile" name="profile" exact={true}   component={Profile}  />
                            <Route path="/admin/dashboard"  exact={true}   component={Dashboard}  />
                            <Route path="/admin/categories"  exact={true}   component={Categories}  />
                            <Route path="/admin/products"  exact={true}   component={Products}  />
                            
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
