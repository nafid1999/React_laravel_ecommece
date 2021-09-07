import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import swal from 'sweetalert'

const ViewProduct = (props) => {

    const [product, setproduct] = useState()
    const [loading, setloading] = useState(true)
    const [category, setcategory] = useState({})
    const { slug } = useParams();
    const { product_slug } = useParams()
    const history = useHistory()


    /**
     * life cycle methodes
     */
    useEffect(() => {
        axios.get("/api/frontendProduct/" + slug + "/" + product_slug).then(res => {
            document.body.style.backgroundColor = "white"

            console.log(slug + product_slug)

            if (res.data.status === 200) {
                setproduct({ ...res.data.data[0] })
                setcategory({ ...res.data.data[0].category })
                setloading(false)
                document.title = product.name

            } else if (res.data.status === 403) {
                swal("warning", "no product found", "warning")
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
    }else{

        var stock='';
        if(product.qte>0){

            stock= <div>
            <label className="btn-sm btn-success px-4 mt-2">In stock</label>
            <div className="row">
                <div className="col-md-3 mt-3">
                    <div className="input-group">
                        <button type="button" className="input-group-text">-</button>
                        <input className="form-control text-center" value="1" />
                        <button type="button" className="input-group-text">+</button>
                    </div>
                </div>

                <div className="col-md-3 mt-3">
                 <button type="button" className="btn-primary btn">add to cart</button>
                      
                </div>

            </div>


        </div>

        }else{
            stock= <>
            <label className="btn-sm btn-danger px-4 mt-2">
              out of stock
            </label>
             <div className="col-md-3 mt-3">
             <div className="input-group">
                 <button type="button" className="input-group-text" >-</button>
                 <input className="form-control text-center" value="1" readOnly />
                 <button type="button" className="input-group-text">+</button>
             </div>
         </div>
         </>
        }
    }

    return (
        <div className="">
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>categories {">"}{category.name}{">"}{product.name} </h6>
                </div>
            </div>
            <div className="py-3 ">
                <div className="container">
                <h4 className="mb-4">Product details</h4>

                    <div className="row shadow-lg p-3 mb-5  rounded mt-5 py-5">


                        <div className="col-md-4 border-end">
                            <img src={`http://127.0.0.1:8000/${product.image}`} className="w-75 " height="" />
                        </div>
                        <div className="col-md-6">
                            <h4>
                                {product.name}
                                <span className="float-end btn-sm btn-danger badge-pill">{product.brand}</span>

                            </h4>
                            <p>
                                {product.description}

                            </p>
                            <h4 className="mb-1">
                                RS :{product.price}
                                <s className="ms-2"> Rs /{product.o_price}</s>

                            </h4>

                            <div>
                              {stock}
                            </div>

                            <button className="btn btn-warning mt-3">
                              add to wishlist 
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct

