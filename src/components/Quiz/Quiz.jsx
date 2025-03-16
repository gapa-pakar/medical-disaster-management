import React, { useEffect, useState } from 'react'
import './Quiz.css'

export default function Quiz(props) {

    const { quiz, setFinish } = props;

    const [activeQuestion, setActiveQuestion] = useState(0); // Keeps track of the current question number
    const [selectedAnswer, setSelectedAnswer] = useState(''); // Stores the user's selected answer
    const [showResult, setShowResult] = useState(false); // Determines whether to show results or not
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // Index of selected answer
    const [result, setResult] = useState({
        score: 0, // Tracks the user's score
        correctAnswers: 0, // Counts the correct answers
        wrongAnswers: 0, // Counts the wrong answers
    });
    const [isClicked, setIsClicked] = useState(false); // Prevents multiple clicks on "Next" button
    const [isWaiting, setIsWaiting] = useState(false); // Prevents interaction until the result is shown

    const { questions } = quiz // Destructure questions from quiz prop
    const { question, choices, correctAnswer, correctIndex } = questions[activeQuestion]; // Destructure individual question details

    // Handles the "Next" button click after an answer is selected
    const onClickNext = () => {
        setIsClicked(true); // Disable the button
        setIsWaiting(true); // Disable further interaction while waiting for results
        document.getElementById(`answer_${correctIndex}`).classList.add("correct-answer"); // Highlight the correct answer

        if (correctIndex !== selectedAnswerIndex) {
            document.getElementById(`answer_${selectedAnswerIndex}`).classList.add("wrong-answer"); // Highlight the wrong answer
        }

        setTimeout(() => {
            setSelectedAnswerIndex(null); // Reset selected answer
            setIsWaiting(false); // Allow interaction again

            // Update score and correct/incorrect answers
            setResult((prev) =>
                selectedAnswer
                    ? {
                        ...prev,
                        score: prev.score + 5,
                        correctAnswers: prev.correctAnswers + 1,
                    }
                    : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
            )

            // Move to the next question or show results if it was the last question
            if (activeQuestion !== questions.length - 1) {
                setActiveQuestion((prev) => prev + 1)
            } else {
                setActiveQuestion(0);
                setShowResult(true); // Show the final results
                setFinish(true); // Set finish state to true
            }
        }, 3000); // Wait for 3 seconds before moving to the next question or showing results
    }

    // Handles the answer selection
    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index); // Update the selected answer index
        setIsClicked(false); // Enable the "Next" button
        if (answer === correctAnswer) {
            setSelectedAnswer(true); // Mark the answer as correct 
        } else {
            setSelectedAnswer(false); // Mark the answer as incorrect
        }
    }

    // Helper function to add a leading zero to numbers less than 10
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

    // Set finish state to false on mount
    useEffect(() => {
        setFinish(false);
    }, [])

    return (
        <div className='center-quiz'>
            <div className="quiz-container">
                {!showResult ? (
                    <div>
                        <div>
                            {/* Loading bar to indicate progress */}
                            <div className="loading-bar">
                                <div className="loading-bar-progress" id="loading-bar-progress" style={{ width: `${((activeQuestion) * 100) / quiz.questions.length}%` }}></div>
                            </div>

                            {/* Display current question number and total questions */}
                            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                            <span className="total-question">/{addLeadingZero(questions.length)}</span>
                        </div>

                        {/* Display the current question */}
                        <h2 id='question'>{question}</h2>
                        {/* Display the choices as a list of clickable items */}
                        <ul id='ul'>
                            {choices.map((answer, index) => (
                                <li id={`answer_${index}`}
                                    onClick={isWaiting ? () => { } : () => onAnswerSelected(answer, index)} // Disable interaction during waiting
                                    key={answer}
                                    className={selectedAnswerIndex === index ? 'selected-answer' : ''} // Highlight selected answer
                                    style={{ cursor: isWaiting ? 'not-allowed' : 'pointer' }}
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>

                        {/* "Next" button to go to the next question or show results */}
                        <div className="flex-right">
                            <button
                                onClick={onClickNext}
                                disabled={isClicked} // Disable if the button has been clicked
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
