import React from 'react'
import { Link } from 'react-router-dom'

export default function Home()
{
    const img1 = "https://loremflickr.com/1300/500/library"
    const img2 = "https://loremflickr.com/1300/500/books"
    const img3 = "https://loremflickr.com/1300/500/library,books"
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="jumbotron col-12 ml-auto mr-auto m-3 w-50">
                <h1 className="display-4">Library Management System</h1>
                <p className="lead">By this web application, we manage our library</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <Link className="btn btn-success btn-lg" id="sgnup" to="/signup" role="button">Sign Up</Link>
            </div>
        </>
    )
}
