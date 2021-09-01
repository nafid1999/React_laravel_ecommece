import React from 'react'

const Categories = () => {

    const [categoryInput, setcategoryInput] = useState({
        name:"",
        slug:'',
        desc:'',
        metaTitle:'',
        metaKeyword:'',
        metaDesc:'',

    })

    /**
     * 
     * events handler
     */

    const handlSubmit=(e)=>{
         e.preventDefault()

    }

    return (
        <div className="container-fluid px-4  ">
            <h1 className="mt-4">Add Categorie</h1>
            <div className="col-md-8 mt-4 ">
                <form onSubmit={handlSubmit}>
                    <ul className="nav nav-pills mb-3 bg-white" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add categorie</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="seo-tag-tab" data-bs-toggle="tab" data-bs-target="#seo-tag" type="button" role="tab" aria-controls="seo-tag" aria-selected="false">SEO tags</button>
                        </li>
                    </ul>
                    <div className="tab-content bg-white px-4 py-2 " id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                            <div className="form-group mb-2">
                                <label forHtml="name" className="mb-3">Name:</label>
                                <input className="form-control" name="name" type="text" id="name" />
                            </div>

                            <div className="form-group mb-2">
                                <label forHtml="slug" className="mb-3">slug:</label>
                                <input className="form-control" name="slug" type="text" id="slug" />
                            </div>

                            <div className="form-group mb-2">
                                <label forHtml="desc" className="mb-3">description:</label>
                                <textarea name="desc" className="form-control" id="desc"></textarea>
                            </div>

                            <div className="form-group mb-2 ">
                                <input className="btn btn-primary  " value="submit" />
                            </div>


                        </div>
                        <div className="tab-pane fade" id="seo-tag" role="tabpanel" aria-labelledby="seo-tag-tab">

                            <div className="form-group mb-2">
                                <label forHtml="meta-title" className="mb-3">Meta title:</label>
                                <input className="form-control" name="meta-title" type="text" id="meta-title" />
                            </div>

                            <div className="form-group mb-2">
                                <label forHtml="meta-keywords" className="mb-3">Meta Keywords:</label>
                                <input className="form-control" name="meta-keywords" type="text" id="meta-keywords" />
                            </div>

                            <div className="form-group mb-2">
                                <label forHtml="meta-desc" className="mb-3">Meta Description:</label>
                                <textarea name="meta-desc" className="form-control" id="meta-desc"></textarea>
                            </div>

                            <div className="form-group mr-3">
                                <input className="btn btn-primary " value="submit" />
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Categories
