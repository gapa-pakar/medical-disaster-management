
import React, { useEffect } from 'react'
import Link from '../Link'

export default function SubjectsPage(props) {

    const { Subjects } = props

    return (
        <div className='home-page'>
            <div className='subjects-page1'>
                <div className='subjects1-text'>נושאים:</div>
                <div className='subjects-page-container-1'>
                    {
                        Subjects.map((element, index) => (
                            <div key={index} >
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
