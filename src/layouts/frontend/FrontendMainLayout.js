import React,{useState,useEffect} from 'react'
import Home from '../../components/frontend/Home'
import NavBaar from './NavBaar'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Contact from '../../components/frontend/Contact'
import Collections from '../../components/frontend/Collections'
import ViewCategory from '../../components/frontend/ViewCategory'
import ViewProduct from '../../components/frontend/ViewProduct'
import ViewCart from '../../components/frontend/ViewCart'
import CheckOut from '../../components/frontend/CheckOut'
import PageNotFound from '../../components/errors/PageNotFound'
import ServerError from '../../components/errors/ServerError'
import swal from 'sweetalert'
import axios from 'axios'
import { useHistory } from 'react-router'


const FrontendMainLayout = (props) => {

    const [number_items, setnumber_items] = useState(0)
    const history = useHistory()
    const [cart_items, setcart_items] = useState([])

    /**
     * life cycle methodes
     */
    useEffect(() => {
        axios.get("/api/view-cart").then(res => {
            document.body.style.backgroundColor = "white"
            if (res.data.status === 200) {
                setcart_items(res.data.cart);
                setnumber_items(res.data.cart.length)
                localStorage.setItem("number_items",res.data.cart.length)
                console.log("navbarr"+res.data.cart.length);
            } 
        }).catch(err => {
            history.push("/servererror")
        })

    }, [history])


    const decrementQte=()=>{
        setnumber_items(prev=>prev-1)
        console.log(number_items)
    }

    const incrementQte=()=>{
        setnumber_items(prev=>prev+1)
        console.log(number_items)
    }

    const resetQte=()=>{
        setnumber_items(0)
    }
    
    return (
        <div>
            <NavBaar number_items={number_items}  />

            <Switch>
                <Route path="/" name="profile" exact={true} component={()=><Home name={props.name}/> }  />
                <Route path="/contact" name="contact" exact={true} component={Contact} />
                <Route path="/collections" name="collections" exact={true} component={Collections} />
                <Route path="/collections/:slug"  exact={true} component={ViewCategory} />
                <Route path="/collections/:slug/:product_slug"  exact={true} component={ViewProduct} />
                <Route path="/cart"  exact={true} component={()=><ViewCart decrementQte={decrementQte} />} />
                <Route path="/checkout"  exact={true} component={()=><CheckOut resetQte={resetQte} />} />
                <Route path="/serverError"  exact={true} component={ServerError} />
                <Route  component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default FrontendMainLayout
