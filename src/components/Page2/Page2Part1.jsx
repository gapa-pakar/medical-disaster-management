import React, { useState } from 'react'

export default function Page2Part1(props) {

    const { briefingInfo, titleInfo, arrowsRight, arrowsLeft, page } = props

     return (
        <div>
            {/* description at the top */}
            <div className='page2-p-container'>
                {
                    titleInfo.pTitle ? (
                        <div className='page2-p-title'>{titleInfo.pTitle}</div>
                    ) : <></>
                }
                <div className='page2-p'>{titleInfo.p1}<br></br>{titleInfo.p2}</div>
                <div className='line' id={page === 2 ? 'line-page2' : 'line-page9'}></div>
            </div>

            {/* cards */}
            <div className={ page === 2 ? 'page2-briefing-container' : 'page9-briefing-container'}>
                {
                    briefingInfo.map((card, index) => (
                        <div key={card.id} className='briefings-container'>
                            <div className='briefing-card animation' id={`b_${card.id}`} style={{ backgroundColor: card.color, height: titleInfo.pTitle ? "8rem" : "" }}>
                                <div className='briefing-number'>{card.id}</div>
                                <div className='briefing-text-container'>
                                    {
                                        card.title ? (
                                            <h1 className='briefing-title' id={`title_${card.id}`} style={{ color: card.color }}>{card.title}</h1>
                                        ) : <></>
                                    }
                                    <p className='briefing-description' style={{ lineHeight: titleInfo.pTitle ? "2" : "" }}>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* element in the middle */}
            <div className='circle-arrows-container'>
                <img src={arrowsRight} className={page === 2 ? 'briefing-arrows-right' : 'briefing-arrows-right-9'}></img>
                <div className={page === 2 ? 'briefing-circle-1' : 'briefing-circle-1-page9'}>
                    <div className={page === 2 ? 'briefing-circle-2' : 'briefing-circle-2-page9'}>
                        <div className={page === 2 ? 'briefing-circle-3' : 'briefing-circle-3-page9'}>
                            <h1>{titleInfo.title}</h1>
                        </div>
                    </div>
                </div>
                <img src={arrowsLeft} className={page === 2 ? 'briefing-arrows-left' : 'briefing-arrows-left-9'}></img>
            </div>
        </div>
    )
}
