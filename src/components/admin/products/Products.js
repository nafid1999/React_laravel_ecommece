import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const Products = () => {

   const [listProducts, setlistProduct] = useState([])
   const [loading, setloading] = useState(true)

   /**
    * life cycle methodes
    */
   useEffect(() => {

       axios.get("/api/products").then(res=>{
           if (res.data.status === 200) {

               setlistProduct([...res.data.data])
               setloading(false)
           }

       }).catch(err=>console.log(err))
      
   }, [])

   /**
    * event handlesrs
    * @param {id of category} id 
    */

   const onDelete= (id)=>{

       let products=listProducts.filter(pro=>pro.id!==id)
       if(window.confirm("are you sure,you want to delete this product ")){
           console.log("delete")
          axios.delete(`/api/product/delete/${id}`).then(response=>{
              if(response.data.status===200){
               setlistProduct(products)

                  swal("success","deleted successfully","success")

              }
          }).catch(err=>{
          })
       }
   }


   if(loading){
       return (
       <div className="text-center py-5" >
           <div className="spinner-grow text-primary" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
       </div>)
     }
   return (
       <div className="container px-4 py-5">
           <div className="card  ">
               <div className="card-header">
               <h2> Categories</h2>
               </div>
               <div className="card-body">
                  <table className="table table-bordered table-striped">
                      <thead className="p-5">
                          <tr>
                               <th>#ID</th>
                               <th>Title</th>
                               <th>Slug</th>
                               <th>Category</th>
                               <th>Price</th>
                               <th>qte</th>
                               <th>status</th>
                               <th>image</th>
                               <th>Edit</th> 
                               <th>Delete</th>    
                          </tr>
                                                  
                      </thead>
                      <tbody>
                        { listProducts.length?
                           listProducts.map((pro,id)=>
                               <tr key={id}>
                                   <td>{pro.id}</td>
                                   <td>{pro.name}</td>
                                   <td>{pro.slug}</td>
                                   <td>{pro.category.name}</td>
                                   <td>{pro.price}</td>
                                   <td>{pro.qte}</td>
                                   <td>
                                       {pro.status ?
                                        <span className="badge bg-primary">enabled</span>
                                        :
                                        <span className="badge bg-danger">desabled</span>
                                    }
                                   </td>
                                   <td>
                                       <img src={`http://127.0.0.1:8000/${pro.image}`}  width="50px"/>
                                   </td>
                                   <td>
                                       <Link to={"/admin/product/edit/"+pro.id} className="btn btn-success">Edit  <i className="fas fa-edit"></i></Link>
                                      
                                   </td>
                                   <td>
                                       <button className="btn btn-warning" onClick={onDelete.bind(this,pro.id)}>Delete <i className="fas fa-trash"></i></button>
                                   </td>
                                   
                               </tr>

                           ):
                           <tr >
                               <td colSpan="6">
                                   <div className="alert alert-info text-center">No products found .</div>
                               </td>
                           </tr>
                        }
                      </tbody>                          

                  </table>

               </div>
           </div>
       </div>
   )
}

export default Products
