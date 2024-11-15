import React from 'react';
import { useFormContext } from 'react-hook-form';

function NameSurname() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="form-group">
            <label htmlFor="nameSurname">Name, Surname *</label>
            <input
                type="text"
                id="nameSurname"
                {...register("nameSurname", { required: "Це обов'язкове питання." })}
            />
            {errors.nameSurname && <span className="error">{errors.nameSurname.message}</span>}
        </div>
    );
}

export default NameSurname;
