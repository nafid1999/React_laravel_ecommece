import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Dashboard</h1>
                   
                    <div className="row mt-5">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white mb-4">
                                <h4 className="card-body">Products
                                <i className="fas fa-item float-end fs-2"></i>

                                </h4>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <Link className="small text-white stretched-link" to="/admin/products">View Details</Link>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-warning text-white mb-4">
                                <h4 className="card-body">Categories
                                <i className="fa fa-item float-end fs-2"></i>

                                </h4>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <Link className="small text-white stretched-link" to="/admin/categories/all">View Details</Link>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white mb-4">
                                <h4 className="card-body">Users
                                <i className="fas fa-users float-end fs-2"></i>

                                </h4>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <Link className="small text-white stretched-link" href="#">View Details</Link>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-danger text-white mb-4">
                                <h4 className="card-body ">Orders</h4>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <Link className="small text-white stretched-link" href="#">View Details</Link>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Dashboard
