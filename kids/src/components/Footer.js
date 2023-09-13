import React from "react";

const Footer = (props) => {
    const {Company, Email} = props;
    return (
        <div className="container-fluid">
            <div className="text-center title text-uppercase p-3 mb-2 tak ">
                <small>
                <span className="text-light" >  Powered By {Company}</span>  | <span className="text-light">Contract By Email : {Email} </span>
                </small>
            </div>
        </div>
    )
}

export default Footer;
