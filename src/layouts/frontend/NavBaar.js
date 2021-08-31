import React ,{useState,useEffect} from 'react'
import { Navbar, Nav, Container,Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router'

var AuthButton=''
const NavBaar = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setloading] = useState(true)
  const history =useHistory()

  useEffect(() => {

    axios.get("/api/checkAuthentication").then(res=>{

       if(res.data.status===200){
          setAuthenticated(true)

       }
       setloading(false)

    }).catch(err=>{
        if(err.response.status===401)
          setAuthenticated(false)
          setloading(false)

    
    });

  },[])

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


     if(!authenticated){
        AuthButton=
        <Nav>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login" className="nav-link">  Login     </Link>
         </Nav>
     }else{
        AuthButton=
        <Nav>
            <Button  className="btn btn-danger" onClick={handlLogout}> logout  </Button>
         </Nav>
     }

     if(loading){
        return (
          <div className="text-center py-5">
                <Spinner animation="border"/>
            </div>
        )
      }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BoukiShope</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                   { AuthButton}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBaar
