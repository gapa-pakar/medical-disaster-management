import React, { useEffect, useState } from 'react'

export default function Page8Questions(props) {

    const { questions, questionTitle, questionCorrect, setFinish } = props;

    const [countCheckedAnswers, setCountCheckedAnswers] = useState([]);
    const [firstClick, setFirstClick] = useState(true);
    const [showAnswer, setShowAnswer] = useState(false);
    const [count, setCount] = useState(0);
    const [wrong, setWrong] = useState(0);

    const handleClick = (answer, id) => {
        if (!countCheckedAnswers.includes(id)) {
            setCountCheckedAnswers([...countCheckedAnswers, id]);
            // setCountCheckedAnswers([...countCheckedAnswers, { id: id, answer: answer }]);
        } else {
            const updateArray = countCheckedAnswers.filter(index => index !== id);
            setCountCheckedAnswers(updateArray);
        }

        if (firstClick) {
            setFirstClick(false);
        }
    }

    const checkButton = () => {
        setShowAnswer(!showAnswer);
        setCount(0);
        setWrong(0);
        countCheckedAnswers.forEach(element => {
            if (questions[element - 1].answer) {
                setCount(c => c + 1);
            } else {
                setWrong(c => c + 1);
            }
        })
    }

    useEffect(() => {
        if(count == questionCorrect) {
            setFinish(true)
        } else {
            setFinish(false)
        }
    }, [count])

    return (
        <div>
            <div className='points-question-container'>
                <div className='q-title-container'>
                    <div className='q-title'>{questionTitle}</div>
                    <div className='q-line'></div>
                </div>

                <div className='a-container'>
                    {
                        questions.map((question, index) => {
                            return (
                                <div key={`question_${index}`} className='a-container-1'>
                                    <div className={"a-side-div " + (countCheckedAnswers.includes(question.id) && showAnswer ? question.answer ? 't-correct' : 't-wrong' : '')} >
                                        <div className='a-side-circle' style={{ borderColor: countCheckedAnswers.includes(question.id) && showAnswer ? '#3b3838' : "white" }}>
                                            <input
                                                type='checkbox'
                                                value={question.id}
                                                id={`check${question.id}`}
                                                className='a-side-checkbox'
                                                onClick={() => handleClick(question.answer, question.id)}
                                                disabled={showAnswer}>
                                            </input>
                                            <label
                                                className={'a-check-icon ' + (countCheckedAnswers.includes(question.id) && showAnswer ? 'icon-brown' : "icon-white")}
                                                htmlFor={`check${question.id}`}>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={'a-title-container ' + (countCheckedAnswers.includes(question.id) && showAnswer ? question.answer ? 't-correct' : 't-wrong' : '')}>
                                        <div>{question.title}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {
                    firstClick ? <></> : count === questionCorrect && wrong === 0 ?
                        (
                            <div className='page8-correct-message' style={{ color: "#548235" }}>תשובה נכונה!</div>
                        ) : (
                            <div>
                                <button className='page8-check-button' onClick={checkButton}>{showAnswer ? "לנסות שוב" : "בדיקה"}</button>
                            </div>
                        )
                }

            </div>
        </div>
    )
}
