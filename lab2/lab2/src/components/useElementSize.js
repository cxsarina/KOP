import {useState, useEffect, useRef} from 'react';

const useElementSize = () => {
    const [size, setSize] = useState({width: 0, height: 0});
    const elementRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            if (elementRef.current) {
                setSize({width: elementRef.current.offsetWidth, height: elementRef.current.offsetHeight,});
            }
        };
        if (elementRef.current) {
            handleResize();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return [elementRef, size, setSize];
};
export default useElementSize;