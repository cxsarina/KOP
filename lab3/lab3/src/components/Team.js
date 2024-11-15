import React from 'react';
import {useFormContext} from 'react-hook-form';

function Team() {
    const {register, formState: {errors}} = useFormContext();
    return (<div className="form-group">
        <label htmlFor="team">Your team *</label>
        <input type="text"
               id="team" {...register("team", {required: "Це обов'язкове питання."})} /> {errors.team &&
        <span className="error">{errors.team.message}</span>} </div>);
}

export default Team;