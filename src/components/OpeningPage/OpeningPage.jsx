import React, { useEffect } from 'react'
import './OpeningPage.css'
import Link from '../Link'

import management from '../../assets/navbar-icons/management.svg'
import checkList from '../../assets/navbar-icons/check-list.svg'
import medicalKit from '../../assets/navbar-icons/medical-kit.svg'
import connectionSignal from '../../assets/navbar-icons/connection-signal.svg'
import megaphone from '../../assets/navbar-icons/megaphone.svg'
import assessment from '../../assets/navbar-icons/assessment.svg'
import chat from '../../assets/navbar-icons/chat-help.svg'

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

    const handleClick = (page, link) => {
        localStorage.setItem('data', JSON.stringify(page));
        window.location.replace(link);
    }
    
    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <div className='home-page'>
            <div className='subjects-circle-1'>
                <div className='subjects-triangle'>
                    <div className='subject-title-container-1'>
                        <div className='subtitle-line-container'>
                            <div className='subtitle-line'></div>
                            <div className='subject-subtitle1'>לומדת ניהול</div>
                            <div className='subtitle-line'></div>
                        </div>
                        <div className='subject-title1'>אירוע הרס רפואי</div>
                        <button className='home-button' onClick={() => handleClick(1, '/page1')}>לומדה</button>
                        <button className='home-button'onClick={() => handleClick(2, '/subjectsPage')}>רענון</button>
                    </div>
                </div>
                <div className='subjects-circle-2'>
                    <section className="main-container">
                        <div className="big-circle">
                            {
                                subjects.map((element, index) => (
                                    <div className="icon-block" key={index} style={{ backgroundColor: element.color, borderColor: element.border }}>
                                        <img src={element.icon} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='small-circle'>
                            <img src={chat} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
