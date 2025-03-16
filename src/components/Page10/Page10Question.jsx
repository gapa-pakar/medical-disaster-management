
import React, { useEffect, useState } from 'react'

// Array containing information for the questions
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
        width: '27vw'
    },
    question2: {
        title: "אילו פעולות חשוב לבצע לטוות הארוך שמטרתן לייצר צוות אורגני ומיומן יותר?",
        correct: ['שיחת קב"ן כוללת', 'הפקת לקחים מהאירוע'],
        width: '35vw'
    }
}

export default function Page10Question({ setFinish }) {

    const [selected, setSelected] = useState([]); // Tracks selected answers
    const [countCorrect, setCountCorrect] = useState(0); // Tracks correct answers
    const [countWrong, setCountWrong] = useState(0); // Tracks wrong answers
    const [checked, setChecked] = useState(false); // Tracks whether the answer has been checked
    const [question, setQuestion] = useState(questions.question1); // Default question is question1

    // Handler for selecting or deselecting answers
    const selectedAnswer = (event, text) => {
        if (checked === false) { // Only allow selection if the answer has not been checked
            if (!selected.includes(text)) {
                setSelected([...selected, text]); // Add to selected answers
            } else if (selected.length > 0) {
                setSelected(selected.filter(t => t !== text));; // Remove from selected answers if already selected
            }
        }
    }

    // Check if the selected answers are correct and update the score
    const checkAnswer = () => {
        if (checked === false) { // If the answer has not been checked yet
            setChecked(true);
            let count1 = 0;  // Correct answers count
            let count2 = 0;  // Incorrect answers count
            selected.forEach((answer, index) => {
                if (question.correct.includes(answer)) {
                    count1++; // Increment correct count
                } else {
                    count2++; // Increment wrong count
                }
            })
            setCountCorrect(count1);
            setCountWrong(count2);

            if (question === questions.question2) {
                if (count1 === question.correct.length && count2 === 0) {
                    setFinish(true); // If both questions are answered correctly, end the quiz
                }
            }
        } else {
            setChecked(false);  // Reset the check status

            // Move to the next question if the current question is answered correctly
            if (countCorrect === question.correct.length && countWrong === 0) {
                setQuestion(questions.question2)
            }
        }
    }

    // Reset the selected answers and counts when the question changes
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
                    <div className='p10-q-line' style={{ width: question.width }}></div>
                    <div className='p10-q-text'>לחצו על הפעולות הנכונות:</div>

                    {/* Render options as clickable divs */}
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
                                    onClick={() => selectedAnswer((event) => event, element)}
                                >
                                    <div className='options-text'>{element}</div>
                                </div>
                            ))
                        }
                    </div>

                    {/* Display feedback after checking answers */}
                    {
                        checked && (
                            <div className={countCorrect === question.correct.length && countWrong === 0 ? 'p10-correct-m' : 'p10-wrong-m'}>{countCorrect === question.correct.length && countWrong === 0 ? 'כל הכבוד!' : 'כמעט...'}</div>
                        )
                    }

                    {/* Button for checking answers or moving to the next question */}
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
