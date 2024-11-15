import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import NameSurname from './components/NameSurname';
import FavoriteTech from "./components/FavoriteTech";
import './App.css';
import Team from "./components/Team";
import TechToLearn from "./components/TechToLearn";
import TechLevel from "./components/TechLevel";

function App() {
    const methods = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    const techOptions = ["JS", "TS", "React", "Vue", "Angular", "NodeJS", "SAP Fiori", "React Native", "Flutter"];
    const interested = ["develop presentations","develop DX8","develop complex app","develop hybrid react-native","develop internal small project","develop pet-projects","research for frontend competence center"];
    return (
        <div className="App">
            <h1>Tech skills / Activity</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <NameSurname/>
                    <Team/>
                    <FavoriteTech/>
                    <TechToLearn techOptions={techOptions} label="I want to learn tech (JS)"/>
                    <TechLevel/>
                    <TechToLearn techOptions={interested} label="I'm interested to"/>
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>
        </div>
    );
}

export default App;
