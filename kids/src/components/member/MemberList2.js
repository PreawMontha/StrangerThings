import React, { Component } from "react";
import DetailMember from "./DetailMember";

class MemberList2 extends Component {

    showMembers() {
            return this.props.members && this.props.members.map(member => (
                <DetailMember key={member.id} member={member} />
            ))
        }

    render() {
        return (
            <div className="row">
                {(this.showMembers())}
            </div>
        );
    }
}

export default MemberList2;