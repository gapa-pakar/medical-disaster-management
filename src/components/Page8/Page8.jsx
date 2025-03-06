import React, { useEffect, useState } from 'react'
import './Page8.css'

const eventManagement = [
    {
        id: 1,
        title: "תחילת אירוע",
        description: "גיבוש תמונת מצב",
        info: {
            details: ['אינפורמציה וכמה שיותר!'],
            report: ['סוג האירוע', 'אירוע / אר"ן', 'כוחות באירוע']
        },
        color: "#ff8303"
    },
    {
        id: 2,
        title: "הגעה לאירוע",
        description: "פיקוד / השתלבות",
        info: {
            details: ['חבירה לגורם הרפואי הבכיר ולמנהל האירוע הבכיר (אג"מי / רפואי)'],
            report: ['התאמת הדיווח הראשוני לממצאים בשטח ולתמונת המצב הראשונית']
        },
        color: "#fea130"
    },
    {
        id: 3,
        title: "הבנת גודל האירוע",
        description: "סריקה וריכוז נפגעים",
        info: {
            details: [
                'חלוקת גזרות סריקה',
                'ביצוע AB חצי C!!',
                'ריכוז נפגעים גלויים',
                'קביעת ציר פינוי ופינות',
                'ריכוז המטפלים לטריאג'
            ],
            report: [
                'כמות נפגעים בזירה',
                'מצב נפגעים שאותרו',
                'כמות נפגעים כודים'
            ]
        },
        color: "#5fb3ef"
    },
    {
        id: 4,
        title: "טיפול",
        description: "ריכוז וטיפול בנפגעים",
        info: {
            details: [
                'ביצוע טיפול PHTLS מלא',
                'ביצוע פרוצדורות וניתוחים',
                'קיבוע פרוצדורות',
                'דיווח תמונת מצב טיפול'
            ],
            report: [
                'רישום נפגעים עפ"י מצבם',
                'רישום פרוצדורות מבוצעות',
                'ריכוז תמונות מצב לפי מצב',
                'תגבור צר"פ וכלי פינוי'
            ]
        },
        color: "#5c83c4"
    },
    {
        id: 5,
        title: "פינוי",
        description: "ריכוז כלי פינוי ושיגורם",
        info: {
            details: [
                'ריכוז כלי פינוי באירוע',
                'העברת מקל רפואית',
                'פינוי נפגעים עפ"י קדימות',
                'קליטת ציוד ריענון רפואי'
            ],
            report: [
                'דיווח תמונת מצב כלי פינוי',
                'רישום המפונים ויעד הפינוי',
                'העברת תמונת מצב עדכנית'
            ]
        },
        color: "#3f3f3f"
    }
]

export default function Page8(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    const [eventsArray, setEventsArray] = useState([]);

    const handleClick = (index) => {
        if (!eventsArray.includes(index)) {
            setEventsArray([...eventsArray, index]);
        }

        if (index === 4) {
            setFinish(true);
        }
    }

    useEffect(() => {
        setMaxPages(0);
        setLinkName("/page8/1");
        setFinish(false);
    }, [])

    return (
        <div>
            <div className='page1-container'>
                <div className='event-circles-container-1'>
                    {
                        eventManagement.map((event, index) => {
                            return (
                                <div key={`event_${index}`}>
                                    <div className='event-container' onClick={() => handleClick(index)}>
                                        <div className='event-circles-container-2'>
                                            <div className='event-circle' style={{ borderColor: event.color, '--hover-color': event.color, '--color': event.color }}>
                                                <div className='event-title'>{event.title}</div>
                                                <div className='event-description' style={{ '--background-color': event.color }}>{event.description}</div>
                                            </div>

                                            {
                                                index < 4 ? (
                                                    <div className='event-arrow-container'>
                                                        <div className='event-arrow' style={{ backgroundColor: event.color }}></div>
                                                        <div className='event-arrow-triangle' style={{ borderTopColor: event.color }}></div>
                                                    </div>
                                                ) : <></>
                                            }

                                        </div>

                                        <div className='event-details-container' style={{ backgroundColor: event.color, visibility: eventsArray.includes(index) ? "visible" : "hidden" }}>
                                            <div className='event-info-title' style={{ color: event.color }}>פירוט פעולות:</div>
                                            {
                                                event.info.details.length > 1 ? (
                                                    <div>
                                                        {
                                                            event.info.details.map((detail, index1) => {
                                                                return (
                                                                    <div key={`detail_${index1}`} className='event-info-container'>
                                                                        <div className='event-info-number'>{index1 + 1}</div>
                                                                        <div className='event-info-1'>{detail}</div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='event-info-2'>{event.info.details[0]}</div>
                                                )
                                            }

                                            <div className='event-info-title' style={{ color: event.color }}>אופן רישום ודיווח</div>
                                            {
                                                event.info.report.length > 1 ? (
                                                    <div>
                                                        {
                                                            event.info.report.map((report, index2) => {
                                                                return (
                                                                    <div key={`report_${index2}`} className='event-info-container'>
                                                                        <div className='event-info-number'>{index2 + 1}</div>
                                                                        <div className='event-info-1'>{report}</div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='event-info-2'>{event.info.report[0]}</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* explaining text */}
                {
                    eventsArray.length > 0 ? <></> : (
                        <div className='medical-people-text' id='medical1'>
                            <div>לחצו על כל אחד מהעיגולים כדי לחשוף את השלבים</div>
                            <div className='medical-people-line'></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
