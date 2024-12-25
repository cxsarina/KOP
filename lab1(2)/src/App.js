import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import seedImage from './images/1.png';
import sproutImage from './images/2.png';
import leafImage from './images/3.png';
import budImage from './images/4.png';
import bloomImage from './images/5.png';
const GrowthStage = ({ stage, isSelected, onSelect }) => {
  return (
      <div
          onClick={() => onSelect(stage)}
          style={{
            cursor: 'pointer',
            padding: '10px',
          }}
      >
          <img
              src={stage.image}
              alt={stage.title}
              style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '100%', marginBottom: '10px' }}
          />
      </div>
  );
};
const StageDetails = ({ selectedStage }) => {
  if (!selectedStage) {
    return <p>Оберіть етап, щоб переглянути деталі.</p>;
  }

  return (
      <div style={{
          color: 'rgb(0,0,0)',
          marginTop: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          textAlign: 'center',
          backgroundColor: "rgb(172,218,181)",
          padding: '10px'
      }}
      >
        <h2>{selectedStage.title}</h2>
        <p>{selectedStage.description}</p>
      </div>
  );
};
const GrowthTimeline = ({ stages }) => {
  const [selectedStage, setSelectedStage] = useState(null);
  const handleSelectStage = (stage) => {
    setSelectedStage(stage);
  };
  return (
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'rgba(20,68,44,0.73)' }}>
        <h1>Таймлайн росту квітки</h1>
        <div style={{ display: 'flex', alignItems: 'center', color: 'rgb(0,0,0)' }}>
          {stages.map((stage, index) => (
              <React.Fragment key={stage.id}>
                <GrowthStage
                    stage={stage}
                    isSelected={selectedStage?.id === stage.id}
                    onSelect={handleSelectStage}
                />
                {index < stages.length - 1 && (
                    <div style={{ margin: '0 10px' }}>
                      <span style={{ fontSize: '24px' }}>→</span>
                    </div>
                )}
              </React.Fragment>
          ))}
        </div>
        <StageDetails selectedStage={selectedStage} />
      </div>
  );
};
const stages = [
  { id: 1, image: seedImage, title: 'Посадка насіння',  description: 'Посадка насіння у вологий ґрунт.' },
  { id: 2, image: sproutImage, title: 'Паросток', description: 'Насіння проросло і з’явився перший паросток.' },
  { id: 3, image: leafImage, title: 'Формування листя', description: 'Квітка росте, з’являються перші листочки.' },
  { id: 4, image: budImage, title: 'Бутонізація', description: 'З’являється бутон, готовий до розквіту.' },
  { id: 5, image: bloomImage, title: 'Розквіт', description: 'Бутон розкривається, квітка повністю виросла.' },
];
const App = () => {
  return <GrowthTimeline stages={stages} />;
};
export default App;
