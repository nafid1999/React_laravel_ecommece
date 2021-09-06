import React,{useState,useEffect}from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'

const ViewCategory = (props) => {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    const [category, setcategory] = useState({})
    const {slug}=useParams();
    const history=useHistory()


    /**
     * life cycle methodes
     */
    useEffect(() => {
        axios.get("/api/frontendCategories/"+slug).then(res => {
            if (res.data.status === 200) {
                setproducts([...res.data.data])
                setcategory({...res.data.data[0].category})
                setloading(false)
            }else if(res.data.status === 403){
                swal("warning","no products found","warning")
                history.push("/collections")
            }

        }).catch(err => console.log(err))

    }, [])

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>categories {">"}{category.name} </h6>
                </div>
            </div>
            <div className="py-3 ">
                <div className="container">
                    <div className="row">
                        {
                            products.map(pro => {
                                return (
                                    <div className="col-md-4" key={pro.id}>
                                        <div className="card">
                                            <Link to="/">
                                              <img src={`http://127.0.0.1:8000/${pro.image}`} className="w-100" />
                                            </Link>
                                            <div className="card-body">
                                                <h2> {pro.name} </h2>
                                                <p>
                                                    {pro.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCategory
