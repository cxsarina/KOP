import React, {useState, useEffect} from 'react';
import useElementSize from './hooks/useElementSize';
import Figure from './components/Figure';

function App() {
    const [rectRef, rectSize, setRectSize] = useElementSize();
    const [circleRef, circleSize, setCircleSize] = useElementSize();

    const [manualRectSize, setManualRectSize] = useState({
        width: rectSize.width,
        height: rectSize.height,
    });
    const [manualCircleSize, setManualCircleSize] = useState({
        width: circleSize.width,
        height: circleSize.height,
    });

    useEffect(() => {
        if (rectRef.current) {
            rectRef.current.style.width = `${manualRectSize.width}px`;
            rectRef.current.style.height = `${manualRectSize.height}px`;
            setRectSize({width: manualRectSize.width, height: manualRectSize.height});
        }
    }, [manualRectSize, setRectSize, rectRef]);

    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.style.width = `${manualCircleSize.width}px`;
            circleRef.current.style.height = `${manualCircleSize.height}px`;
            setCircleSize({width: manualCircleSize.width, height: manualCircleSize.height});
        }
    }, [manualCircleSize, setCircleSize, circleRef]);

    return (
        <div>
            <Figure
                refElement={rectRef}
                size={rectSize}
                manualSize={manualRectSize}
                setManualSize={setManualRectSize}
                label="Прямокутник:"
                style={{backgroundColor: 'lightblue', border: '2px solid black'}}
            />
            <Figure
                refElement={circleRef}
                size={circleSize}
                manualSize={manualCircleSize}
                setManualSize={setManualCircleSize}
                label="Коло:"
                style={{
                    backgroundColor: 'pink',
                    border: '2px solid black',
                    borderRadius: '50%',
                }}
            />
        </div>
    );
}

export default App;