import React, { useEffect } from 'react'
import './OpeningPage.css'

// Importing icons for the subjects
import management from '../../assets/navbar-icons/management.svg'
import checkList from '../../assets/navbar-icons/check-list.svg'
import medicalKit from '../../assets/navbar-icons/medical-kit.svg'
import connectionSignal from '../../assets/navbar-icons/connection-signal.svg'
import megaphone from '../../assets/navbar-icons/megaphone.svg'
import assessment from '../../assets/navbar-icons/assessment.svg'
import chat from '../../assets/navbar-icons/chat-help.svg'

// Subjects array holding information about each subject's icon, color, and border color
const subjects = [
    {
        id: 1,
        icon: management,
        color: "#10214c",
        border: "#091229"
    },
    {
        id: 2,
        icon: checkList,
        color: "#1a3b70",
        border: "#12294e"
    },
    {
        id: 3,
        icon: medicalKit,
        color: "#2c599d",
        border: "#224578"
    },
    {
        id: 4,
        icon: connectionSignal,
        color: "#5c84c3",
        border: "#3d65a5"
    },
    {
        id: 5,
        icon: megaphone,
        color: "#f78023",
        border: "#ea6908"
    },
    {
        id: 6,
        icon: assessment,
        color: "#fb9b51",
        border: "#fb8831"
    }
]

export default function OpeningPage() {

    // Function to handle the button click
    const handleClick = (page, link) => {
        localStorage.setItem('data', JSON.stringify(page));    // Store the page data in localStorage
        window.location.replace(link);                         // Redirect to the given link
    }

    // useEffect hook to clear the localStorage data when the component mounts
    useEffect(() => {
        localStorage.removeItem('data');
        localStorage.removeItem('currentPage');
    }, []);

    return (
        <div className='home-page'>
            <div className='home-page-subjects'>
                {/* Circle and triangle layout for the first subject area */}
                <div className='subjects-circle-1'>
                    <div className='subjects-triangle'>
                        <div className='subject-title-container-1'>

                            {/* Subtitle for the first section */}
                            <div className='subtitle-line-container'>
                                <div className='subtitle-line'></div>
                                <div className='subject-subtitle1'>לומדת ניהול</div>
                                <div className='subtitle-line'></div>
                            </div>

                            {/* Main title of the first section */}
                            <div className='subject-title1'>אירוע הרס רפואי</div>

                            {/* Buttons for navigating to different pages */}
                            <button className='home-button' onClick={() => handleClick(1, '/page1')}>לומדה</button>
                            <button className='home-button' onClick={() => handleClick(2, '/subjectsPage')}>רענון</button>
                        </div>
                    </div>

                    {/* Circle container for the icons */}
                    <div className='subjects-circle-2'>
                        <section className="main-container">
                            <div className="big-circle">
                                {
                                    // Mapping through the subjects array to display icons dynamically
                                    subjects.map((element, index) => (
                                        <div className="icon-block" key={index} style={{ backgroundColor: element.color, borderColor: element.border }}>
                                            <img src={element.icon} />
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Small circle with a chat icon */}
                            <div className='small-circle'>
                                <img src={chat} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
