
import React, { useEffect } from 'react'

export default function Page5Part2(props) {

    const { reportMethods, setFinish, showArrow, setshowArrow, triangleIndex, setTriangleIndex, triangleCount, setTriangleCount, reportIndex, setReportIndex } = props

    // Function to add a new triangle section
    const addTriangleSection = () => {
        setshowArrow(false);
        setTriangleIndex([...triangleIndex, triangleCount - 1]);
        setTriangleCount(c => c - 1);
    }

    // Function to add more info for a specific report method
    const addInfo = (index) => {
        if (!reportIndex.includes(index)) {
            setReportIndex([...reportIndex, index]); // Add the index to the visible reports list
        }
        setshowArrow(true); // Show the arrow for expanding the next section

        // If the last report method is revealed, mark the process as finished (the index is 0 because the triangle is upside down)
        if (index === 0) {
            setFinish(true);
        }
    }

    // useEffect to set the finish state when the last report method is visible
    useEffect(() => {
        if (!reportIndex.includes(0)) {
            setFinish(false);
        }
    }, [])

    return (
        <div>
            <div className='report-page-container'>
                {/* Title */}
                <div className='page5-title-container'>
                    <div className='page5-title'>שיטות הדיווח של הפרל"ג</div>
                    <div className='page5-title-line'></div>
                </div>

                {/* Triangle Section */}
                <div className='triangle-box-shadow'>
                    <div className='triangle-report-container'>
                        {/* Triangle Text */}
                        <div className='triangle-report' id={triangleCount === 2 ? 'triangle1' : triangleCount === 1 ? 'triangle2' : 'triangle3'}>
                            <div>
                                {
                                    reportMethods.map((text, index) => (
                                        <div key={`report_${index}`} style={{ visibility: triangleIndex.includes(index) ? "visible" : "hidden" }}>
                                            <div className='report-text-container' id={`report${index + 1}`}>
                                                <div className='report-title'>{text.title}</div>
                                                <div>{text.description}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Arrow to show more triangle sections */}
                            {
                                showArrow ? <div className='show-report-arrow' id={triangleCount === 2 ? 'show1' : triangleCount === 1 ? 'show2' : 'show3'} onClick={addTriangleSection}></div> : <></>
                            }
                        </div>
                    </div>
                </div>

                {/* Side information */}
                <div className='methods-container'>
                    {
                        reportMethods.map((info, index) => {
                            return (
                                <div key={`info_${index}`} style={{ display: triangleIndex.includes(index) ? "block" : "none" }}>
                                    <div className='side-report-container' id={`side${index + 1}`}>
                                        {/* Text Section */}
                                        <div className='side-report'>
                                            <div className='side-report-text' id={`text${index + 1}`}>
                                                {/* Title section */}
                                                <div className='title-container' id={`title${index + 1}`} style={{ borderColor: info.color }}>
                                                    <div className='report-number'>{info.id}</div>
                                                    <div className='report-vertical-line' style={{ backgroundColor: info.color }}></div>
                                                    <div className='report-side-title' style={{ color: info.color }}>{info.responsible}</div>
                                                </div>

                                                {/* Operations List - Initially Hidden */}
                                                <div style={{ display: reportIndex.includes(index) ? "none" : "block" }}>
                                                    <div className='operations-container' id='operations-container-2' style={{ borderColor: info.color }}>
                                                        <div className='operations-title'>סד"פ</div>
                                                    </div>
                                                    <div className='arrow-down-container' onClick={() => addInfo(index)}>
                                                        <div className='arrow-down' style={{ backgroundColor: info.color }}></div>
                                                        <div className='arrow-triangle' style={{ borderTopColor: info.color }}></div>
                                                    </div>
                                                </div>

                                                {/* List after expanding */}
                                                <div className='operations-container' id='operations-container-1' style={{ borderColor: info.color, display: reportIndex.includes(index) ? "block" : "none" }}>
                                                    <div className='operations-title'>סד"פ</div>
                                                    <ol>
                                                        {
                                                            info.operationsOrder.map((item, index) => (
                                                                <li className='operation-list-item' key={`item_${index}`}>{item}</li>
                                                            ))
                                                        }
                                                    </ol>
                                                </div>
                                            </div>

                                            {/* Line between point and text section */}
                                            <div className='arrow-line-1' style={{ backgroundColor: info.color }}></div>

                                            {/* The arrow point */}
                                            <div className='circle-arrow-1' style={{ backgroundColor: info.color }}>
                                                <div className='circle-arrow-2'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
