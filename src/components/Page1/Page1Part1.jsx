import React, { useEffect, useState } from 'react'

const managersIntro = [
    {
        id: "01",
        title: "אירוע רפואי מורכב",
        description: "אירוע רפואי בו נדרשת התערבות מצילת חיים לבלתי יציבים.",
        color: "#02aecc",
        direction: "up"
    },
    {
        id: "02",
        title: "ניהול אירוע רפואי",
        description: "הבנת נתוני האירוע ועיבודם למשמעויות ופעולות.",
        color: "#029fbb",
        direction: "down"
    },
    {
        id: "03",
        title: "תמונת מצב",
        description: "ריכוז כלל ממצאי האירוע לכדי דיווח אחד מתכלל.",
        color: "#1d8ea1",
        direction: "up"
    },
    {
        id: "04",
        title: "שיקולי קדימות טיפול",
        description: "החלטה שקובעת מטופל ראשון ואילך תלוי מצב הנפגעים.",
        color: "#357b8f",
        direction: "down"
    },
    {
        id: "05",
        title: "שיקולי קדימות פינוי",
        description: "החלטה שקובעת מפונה ראשון ואילך תלוי מצב הנפגעים.",
        color: "#0a5684",
        direction: "up"
    },
    {
        id: "06",
        title: "דרישה רפואית",
        description: "דיווח אשר בתכליתו מקדם או משפר את הטיפול הרפואי בנפגע.",
        color: "#1a3b70",
        direction: "down"
    },
    {
        id: "07",
        title: 'משולש זה"ב',
        description: 'סבב נפגעים לכודים אשר מתבצע ע"י 3 גורמים מקצועיים',
        additional: ["רופא", "קצין חילוץ", "מהנדס"],
        color: "#10214c",
        direction: "up"
    }
]

export default function Page1Part1() {
    return (
        <div>
            <div className='managers-info-container'>
                {
                    managersIntro.map((element, index) => (
                        <div key={element.title} className={element.direction === "up" ? "element1-container up-container" : "element1-container down-container"}>
                            {/* title down and div-triangle element up display */}
                            <div>
                                {
                                    element.direction === "down" ? (
                                        <div className='div-triangle-down animation' id={`delay-down-${index + 1}`} style={{ backgroundColor: element.direction === "down" ? element.color : "", borderTopColor: element.color }}>
                                            <div className='page1-description-down'>{element.direction === "down" ? element.description : ""}</div>
                                        </div>) : <></>
                                }
                            </div>
                            <div className='page1-title-up animation' style={{ color: element.color }}>{element.direction === "up" ? element.title : ""}</div>

                            {/* colored line with numbers display */}
                            <div className='colored-line-container'>
                                <div className='colored-line' style={{ backgroundColor: element.color }}>
                                    <div className='number-circle-border'>
                                        <div className='number-circle'>
                                            <p style={{ color: element.color }}>{element.id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* title up and div-triangle element down display */}
                            <div className='page1-title-down animation' style={{ color: element.color }}>{element.direction === "down" ? element.title : ""}</div>
                            <div>
                                {
                                    element.direction === "up" ? (
                                        <div className='div-triangle-up animation' id={`delay-up-${index + 1}`} style={{ backgroundColor: element.direction === "up" ? element.color : "", borderTopColor: element.color }}>
                                            <div className='page1-description-up'>{element.direction === "up" ? element.description : ""}</div>
                                        </div>) : <></>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
