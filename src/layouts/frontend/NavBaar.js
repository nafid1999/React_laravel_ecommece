import React from 'react'
import { Navbar, Nav, Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router'

var AuthButton=''
const NavBaar = () => {

    const history=useHistory()

    const handlLogout=()=>{

                axios.post("/api/logout").then(res=>{
                   if(res.data.status===200){
                        localStorage.removeItem("token")
                        localStorage.removeItem("user")
                        swal("Success",res.data.message,"success")
                        history.push("/")
                }
                })
            
    }


     if(!localStorage.getItem("token")){
        AuthButton=
        <Nav>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login" className="nav-link">  Login     </Link>
         </Nav>
     }else{
        AuthButton=
        <Nav>
            <Button  className="btn btn-danger" onClick={handlLogout}>  logout     </Button>
         </Nav>
     }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">BoukiShope</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to="/collections" className="nav-link">Collections</Link>
                        <Link to="/products" className="nav-link">  products </Link>

                        <Link to="/cart" className="nav-link">
                          <i class="fas fa-cart-plus  fs-5"></i> cart 
                        </Link>

                    </Nav>
                    {
                        !localStorage.getItem("token") ?
        
                            <Nav>
                                <Link to="/register" className="nav-link">Register</Link>
                                <Link to="/login" className="nav-link">  Login </Link>
                            </Nav>
                            :
                            <Nav>
                            <Button  className="btn btn-danger" onClick={handlLogout}>  logout     </Button>
                        </Nav>

                    }

                
                   
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBaar
