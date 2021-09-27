import React from 'react'
import NavBaar from '../../layouts/frontend/NavBaar'
import download from "./download.jpg"

const Home = (props) => {
    document.title = "Bouki Shop"

    console.log(props)

    return (
        <div class="container">
        <div className="row ">
        <div className="col-md-7 ">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src={download} class="img-fluid" alt="cccc" />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src={download} class="img-fluid" alt="xxx" />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src={download} class="img-fluid" alt=".gggg" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home
