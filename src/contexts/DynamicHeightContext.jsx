
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for dynamic height
const DynamicHeightContext = createContext();

// Custom hook to use the dynamic height context
export const useDynamicHeight = () => {
    return useContext(DynamicHeightContext);
};

// Global provider component that provides the dynamic height context
export const DynamicHeightProvider = ({ children }) => {
    const [height, setHeight] = useState(window.innerHeight);

    const updateHeight = () => {
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    useEffect(() => {
        // Update the CSS variable when height changes
        document.documentElement.style.setProperty('--dynamic-height', `${height}px`);
        console.log(height)
    }, [height])

    return (
        <DynamicHeightContext.Provider value={height}>
            {children}
        </DynamicHeightContext.Provider>
    );
};

// ### Explanation:
// - *DynamicHeightContext*: The context holds the dynamic height value and makes it available to any component that subscribes to it.
// - *useDynamicHeight*: This custom hook allows components to consume the context and access the dynamic height.
// - *DynamicHeightProvider*: This component listens for window resizing and updates the height state, providing this value to the rest of the app via context.
