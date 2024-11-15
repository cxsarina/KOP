import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import NameSurname from './components/NameSurname';
import FavoriteTech from "./components/FavoriteTech";
import './App.css';

function App() {
    const methods = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="App">
            <h1>Tech skills / Activity</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <NameSurname />
                    <FavoriteTech />
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>
        </div>
    );
}

export default App;
