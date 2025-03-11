
import { useState, useEffect } from 'react';

const useVideosLoading = (videoRefs) => {
    const [videosLoaded, setVideosLoaded] = useState(false);
    const [videoCount, setVideoCount] = useState(0);

    useEffect(() => {
        const totalVideos = videoRefs.length;
        if (totalVideos === 0) return;

        const handleVideoLoad = () => {
            setVideoCount(prev => prev + 1);
        };

        // Set up event listeners for each video
        videoRefs.forEach(video => {
            video.addEventListener('canplay', handleVideoLoad);
        });

        return () => {
            // Clean up event listeners
            videoRefs.forEach(video => {
                video.removeEventListener('canplay', handleVideoLoad);
            });
        };
    }, [videoRefs]);

    useEffect(() => {
        if (videoCount === videoRefs.length && videoRefs.length > 0) {
            setVideosLoaded(true);
        }
    }, [videoCount, videoRefs]);

    return videosLoaded;
};

export default useVideosLoading;