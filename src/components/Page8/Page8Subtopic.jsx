
import React, { useEffect, useState } from 'react'
import TrueFalseQuestion from '../Quiz/TrueFalseQuestion'
import Page8Question from './page8Question'

// Array containing the principles for determining concentration points (קביעת נקודות ריכוז)
const pointsPrinciple = [
    {
        id: 1,
        title: "ציר פינוי זמין",
        color: "#ff8303",
        addClass: "orange1"
    },
    {
        id: 2,
        title: "מקום מאובטח",
        color: "#fea130",
        addClass: "yellow1"
    },
    {
        id: 3,
        title: "קרוב לזירת האירוע",
        color: "#5fb3ef",
        addClass: "lightblue1"
    },
    {
        id: 4,
        title: "מקום מרווח לכלל הפצועים",
        color: "#5c83c4",
        addClass: "blue"
    },
    {
        id: 5,
        title: "מקום מואר שניתן לטפל בו",
        color: "#5fb3ef",
        addClass: "lightblue2"
    },
    {
        id: 6,
        title: "מקום נגיש למטפלים והן לכוחות הפינוי",
        color: "#fea130",
        addClass: "yellow2"
    },
    {
        id: 7,
        title: "משטח נחיתה קרוב",
        color: "#ff8303",
        addClass: "orange2"
    }
]

// Array containing the principles for dividing the search areas (חלוקה לגזרות)
const divisionPrinciple = [
    {
        id: 1,
        title: "גזרות לא רחבות מדי על מנת לא לפספס",
        color: "#5fb3ef",
        addClass: "orange3"
    },
    {
        id: 2,
        title: "עצמים דוממים על מנת לא ליצור בלבול בסריקות",
        color: "#fea130",
        addClass: "yellow3"
    },
    {
        id: 3,
        title: "גזרות חופפות",
        color: "#ff8303",
        addClass: "lightblue3"

    }
]

// Array for the principles title and description
const principleText = [
    {
        title: "עקרונות לקביעת נקודות ריכוז",
        description: "קביעת נקודת ריכוז בהתאם לדגשי לפני החלוקה לגזרות על מנת שכלל הצוות יכיר את הנקודה טרם הפיזור באתר העבודה."
    },
    {
        title: "עקרונות לחלוקת גזרות",
        description: "גזרות ברורות וחופפות במטרה לא לפספס אף פצוע / לכוד."
    }
]

// Data for the true/false question
const questions = {
    title: "סמנו את 3 עקרונות החלוקה לגזרות הנכונים:",
    correct: 3,
    info: [
        {
            id: 1,
            title: "גזרות חופפות",
            answer: true
        },
        {
            id: 2,
            title: "מתן שטח סריקה גדול",
            answer: false
        },
        {
            id: 3,
            title: "עצמים אשר בהתחלה היו במקומם ולאחר זמן מה חלפו",
            answer: false
        },
        {
            id: 4,
            title: 'הקפדה של מרחק של כ-2 ס"מ מגזרה לגזרה',
            answer: false
        },
        {
            id: 5,
            title: "עצמים דוממים על מנת לא ליצור בלבול בסריקות",
            answer: true
        },
        {
            id: 6,
            title: "גזרות לא רחבות מדי על מנת לא לפספס",
            answer: true
        }
    ]
}


export default function Page8Subtopic(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    // State to control the visibility of division points
    const [showPoints, setShowPoints] = useState(false);

    // Function to handle the click event and show division points
    const handleClick = () => {
        setShowPoints(true);
        setFinish(true);
    }

    useEffect(() => {
        setMaxPages(2);
        setLinkName("/page9");
        setFinish(false)
    }, [])

    return (
        <div>
            <div className='page1-container'>
                {
                    countPages === 0 ? (
                        <div>
                            <div className='points-container'>
                                <div className='points-half-circle-1'>
                                    {
                                        // Map through the pointsPrinciple array and display each principle
                                        pointsPrinciple.map((principle, index) => {
                                            return (
                                                <div key={`principle_${index}`}>
                                                    <div className={`circle1 ${principle.addClass}`} style={{ backgroundColor: principle.color }}></div>
                                                    <div className='connection-line-container'>
                                                        <div className='connection-line' id={`p${index + 1}`} style={{ backgroundColor: principle.color }}></div>

                                                    </div>
                                                    <div className='principle-title' id={`t${index + 1}`} style={{ borderColor: principle.color, color: principle.color }}>{principle.title}</div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className='points-text-container'>
                                        <div className='points-title'>{principleText[0].title}</div>
                                        <div className='points-line'></div>
                                        <div className='points-description'>{principleText[0].description}</div>
                                    </div>
                                </div>

                                {
                                    showPoints ? ( // If showPoints is true, display division principles
                                        <div className='points-half-circle-2'>
                                            {
                                                divisionPrinciple.map((element, index) => {
                                                    return (
                                                        <div key={`element${index}`}>
                                                            <div className={`circle2 ${element.addClass}`} style={{ borderColor: element.color }}></div>
                                                            <div className='connection-line-container'>
                                                                <div className='connection-line' id={`p-${index + 1}`} style={{ backgroundColor: element.color }}></div>

                                                            </div>
                                                            <div className='principle-title' id={`t-${index + 1}`} style={{ borderColor: element.color, color: "white", backgroundColor: element.color }}>{element.title}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div className='points-text-container-1'>
                                                <div className='points-title'>{principleText[1].title}</div>
                                                <div className='points-line' style={{ borderTopColor: "#3b3838" }}></div>
                                                <div className='points-description-1'>{principleText[1].description}</div>
                                            </div>
                                        </div>
                                    ) : ( 
                                        // If showPoints is false, show the arrow to expand
                                        <div className='points-arrow-container' onClick={handleClick}>
                                            <div className='points-arrow'></div>
                                            <div className='points-arrow-triangle'></div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ) : countPages === 1 ? <Page8Question setFinish={setFinish} /> :
                        <TrueFalseQuestion questions={questions.info} questionTitle={questions.title} questionCorrect={questions.correct} setFinish={setFinish} />
                }
            </div>

        </div>
    )
}
