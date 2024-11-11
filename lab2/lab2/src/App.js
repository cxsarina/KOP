import React, {useState, useEffect} from 'react';
import useElementSize from './components/useElementSize';

function App() {
    const [elementRef, size, setSize] = useElementSize();
    const [manualSize, setManualSize] = useState({width: size.width, height: size.height});
    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.style.width = `${manualSize.width}px`;
            elementRef.current.style.height = `${manualSize.height}px`;
            setSize({width: manualSize.width, height: manualSize.height});
        }
    }, [manualSize, setSize, elementRef]);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setManualSize((prevSize) => ({...prevSize, [name]: parseInt(value, 10) || 0,}));
    };
    return (<div>
        <div ref={elementRef} style={{backgroundColor: 'lightblue'}}> Слідкуй за зміною розмірів цього елемента.</div>
        <p>Ширина: {size.width}px</p> <p>Висота: {size.height}px</p>
        <div><label> Ширина (px): <input type="number" name="width" value={manualSize.width}
                                         onChange={handleInputChange}/> </label> <label> Висота (px): <input
            type="number" name="height" value={manualSize.height} onChange={handleInputChange}/> </label></div>
    </div>);
}

export default App;