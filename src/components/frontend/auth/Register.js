import React ,{useState} from 'react'
import NavBaar from '../../../layouts/frontend/NavBaar'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router'

const Register = () => {
    document.title="Register"

    /**
     * states
     */

    const [registredInput,setRegistredInput]= useState({
        name:'',
        email:'',
        password:''
    });

    const [errors,setErrors]=useState({});
    const history=useHistory();

    /**
     * events handler
     */

      const handleSubmit=(e)=>{
         e.preventDefault();
    console.log('hi')
         const data ={...registredInput}

         axios.get('/sanctum/csrf-cookie').then(response => {
            console.log(response)

            axios.post("/api/register",data).then((res)=>{
                if(res.data.status===200){
                    setErrors({});
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("user",res.data.user);
                    swal("Success",res.data.message,"success");
                    history.push("/")


                }else{
                    console.log( res.data.message.name)

                    setErrors({...res.data.message})
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
                                <h2 >Register </h2>

                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} className="needs-validation" novalidate>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name" className="mb-2">Full Name</label>
                                        <input type="text" className="form-control" id="name" name="name" value={registredInput.name} 
                                         onChange={(e)=>setRegistredInput({...registredInput,[e.target.name]:e.target.value})}
                                        />
                                         <div className="is-invalid text-danger font-weight-bold">
                                         {errors.name}
                                         </div>
                                    </div>
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
                                        <button type="submit" className="btn btn-primary" >Register</button>
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

export default Register
