import React, { useEffect, useState } from 'react'
import './Page4.css'
import Quiz from '../Quiz/Quiz'
import { Carousel } from './Carousel'

import icon1 from '../../assets/page4-icons/icon1.svg'
import icon2 from '../../assets/page4-icons/icon2.svg'
import icon3 from '../../assets/page4-icons/icon3.svg'


const ManagersInterfaces = [
    {
        title: 'חמ"ל',
        description: 'החמ"ל הוא מרכז העצבים של היחידה, חדר המאויש 24 שעות על ידי הסמב"ץ בשגרה ובחירום. אל החמ"ל מתרכזים כלל הידיעות והדיווחים (מידע), והוא עוקב אחר כל המתרחש בפלוגה ומחוצה לה.',
        list: [
            'החמ"ל יעקוב ויתעד את כל המתרחש בגזרתו. וייתן מענה מידי לכל אירוע וכל גוף (אזרחי וצבאי) בהתאם לסיווג האירוע.',
            'בכל אירוע חילוץ משמעותי יהיה חפ"ק אחוד, סוג של חמ"ל המורכב מכוחות חירום + פקע"ר שינהל את האירוע.',
            'דיווחים יעברו בציר הבא: חובש -> מפקד שאחראי עליו -> חפ"ק אחוד -> דיווח לרמ"מ (גדוד/נפה)'
        ],
        icon: icon1,
        color: '#8291a6',
        lightColor: '#9ba7b8'
    },
    {
        title: 'חפ"קים',
        description: 'חפ"ק אלפא הינו החפ"ק הראשון המתייצב באירוע הרס. ניתן להיעזר בחפ"ק האלפא ע"מ לקבל תמונת מצב ראשונית.',
        list: [
            'חפ"ק (מ"מ, מ"פ מג"ד) הינו גורם אשר מועבר דרכו הרבה מידע, בעת אירוע הרס ניתן לשאוב ממנו מידע נוסף.',
            'חפ"ק מג״ד/מ״פ יקפוץ לאירועים מורכבים במידה ונדרש לאחר שקפץ אליהם חפ"ק מ"מ. בעת הגעתו יקבל את המקל ממפקד האירוע ויתפוס פיקוד.',
            "בקשות מהפלוגה יש לעשות זאת דרך הקשר הרלוונטי (כוח אלונקאים, מלווה לפצוע, חיפוק וכו')."
        ],
        icon: icon2,
        color: '#0abfc8',
        lightColor: '#0bc9d5'
    },
    {
        title: 'מט"ב',
        description: 'אחראי על ההחלטות הרפואיות בשטח כגורם רפואי בכיר יותר בשטח.',
        list: [
            'בעזרת המט"ב ניתן להבין את מצב הפצוע וכך להחליט ביחד על קדימות הטיפול והפינוי.',
            'בעזרת המט"ב ניתן להבין את מצב הפצוע וכך להחליט ביחד על קדימות הטיפול והפינוי.'
        ],
        icon: icon3,
        color: '#02b9d8',
        lightColor: '#02c4e4'
    }
]

const quiz = {
    topic: 'ממשקים קיימים בניהול אירוע',
    totalQuestions: 1,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
        {
            question:
                'מהו החמ"ל?',
            choices: [
                'החמ"ל הוא מרכז העצבים של היחידה שאליו מתרכזים כלל הדיווחים, חדר המאויש 24 שעות ע"י הסמב"ץ בשגרה ובחירום ונותן מענה מידי לכל אירוע אזרחי / צבאי.',
                'חדר דיווחים המאויש ע"י קצינים בכירים.',
                'חדר בקרה המתווך בין גורמים צבאיים לאזרחיים.',
                'החמ"ל הוא חדר מלחמה המאויש "י המג"ד וקצינים בכירים הדואג לבטיחות הכוחות בשטח ומוריד הנחיות אופרטיביות למחלצים.'
            ],
            correctAnswer: 'החמ"ל הוא מרכז העצבים של היחידה שאליו מתרכזים כלל הדיווחים, חדר המאויש 24 שעות ע"י הסמב"ץ בשגרה ובחירום ונותן מענה מידי לכל אירוע אזרחי / צבאי.',
            correctIndex: 0
        }
    ]
}

