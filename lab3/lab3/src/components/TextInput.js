import React from 'react';
import { useFormContext } from 'react-hook-form';

function TextInput({ label, id, description }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={`form-group ${errors[id] ? 'error-border' : ''}`}>
            <label className="mainlabel" htmlFor={id}>{label} *
                {errors[id] && <span className="error">{errors[id].message}</span>}
            </label>
            {description && <p className="description">{description}</p>}
            <input
                type="text"
                id={id}
                {...register(id, { required: "Це обов'язкове питання." })}
            />
        </div>
    );
}

export default TextInput;


