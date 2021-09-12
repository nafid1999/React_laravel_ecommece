import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
import axios from 'axios'
const CheckOut = () => {

    
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

        }).catch(err => console.log(err))

    }, [])

    if (loading) {
        return (
            <div className="text-center py-5" >
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
    }
    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Home {">"} Checkout</h6>
                </div>
            </div>
            <div className="py-3 mt-3">
                <div className="container">
                    <h4 className="mb-4">Submit the order</h4>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                               <div className="card-header">
                                   <h4>Basic information</h4>
                               </div>
                               <div className="card-body">
                                  <div className="row">
                                  <div className="col-md-6">
                                          <div className="form-group">
                                              <label className="mb-2">First Name</label>
                                              <input className="form-control" type="text" name="first_name"/>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <label className="mb-2">Last Name</label>
                                              <input className="form-control" type="text" name="last_name"/>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <label className="mb-2">Phone Number</label>
                                              <input className="form-control" type="text" name="phone"/>
                                          </div>
                                      </div>

                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <label className="mb-2">Email Adress</label>
                                              <input className="form-control" type="email" name="email"/>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="form-group">
                                              <label className="mb-2">Full adress</label>
                                              <textarea className="form-control" name="adress" />
                                          </div>
                                      </div>
                                       <div className="col-md-4">
                                          <div className="form-group">
                                              <label className="mb-2">City</label>
                                              <input className="form-control" type="text" name="city"/>
                                          </div>
                                      </div> 
                                      <div className="col-md-4">
                                          <div className="form-group">
                                              <label className="mb-2">State</label>
                                              <input className="form-control" type="text" name="state"/>
                                          </div>
                                      </div>

                                      <div className="col-md-4">
                                          <div className="form-group">
                                              <label className="mb-2">Zip code</label>
                                              <input className="form-control" type="text" name="zipe_code"/>
                                          </div>
                                      </div>

                                      <div className="col-md-12 mt-3 ">
                                          <div className="form-group">
                                              <button className="btn btn-primary btn-block"> Place Order</button>
                                          </div>
                                      </div>
                                  </div>
                               </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th className="text-center">Quantity</th>
                                        <th>Price</th>
                                        <th className="text-center">Total</th>
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
                                            <td className="text-center">{item.qte}</td>
                                            <td>{item.product.price}</td>
                                            <td className="text-center">{item.qte*item.product.price}</td>  
                                        </tr>
                                        }
                                        )
                                   }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="3" >Grand Total</th>
                                        <th className="text-center">{Totalprice} Dh</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
