
import React, { useEffect, useState } from 'react'
import './Page10.css'
import Page10Question from './Page10Question'

const operationInfo = [
    {
        id: 1,
        title: "פינוי חללים",
        description: "כלל הנפגעים אשר נקבע עליהם מותם ניתנים לפינוי משטח האירוע על ידי גורם צבאי או אזרחי.",
        color: "#2c599d"
    },
    {
        id: 2,
        title: "ירוק וכתום בעיניים",
        description: "ווידוא נוכחות כוללת של הצוותים המטפלים ובדיקת תקינות והימצאות ציוד החילוץ, העלאת פערים במידה וקיימים.",
        color: "#5c83c4"
    },
    {
        id: 3,
        title: 'שיחת קב"ן כוללת',
        description: "שיחה המסכמת את שרשרת האירועים, התחושות והרגשות לאחר האירוע, מאפשרת שיחה ודיון כולל להצפת החוויה.",
        color: "#7f9dcf"
    },
    {
        id: 4,
        title: "הפקת לקחים מהאירוע",
        description: "מטרתה להציף ולהעלות פערים אשר הורגשו לאורך האירוע. ניתן להציף גם כן היבטים חיוביים וטובים שבלטו.",
        color: "#fe6e00"
    },
    {
        id: 5,
        title: "חזרה לכוננות וכשירות",
        description: "מעבר כולל ורחב על ציוד הכוננות, השלמת פערים וחוסרים על מנת להיערך לקפיצה לאירוע הבא.",
        color: "#ff8303"
    },
]

export default function Page10(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    useEffect(() => {
        setMaxPages(1);
        setLinkName("/page11");
    })

    return (
        <div>
            <div className='page1-container'>
                {
                    countPages === 0 ? (
                        <div className='page10-container'>
                            {
                                operationInfo.map((info, index) => (
                                    <div key={index} className='p10-operations-container-1'>
                                        <div className='p10-number' style={{ backgroundColor: info.color }}>{info.id}</div>
                                        <div className='p10-text-container' style={{ borderColor: info.color }}>
                                            <div className='p10-title-container' style={{ backgroundColor: info.color, color: info.color }}>
                                                <div className='p10-title'>{info.title}</div>
                                            </div>
                                            <div className='p10-d' style={{ color: info.color }}>{info.description}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (<Page10Question setFinish={setFinish} />)
                }
            </div>
        </div>
    )
}
