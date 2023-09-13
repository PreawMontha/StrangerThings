import React from "react";

export default ({ input, label, type, required, meta : { error , touched }}) => {
    return (
        <div className="form-group">
            <label className="title mt-2 text-light" style={{fontSize: 18}}>{label}</label>
            <input className=" title text-light form-control bg-danger" type={type} required={required} placeholder="Enter"  {...input}/>

        {error && touched && 
        (
        <div className="text-warning text-center title">{error}</div>
        )
        }
        </div>
    )
}
   