import React from 'react';
import GrowthTimeline from './components/GrowthTimeline';
import { stages } from './data';

const App = () => {
    return <GrowthTimeline stages={stages} />;
};

export default App;

