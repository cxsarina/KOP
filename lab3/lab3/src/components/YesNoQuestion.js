import React from 'react';
import {useFormContext} from 'react-hook-form';

function YesNoQuestion({label, description, id}) {
    const {register, formState: {errors}} = useFormContext();
    return (<div className="form-group">
        <label>{label} *</label>
        {description &&
            <p className="description">{description}</p>}
        <div>
            <input type="radio" id={`${id}-yes`}
                    value="yes" {...register(id, {required: "Це обов'язкове питання."})} /> <label
            htmlFor={`${id}-yes`}>yes</label>
        </div>
        <div>
            <input type="radio" id={`${id}-no`} value="no" {...register(id, {required: "Це обов'язкове питання."})} />
            <label htmlFor={`${id}-no`}>no</label></div>
        {errors[id] && <span className="error">{errors[id].message}</span>}
    </div>);
}

export default YesNoQuestion;