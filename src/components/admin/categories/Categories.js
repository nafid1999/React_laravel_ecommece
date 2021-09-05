import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

const Categories = () => {
    /**
     * states
     */
    const [categoryInput, setcategoryInput] = useState({
        name: "",
        slug: '',
        description: '',
        metaTitle: '',
        metaKeywords: '',
        metaDesc: '',
    })
    const [errors, setErrors] = useState('');
    const [isLoading, setLoading] = useState(false);
/**
 * util methodes
 */
    const resetFields = () => {
        setcategoryInput({
            name: "",
            slug: '',
            desc: '',
            metaTitle: '',
            metaKeywords: '',
            metaDesc: '',
        })
    }

    /**
     * 
     * events handler
     */


    const handleClick = () => setLoading(true);

    const handlChange = (e) => {
        setcategoryInput({ ...categoryInput, [e.target.name]: e.target.value })
    }

    const handlSubmit = (e) => {
        e.preventDefault()
        axios.post("/api/category/create", { ...categoryInput }).then(res => {

            if (res.data.status === 200) {
                setErrors('');
                resetFields();
                setLoading(false)
                swal("Success", res.data.message, "success");

            } else if (res.data.status === 403) {
                setLoading(false)
                console.log("error")
                setErrors(res.data.message.name)

            }
        }).catch((err) => {
            console.log(err)
            setLoading(false)

        });

    }

    return (

        <div className="container-fluid px-4  ">
            {categoryInput.desc}
            <h1 className="mt-4 ">Add Categorie</h1>
            <div className="col-md-8 mt-4 ">
                {
                    errors &&
                    <div className="alert alert-danger">{errors}</div>

                }
                <form onSubmit={handlSubmit} className="">
                    <ul className="nav nav-pills mb-3 bg-white" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add categorie</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="seo-tag-tab" data-bs-toggle="tab" data-bs-target="#seo-tag" type="button" role="tab" aria-controls="seo-tag" aria-selected="false">SEO tags</button>
                        </li>
                    </ul>
                    <div className="tab-content bg-white px-4 py-2 " id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"  >

                            <div className="form-group mb-2">
                                <label htmlFor="name" className="mb-3">Name:</label>
                                <input className="form-control" name="name" type="text" id="name" onChange={handlChange} value={categoryInput.name} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="slug" className="mb-3">slug:</label>
                                <input className="form-control" name="slug" type="text" id="slug" onChange={handlChange} value={categoryInput.slug} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="desc" className="mb-3">description:</label>
                                <textarea name="description" className="form-control" id="desc" onChange={handlChange} value={categoryInput.desc} />
                            </div>

                            <div className="form-group mb-2 " style={{ overflow: "hidden" }} >
                                {
                                    isLoading ?
                                        <input type="submit" className="btn btn-primary float-end " value={'Loading...'} onClick={handleClick} />
                                        :
                                        <input type="submit" className="btn btn-primary float-end " value={"add category"} onClick={handleClick} />

                                }
                            </div>


                        </div>
                        <div className="tab-pane fade" id="seo-tag" role="tabpanel" aria-labelledby="seo-tag-tab">

                            <div className="form-group mb-2">
                                <label htmlFor="meta-title" className="mb-3">Meta title:</label>
                                <input className="form-control" name="metaTitle" type="text" id="meta-title" onChange={handlChange} value={categoryInput.metaTitle} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="meta-keywords" className="mb-3">Meta Keywords:</label>
                                <input className="form-control" name="metaKeywords" type="text" id="meta-keywords" onChange={handlChange} value={categoryInput.metaKeywords} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="meta-desc" className="mb-3">Meta Description:</label>
                                <textarea name="metaDesc" className="form-control" id="meta-desc" onChange={handlChange} value={categoryInput.metaDesc} />
                            </div>

                            <div className="form-group mr-3 " style={{ overflow: "hidden" }}>
                                {
                                    isLoading ?
                                        <input className="btn btn-primary float-end " value={'Loading...'} onClick={handleClick} />
                                        :
                                        <input type="submit" className="btn btn-primary float-end " value={"add category"} onClick={handleClick} />

                                }
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Categories
