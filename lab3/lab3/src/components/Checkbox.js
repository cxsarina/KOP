import React from 'react';
import { useFormContext } from 'react-hook-form';

function Checkbox({ techOptions, label }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="form-group">
            <label>{label} *</label>
            {techOptions.map((tech) => (
                <div key={tech}>
                    <input type="checkbox" id={tech} value={tech} {...register("techToLearn", { required: "Це обов'язкове питання." })} />
                    <label htmlFor={tech}>{tech}</label>
                </div>
            ))}
            <div>
                <input type="checkbox" id="otherTech" value="Other" {...register("techToLearn", { required: "Це обов'язкове питання." })} />
                <label htmlFor="otherTech">Друге:</label>
                <input type="text" id="otherTechText" {...register("otherTechText")} />
            </div>
            {errors.techToLearn && <span className="error">{errors.techToLearn.message}</span>}
        </div>
    );
}

export default Checkbox;
