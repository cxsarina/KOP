import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import TextInput from './components/TextInput';
import FavoriteTech from "./components/FavoriteTech";
import './App.css';
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
                    <TextInput label="Name, Surname" id="nameSurname"/>
                    <TextInput label="Your team" id="team"/>
                    <FavoriteTech/>
                    <TechToLearn techOptions={techOptions} label="I want to learn tech (JS)"/>
                    <TechLevel/>
                    <TechToLearn techOptions={interested} label="I'm interested to"/>
                    <TextInput label="#1 My goals on next time" id="goals1" description="Let's prepare 3 goals for your and delivery future growth. You can check those goals in next 3 month. Example: want to create prject with react, redux, saga, rest in next 3month. Project should contain 10+ complex components, routing..."/>
                    <TextInput label="#2 My goals on next time" id="goals2"/>
                    <TextInput label="#3 My goals on next time" id="goals3"/>
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>
        </div>
    );
}

export default App;
