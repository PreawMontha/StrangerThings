import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { connect } from "react-redux";
import { memberFormField } from "./formFields";

class MemberForm extends Component {

    renderFields (formFields) {
        return formFields.map(({name , type, label, required}) => {
            return(
                <Field 
                key={name} 
                label={label} 
                name={name} 
                type={type} 
                component= {FormField} 
                required={required}
                />
            );
        });
    }

    render() {
        const { onMemberSubmit } = this.props;
        return(
            <div className="container-fluid col-6 mt-3 ">
                <form onSubmit={ this.props.handleSubmit(onMemberSubmit) }>
                    {this.renderFields(memberFormField)}
                    <div>
                        <button className="btn btn-block btn-info title container-fluid mt-3" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values) {
const errors = {};
memberFormField.forEach(({ name, required }) => {
    if(!values[name] && required) {
        errors[name] = 'Please fill out this field';
    }
}); 
    return errors;
}

function mapStateToProps({members}){
    if(members && members.id) {
         return { initialValues  : members};
    }else { 
         return{};
    }
}

MemberForm = reduxForm({  validate, form : "memberForm"})(MemberForm); //เช็คว่าข้อความถูกมั้ย ให้แจ้งเตือน

export default connect(mapStateToProps)(MemberForm);