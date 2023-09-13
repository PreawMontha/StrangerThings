import React, { Component } from "react";
import { connect } from "react-redux";
import { memberCreate, memberUpdate, memberFetch } from "../../actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberForm from "../../components/member/MemberForm";

class MemberEdit extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.memberFetch(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, match, members, memberCreate, memberUpdate } = this.props;

        return (
            <div className="containner-fluid bg-4">
                <Header />
                        <div className="">
                        {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2 className="text-center text-light mt-4">Add</h2>
                            {
                                members.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                {members.msg}
                                </div>
                                )
                            }
                        <MemberForm onMemberSubmit={() => memberCreate (formValues)}/>
                        </div>
                    )}

                    {match.path.indexOf("edit") > 0 &&  (
                         <div>
                         <h2 className="text-center text-light mt-4">Edit</h2>
                         {
                             members.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                {members.msg}
                                </div>
                             )
                         }
                         <MemberForm onMemberSubmit={() => memberUpdate ( members.id, formValues )}/>
                     </div>
                    )}
                    </div>
                    < br />
                <Footer Company = "Kasetsart University" Email="montha.a@ku.th"/> 
            </div>
        );
    }
}


function mapStateToProps( {form, members} ) {
    return { formValues: form.memberForm ? form.memberForm.values : null, members };
}

export default connect(mapStateToProps, {memberCreate, memberUpdate, memberFetch}) (MemberEdit);