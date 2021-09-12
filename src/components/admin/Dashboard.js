import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Dashboard</h1>
                   
                    <div class="row mt-5">
                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-primary text-white mb-4">
                                <h4 class="card-body">Products
                                <i className="fas fa-item float-end fs-2"></i>

                                </h4>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <Link class="small text-white stretched-link" to="/admin/products">View Details</Link>
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-warning text-white mb-4">
                                <h4 class="card-body">Categories
                                <i className="fa fa-item float-end fs-2"></i>

                                </h4>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <Link class="small text-white stretched-link" to="/admin/categories/all">View Details</Link>
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-success text-white mb-4">
                                <h4 class="card-body">Users
                                <i className="fas fa-users float-end fs-2"></i>

                                </h4>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <Link class="small text-white stretched-link" href="#">View Details</Link>
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card bg-danger text-white mb-4">
                                <h4 class="card-body ">Orders</h4>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <Link class="small text-white stretched-link" href="#">View Details</Link>
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
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
