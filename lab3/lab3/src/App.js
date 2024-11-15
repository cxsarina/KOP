import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import TextInput from './components/TextInput';
import FavoriteTech from './components/FavoriteTech';
import Checkbox from './components/Checkbox';
import TechLevel from './components/TechLevel';
import YesNoQuestion from './components/YesNoQuestion';
import './App.css';

function App() {
    const methods = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log(data);
    };

    const techOptions = ["JS", "TS", "React", "Vue", "Angular", "NodeJS", "SAP Fiori", "React Native", "Flutter"];
    const interested = ["develop presentations", "develop DX8", "develop complex app", "develop hybrid react-native", "develop internal small project", "develop pet-projects", "research for frontend competence center"];
    const topic = ["Global technology overview", "Analytic and architecture topics", "Technology battle", "Anthill edetailer (internal stuff)", "Anthill DX8 (internal stuff)", "Pet projects discussions and showing"];

    return (
        <div className="App">
            <h1>Tech skills / Activity</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <TextInput label="Name, Surname" id="nameSurname"/>
                    <TextInput label="Your team" id="team"/>
                    <FavoriteTech/>
                    <Checkbox techOptions={techOptions} label="I want to learn tech (JS)" id="techToLearn"/>
                    <TechLevel/>
                    <Checkbox techOptions={interested} label="I'm interested to" id="interested"/>
                    <TextInput label="#1 My goals on next time" id="goals1" description="Let's prepare 3 goals for your and delivery future growth. You can check those goals in next 3 month. Example: want to create prject with react, redux, saga, rest in next 3month. Project should contain 10+ complex components, routing..."/>
                    <TextInput label="#2 My goals on next time" id="goals2"/>
                    <TextInput label="#3 My goals on next time" id="goals3"/>
                    <YesNoQuestion label="I want to work on new PreSales, MVP, POC or new projects" id="wantWork" description="For future planning we want to know if it is interested for you"/>
                    <YesNoQuestion label="I want to speak on FCC meetup or other meetups" id="wantSpeak" description="We want to check if we should come back internal FCC team meetups."/>
                    <Checkbox techOptions={topic} label="My topic in FCC" id="topic" description="We want to check if we should come back internal FCC team meetups."/>
                    <YesNoQuestion label="I want to visit FCC meetup" id="meetup"/>
                    <TextInput label="My idea of how to improve our work" id="idea" description="You can propose everything that you want. Doesn't matter your delivery / team"/>
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>
        </div>
    );
}

export default App;

