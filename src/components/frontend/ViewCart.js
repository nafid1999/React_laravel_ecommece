import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ViewCart = (props) => {


    const history = useHistory()
    const [cart, setcart] = useState([])
    const [loading, setloading] = useState(true)
    let Totalprice=0;


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

        }).catch(err => {
            history.push("/servererror")
        })

    }, [])

    /**
     * Event handler
     */
    const handleChange=(e,id_cart)=>{

        setcart(cart=>cart.map(item=>
                id_cart===item.id?{...item,qte:e.target.value}:item
                )
            )
         cart.map(item=>{
             if(item.id===id_cart)
             updateCartQte(id_cart,item)

         })

    }

    const handleIncrement=(id_cart)=>{
        setcart(cart=>cart.map(item=>
            id_cart===item.id?{...item,qte:item.qte+(item.qte<10?1:0)}:item
            )
        )
        updateCartQte(id_cart,"inc")
    }

    const handleDecrement=(id_cart)=>{
        setcart(cart=>cart.map(item=>
            id_cart===item.id?{...item,qte:item.qte-(item.qte>1?1:0)}:item
            )
        )
        updateCartQte(id_cart,"dec")

    }

   const deleteItem=(cart_id)=>{
       
       let  cart_data=cart.filter((item)=>item.id!==cart_id)
       props.decrementQte();
      console.log(cart_data)
      console.log(cart_id)



       axios.delete("/api/deleteItem/"+cart_id).then(res=>{
           if(res.data.status==200){
                setcart(cart_data)
                swal("suucess",res.data.message,"success")
           }else if(res.data.status==401){
            swal("error",res.data.message,"error")

           }else if(res.data.status==402){
            swal("error",res.data.message,"error")

           }
       
       })
         

    }

    /**
     * utility methods
     */

    const updateCartQte=(id_cart,scope)=>{

        axios.put("/api/updateCart/"+id_cart+"/"+scope).then(res=>{
            if (res.data.status === 200) {
               
            } 
        }).catch(err=>{
            swal("error","can not modfy quantity","error")
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
               cart.map(item=>{
                  Totalprice+=item.qte*item.product.price
                    return <tr key={item.id}>
                        <td width="10%">
                            <img src={"http://127.0.0.1:8000/"+item.product.image} width="50px" height="50px"/>
                        </td>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td width="15%"> 
                            <div className="input-group">
                            <button type="button" className="input-group-text" onClick={()=>handleDecrement(item.id)} >-</button>
                            <input className="form-control text-center" value={item.qte}  onChange={handleChange} />
                            <button type="button" className="input-group-text"onClick={()=>handleIncrement(item.id)} >+</button>
                        </div>                        </td>
                        <td className="text-center">{item.qte*item.product.price}</td>
                        <td>
                            <button className="btn-sm btn-danger" onClick={deleteItem.bind(this,item.id)} ><i className="fas fa-trash"></i></button>
                        </td>
                    </tr>
                }
               ) 
 
            }
           
        </tbody>
    </table>

    }else{

        Html_cart=
        <div>
              <div className=" py-5">
                   <h4 className="text-center">Your shoping cart is empty </h4>
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
            <div className="py-3 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 card card-body shadow-sm">
                          {Html_cart}
                        </div>
                        <div className="col-md-8"></div>
                        {
                          cart.length>0 &&
                        
                        <div className="col-md-4 mt-5">
                            <div className="card card-body">
                            <h4 className="">
                                   Sub Total :
                                   <span className="float-end">{Totalprice} Dh</span>
                               </h4>  
                               <h4 className="">
                                   Grand Total :
                                   <span className="float-end">{Totalprice} Dh</span>
                               </h4>
                               <hr/>
                               <Link className="btn btn-info" to="/checkout">Cheackout</Link>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCart
