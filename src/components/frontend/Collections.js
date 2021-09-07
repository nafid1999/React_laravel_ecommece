import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {

    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(true)

    /**
     * life cycle methodes
     */
    useEffect(() => {
        document.title="Collections"

        axios.get("/api/frontendCategories").then(res => {
            if (res.data.status === 200) {

                setcategories([...res.data.data])
                setloading(false)
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
                    <h6>categories</h6>
                </div>
            </div>
            <div className="py-3 ">
                <div className="container">
                    <div className="row">
                        {
                            categories.map(cat => {
                                return (
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h2><Link to={{pathname:"/collections/"+cat.slug,
                                                state:{name:cat.name}}} > {cat.name}</Link> </h2>
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

export default Collections
