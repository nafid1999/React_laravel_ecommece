import React from 'react'
import "../../assets/admin/css/styles.css"
import "../../assets/admin/js/scripts.js"
import {BrowserRouter as Router ,Switch,Route, Redirect} from "react-router-dom"

import Footer from './Footer';
import Navbar from "./Navbar";
import SideBar from './SideBar';
import Dashboard from '../../components/admin/Dashboard';
import Profile from '../../components/admin/Profile';
import Categories from '../../components/admin/categories/Categories';
import ListCategories from '../../components/admin/categories/ListCategories';
import EditCategory from '../../components/admin/categories/EditCategory';
import Products from '../../components/admin/products/Products';
import AddProduct from '../../components/admin/products/AddProduct';
import EditProduct from '../../components/admin/products/EditProduct';
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
                            //route categories
                            <Route path="/admin/add-category"  exact={true}   component={Categories}  />
                            <Route path="/admin/categories/all"  exact={true}   component={ListCategories}  />
                            <Route path="/admin/category/edit/:id"  exact={true}   component={EditCategory}  />
                             //route products
                            <Route path="/admin/add-product"  exact={true}   component={AddProduct}  />
                            <Route path="/admin/products"  exact={true}   component={Products}  />
                            <Route path="/admin/product/edit/:id"  exact={true}   component={EditProduct}  />

                        </Switch>
                    </main>
                    <Footer/>
                </div>


             </div>

        </div>
    )
}

export default MainLayout
