import React from 'react';
import { useFormContext } from 'react-hook-form';

function Checkbox({ techOptions, label, description, id }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={`form-group ${errors[id] ? 'error-border' : ''}`}>
            <label className="mainlabel">{label} *
                {errors[id] && <span className="error">{errors[id].message}</span>}
            </label>
            {description &&
                <p className="description">{description}</p>}
            {techOptions.map((tech) => (
                <div key={tech}>
                    <input type="checkbox" id={tech} value={tech} {...register(id)} />
                    <label htmlFor={tech}>{tech}</label>
                </div>
            ))}
            <div>
                <input type="checkbox" id="otherTech" value="Other" {...register(id)} />
                <label htmlFor="otherTech">Друге:</label>
                <input type="text" id="otherTechText" {...register("otherTechText")} />
            </div>
        </div>
    );
}

export default Checkbox;
