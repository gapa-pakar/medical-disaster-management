import React, { useEffect } from 'react'

import circle from '../../assets/page1-icons/circle.svg'
import medicalKit from '../../assets/navbar-icons/medical-kit.svg'
import document from '../../assets/page1-icons/document.svg'
import engineer from '../../assets/page1-icons/engineer.svg'

const trianglesInfo = [
    {
        id: 1,
        title: "משולש טקטי",
        description: "נועד לקבוע את שיטת הפעולה ודרך החילוץ במוקד חילוץ אחד.",
        more: "מתבצע על 1-2 לכודים במרחק של עד 7 מטרים עם קשר עין ביניהם",
        instructions: ["מתבצע במוקד חילוץ אחד", "חובש ומעלה", 'מפקד ברמת מ"כ ומעלה', "מהנדס מחלקתי ומעלה"],
        color: "#0a5684",
        icons: [circle, medicalKit, document, engineer]
    },
    {
        id: 2,
        title: "משולש אסטרטגי",
        description: 'נועד לקבוע את סדר חילוץ הלכודים הגלויים וחלוקת המשאבים (סד"כ ואמצעים) באירוע.',
        instructions: ["מתבצע על כלל הלכודים באתר", "גורם רפואי בכיר באתר", "מפקד האתר", "מהנדס בכיר באתר"],
        color: "#357b8f",
        icons: [circle, medicalKit, document, engineer]
    }
]

export default function Second() {
    return (
        <div className='managers-info-container'>
            <div className='page1-triangle-container'>
                {
                    trianglesInfo.map((triangle) => (
                        <div key={triangle.title} id='triangle' className='animation'>
                            <div>
                                <div className='triangle-text-container' style={{ backgroundColor: triangle.color }}>
                                    <div className='triangle-title'>{triangle.title}</div>
                                    <div className='triangle-description' style={{ color: triangle.color }}>
                                        <div>{triangle.description}</div>
                                    </div>
                                    <p className='triangle-more-text'>{triangle.more}</p>
                                    <div className='triangle-instructions'>
                                        {
                                            triangle.instructions.map((instruction, index) => {
                                                return (
                                                    <div className='triangle-icons-container' key={instruction}>
                                                        <img className='triangle-icons' src={triangle.icons[index]}></img>
                                                        <div>{instruction}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* element in the middle */}
                            {triangle.id === 2 ?
                                <div>
                                    <div className='triangle-colored-line'></div>
                                    <div className='gold-triangle-title-container'>
                                        <div className='gold-triangle-title'>משולש זה"ב</div>
                                    </div>
                                </div> : <></>}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
