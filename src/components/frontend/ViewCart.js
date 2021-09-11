import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
import axios from 'axios'

const ViewCart = () => {


    const history = useHistory()
    const [cart, setcart] = useState([])
    const [loading, setloading] = useState(true)


    /**
     * life cycle methodes
     */
    useEffect(() => {
        axios.get("/api/view-cart").then(res => {
            document.body.style.backgroundColor = "white"
            if (res.data.status === 200) {
                setcart([...res.data.cart])
                console.log(res.data.cart);
                setloading(false)

            } else if (res.data.status === 401) {
                swal("warning",res.data.message, "warning")
                history.push("/login")
            }

        }).catch(err => console.log(err))

    }, [])

    const handleChange=(e,id_cart)=>{

        setcart(cart=>cart.map(item=>
                id_cart===item.id?{...item,qte:e.target.value}:item
                )
            )
            console.log(cart[0].qte)
         cart.map(item=>{
             if(item.id===id_cart)
             updateCartQte(id_cart,item)

         })

    }

    const updateCartQte=(id_cart,cart)=>{

        axios.put("/api/updateCart/"+id_cart,cart).then(res=>{
            if (res.data.status === 200) {
               

            } else if (res.data.status === 401) {
                
            }
        })
    }

    if (loading) {
        return (
            <div className="text-center py-5" >
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
    }
    var Html_cart="";
    if(cart.length>0){
        Html_cart=
        <table className="table table-responsive ">
        <thead>
            <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total Price</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.length>0 &&
               cart.map(item=>
                    <tr key={item.id}>
                        <td width="10%">
                            <img src={"http://127.0.0.1:8000/"+item.product.image} width="50px" height="50px"/>
                        </td>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td width="10%"> 
                            <input className="form-control" type="number" min="1" max="10" name="qte" value={item.qte}  onChange={(e)=>{handleChange(e,item.id)}}/>
                        </td>
                        <td className="text-center">{item.qte*item.product.price}</td>
                        <td>
                            <button className="btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
               ) 

            }
           
        </tbody>
    </table>

    }else{

        Html_cart=
        <div>
              <div className="card card-body shadow-sm py-5">
                   <h4>Your shoping cart is empty </h4>
              </div>
        </div>
        
    }


    return (
        <div className="">
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Home {">"} Cart</h6>
                </div>
            </div>
            <div className="py-3 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                          {Html_cart}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCart
