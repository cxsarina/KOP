import React from 'react';
import { useFormContext } from 'react-hook-form';

const techList = [
    'JS', 'TS', 'React', 'Vue', 'Angular', 'NodeJS', 'GraphQL',
    'Wordpress', 'Drupal', 'Python', 'REST', 'Other', 'React Native', 'Flutter'
];

const levels = ['Not relevant', 'Trainee', 'Junior', 'Middle', 'Senior', 'Expert'];

function TechLevel() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="form-group">
            <label className="mainlabel">My current level on tech *
                {Object.keys(errors).length > 0 && (
                    <div className="error">
                        Це обов'язкове питання.
                    </div>
                )}
            </label>
            <table>
                <thead>
                <tr>
                    <th>Technology</th>
                    {levels.map(level => (
                        <th key={level}>{level}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {techList.map(tech => (
                    <tr key={tech}>
                        <td>{tech}</td>
                        {levels.map(level => (
                            <td key={level}>
                                <input
                                    type="radio"
                                    name={tech}
                                    value={level}
                                    {...register(tech, { required: "Це обов'язкове питання." })}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TechLevel;


