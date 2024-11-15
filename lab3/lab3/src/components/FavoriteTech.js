import React from 'react';
import { useFormContext } from 'react-hook-form';

function FavoriteTech() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={`form-group ${errors.favoriteTech ? 'error-border' : ''}`}>
            <label className="mainlabel">My favorite tech (best) *
                {errors.favoriteTech && <span className="error">{errors.favoriteTech.message}</span>}
            </label>
            <div>
                <input type="radio" id="vue" value="Vue" {...register("favoriteTech")} />
                <label htmlFor="vue">Vue</label>
            </div>
            <div>
                <input type="radio" id="react" value="React" {...register("favoriteTech")} />
                <label htmlFor="react">React</label>
            </div>
            <div>
                <input type="radio" id="angular" value="Angular" {...register("favoriteTech")} />
                <label htmlFor="angular">Angular</label>
            </div>
            <div>
                <input type="radio" id="nodejs" value="NodeJS" {...register("favoriteTech")} />
                <label htmlFor="nodejs">NodeJS</label>
            </div>
            <div>
                <input type="radio" id="sapfiori" value="SAP Fiori" {...register("favoriteTech")} />
                <label htmlFor="sapfiori">SAP Fiori</label>
            </div>
            <div>
                <input type="radio" id="other" value="Other" {...register("favoriteTech")} />
                <label htmlFor="other">Друге:</label>
                <input type="text" id="otherText" {...register("otherText")} />
            </div>
        </div>
    );
}

export default FavoriteTech;

