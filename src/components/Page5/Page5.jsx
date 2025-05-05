import React, { useEffect, useState } from 'react'
import './Page5.css'

import Page5Part1 from './Page5Part1'
import OpenQuestion from './OpenQuestion'
import Page5Part2 from './Page5Part2'

// Array containing information for page 5 part 1
const channelsInfo = [
    {
        id: 1,
        title: 'ערוץ דיווח מקצועי',
        description: 'ערוץ בו עוברים דיווחים על מידע רפואי בציר של מנהל אירוע אל מ"פ הפרל"ג, מ"פ פרל"ג אל הרפואה בנפ"ה ובמחוז.',
        goals: 'שיח מקצועי להבהרת הפקודות, העלאת דרישות ועוד.'
    },
    {
        id: 2,
        title: 'ערוץ דיווח חמ"לי',
        description: 'ערוץ דיווח בו עוברים דיווחים מהגדודים בשטח אל מפקדת הנפ"ה ומחו"ז בציר חמ"לים.',
        goals: 'משטור וחיבור בי הציר המקצועי לבין הציר הפיקודי.'
    },
    {
        id: 3,
        title: 'ערוץ דיווח מפקדים',
        description: 'ערוץ דיווח בין המפקדים באופן ישיר.',
        goals: 'העברת דיווחים מהירים מהדרג בשטח אל הדרגים הגבוהים.'
    }
]

// Array containing information for page 5 part 2
const reportMethods = [
    {
        id: "03",
        title: 'שולחן מג"ד',
        description: 'שוע"ל, ברק כתום',
        responsible: 'מ"פ פרל"ג',
        operationsOrder:
            [
                'התראת אר"ן',
                'תמונת מצב פלוגתית',
                'דרישת פינוי',
                'דרישת צר"פ',
                'דרישת תגבור סד"כ',
                'קשר רציף עם מפקד מד"א'
            ],
        color: '#2171b5'
    },
    {
        id: "02",
        title: 'חפ"ק מ"פ',
        description: 'ברק כתום, שוע"ל ע"ב מ"פ חילוץ',
        responsible: 'מנהל אירוע',
        operationsOrder:
            [
                'התראת אר"ן',
                'תמונת מצב פלוגתית',
                'פתיחת פינת טיפול',
                'דרישת פינוי',
                'דרישת צר"פ',
                'דרישת תגבור סד"כ'
            ],
        color: '#4292c6'
    },
    {
        id: "01",
        title: 'אתר הרס',
        description: 'ללא אמצעי קשר, יתבסס על חפ"ק מ"מ',
        responsible: 'חובש מחלקתי',
        operationsOrder:
            [
                'התראת אר"ן',
                'תמונת מצב מחלקתית',
                'דרישת צוות רפואי לאתר',
                'דרישת פינוי'
            ],
        color: '#9ba7b8'
    }
]

// Array containing information for the open questions
const questions = [
    {
        title: 'כתבו מהם ערוצי דיווח מקצועי וחמ"לי:',
        answer: ['ערוץ דיווח מקצועי הוא ערוץ בו עוברים דיווחים על מידע רפואי בציר של מנהל אירוע אל מ"פ הפרל"ג, מ"פ פרל"ג אל הרפואה בנפ"ה ובמחוז.', 'ערוץ דיווח חמ"לי הוא ערוץ בו עוברים דיווחים מהגדודים בשטח אל מפקדת הנפ"ה ומחו"ז בציר חמ"לים.'],
        width: '20vw'
    },
    {
        title: 'מהם האמצעים לדיווח בדרג המחלקה, הפלוגה והגדוד?',
        answer:
            [
                'האמצעים לדיווח בדרג המחלקה הם...',
                'האמצעים לדיווח בדרג בפלוגה הם...',
                'האמצעים לדיווח בדרג הגדוד הם...'
            ],
        width: '26vw'
    }
]

export default function Page5(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props
    
    // variables located in parent component so it won't restart when pressing the arrows
    // part 1 state variables
    const [count, setCount] = useState(0); // counts the channelsInfo cards

    // open question variables
    const [textValue1, setTextValue1] = useState('');
    const [textValue2, setTextValue2] = useState('');
    const [changeDispaly1, setChangeDisplay1] = useState(false);
    const [changeDispaly2, setChangeDisplay2] = useState(false);

    // part 2 variables
    const [showArrow, setshowArrow] = useState(false);          // add arrow to the next triangle section
    const [triangleIndex, setTriangleIndex] = useState([2]);    // add next triangle section and next side section
    const [triangleCount, setTriangleCount] = useState(2);
    const [reportIndex, setReportIndex] = useState([]);         // side triangle text, add list after pressing the arrow

    useEffect(() => {
        setMaxPages(3);
        setLinkName("/page6");
    }, []);

    return (
        <div>
            <div className='page1-container'>
                {
                    countPages === 0 ?
                        <Page5Part1 channelsInfo={channelsInfo} count={count} setCount={setCount} setFinish={setFinish} /> :
                        countPages === 1 ?
                            <OpenQuestion question={questions[0]} textValue1={textValue1} setTextValue1={setTextValue1} changeDispaly1={changeDispaly1} setChangeDisplay1={setChangeDisplay1} number={1} setFinish={setFinish} /> :
                            countPages === 2 ?
                                <Page5Part2
                                    reportMethods={reportMethods}
                                    setFinish={setFinish}
                                    showArrow={showArrow}
                                    setshowArrow={setshowArrow}
                                    triangleIndex={triangleIndex}
                                    setTriangleIndex={setTriangleIndex}
                                    triangleCount={triangleCount}
                                    setTriangleCount={setTriangleCount}
                                    reportIndex={reportIndex}
                                    setReportIndex={setReportIndex} /> :
                                <OpenQuestion question={questions[1]} textValue2={textValue2} setTextValue2={setTextValue2} changeDispaly2={changeDispaly2} setChangeDisplay2={setChangeDisplay2} number={2} setFinish={setFinish} />
                }
            </div>
        </div>
    )
}
