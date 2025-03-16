import React, { useEffect } from 'react'
import Book from './Book';
import TrueFalseQuestion from '../Quiz/TrueFalseQuestion'
import './Page9.css'

// Data for the true/false question
const questions = {
    title: "מה השימוש הנעשה בטופס 101?",
    correct: 4,
    info: [
        {
            id: 1,
            title: "תיעוד משפטי וצורכי תחקור בהמשך",
            answer: true
        },
        {
            id: 2,
            title: "דיווח שלישותי של מספר הנפגעים שטופלו בדרג מסוים למטרות סטטיסטיקה",
            answer: true
        },
        {
            id: 3,
            title: 'העברת מידע למפקד היחידה / המג"ד',
            answer: false
        },
        {
            id: 4,
            title: "סימון פצועים אשר נבדקו",
            answer: false
        },
        {
            id: 5,
            title: "העברת מקל בין כוחות רפואיים",
            answer: true
        },
        {
            id: 6,
            title: "תיעוד פרטי הנפגע ומילוי מנגנון הפציעה והטיפול",
            answer: true
        }
    ]
}

export default function Page9Subtopic(props) {

    const { countPages, setMaxPages, setLinkName, setFinish } = props

    useEffect(() => {
        setMaxPages(1);
        setLinkName("/page10");
    }, [])

    return (
        <div className='page1-container'>
            {countPages === 0 ?
                <Book setFinish={setFinish} /> :
                <TrueFalseQuestion questions={questions.info} questionTitle={questions.title} questionCorrect={questions.correct} setFinish={setFinish} />
            }
        </div>
    )
}
