
import React, { useEffect, useState } from 'react'

export default function Page7Part2(props) {

    const { snapshotDetails, info, page, setFinish } = props

    const [isIndex, setIsIndex] = useState("");
    const [count, setCount] = useState(0);

    const allowDrop = (event) => {
        event.preventDefault();
    }

    const drag = (event, index) => {
        event.dataTransfer.setData(`text${index}`, event.target.id);
        setIsIndex(index);
    }

    const drop = (event, index) => {
        if (isIndex === index) {
            setCount(c => c + 1);
            event.preventDefault();
            var data = event.dataTransfer.getData(`text${index}`);
            event.target.appendChild(document.getElementById(data));
            if (count === snapshotDetails.subjects.length - 1) {
                setFinish(true);
            }
        }
    }

    useEffect(() => {
        setFinish(false);
    }, [])

    return (
        <div>
            <div className='snapshot-container'>
                <div className='page7-title-container'>
                    <div>{info.title1}</div>
                    <div className='page7-title-line'></div>
                </div>


                <div className='drop-divs-container'>
                    {
                        snapshotDetails.subjects.map((subject, index) => {
                            return (
                                <div key={`subject_${index}`} className='drop-divs-container-1'>
                                    {
                                        page === 3 ? (
                                            <div className='d-roles-container'>
                                                <div>{info.titles[index]}</div>
                                            </div>
                                        ) : <></>
                                    }

                                    <div
                                        id={page === 7 ? `drop${index + 1}` : ''}
                                        onDrop={() => drop(event, index)}
                                        onDragOver={allowDrop}
                                        className={info.dropContainerClass}
                                        style={{ borderColor: subject.color, "--subject-color": subject.color }}>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='word-bank-container-1' style={{ display: count === snapshotDetails.subjects.length ? "none" : "block" }}>
                    <div className='word-bank-title'>{info.title2}</div>
                    <div className='word-bank-container-2'>
                        {
                            snapshotDetails.subjects.map((element, index1) => {
                                return (
                                    <div key={`element_${index1}`} className='word-container' draggable="true" onDragStart={() => drag(event, index1)} id={`drag${index1}`}>
                                        {
                                            page === 7 ? (
                                                <div className='snapshot-subject-div-1'>
                                                    <div className='snapshot-subject-title' style={{ backgroundColor: "#3b3838" }}>
                                                        <div className='snapshot-text'>{element.title}</div>
                                                    </div>
                                                    <div className='snapshot-subject-description'>{element.description}</div>
                                                </div>
                                            ) : (
                                                <div className='snapshot-subject-div-2'>
                                                    <div>{element.title}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className='correct-message' style={{ display: count === snapshotDetails.subjects.length ? "block" : "none" }}>כל הכבוד!</div>
            </div>
        </div>
    )
}
