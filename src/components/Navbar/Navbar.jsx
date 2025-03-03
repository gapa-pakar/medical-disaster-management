import React, { useEffect, useState } from 'react'

import Link from '../Link'

import arrowRight from '../../assets/navbar-icons/arrow-right.svg'
import arrowLeft from '../../assets/navbar-icons/arrow-left.svg'

export default function Navbar(props) {

    const { Subjects, currentSubject, setCurrentSubject, selectedPage } = props

    const [showMenu, setShowMenu] = useState(false);
    const [page, setPage] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const findCurrentSubject = () => {
        Subjects.forEach(subject => {
            if (window.location.pathname === subject.link) {
                setCurrentSubject(subject);
            } else if (window.location.pathname === subject.subtitleLink) {
                setCurrentSubject(subject);
                // add more settings later
            }
        });
    }

    useEffect(() => {
        findCurrentSubject();
    }, [window.location.pathname]);

    useEffect(() => {
        if (currentSubject.id > 0) { // checks if the currentSubject is updated
            if (localStorage.currentPage) { // checks if the localStorage variable is defined
                if (localStorage.currentPage < currentSubject.id) { // checks if the variable should be updated
                    localStorage.setItem('currentPage', JSON.stringify(currentSubject.id));
                }
            } else { // adds the localStorage variable if it's not defined
                localStorage.setItem('currentPage', JSON.stringify(currentSubject.id));
            }
        }

    }, [currentSubject])


    return (
        <div>
            {/* the title at the top of the page */}
            <div>
                <div className='subject-title-container' style={{ backgroundColor: currentSubject.color }}>
                    <div className='half-circle-container'>
                        <img className='title-icon' src={currentSubject.icon}></img>
                    </div>
                    <div className='subject-title'>{currentSubject.title}</div>
                </div>
                {/* subtitle */}
                {
                    currentSubject.subtitle && window.location.pathname === currentSubject.subtitleLink ? (
                        <div className='subject-subtitle' id={`subject_${currentSubject.id}`} style={{ backgroundColor: currentSubject.color }}>{currentSubject.subtitle}</div>
                    ) : <></>
                }
            </div>

            {/* open menu */}
            <div>
                {showMenu ? (<img onClick={toggleMenu} src={arrowLeft} className='arrowLeft' />
                ) : (
                    <img onClick={toggleMenu} src={arrowRight} className='arrowRight' />
                )}
            </div>

            {/* closed-menu */}
            <div className='navbar'>
                <div className='color-line' style={{ backgroundColor: currentSubject.color }}></div>
                <div className={showMenu ? "menu-responsive" : "menu"} onClick={toggleMenu}>
                    <div className={showMenu ? "container-responsive" : "container"}>
                        <div className={showMenu ? "vertical-line-responsive" : "vertical-line"}></div>
                        <div className={showMenu ? "subjects-responsive" : "subjects"}>
                            {
                                Subjects.map((subject) => {
                                    return (
                                        <div key={subject.id} className='menu-titles'>
                                            {/* open menu text link */}
                                            {showMenu ? (<Link href={subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.link : ''} className='title'>{subject.title}
                                                {subject.subtitle ? <Link href={subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.subtitleLink : ''} className='subtitle-link'><p className='subtitle'>{subject.subtitle}</p></Link> : ""}
                                            </Link>) : <></>}

                                            {/* closed menu icons link */}
                                            <Link href={subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.link : ''} disabled><div className='icon-container' style={{ backgroundColor: subject.id <= localStorage.currentPage || selectedPage === 2 ? subject.color : '#a6a6a6' }}>
                                                <img src={subject.icon} className='icon'></img>
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
