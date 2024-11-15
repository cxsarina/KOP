import React from 'react';
import { useFormContext } from 'react-hook-form';

function TextInput({ label, id, description }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="form-group">
            <label htmlFor={id}>{label} *</label>
            {description && <p className="description">{description}</p>}
            <input
                type="text"
                id={id}
                {...register(id, { required: "Це обов'язкове питання." })}
            />
            {errors[id] && <span className="error">{errors[id].message}</span>}

        </div>
    );
}

export default TextInput;

