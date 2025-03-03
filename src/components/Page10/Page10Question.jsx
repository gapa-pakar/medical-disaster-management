
import React, { useEffect, useState } from 'react'

const questions = {
    options: [
        "פינוי חללים",
        "ירוק וכתום בעיניים",
        'שיחת קב"ן כוללת',
        "הפקת לקחים מהאירוע",
        "חזרה לכוננות וכשירות"
    ],
    colors: ["#2c599d", "#5c83c4", "#7f9dcf", "#fe6e00", "#ff8303"],
    question1: {
        title: "אילו פעולות יש לבצע על מנת להיות מוכנים לאירוע נוסף?",
        correct: ["פינוי חללים", "ירוק וכתום בעיניים", "חזרה לכוננות וכשירות"],
    },
    question2: {
        title: "אילו פעולות חשוב לבצע לטוות הארוך שמטרתן לייצר צוות אורגני ומיומן יותר?",
        correct: ['שיחת קב"ן כוללת', 'הפקת לקחים מהאירוע'],
    }
}


export default function Page10Question({ setFinish }) {

    const [selected, setSelected] = useState([]);
    const [countCorrect, setCountCorrect] = useState(0);
    const [countWrong, setCountWrong] = useState(0);
    const [checked, setChecked] = useState(false);
    const [question, setQuestion] = useState(questions.question1)

    const selectedAnswer = (event, text) => {
        if (checked === false) {
            if (!selected.includes(text)) {
                setSelected([...selected, text]);
            } else if (selected.length > 0) {
                setSelected(selected.filter(t => t !== text));
            }
        }
    }

    const checkAnswer = () => {
        if (checked === false) {
            setChecked(true);
            let count1 = 0
            let count2 = 0
            selected.forEach((answer, index) => {
                if (answer === question.correct[index]) {
                    count1++;
                } else {
                    count2++;
                }
            })
            setCountCorrect(count1);
            setCountWrong(count2);

            if (question === questions.question2) {
                if (count1 === question.correct.length && count2 === 0) {
                    setFinish(true);
                }
            }
        } else {
            setChecked(false);

            if (countCorrect === question.correct.length && countWrong === 0) {
                setQuestion(questions.question2)
                console.log("hello")
            }
        }
    }

    useEffect(() => {
        setSelected([]);
        setCountCorrect(0);
        setCountWrong(0);
        setChecked(false);
    }, [question])

    useEffect(() => {
        setFinish(false);
    }, [])
    
    return (
        <div>
            <div className='page10-container'>
                <div className='p10-q-container'>
                    <h1 className='p10-q-title'>{question.title}</h1>
                    <div className='p10-q-line'></div>
                    <div className='p10-q-text'>לחצו על הפעולות הנכונות:</div>
                    <div className='options-container'>
                        {
                            questions.options.map((element, index) => (
                                <div key={index} id={index + 1}
                                    className={'options-bg'}
                                    style={{
                                        backgroundColor: selected.includes(element) ? questions.colors[index] : '#a6a6a6',
                                        color: selected.includes(element) ? questions.colors[index] : '#a6a6a6',
                                        borderColor: checked && selected.includes(element) ? question.correct.includes(element) ? '#548235' : '#ff5757' : 'transparent',
                                    }}
                                    onClick={() => selectedAnswer(event, element)}
                                >
                                    <div className='options-text'>{element}</div>
                                </div>
                            ))
                        }
                    </div>
                    {
                        checked ? (
                            <div className={countCorrect === question.correct.length && countWrong === 0 ? 'p10-correct-m' : 'p10-wrong-m'}>{countCorrect === question.correct.length && countWrong === 0 ? 'כל הכבוד!' : 'כמעט...'}</div>
                        ) : <></>
                    }
                    <button
                        className='p10-check-button'
                        style={{ visibility: question === questions.question2 && countCorrect === question.correct.length && countWrong === 0 ? 'hidden' : 'visible' }}
                        onClick={checkAnswer}
                    >
                        {countCorrect === question.correct.length && countWrong === 0 ? 'לשאלה הבאה' : checked ? 'לנסות שוב' : 'בדיקה'}
                    </button>
                </div>
            </div>
        </div>
    )
}
