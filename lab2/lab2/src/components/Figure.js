import React from 'react';

function Figure({refElement, size, manualSize, setManualSize, label, style}) {
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setManualSize((prevSize) => ({
            ...prevSize,
            [name]: parseInt(value, 10) || 0,
        }));
    };

    return (
        <div>
            <div ref={refElement} style={style}>{label}</div>
            <p>Ширина: {size.width}px</p>
            <p>Висота: {size.height}px</p>
            <div>
                <label>
                    Ширина (px):
                    <input
                        type="number"
                        name="width"
                        value={manualSize.width}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Висота (px):
                    <input
                        type="number"
                        name="height"
                        value={manualSize.height}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
        </div>
    );
}

export default Figure;