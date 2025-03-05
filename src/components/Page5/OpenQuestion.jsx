
import React, { useEffect, useState } from 'react'

export default function OpenQuestion(props) {

    const { question, textValue1, setTextValue1, textValue2, setTextValue2, changeDispaly1, setChangeDisplay1, changeDispaly2, setChangeDisplay2, number, setFinish } = props

    const handleTextChange = (event) => {
        if (number === 1) {
            setTextValue1(event.target.value);
        } else {
            setTextValue2(event.target.value);
        }
    }

    const selfCheck = () => {
        if (number === 1) {
            setChangeDisplay1(true);
        } else {
            setChangeDisplay2(true);
        }
        setFinish(true);
    }

    useEffect(() => {
        if (number === 1) {
            if (changeDispaly1 === false) {
                setFinish(false);
            } else {
                setFinish(true);
            }
        } else {
            if (changeDispaly2 === false) {
                setFinish(false);
            } else {
                setFinish(true);
            }
        }
    }, [])

    return (
        <div>
            <div className='question-page5-container'>
                <div className='question-container' id='question-page5'>
                    <div className='follow-up-question'>
                        <h1 className='video-question-title' style={{ color: "#95aed7" }}>{question.title}</h1>
                        <div className='question-line' style={{ width: question.width, borderTopColor: "#95aed7" }}></div>
                        <textarea onChange={handleTextChange} type='text' className='video-text-question' id='textarea-page5'></textarea>
                        {
                            number === 1 ?
                                (textValue1 !== '' && !changeDispaly1 ? <button className='check-yourself-button-5' id='button-page5' onClick={selfCheck}>בדקו את עצמכם</button> : <></>) :
                                (textValue2 !== '' && !changeDispaly2 ? <button className='check-yourself-button-5' id='button-page5' onClick={selfCheck}>בדקו את עצמכם</button> : <></>)
                        }

                    </div>
                </div>
                {/* display none, when clicking on showanswer than true than display block */}
                <div className='answer-div' id='answer-div-5' style={{ display: number === 1 ? (changeDispaly1 ? "block" : "none") : (changeDispaly2 ? "block" : "none") }}>
                    <ul className='answer-text-5'>
                        {
                            question.answer.map((item, index) => (
                                <li key={`item_${index}`}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
