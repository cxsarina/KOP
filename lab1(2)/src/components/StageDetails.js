import React from 'react';

const StageDetails = ({ selectedStage }) => {
    if (!selectedStage) {
        return <p>Оберіть етап, щоб переглянути деталі.</p>;
    }

    return (
        <div
            style={{
                color: 'rgb(0,0,0)',
                marginTop: '20px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                textAlign: 'center',
                backgroundColor: 'rgb(172,218,181)',
                padding: '10px',
            }}
        >
            <h2>{selectedStage.title}</h2>
            <p>{selectedStage.description}</p>
        </div>
    );
};

export default StageDetails;
