
import React, { useState } from 'react'

export default function ReportsPage(props) {

    const { reportsInfo, setReportDisplay } = props

    const [reportIndex, setReportIndex] = useState(null);

    // Handle report title click to toggle description visibility
    const handleClick = (index) => {
        setReportIndex(index)
    }

    return (
        <div>
            <div className='report-page6-container'>
                {
                    reportsInfo.titles.map((report, index) => {
                        return (
                            <div key={`report_${index}`}>
                                <div className='report-container'>
                                    {/* report title divs */}
                                    <div className='reports-titles-container' style={{ borderColor: reportsInfo.color, color: reportsInfo.color }} onClick={() => handleClick(index)}>
                                        <div className='reports-title-div'>
                                            <div className='reports-title'>{report.title}</div>
                                        </div>
                                    </div>

                                    {/* Arrow indicating selection */}
                                    {
                                        index === reportIndex && (
                                            <div>
                                                <div className='triangle-arrow' style={{ borderTopColor: reportsInfo.color }}></div>
                                            </div>
                                        )
                                    }

                                    {/* Report description section when selected */}
                                    {
                                        index === reportIndex && (
                                            <div className='description-container animation'>
                                                <div className='report-description-page6' style={{ backgroundColor: reportsInfo.color }}>
                                                    <div>{report.description[0]}</div>
                                                    <div>{report.description[1]}</div>
                                                </div>
                                                <div className='report-details'>
                                                    {
                                                        report.includingInfo && (
                                                            <div className='report-details-container'>
                                                                <div className='report-details-title'>הדיווח יכלול</div>
                                                                <div className='details-container'>
                                                                    {
                                                                        report.info.map((info, index1) => (
                                                                            <div key={`info_${index1}`} className='icon-text-container'>
                                                                                <img src={report.icons[index1]} className='report-details-icons' />
                                                                                <div className='report-details-text'>{info}</div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        report.audio && (
                                                            <div className='audio-container'>
                                                                <div className='audio-title'>דיווח לדוגמא:</div>
                                                                <audio src={report.audio} controls></audio>
                                                            </div>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Back Button */}
            <button className='back-button' style={{ '--hover-color': reportsInfo.color }} onClick={() => setReportDisplay(true)}>
                <div>בחזרה למסך הקודם</div>
            </button>
        </div>
    )
}
