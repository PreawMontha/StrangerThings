import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About =() => {
    return (
        <div className='bg-5'>
            <Header />
            <div className="col-md-5 col-sm-6 container-fluid">
                <h1 className='mt-4 text-center bg-light' style={{fontSize: 50}}>About Me</h1>
                <div className="row">
                <h5 className="text-center bg-secondary text-light">Montha Aomngam</h5>
                <img className="img-fluid col-md-6 img-thumbnail" src="/images/Profile.jpg" alt=""/>
                <div className="col-6 bg-light">
                    <p className="title text-dark mt-3">Group : 700</p>
                    <p className="title text-dark">Student ID : 6321602965 </p>
                    <p className="title text-dark">Email : montha.a@ku.th</p>
                    <img src='https://s11.favim.com/orig/7/772/7723/77238/lucas-stranger-things-3-max-Favim.com-7723816.gif' width={300} height={300}></img>
                </div>
                </div>
            </div>
            <br />
        <Footer Company = "Kasetsart University" Email = "montha.a@ku.th"/>
        </div>
    )
}

export default About;
