
import React, { useEffect, useState } from 'react'

export default function FullScreen() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Function to detect mobile devices
    const checkIfMobile = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // Function to enter full-screen mode
    const enterFullScreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        setIsFullScreen(true);
    };

    // Function to exit full-screen mode
    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullScreen(false);
    };

    // Check if the device is mobile and update on resize
    useEffect(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div>
            {isMobile && (
                <button onClick={isFullScreen ? exitFullScreen : enterFullScreen}>
                    {isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen'}
                </button>
            )}
        </div>
    )
}
