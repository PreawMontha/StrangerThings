import React, { Component } from "react";

class DetailMember extends Component {
    constructor(props) {
        super(props)
        this.state = { member : null };
    }

    render() {
        const {FirstName, LastName, thumbnail, Phone, Username,Email, Password, Gender, Age, Residence} = this.props.member;
        return(
            <div className="col-md-5 col-sm-6 container-fluid">
                <div className="row">
                <h5 className="mt-3 text-center text-light bg-danger bg-gradient">{FirstName} {LastName}</h5>
                <img className="img-fluid col-md-6 Cbutton" src={thumbnail} alt=""/>
                <div className="col-6 bg-light ">
                    <p className="title mt-4">Username : {Username}</p>
                    <p className="title text-dark">Password : {Password}</p>
                    <p className="title text-dark">Gender : {Gender}</p>
                    <p className="title text-dark">Age : {Age}</p>
                    <p className="title text-dark">Phone : {Phone}</p>
                    <p className="title text-dark">Email : {Email}</p>
                    <p className="title text-dark">Residence : {Residence}</p>
                </div>
                </div>
                <br />
            </div>
        )
    }
}
export default DetailMember;