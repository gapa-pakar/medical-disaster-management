import React, { useEffect, useState } from 'react'
import './Quiz.css'

export default function Quiz(props) {

    const { quiz, setFinish } = props;

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    const [isClicked, setIsClicked] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    const { questions } = quiz
    const { question, choices, correctAnswer, correctIndex } = questions[activeQuestion]

    const onClickNext = () => {
        setIsClicked(true);
        setIsWaiting(true);
        document.getElementById(`answer_${correctIndex}`).classList.add("correct-answer");
        if (correctIndex !== selectedAnswerIndex) {
            document.getElementById(`answer_${selectedAnswerIndex}`).classList.add("wrong-answer");
        }

        setTimeout(() => {
            setSelectedAnswerIndex(null);
            setIsWaiting(false);
            setResult((prev) =>
                selectedAnswer
                    ? {
                        ...prev,
                        score: prev.score + 5,
                        correctAnswers: prev.correctAnswers + 1,
                    }
                    : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
            )
            if (activeQuestion !== questions.length - 1) {
                setActiveQuestion((prev) => prev + 1)
            } else {
                setActiveQuestion(0);
                setShowResult(true);
                setFinish(true);
            }
        }, 3000);
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        setIsClicked(false);
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

    useEffect(() => {
        setFinish(false);
    }, [])

    return (
        <div className='center-quiz'>
            <div className="quiz-container">
                {!showResult ? (
                    <div>
                        <div>
                            <div className="loading-bar">
                                <div className="loading-bar-progress" id="loading-bar-progress" style={{ width: `${((activeQuestion) * 100) / quiz.questions.length}%` }}></div>
                            </div>
                            <span className="active-question-no">
                                {addLeadingZero(activeQuestion + 1)}
                            </span>
                            <span className="total-question">
                                /{addLeadingZero(questions.length)}
                            </span>
                        </div>
                        <h2 id='question'>{question}</h2>
                        <ul id='ul'>
                            {choices.map((answer, index) => (
                                <li id={`answer_${index}`}
                                    onClick={isWaiting ? () => { } : () => onAnswerSelected(answer, index)}
                                    key={answer}
                                    className={
                                        selectedAnswerIndex === index ? 'selected-answer' : ''
                                    }
                                    style={{cursor: isWaiting ? 'not-allowed' : 'pointer'}}
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>
                        <div className="flex-right">
                            <button
                                onClick={onClickNext}
                                disabled={isClicked}
                            >
                                {activeQuestion === questions.length - 1 ? 'סיום' : 'בדיקה'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="result">
                        <h1>תוצאה:</h1>
                        <div className='result-container'>
                            <p>מספר שאלות: <span>{questions.length}</span></p>
                            {/* <p> נקודות: <span> {result.score}</span></p> */}
                            <p>תשובות נכונות: <span>{result.correctAnswers}</span></p>
                            <p>תשובות שגויות: <span>{result.wrongAnswers}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
