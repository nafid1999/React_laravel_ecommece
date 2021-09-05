import axios from 'axios';
import React,{useState,useEffect, useRef} from 'react'
import swal from 'sweetalert';

const AddProduct = () => {

    const [listCategory, setlistCategory] = useState([])
    const [loading, setloading] = useState(true) 
    const [errors, setErrors] = useState('');
    const fileRef=useRef();
    
    const [productInput, setproductInput] = useState({
        name: "",
        slug: '',
        description: '',
        category_id:'',
        metaTitle: '',
        metaKeywords: '',
        metaDesc: '',
        qte:'',
        price:'',
        o_price:'',
        image:'',
        status:false,
        brand:''

    })


    /**
     * life cycle methods
     */

     useEffect(() => {

        axios.get("/api/categories").then(res=>{
            if (res.data.status === 200) {
                setlistCategory([...res.data.data])
                console.log(listCategory)
                setloading(false)
            }
 
        }).catch(err=>console.log(err))
       
    }, []) 



    /**
     * event handler
     */

     const handlChange = (e) => {
         console.log(e.target.checked)
        setproductInput({ ...productInput, [e.target.name]: e.target.value,status:e.target.checked })
    }
    const handlFile = (e) => {

       setproductInput({ ...productInput, [e.target.name]: e.target.files[0] })
   }

    const handlSubmit = (e) => {
        e.preventDefault()
        const formData=new FormData()
        //data form
        formData.append("name",productInput.name);
        formData.append("slug",productInput.slug);
        formData.append("description",productInput.description);
        formData.append("metaDesc",productInput.metaDesc);
        formData.append("metaTitle",productInput.metaTitle);
        formData.append("metaKeywords",productInput.metaKeywords);
        formData.append("brand",productInput.brand);
        formData.append("status",productInput.status);
        formData.append("image",productInput.image);
        formData.append("qte",productInput.qte);
        formData.append("price",productInput.price);
        formData.append("o_price",productInput.o_price);
        formData.append("category_id",productInput.category_id);
        console.log(productInput.category_id)
        

        axios.post("/api/product/create", formData ).then(res => {

            if (res.data.status === 200) {
                setErrors('');
                resetFields();
                setloading(false)
                swal("Success", res.data.message, "success");

            } else if (res.data.status === 403) {
                setloading(false)
                console.log("error")
                console.log(typeof res.data.message)

                setErrors(res.data.message)

            }
        }).catch((err) => {
            console.log(err)
            setloading(false)

        });

    }

/**
 * util methodes
 */
     const resetFields = () => {
        setproductInput({
        name: "",
        slug: '',
        description: '',
        category_id:'',
        metaTitle: '',
        metaKeywords: '',
        metaDesc: '',
        qte:'',
        price:'',
        o_price:'',
        image:null,
        status:false,
        brand:''
        })


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
        <div className="container px-4  py-5">
            <div className="card">
                <div className="card-header">
                    <h2>add product</h2>
                </div>
                <div className="card-body">
                {
                    errors &&
                    <div className="alert alert-danger">
                        <ul>
                        {Object.values(errors).map((error,id)=><li key={id}>{error}</li>)}
                        </ul>
                        
                    </div>

                }
                    <form className="" onSubmit={handlSubmit} encType="multipart/form-data">
                        <ul className="nav nav-pills mb-3 bg-white" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add product</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seo-tag-tab" data-bs-toggle="tab" data-bs-target="#seo-tag" type="button" role="tab" aria-controls="seo-tag" aria-selected="false">SEO tags</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="details-tag-tab" data-bs-toggle="tab" data-bs-target="#details-tag" type="button" role="tab" aria-controls="details-tag" aria-selected="false">Details</button>
                            </li>
                        </ul>

                        <div className="tab-content bg-white px-4 py-2 " id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"  >

                                <div className="form-group mb-2">
                                <label htmlFor="cat" className="mb-3">category:</label>

                                    <select className="form-control" id="cat" onChange={handlChange} name="category_id">
                                        <option>Select category</option>
                                        {listCategory.map(cat=>
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="name" className="mb-3">Name:</label>
                                    <input className="form-control" name="name" type="text" id="name" onChange={handlChange} value={productInput.name} />
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="slug" className="mb-3">slug:</label>
                                    <input className="form-control" name="slug" type="text" id="slug" onChange={handlChange} value={productInput.slug} />
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="desc" className="mb-3">description:</label>
                                    <textarea name="description" className="form-control" id="desc" onChange={handlChange} value={productInput.description} />
                                </div>

                            </div>

                            <div className="tab-pane fade" id="seo-tag" role="tabpanel" aria-labelledby="seo-tag-tab">

                                <div className="form-group mb-2">
                                    <label htmlFor="meta-title" className="mb-3" >Meta title:</label>
                                    <input className="form-control" name="metaTitle" type="text" id="meta-title" onChange={handlChange} value={productInput.metaTitle}/>
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="meta-keywords" className="mb-3">Meta Keywords:</label>
                                    <input className="form-control" name="metaKeywords" type="text" id="meta-keywords" onChange={handlChange} value={productInput.metaKeywords} />
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="meta-desc" className="mb-3">Meta Description:</label>
                                    <textarea name="metaDesc" className="form-control" id="meta-desc" onChange={handlChange} value={productInput.metaDesc} />
                                </div>



                            </div>

                            <div className="tab-pane fade" id="details-tag" role="tabpanel" aria-labelledby="details-tag-tab">
                                <div className="row">
                                    <div className="form-group mb-2 col-md-4">
                                        <label htmlFor="price" className="mb-3">Selling price:</label>
                                        <input className="form-control" name="price" type="number" id="price" onChange={handlChange}  value={productInput.price}/>
                                    </div>

                                    <div className="form-group mb-2 col-md-4">
                                        <label htmlFor="original-price" className="mb-3">original price:</label>
                                        <input className="form-control" name="o_price" type="number" id="original-price" onChange={handlChange}  value={productInput.o_price}/>
                                    </div>

                                    <div className="form-group mb-2 col-md-4">
                                        <label htmlFor="qte" className="mb-3">Quantity:</label>
                                        <input className="form-control" name="qte" type="number" id="qte" onChange={handlChange}  value={productInput.qte}/>
                                    </div>

                                    <div className="form-group mb-2 col-md-4">
                                        <label htmlFor="brand" className="mb-3">Brand:</label>
                                        <input className="form-control" name="brand" type="text" id="brand" onChange={handlChange} value={productInput.brand}/>
                                    </div>



                                    <div className="form-group mb-2 col-md-8">
                                        <label htmlFor="image" className="mb-3">Image:</label>
                                        <input className="form-control" name="image" type="file" id="image" onChange={handlFile} ref={fileRef}  />
                                    </div>

                                    <div className="form-group form-check col-md-3 mt-3 mx-3">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" name="status" onChange={handlChange} checked={productInput.status}/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">visible</label>
                                    </div>




                                </div>
                            </div>
                            <div className="form-group mr-3 mt-3 " style={{ overflow: "hidden" }}>

                                <input type="submit" className="btn btn-primary float-end " value={"add product"} />

                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default AddProduct
