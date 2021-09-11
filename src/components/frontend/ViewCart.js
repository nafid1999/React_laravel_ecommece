import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
import axios from 'axios'

const ViewCart = () => {


    const history = useHistory()
    const [cart, setcart] = useState([])
    const [loading, setloading] = useState(false)


    /**
     * life cycle methodes
     */
    useEffect(() => {
        axios.get("/api/view-cart").then(res => {
            document.body.style.backgroundColor = "white"
            if (res.data.status === 200) {
                setcart([...res.data.cart])
                setloading(false)

            } else if (res.data.status === 403) {
                swal("warning", "", "warning")
                history.push("/collections")
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
                                    <tr>
                                        <td width="10%">
                                            <img src="" width="50px" height="50px"/>
                                        </td>
                                        <td>Product name</td>
                                        <td>150</td>
                                        <td width="10%"> 
                                           <input className="form-control" type="number" min="1" max="10" />
                                        </td>
                                        <td className="text-center">250</td>
                                        <td>
                                            <button className="btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCart
