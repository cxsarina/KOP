import React, { useState } from 'react';
import GrowthStage from './GrowthStage';
import StageDetails from './StageDetails';

const GrowthTimeline = ({ stages }) => {
    const [selectedStage, setSelectedStage] = useState(null);

    const handleSelectStage = (stage) => {
        setSelectedStage(stage);
    };

    return (
        <div
            className="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'rgba(20,68,44,0.73)',
            }}
        >
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

export default GrowthTimeline;
