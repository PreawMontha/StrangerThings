import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberList from "../../components/member/MemberList";
import{ connect } from "react-redux";
import { membersFetch } from "../../actions";

class MemberEd extends Component {
    constructor(props) {
        super(props);
        this.editMember=this.editMember.bind(this);
    }

componentDidMount() {
    this.props.membersFetch();
}

editMember(member) {
    this.props.history.push('members/edit/' + member.id);

}
   
render () {
    return (
        <div className="bg-4">
            <Header />
            <div className="container-fluid mt-3">
                <div className="row">
                </div>
                {this.props.members && Array.isArray(this.props.members) &&
                <MemberList members={this.props.members}
                    onEditMember={this.editMember}
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
  
  export default connect(mapStateToProps, { membersFetch }) (MemberEd);
