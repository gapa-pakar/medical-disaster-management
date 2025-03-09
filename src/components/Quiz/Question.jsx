
import React, { useEffect, useState } from 'react'
import '../Page2/Page2.css'
import Link from '../Link';



export default function Question(props) {

    const { briefingInfo, info, page, setFinish } = props

    const [watchedVideo, setWatchedVideo] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [textValue, setTextValue] = useState('')
    const [changeDispaly, setChangeDisplay] = useState(false)

    // qrong answer message from component if clicked no for example: "התדרוך לא הועבר בצורה מיטבית"


    const moveToQuestion = () => {
        setWatchedVideo(true);
    }

    const checkAnswer = (value) => {
        setCorrectAnswer(value);
    }

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    }

    const selfCheck = () => {
        setChangeDisplay(true);
        setFinish(true);
    }

    useEffect(() => {
        setFinish(false);
    }, [])

    return (
        <div id={page === 6 ? 'page6-p-container' : ''}>
            {
                watchedVideo ?
                    (
                        <div>
                            <div className='video-question-screen'>
                                <div>
                                    <div className='video-question-container'>
                                        <div>
                                            <h1 className='video-question-title'>{info.question1}</h1>
                                            <div className='question-line' style={{ width: "20rem" }}></div>
                                            <div className='video-yn-buttons'>
                                                <button className={correctAnswer === false ? 'button-yn-false button-yn' : 'button-yn'} onClick={() => checkAnswer(false)}>כן</button>
                                                <button className={correctAnswer ? 'button-yn-true button-yn' : 'button-yn'} onClick={() => checkAnswer(true)}>לא</button>
                                                {/* add conditianal and only after click, maybe text color variable */}
                                                {
                                                    correctAnswer !== null ?
                                                        (<div style={{ color: correctAnswer ? "#548235" : "#ff5757" }}>{correctAnswer ? 'תשובה נכונה!' : info.wrongMessage}</div>
                                                        ) : (<></>)
                                                }
                                            </div>
                                        </div>
                                        {
                                            correctAnswer !== null ?
                                                (<div className='follow-up-question'>
                                                    <h1 className='video-question-title'>{info.question2}</h1>
                                                    <div className='question-line' style={{ width: "14rem" }}></div>
                                                    <textarea onChange={handleTextChange} type='text' className='video-text-question'></textarea>
                                                    {
                                                        textValue !== '' && !changeDispaly ? <button className='check-yourself-button' onClick={selfCheck}>בדקו את עצמכם</button> : <></>
                                                    }
                                                </div>) : <></>
                                        }
                                    </div>
                                    {/* visibility hidden, when clicking on showAnswer than visibility visible */}
                                    <div className='answer-div' style={{ visibility: changeDispaly ? "visible" : "hidden" }}>
                                        <div className='answer-text'>{info.correctAnswer}</div>
                                    </div>
                                </div>
                                {/* video at question screen */}
                                <div>
                                    <video className='video-placing-small' src={info.video} controls></video>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='page2-p-container'>
                                <div className='page2-p'>{info.videoTitle}</div>
                                <div className='line' id='line-page2-part2'></div>
                            </div>
                            {page === 2 ?
                                (<div className='reminder-line' style={{ backgroundImage: "linear-gradient(to right, #10214c, #02aecc)" }}></div>) : <></>
                            }
                            <div className='reminders-container'>
                                {
                                    briefingInfo.map((card, index) => (
                                        <div key={`video_${card.id}`}>
                                            <div>
                                                <div className='title-reminder' style={{ backgroundColor: card.color }}>{card.title}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            
                            <div className='video-container'>
                                {/* video screen */}
                                <div>
                                    <video className='video-placing' src={info.video} controls ></video>
                                </div>
                                {/* the button should appear only after watching the video */}
                                <button className='video-next-button' onClick={moveToQuestion}>הבא</button>
                                <p className='video-button-instractions'>לחצו כאן כדי להגיע לשאלה, תוכלו לצפות בסרטון גם בעמוד הבא</p>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
