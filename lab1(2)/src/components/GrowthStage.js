import React from 'react';

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

export default GrowthStage;