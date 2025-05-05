
import React, { useEffect, useState } from 'react'
import '../Page2/Page2.css'

export default function Question(props) {

    const { briefingInfo, info, page, setFinish } = props

    const [watchedVideo, setWatchedVideo] = useState(false); // State to track whether the video has been watched
    const [correctAnswer, setCorrectAnswer] = useState(null); // State to track if the user has selected an answer (true/false)
    const [textValue, setTextValue] = useState(''); // State to store the user's text input
    const [changeDispaly, setChangeDisplay] = useState(false); // State to control visibility of the correct answer

    // Function to mark the video as watched and move to the question
    const moveToQuestion = () => {
        setWatchedVideo(true);
    }

    // Function to check the selected answer (true or false)
    const checkAnswer = (value) => {
        setCorrectAnswer(value);
    }

    // Handle changes in the user's text input
    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    }

    // Function to trigger self-check and display the correct answer
    const selfCheck = () => {
        setChangeDisplay(true);
        setFinish(true);
    }

    // Reset finish state when the component mounts
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
                                            {/* Display the first question after video watch */}
                                            <h1 className='video-question-title'>{info.question1}</h1>
                                            <div className='question-line' style={{ width: "20rem" }}></div>

                                            {/* Yes/No buttons */}
                                            <div className='video-yn-buttons'>
                                                <button className={correctAnswer === false ? 'button-yn-false button-yn' : 'button-yn'} onClick={() => checkAnswer(false)}>כן</button>
                                                <button className={correctAnswer ? 'button-yn-true button-yn' : 'button-yn'} onClick={() => checkAnswer(true)}>לא</button>
                                                {/* Show feedback for the selected answer */}
                                                {
                                                    correctAnswer !== null &&
                                                    (<div style={{ color: correctAnswer ? "#548235" : "#ff5757" }}>{correctAnswer ? 'תשובה נכונה!' : info.wrongMessage}</div>)
                                                }
                                            </div>
                                        </div>

                                        {/* Follow-up question and input after selecting the first answer */}
                                        {
                                            correctAnswer !== null &&
                                            (<div className='follow-up-question'>
                                                <h1 className='video-question-title'>{info.question2}</h1>
                                                <div className='question-line' style={{ width: "14rem" }}></div>
                                                <textarea onChange={handleTextChange} type='text' className='video-text-question'></textarea>
                                                {/* Button to allow self-check after text input */}
                                                {
                                                    textValue !== '' && !changeDispaly ? <button className='check-yourself-button' onClick={selfCheck}>בדקו את עצמכם</button> : <></>
                                                }
                                            </div>)
                                        }
                                    </div>

                                    {/* Display the correct answer after self-check */}
                                    <div className='answer-div' style={{ visibility: changeDispaly ? "visible" : "hidden" }}>
                                        <div className='answer-text'>{info.correctAnswer}</div>
                                    </div>
                                </div>

                                {/* Video at the question screen */}
                                <div>
                                    <video className='video-placing-small' controls preload='auto'>
                                        <source src={info.video} type="video/mp4"></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {/* Initial video section before watching */}
                            <div className='page2-p-container'>
                                <div className='page2-p'>{info.videoTitle}</div>
                                <div className='line' id='line-page2-part2'></div>
                            </div>
                            {page === 2 &&
                                (<div className='reminder-line' style={{ backgroundImage: "linear-gradient(to right, #10214c, #02aecc)" }}></div>)
                            }

                            {/* Render briefing info (reminders) */}
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
                                {/* Video container with video and next button */}
                                <div>
                                    <video className='video-placing' controls preload='auto'>
                                        <source src={info.video} type="video/mp4"></source>
                                    </video>
                                </div>

                                {/* Button to move to the question screen after watching the video */}
                                <button className='video-next-button' onClick={moveToQuestion}>הבא</button>
                                <p className='video-button-instractions'>לחצו כאן כדי להגיע לשאלה, תוכלו לצפות בסרטון גם בעמוד הבא</p>
                            </div>
                        </div>
                    )
            }
        </div >
    )
}