const value1Array = ['חמ"ל', 'חמל'];
const value2Array = ['חפ"קים', 'חפקים']
const value3Array = ['מט"ב', 'מטב']

export default function Page4(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [readOnly1, setreadOnly1] = useState(false);
    const [readOnly2, setreadOnly2] = useState(false);
    const [readOnly3, setreadOnly3] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkAnswer = (event) => {
        console.log("hello1")
        setDisplayText(false);
        switch (event.target.id) {
            case 'input_1':
                setValue1(event.target.value);
                if (value1Array.includes(event.target.value)) {
                    setreadOnly1(true);
                } else {
                    setDisplayText(true);
                }
                break;
            case 'input_2':
                setValue2(event.target.value);
                if (value2Array.includes(event.target.value)) {
                    setreadOnly2(true);
                } else {
                    setDisplayText(true);
                }
                break;
            case 'input_3':
                setValue3(event.target.value);
                if (value3Array.includes(event.target.value)) {
                    setreadOnly3(true)
                } else {
                    setDisplayText(true);
                }
                break;
            default:
                break;
        }

        console.log(readOnly3)
    }

    useEffect(() => {
        setMaxPages(2);
        setLinkName("/page5");

        if (window.innerWidth < 1000) {
            setIsMobile(true);
        }
    }, []);

    // hiding next arrow
    useEffect(() => {
        if (!readOnly1) {
            if (isMobile || countPages === 1) {
                setFinish(false);
            }
        }
    }, [countPages])

    // adding next arrow back
    useEffect(() => {
        if (readOnly1 && readOnly2 && readOnly3) {
            setFinish(true);
        }
    }, [readOnly1, readOnly2, readOnly3])

    return (
        <div className='page1-container'>
            {countPages === 0 ? (
                // page 4 part 1
                <div className='interface-container'>
                    <Carousel ManagersInterfaces={ManagersInterfaces} isMobile={isMobile} setFinish={setFinish}></Carousel>
                </div>
            ) : countPages === 1 ? (
                // page 4 question
                <div className='interface-container-2'>
                    <div className='question-container'>
                        <h1 className='video-question-title' style={{ color: "#5c83c4" }}>כתבו מהם שלושת סוגי הממשקים הקיימים בעת ניהול אירוע הרס:</h1>
                        <div className='question-line' style={{ width: "34rem", borderTopColor: "#5c83c4" }}></div>
                        <div className='answer-container'>
                            <div className='question-inputs-container'>
                                <input id={`input_1`} value={value1} className='question-inputs' onChange={checkAnswer} readOnly={readOnly1} style={{ backgroundColor: value1 ? readOnly1 ? '#a9d18e' : '#ff8989' : '' }}></input>
                                <input id={`input_2`} value={value2} className='question-inputs' onChange={checkAnswer} readOnly={readOnly2} style={{ backgroundColor: value2 ? readOnly2 ? '#a9d18e' : '#ff8989' : '' }}></input>
                                <input id={`input_3`} value={value3} className='question-inputs' onChange={checkAnswer} readOnly={readOnly3} style={{ backgroundColor: value3 ? readOnly3 ? '#a9d18e' : '#ff8989' : '' }}></input>
                            </div>
                            <div className='text-message' style={{ color: readOnly1 && readOnly2 && readOnly3 ? "#548235" : "#ff5757" }}>{readOnly1 && readOnly2 && readOnly3 ? "כל הכבוד!" : displayText ? "כמעט..." : ""}</div>
                        </div>
                    </div>
                </div>
            ) : (
                // quiz
                <Quiz quiz={quiz} setFinish={setFinish}></Quiz>
            )}
        </div>
    )
}
