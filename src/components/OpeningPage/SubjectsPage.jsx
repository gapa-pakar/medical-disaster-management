
import React from 'react'
import Link from '../Link' // Importing the Link component to handle navigation

export default function SubjectsPage(props) {

    const { Subjects } = props

    return (
        <div className='home-page'>
            <div className='subjects-page1'>
                {/* Title section */}
                <div className='subjects1-text'>נושאים:</div>

                {/* Container for the list of subjects */}
                <div className='subjects-page-container-1'>
                    {
                        // Mapping through the 'Subjects' array to dynamically generate each subject's content
                        Subjects.map((element, index) => (
                            <div key={index}>
                                {/* Link component wrapping each subject item for navigation */}
                                <Link href={element.link} className='link-style'>
                                    <div className='subject-title-container' id='title-container-1' style={{ backgroundColor: element.color }}>
                                        <div className='half-circle-container' id='half-circle-1'>
                                            <img className='title-icon' style={{ width: '2.6rem' }} src={element.icon}></img>
                                        </div>
                                        <div className='subject-text-container'>
                                            <div className='subject-title'>{element.title}</div>
                                            <div id='subtitle'>{element.subtitle}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
