import React, { useEffect, useState } from 'react'

export default function Route({ path, children }) {

    // state to ttrach URL and force component to re-render on change
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // define callback as seprate function so it can be removed later with cleanup function
        const onLocationChange = () => {
            console.log("Location Change");
            // update path state to current window URL
            setCurrentPath(window.location.pathname);
        }

        // listen for popstate event
        window.addEventListener('popstate', onLocationChange);

        // clean up event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    return currentPath === path ? children : null;
}
