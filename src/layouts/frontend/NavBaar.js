import React ,{useEffect,useState}from 'react'
import { Navbar, Nav, Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router'

var AuthButton=''
const NavBaar = (props) => {

    const history=useHistory()
   const [number_items, setnumber_items] = useState(0)
   const [cart, setcart] = useState([])

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

    useEffect(() => {
        axios.get("/api/view-cart").then(res => {
            document.body.style.backgroundColor = "white"
            if (res.data.status === 200) {
                setcart([...res.data.cart])

                setnumber_items(cart.length)
                console.log(cart.length)

            } else if (res.data.status === 401) {
               
            }

        }).catch(err => {
            history.push("/servererror")
        })

    },[history])


    
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
                          <i className="fas fa-cart-plus  fs-5"></i> cart 
                          <span className="badge bg-danger fs-8 rounded-circle">{number_items}</span>
                        </Link>

                    </Nav>
                    {
                        !localStorage.getItem("token") ?
        
                            <>
                                <Link to="/register" className="nav-link">Register</Link>
                                <Link to="/login" className="nav-link">  Login </Link>
                            </>
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
