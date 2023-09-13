import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";


const NotFound =() => {
return (
        <div className="">
            <Header />
            <div className="container col-md-8 text-center">
                <h1 className="tle mb-3 text-danger" style={{fontSize: 120}}>404</h1>
                <h2 className="mb-4">Not Found</h2>
                <p className="title mb-5">Sorry, the page you were looking for could not be found</p>
                <Link className="text-light" to="/"><button className="btn btn-success"> back to main page </button></Link>
            </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer Company = "Kasetsart University" Email="montha.a@ku.th"/> 
        </div>
    )
}

export default NotFound;