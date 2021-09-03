import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


const ListCategories = () => {
    /**
     * states
     */
    const [listCategory, setlistCategory] = useState([])
    const [loading, setloading] = useState(true)

    /**
     * life cycle methodes
     */
    useEffect(() => {

        axios.get("/api/categories").then(res=>{
            if (res.data.status === 200) {

                setlistCategory([...res.data.data])
                setloading(false)
            }

        }).catch(err=>console.log(err))
       
    }, [])

    /**
     * event handlesrs
     * @param {id of category} id 
     */

    const onDelete= (id)=>{

        let categories=listCategory.filter(cat=>cat.id!==id)
        if(window.confirm("are you sure,you want to delete this category ")){
            console.log("delete")
           axios.delete(`/api/category/delete/${id}`).then(response=>{
               if(response.data.status===200){
                setlistCategory(categories)

                   swal("success","deleted successfully","success")

               }
           }).catch(err=>{
           })
        }
    }


    if(loading){
        return (
        <div class="text-center py-5" >
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
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
                                <th>Edit</th> 
                                <th>Delete</th>    
                           </tr>
                                                   
                       </thead>
                       <tbody>
                         { listCategory.length?
                            listCategory.map((cat,id)=>
                                <tr key={id}>
                                    <td>{cat.id}</td>
                                    <td>{cat.name}</td>
                                    <td>{cat.slug}</td>
                                    <td>
                                        <Link to={"/admin/category/edit/"+cat.id} className="btn btn-success">Edit  <i className="fas fa-edit"></i></Link>
                                       
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" onClick={onDelete.bind(this,cat.id)}>Delete <i class="fas fa-trash"></i></button>
                                    </td>
                                    
                                </tr>

                            ):
                            <tr >
                                <td colSpan="6">
                                    <div className="alert alert-info text-center">No categories found .</div>
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

export default ListCategories
