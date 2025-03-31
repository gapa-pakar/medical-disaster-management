import React, { useEffect, useState } from 'react'
import Link from '../Link' // Import Link component for navigation

import arrowRight from '../../assets/navbar-icons/arrow-right.svg'
import arrowLeft from '../../assets/navbar-icons/arrow-left.svg'

export default function Navbar(props) {

    const { Subjects, currentSubject, setCurrentSubject, selectedPage, setFinish, setCountPages } = props

    const [showMenu, setShowMenu] = useState(false); // State to toggle the menu visibility

    // Function to toggle the visibility of the menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    // Function to find and set the current subject based on the window's path
    const findCurrentSubject = () => {
        Subjects.forEach(subject => {
            if (window.location.pathname === subject.link) {
                setCurrentSubject(subject);
            } else if (window.location.pathname === subject.subtitleLink) {
                setCurrentSubject(subject);
            }
        });
    }

    // Effect hook to update the current subject when the pathname changes
    useEffect(() => {
        findCurrentSubject();
        setFinish(true);
    }, [window.location.pathname]);

    // Effect hook to store and update the currentPage in localStorage
    useEffect(() => {
        if (currentSubject.id > 0) {                                                            // Ensure currentSubject is valid
            if (localStorage.currentPage) {                                                     // Check if currentPage exists in localStorage
                if (localStorage.currentPage < currentSubject.id) {                             // Update currentPage if necessary
                    localStorage.setItem('currentPage', JSON.stringify(currentSubject.id));
                }
            } else {                                                                            // If no currentPage exists in the local srotage, set it to currentSubject id
                localStorage.setItem('currentPage', JSON.stringify(currentSubject.id));
            }
        }
    }, [currentSubject])


    return (
        <div>
            {/* The title at the top of the page */}
            <div>
                <div className='subject-title-container' style={{ backgroundColor: currentSubject.color }}>
                    <div className='half-circle-container'>
                        <img className='title-icon' src={currentSubject.icon} /> {/* Subject icon */}
                    </div>
                    <div className='subject-title'>{currentSubject.title}</div> {/* Subject title */}
                </div>

                {/* Display subtitle if it exists and path matches */}
                {
                    currentSubject.subtitle && window.location.pathname === currentSubject.subtitleLink ? (
                        <div className='subject-subtitle' id={`subject_${currentSubject.id}`} style={{ backgroundColor: currentSubject.color }}>{currentSubject.subtitle}</div>
                    ) : <></>
                }
            </div>

            {/* Button to open/close the menu */}
            <div>
                {showMenu ? (
                    <img onClick={toggleMenu} src={arrowLeft} className='arrowLeft' /> // Left arrow to close menu
                ) : (
                    <img onClick={toggleMenu} src={arrowRight} className='arrowRight' /> // Right arrow to open menu
                )}
            </div>

            {/* Navbar with menu items */}
            <div className='navbar'>
                <div className='color-line' style={{ backgroundColor: currentSubject.color }}></div>        {/* Color line under the title */}
                <div className={showMenu ? "menu-responsive" : "menu"} onClick={toggleMenu}>                {/* Menu container, toggles based on showMenu state */}
                    <div className={showMenu ? "container-responsive" : "container"}>
                        <div className={showMenu ? "vertical-line-responsive" : "vertical-line"}></div>
                        <div className={showMenu ? "subjects-responsive" : "subjects"}>
                            {
                                Subjects.map((subject) => {
                                    return (
                                        <div key={subject.id} className='menu-titles'>
                                            {/* open menu text link */}
                                            {showMenu ? (<Link setCountPages={setCountPages} href={subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.link : ''} className='title'>{subject.title}
                                                {subject.subtitle ? // Subtitle link
                                                    <Link setCountPages={setCountPages} href={subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.subtitleLink : ''} className='subtitle-link'>
                                                        <p className='subtitle'>{subject.subtitle}</p>
                                                    </Link> : ""}
                                            </Link>) : <></>}

                                            {/* closed menu icons link */}
                                            <Link setCountPages={setCountPages} href={subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.link : ''} disabled><div className='icon-container' style={{ backgroundColor: subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.color : '#a6a6a6' }}>
                                                <img src={subject.icon} className='icon' /> {/* Subject icon */}
                                            </div></Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
