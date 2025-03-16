import React, { useEffect } from 'react'
import './Page7.css'
import Page7Part1 from './Page7Part1'
import DragAndDropQuestion from '../Quiz/DragAndDropQuestion'

// Array containing information for page 7 part 1
const snapshotDetails = {
    title: "תמונת מצב",
    description: [
        "תהליך מבצעי מתמשך שתכליתו איסוף נתונים ותוצרים של תהליכים מבצעיים אשר מרכיבים את תמונת המצב.",
        "מכלול הנתונים (הגורמים המשפיעים) הדרושים לשם תכנון או לשם ניהול שוטף של משימה."
    ],
    additionalText: "על סמך נתונים אלה יקבל המפקד החלטות לגבי דרכי הפעולה הנדרשות לביצוע המשימה.",
    subjects: [
        {
            id: 1,
            title: "איסוף נתונים",
            description: "הצגת הדרישות לנתונים ואיסוף נתונים בצורה יזומה מן המקורות השונים.",
            color: "#3877c0",
            colorAfter: "#1a3b70",
            answer: 0
        },
        {
            id: 2,
            title: "עיבוד החומר",
            description: "מיונו, אימותו, הערכת אמינותו ועדכניותו.",
            color: "#1a3b70",
            colorAfter: "#3877c0",
            answer: 1,
        },
        {
            id: 3,
            title: "ניתוח החומר",
            description: "זיהוי העובדות הנכונות מתוך כלל הידיעות.",
            color: "#3877c0",
            colorAfter: "#1a3b70",
            answer: 2
        },
        {
            id: 4,
            title: "קבלת החלטות",
            description: 'קבלת החלטות על רלוונטיות החומר וחשיבותו, וכך על אופן ועיתוי שילובו כנתון ב"תמונת המצב".',
            color: "#1a3b70",
            answer: 3
        }
    ]
}

// Array containing information for drag and drop component
const info = {
    title1: "סדרו את השלבים לפי סדר כרונולוגי",
    dropContainerClass: "drop-div",
    title2: "גררו את השלבים לפי הסדר הכרונולוגי:"
}

export default function Page7(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    useEffect(() => {
        setMaxPages(1);
        setLinkName("/page8");
    }, [])

    return (
        <div className='page1-container'>
            {countPages === 0 ? <Page7Part1 snapshotDetails={snapshotDetails} /> : <DragAndDropQuestion snapshotDetails={snapshotDetails} info={info} page={7} setFinish={setFinish} />}
        </div>
    )
}


