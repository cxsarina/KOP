import React from 'react';
import { useFormContext } from 'react-hook-form';

function FavoriteTech() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="form-group">
            <label>My favorite tech (best) *</label>
            <div>
                <input type="radio" id="vue" value="Vue" {...register("favoriteTech", { required: "Це обов'язкове питання." })} />
                <label htmlFor="vue">Vue</label>
            </div>
            <div>
                <input type="radio" id="react" value="React" {...register("favoriteTech", { required: "Це обов'язкове питання." })} />
                <label htmlFor="react">React</label>
            </div>
            <div>
                <input type="radio" id="angular" value="Angular" {...register("favoriteTech", { required: "Це обов'язкове питання." })} />
                <label htmlFor="angular">Angular</label>
            </div>
            <div>
                <input type="radio" id="nodejs" value="NodeJS" {...register("favoriteTech", { required: "Це обов'язкове питання." })} />
                <label htmlFor="nodejs">NodeJS</label>
            </div>
            <div>
                <input type="radio" id="sapfiori" value="SAP Fiori" {...register("favoriteTech", { required: "Це обов'язкове питання." })} />
                <label htmlFor="sapfiori">SAP Fiori</label>
            </div>
            <div>
                <input type="radio" id="other" value="Other" {...register("favoriteTech", { required: "Це обов'язкове питання." })} />
                <label htmlFor="other">Друге:</label>
                <input type="text" id="otherText" {...register("otherText")} />
            </div>
            {errors.favoriteTech && <span className="error">{errors.favoriteTech.message}</span>}
        </div>
    );
}

export default FavoriteTech;
