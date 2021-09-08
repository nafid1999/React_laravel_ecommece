import React from 'react'
import Home from '../../components/frontend/Home'
import NavBaar from './NavBaar'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Contact from '../../components/frontend/Contact'
import Collections from '../../components/frontend/Collections'
import ViewCategory from '../../components/frontend/ViewCategory'
import ViewProduct from '../../components/frontend/ViewProduct'


const FrontendMainLayout = () => {
    return (
        <div>
            <NavBaar />

            <Switch>
                <Route path="/" name="profile" exact={true} component={Home} />
                <Route path="/contact" name="contact" exact={true} component={Contact} />
                <Route path="/collections" name="collections" exact={true} component={Collections} />
                <Route path="/collections/:slug"  exact={true} component={ViewCategory} />
                <Route path="/collections/:slug/:product_slug"  exact={true} component={ViewProduct} />


            </Switch>
        </div>
    )
}

export default FrontendMainLayout