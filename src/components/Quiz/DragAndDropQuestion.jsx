
import React, { useEffect, useState } from 'react'

export default function Page7Part2(props) {

    const { snapshotDetails, info, page, setFinish } = props

    const [isIndex, setIsIndex] = useState("");
    const [count, setCount] = useState(0);
    const [draggedElement, setDraggedElement] = useState(null); // Track the dragged element
    const [element, setElement] = useState("")

    const allowDrop = (event) => {
        event.preventDefault();
        console.log("hello2")
    }

    // Touch and Mouse Event Handlers for Mobile Support
    const handleTouchMove = (event) => {
        const touch = event.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        const selectedElement = document.elementFromPoint(x, y);

        if (selectedElement.id) {
            setElement(selectedElement);
            console.log(selectedElement.id)
        }
    }

    const handleTouchEnd = (event, index) => {
        event.preventDefault();
        drop(event, snapshotDetails.subjects[index].answer);
    }

    // Handle dragging on both desktop and mobile
    const drag = (event, index) => {
        setDraggedElement(`drag${index}`);
        setIsIndex(index);
    }

    // Handle drop on both desktop and mobile
    const drop = (event, answer) => {
        event.preventDefault();

        if (element.id === `drop${answer}`) {
            setCount(c => c + 1);
            document.getElementById(`drop${answer}`).appendChild(document.getElementById(draggedElement));

            // Check if all items have been moved
            if (count === snapshotDetails.subjects.length - 1) {
                setFinish(true);
            }
        }
    }

    const handl = (event, index) => {
        // if (event.taget)


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

                {/* drop */}
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
                                        id={`drop${index}`}
                                        onDrop={(event) => drop(event, index)}
                                        onDragOver={allowDrop}
                                        onTouchMove={allowDrop}
                                        onTouchEnd={(event) => drop(event, index)}
                                        className={info.dropContainerClass}
                                        style={{ borderColor: subject.color, "--subject-color": subject.color, color: "white" }}>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* drag */}
                <div className='word-bank-container-1' style={{ display: count === snapshotDetails.subjects.length ? "none" : "block" }}>
                    <div className='word-bank-title'>{info.title2}</div>
                    <div className='word-bank-container-2'>
                        {
                            snapshotDetails.subjects.map((element, index1) => (
                                <div
                                    key={`element_${index1}`}
                                    className='word-container'
                                    draggable="true"
                                    onDragStart={(event) => drag(event, index1)}
                                    onTouchStart={(event) => drag(event, index1)}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={(event) => handleTouchEnd(event, index1)}
                                    id={`drag${index1}`}>
                                    {
                                        page === 7 ? (
                                            <div className='snapshot-subject-div-1'>
                                                <div className='snapshot-subject-title' style={{ backgroundColor: "#3b3838" }}>
                                                    <div className='snapshot-text'>{element.title}</div>
                                                </div>
                                                <div className='snapshot-subject-description'>{element.description}</div>
                                            </div>
                                        ) : (
                                            <div className='snapshot-subject-div-2' >
                                                <div>{element.title}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='correct-message' style={{ display: count === snapshotDetails.subjects.length ? "block" : "none" }}>כל הכבוד!</div>
            </div>
        </div>
    )
}
