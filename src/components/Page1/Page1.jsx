import React, { useEffect } from 'react'
import Page1Part1 from './Page1Part1'
import Page1Part2 from './Page1Part2'
import Quiz from '../Quiz/Quiz'
import './Page1.css'

// The 'quiz' object contains the quiz data (questions, answers, etc.)
const quiz = {
    topic: 'מבוא למנהלי אירוע',
    totalQuestions: 4,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
        {
            question:
                'מהו אירוע רפואי מורכב?',
            choices: [
                'אירוע רפואי בו נדרשת התערבות מצילת חיים לבלתי יציבים.',
                'אירוע אגמ"י בו נדרשת התערבות מצילת חיים ליציבים.',
                'אירוע רפואי בו נדרשת התערבות מצילת חיים ליציבים.',
                'הבנת נתוני האירוע ועיבודם למשמעויות ופעולות.'
            ],
            correctAnswer: 'אירוע רפואי בו נדרשת התערבות מצילת חיים לבלתי יציבים.',
            correctIndex: 0
        },
        {
            question:
                'מהו ניהול אירוע רפואי?',
            choices: [
                '1הבנת נתוני האירוע ועיבודם למשמעויות ופעולות.',
                'מספר פעולות לטובת מענה לאירוע רפואי.',
                'ריכוז כלל ממצאי האירוע לכדי דיווח אחד מתכלל. ',
                'הבנת נתוני האירוע ועיבודם למשמעויות ופעולות.'
            ],
            correctAnswer: 'הבנת נתוני האירוע ועיבודם למשמעויות ופעולות.',
            correctIndex: 3
        },
        {
            question:
                'מהי תמונת מצב?',
            choices: [
                'סבב שיש לבצע על מנת למנות מספר נפגעים לכודים.',
                'ריכוז כלל ממצאי האירוע לכדי דיווח אחד מתכלל.',
                'קבלת החלטות על רלוונטיות החומר וחשיבותו.',
                'זיהוי העובדות הנכונות מתוך כלל הידיעות.',
            ],
            correctAnswer: 'ריכוז כלל ממצאי האירוע לכדי דיווח אחד מתכלל.',
            correctIndex: 1
        },
        {
            question:
                'מהו משולש הזהב?',
            choices: [
                'שלוש פעולות שיש לעשות בעת חילוץ הפצוע.',
                'צורה גיאומטרית המסמלת את הכוחות הפועלים באירוע הרס.',
                'סבב נפגעים לכודים אשר מתבצע ע"י 3 גורמים מקצועיים שמבוצע על כל לכוד בנפרד.',
                'משולש שבעזרתו ממיינים ומעריכים את אמינות מצב הלכודים.'
            ],
            correctAnswer: 'סבב נפגעים לכודים אשר מתבצע ע"י 3 גורמים מקצועיים שמבוצע על כל לכוד בנפרד.',
            correctIndex: 2
        },
    ],
}

export default function Page1(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    // useEffect hook to set max pages and link name when the component mounts
    useEffect(() => {
        setMaxPages(2);
        setLinkName("/page2");
    }, [])

    return (
        <div className='page1-container'>
            {countPages === 0 ?
                <Page1Part1></Page1Part1> :
                countPages === 1 ?
                    <Page1Part2></Page1Part2> :
                    <Quiz quiz={quiz} setFinish={setFinish}></Quiz>
                }
        </div>
    )
}
