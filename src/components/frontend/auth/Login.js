import React from 'react'
import NavBaar from '../../../layouts/frontend/NavBaar'

const Login = () => {
    return (
        <div>
            <NavBaar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2 >Login</h2>
                            </div>
                            <div className="card-body">
                                <form>
                                  
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="mb-2">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password" className="mb-2">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" />
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="card-footer pb-0">
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary" >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
