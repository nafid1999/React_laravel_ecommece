import NavBaar from '../../../layouts/frontend/NavBaar'
import React ,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router'
const Login = () => {
    document.title="Login"

  
    /**
     * states
     */

     const [registredInput,setRegistredInput]= useState({
        email:'',
        password:''
    });

    const [errors,setErrors]=useState({});
    const [message,setMessage]= useState("")
    const history=useHistory();

    /**
     * events handler
     */

    const handleSubmit=(e)=>{
         e.preventDefault();
         const data ={...registredInput}

         axios.get('/sanctum/csrf-cookie').then(response => {
            console.log(response)

            axios.post("/api/login",data).then((res)=>{

                if(res.data.status===200){
                    setErrors({});
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("user",res.data.user);
                    swal("Success",res.data.message,"success");
                    setMessage("")
                    if(res.data.role==="admin"){
                        history.push("/admin/dashboard")

                    }else
                        history.push("/")

                }else if(res.data.status===402){
                    setMessage('');
                    setErrors({...res.data.message})

                }else{
                      setErrors({})
                      setMessage(res.data.message)
                      swal("Warning",res.data.message,"warning");

                }
            }).catch((err)=>{
               console.log(err)
            })
    });

      }
    return (
        <div>
            <div>
            <NavBaar />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2 >Login </h2>
                            </div>
                            <div className="card-body">
                                {
                                    message &&
                                    <div className="alert alert-danger">{message}</div>

                                }
                                <form onSubmit={handleSubmit} className="needs-validation" >
                                   
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="mb-2">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" value={registredInput.email} 
                                        onChange={(e)=>setRegistredInput({...registredInput,[e.target.name]:e.target.value})}
                                        />
                                        <div className="is-invalid text-danger font-weight-bold">
                                         {errors.email}
                                         </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password" className="mb-2">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" value={registredInput.password} 
                                        onChange={(e)=>setRegistredInput({...registredInput,[e.target.name]:e.target.value})}
                                        />
                                        <div className="is-invalid text-danger font-weight-bold">
                                         {errors.password}
                                         </div>
                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <label htmlFor="c-password" className="mb-2"> confirm Password</label>
                                        <input type="password" className="form-control" id="c-password" name="c-password" />
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                                
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
