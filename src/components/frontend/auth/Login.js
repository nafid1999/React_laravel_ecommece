import React from 'react'
import NavBaar from '../../../layouts/frontend/NavBaar'

const Login = () => {
    return (
        <div>
            <NavBaar />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2 >Register</h2>
                            </div>
                            <div className="card-body">
                                <form>
                                  
                                    <div class="form-group mb-3">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" id="email" name="email" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" name="password" />
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
