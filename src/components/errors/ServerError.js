import React from 'react'
import { Link } from 'react-router-dom'

const ServerError = () => {
    return (
        <div>
            <div id="layoutError">
                <div id="layoutError_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center mt-4">
                                        <h1 className="display-1">500</h1>
                                        <p className="lead">Internal Server Error</p>
                                        <Link to="/">
                                            <i className="fas fa-arrow-left me-1"></i>
                                            Return to Home Page
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutError_footer">
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2021</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ServerError
