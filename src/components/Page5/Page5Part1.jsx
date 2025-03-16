import React, { useEffect, useState } from 'react'

import megaphone from '../../assets/page5-icons/megaphone.svg'

export default function Page5Part1(props) {
    const { channelsInfo, count, setCount, setFinish } = props;

    const [roundedText, setRoundedText] = useState("לחצו בכדי לחשוף את ערוצי הדיווח");
    const roundedTextArray = roundedText.split("");

    // Function to increment the count of visible channels
    const addChannel = () => {
        if (count < 3) {
            setCount(c => c + 1);
        }
    }

    // useEffect to set the finish state when all channels are revealed
    useEffect(() => {
        if (count === 3) {
            setFinish(true);
        } else {
            setFinish(false);
        }
    }, [count])

    return (
        <div>
            <div className='channels-container'>
                {/* Channels Info */}
                <div>
                    {
                        channelsInfo.map((channel, index) => (
                            <div key={`channel_${index}`} className='channels-info-container'>
                                <div
                                    className='channel-container animation'
                                    id={`channel${index + 1}`}
                                    style={{ visibility: (index + 1) <= count ? "visible" : "hidden", animationName: (index + 1) <= count ? 'animate-fade' : '' }}>
                                    <div className='channel-title'>{channel.title}</div>
                                    <div className='channel-description'>{channel.description}</div>
                                    <div className='channel-goals-title'>מטרותיו של הערוץ:</div>
                                    <div className='channel-goals'>{channel.goals}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Arrows with point edges */}
                <div>
                    {
                        channelsInfo.map((arrow, index) => (
                            <div key={`arrow_${index}`}>
                                <div className='point-arrow' id={`arrow${index + 1}`}>
                                    <div className='point'></div>
                                    <div className='arrow-line'></div>
                                    <div className='point'></div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Circle element */}
                <div className='half-circle-1'>
                    <div className='half-circle-2'>
                        <div className='circle-1'>
                            <div className='circled-text'>
                                {
                                    roundedTextArray.map((letter, index) => (
                                        <span key={`letter_${index}`} className={`char${index + 1}`} style={{ transform: `rotate(${-5 + -5 * index}deg)` }}>{letter}</span>
                                    ))
                                }
                            </div>
                            <div className='circle-2'>
                                <button onClick={addChannel}><img src={megaphone} className='megaphone-icon'></img></button>
                                <div className='sound-waves-container'>
                                    <div className='sound-waves' id='sound1'></div>
                                    <div className='sound-waves' id='sound2'></div>
                                    <div className='sound-waves' id='sound3'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
