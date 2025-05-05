import React from 'react'

// Array containing the introductory information for the event managers (מנהלי אירוע)
const managersIntro = [
    {
        id: 1,
        title: "אירוע רפואי מורכב",
        description: "אירוע רפואי בו נדרשת התערבות מצילת חיים לבלתי יציבים.",
        color: "#6baed6",
        direction: "up",
        number: "01",
    },
    {
        id: 2,
        title: "ניהול אירוע רפואי",
        description: "הבנת נתוני האירוע ועיבודם למשמעויות ופעולות.",
        color: "#4292c6",
        direction: "down",
        number: "02",
    },
    {
        id: 3,
        title: "תמונת מצב",
        description: "ריכוז כלל ממצאי האירוע לכדי דיווח אחד מתכלל.",
        color: "#2171b5",
        direction: "up",
        number: "03",
    },
    {
        id: 4,
        title: "שיקולי קדימות טיפול",
        description: "החלטה שקובעת מטופל ראשון ואילך תלוי מצב הנפגעים.",
        color: "#08519c",
        direction: "down",
        number: "04",
    },
    {
        id: 5,
        title: "שיקולי קדימות פינוי",
        description: "החלטה שקובעת מפונה ראשון ואילך תלוי מצב הנפגעים.",
        color: "#084081",
        direction: "up",
        number: "05"
    },
    {
        id: 6,
        title: "דרישה רפואית",
        description: "דיווח אשר בתכליתו מקדם או משפר את הטיפול הרפואי בנפגע.",
        color: "#08306b",
        direction: "down",
        number: "06",
    },
    {
        id: 7,
        title: 'משולש זה"ב',
        description: 'סבב נפגעים לכודים אשר מתבצע ע"י 3 גורמים מקצועיים',
        additional: ["רופא", "קצין חילוץ", "מהנדס"],
        color: "#10214c",
        direction: "up",
        number: "07"
    },
]

export default function Page1Part1() {
    return (
        <div>
            <div className='managers-info-container'>
                {
                    // Mapping over the 'managersIntro' array to dynamically render each manager item
                    managersIntro.map((element, index) => {
                        return (
                            <div key={element.title} className={element.direction === "up" ? "element1-container up-container" : "element1-container down-container"}>
                                {/* title down and div-triangle element up display */}
                                <div>
                                    {
                                        element.direction === "down" ? (
                                            <div className='div-triangle-down animation' id={`delay-down-${element.id}`} style={{ backgroundColor: element.direction === "down" ? element.color : "", borderTopColor: element.color }}>
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
                                                <p style={{ color: element.color }}>{element.number}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* title up and div-triangle element down display */}
                                <div className='page1-title-down animation' style={{ color: element.color }}>{element.direction === "down" ? element.title : ""}</div>
                                <div>
                                    {
                                        element.direction === "up" ? (
                                            <div className='div-triangle-up animation' id={`delay-up-${element.id}`} style={{ backgroundColor: element.direction === "up" ? element.color : "", borderTopColor: element.color }}>
                                                <div className='page1-description-up'>{element.direction === "up" ? element.description : ""}</div>
                                            </div>) : <></>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
