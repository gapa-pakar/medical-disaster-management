import React, { useEffect, useState } from 'react'
import './Page5.css'


import Page5Part1 from './Page5Part1'
import OpenQuestion from './OpenQuestion'
import Page5Part2 from './Page5Part2'


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
        color: '#5fb3ef'
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
        color: '#0bc9d5'
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

const questions = [
    {
        title: 'כתבו מהם ערוצי דיווח מקצועי וחמ"לי:',
        answer: ['ערוץ דיווח מקצועי הוא ערוץ בו עוברים דיווחים על מידע רפואי בציר של מנהל אירוע אל מ"פ הפרל"ג, מ"פ פרל"ג אל הרפואה בנפ"ה ובמחוז.', 'ערוץ דיווח חמ"לי הוא ערוץ בו עוברים דיווחים מהגדודים בשטח אל מפקדת הנפ"ה ומחו"ז בציר חמ"לים.'],
        width: '24rem'
    },
    {
        title: 'מהם האמצעים לדיווח בדרג המחלקה, הפלוגה והגדוד?',
        answer:
            [
                'האמצעים לדיווח בדרג המחלקה הם...',
                'האמצעים לדיווח בדרג בפלוגה הם...',
                'האמצעים לדיווח בדרג הגדוד הם...'
            ],
        width: '27rem'
    }
]

export default function Page5(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    // count the channels info divs
    const [count, setCount] = useState(0);

    // open question variables, located in parent component so it won't restart when pressing the arrows
    const [textValue1, setTextValue1] = useState('');
    const [textValue2, setTextValue2] = useState('');
    const [changeDispaly1, setChangeDisplay1] = useState(false);
    const [changeDispaly2, setChangeDisplay2] = useState(false);

    // page5 part2 variables
    // add arrow to the next triangle section
    const [showArrow, setshowArrow] = useState(false);

    // add next triangle section and next side section
    const [triangleIndex, setTriangleIndex] = useState([2]);
    const [triangleCount, setTriangleCount] = useState(2);

    // side triangle text, add list after pressing the arrow
    const [reportIndex, setReportIndex] = useState([]);

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
