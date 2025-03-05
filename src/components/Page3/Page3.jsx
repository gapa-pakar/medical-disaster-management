import React, { useEffect } from 'react'
import './Page3.css'
import Page3Part1 from './Page3Part1'
import Page3Part2 from './Page3Part2'
import DragAndDropQuestion from '../Quiz/DragAndDropQuestion'

const medicalOrder = [
    [
        {
            id: 1,
            title: 'נפה',
            roles: 'קר"פ נפה',
            color: '#3b3838'
        },
        {
            id: 2,
            title: 'חמ"ל מג"ד',
            roles: 'מ"פ, סמ"פ, קשר, רס"פ, נהג מ"פ, נהג משאית',
            color: '#265795'
        }
    ],
    [
        {
            id: 3,
            title: ["פלוגה א'", "פלוגה ב'", "פלוגה ג'"],
            roles: [
                'מט"ב, מנ"א, חובש AB, חובש C, נהג אמבולנס',
                'מט"ב, מנ"א, חובש AB, חובש C, נהג אמבולנס',
                'ממ"ב, מנ"א, חובש AB, חובש C, נהג אמבולנס'
            ],
            color: '#3376bc'
        },
        {
            id: 4,
            title: ["מחלקה 1", "מחלקה 2", "מחלקה 3"],
            roles: 'חובש',
            color: '#fc9928'
        }
    ]
]

const medicalPeople = [
    {
        id: 1,
        title: "בעלי תפקידים צבאיים",
        roles: [
            'מפקד אירוע',
            'מפקד רפואי',
            'מש"ק / קצין אוכלוסייה',
            'מהנדס',
            'אנו"ח',
            'קשר'
        ],
        description: [
            'בעל התפקיד האגמ"י הבכיר ביותר שנמצא בזירה.',
            'מטפל רפואי בכיר ביותר באירוע (חובש ומעלה).',
            'אחראי על תשאול נוכחים ליצירת מרשם נפגעים בזירה.',
            'אחראי על בטיחות החילוץ וכנונו בזירה.',
            'אחראי על פינוי והובלת חללים, חלקי אדם והרוגים.',
            'אחראי על העברת דיווחים לרמה הממונה + ווידוא ביצוע הנחיות המפקד'
        ],
        additionalText: 'קשר מדווח אך ורק מה שנאמר על ידי המפקד, אין מידע שעובר לרמה הממונה ללא ידיעת המפקד',
        color: '#fc9928'
    },
    {
        id: 2,
        title: "בעלי תפקידים אזרחיים",
        roles: [
            'כיבוי אש',
            'מד"א (פיקוד 10)',
            'מפקד משטרה',
            'זק"א',
            'רשות מקומית'
        ],
        description: [
            'מקבילים למחלצים, תפקידם חילוץ נפגעים מאירוע (שריפה, הרס).',
            'מנהל הזירה מטעם מד"א, אחראי על החברת כלי פינוי.',
            'אחראי על בידוד הזירה מהסביבה החיצונית וניתוב כלי פינוי.',
            'זיהוי קורבנות אסון.',
            'ביכולתם ליצור קשר עם אנשי מפתח על מנת לבצע פעולות נדרשות מתוקף היכרות עם הסביבה האזרחית והזירה המקומית.'
        ],
        additionalText: 'לדוגמא ניתוק תשתיות',
        color: '#3376bc'
    }
]

const snapshotDetails = {
    subjects: [
        {
            id: 1,
            title: "מקבילים למחלצים, תפקידם חילוץ נפגעים מאירוע (שריפה, הרס).",
        },
        {
            id: 2,
            title: 'מנהל הזירה מטעם מד"א, אחראי על החברת כלי פינוי.',
        },
        {
            id: 3,
            title: "אחראי על בידוד הזירה מהסביבה החיצונית וניתוב כלי פינוי.",
        },
        {
            id: 4,
            title: 'זיהוי קורבנות אסון.',
        },
        {
            id: 5,
            title: 'אמונים על תפעול אירוע חומ"ס במתאר אזרחי.'
        }
    ]
}

const info = {
    title1: "חברו בין התפקיד לאיש הצוות האחראי עליו",
    dropContainerClass: "drop-div-page3",
    titles: ["כיבוי אש", 'מד"א (פיקוד 10)', "מפקד משטרה", 'זק"א', "הגנת הסביבה"],
    title2: "גררו את התפקיד לאיש הצוות המתאים:",
    color: "#3376bc"
}

export default function Page3(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    useEffect(() => {
        setMaxPages(2);
        setLinkName("/page4");
    }, [])

    return (
        <div className='page1-container'>
            {countPages === 0 ? <Page3Part1 medicalOrder={medicalOrder} /> :
                countPages === 1 ? <Page3Part2 medicalPeople={medicalPeople} setFinish={setFinish} /> :
                    <DragAndDropQuestion snapshotDetails={snapshotDetails} info={info} page={3} setFinish={setFinish} />
            }
        </div>
    )
}
