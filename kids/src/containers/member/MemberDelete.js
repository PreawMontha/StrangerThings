import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberList from "../../components/member/MemberList";
import{ connect } from "react-redux";
import { memberDelete, membersFetch } from "../../actions";

class MemberDelete extends Component {
    
    constructor(props) {
        super(props);
        this.delMember=this.delMember.bind(this);
    }

componentDidMount() {
    this.props.membersFetch();
}

delMember(member){
    this.props.memberDelete(member.id);
}
   
render () {
    return (
        <div className="bg-3">
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                </div>
                {this.props.members && Array.isArray(this.props.members) &&
                <MemberList members={this.props.members}
                    onDelMember={this.delMember}
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
  
  export default connect(mapStateToProps, {  membersFetch , memberDelete}) (MemberDelete);