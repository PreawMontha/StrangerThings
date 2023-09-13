import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberList from "../../components/member/MemberList";
import{ connect } from "react-redux";
import { membersFetch } from "../../actions";

class Member extends Component {
    
    constructor(props) {
        super(props);
    }

componentDidMount() {
    this.props.membersFetch();
}

render () {
    return (
        <div className="bg-2">
            <Header />
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="mt-3">
                                <h1 className="text-light">Member<button className="btn btn-warning title float-end" onClick={() => this.props.history.push('members/add')}>Add</button></h1>
                            </div>
                        </div>
                        {this.props.members && Array.isArray(this.props.members) &&
                        <MemberList members={this.props.members}
                        />}
            </div>
            <Footer Company = "Kasetsart University" Email="montha.a@ku.th"/> 
            </div>
        )
    }
}


function mapStateToProps({members}){
    return { members };
  }
  
  export default connect(mapStateToProps, { membersFetch }) (Member);