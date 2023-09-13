import React, { Component } from "react";

class MemberItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {FirstName, LastName,thumbnail} = this.props.member; 
        return (
            <div className="col-md-3 col-sm-6 container-fluid">
                <h5 className="mt-2 text-center text-light bg-secondary">{FirstName} {LastName}</h5>
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="" ></img>

                {this.props.onEditMember &&
                <button className="btn btn-block tak2 btn-primary title mt-2 container-fluid text-light" onClick={() => this.props.onEditMember(this.props.member)}>
                    Edit
                </button>
                }

                {this.props.onDelMember && 
                <button className="btn btn-block tak3 btn-danger title mt-2 container-fluid" onClick={() => this.props.onDelMember(this.props.member)}>
                    Delete
                </button>
                }
                <br />
                <br />
            </div>
        )
    }
}

export default MemberItem;
