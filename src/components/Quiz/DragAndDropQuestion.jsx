
import React, { useEffect, useState } from 'react'

export default function Page7Part2(props) {

    const { snapshotDetails, info, page, setFinish } = props

    // Desktop variables
    const [dragIndex, setDragIndex] = useState("");   // Tracks the current index of the dragged element
    const [count, setCount] = useState(0);            // Keeps count of the correctly dropped elements

    // Mobile devices variables
    const [draggedElement, setDraggedElement] = useState(null);    // Stores the ID of the currently dragged elementt
    const [dropElement, setDropElement] = useState("");            // Stores the ID of the target drop area
    const [droppedArray, setDroppedArray] = useState([]);          // Tracks the IDs of dropped elements
    const [draggedArray, setDraggedArray] = useState([]);          // Tracks the IDs of elements that have been dragged

    // Allow dropping both on mobile and desktop devices
    const allowDrop = (event) => {
        event.preventDefault();  // Prevents the default action to allow for dropping
    }

    // Handle touch movement on mobile devices
    const handleTouchMove = (event, index) => {
        const touch = event.touches[0];    // Get the first touch point
        const x = touch.clientX;          // Get the x-coordinate of the touch
        const y = touch.clientY;         // Get the y-coordinate of the touch

        // Check if the touch is within the allowed window bounds
        if ((x < (window.innerWidth / 1.2) && x > 1) && (y < (window.innerHeight / 1.2) && y > 1)) {
            const selectedElement = document.elementFromPoint(x, y);  // Get the element under the touch point

            // Update the dragged element's position if it's not already in the dragged array 
            // (the dragged array updates only when the element is in the correct drop container, in a fixed position)
            if (!draggedArray.includes(`drag${index}`)) {
                document.getElementById(`drag${index}`).style.left = `${x}px`
                document.getElementById(`drag${index}`).style.top = `${y}px`
            }

            // If the touch is over a drop area, store the ID of the drop area
            if (selectedElement.id) {
                if (selectedElement.id.includes('drop') && !droppedArray.includes(selectedElement.id)) {
                    setDropElement(selectedElement.id);
                }
            }
        }
    }

    // Handle the end of a touch event (when the user drops the element)
    const handleTouchEnd = (event, index) => {
        event.preventDefault(); // Prevents the default behavior
        drop(event, snapshotDetails.subjects[index].answer); // Call the drop function to process the drop
    }

    // Handle the drag event (called when dragging starts)
    const drag = (event, index) => {
        setDraggedElement(`drag${index}`);   // Set the ID of the element being dragged
        setDragIndex(index);                // Set the current index of the dragged element (this is only for desktop)
    }

    // Handle the drop event (called when the dragged element is dropped)
    const drop = (event, dropIndex) => {
        event.preventDefault();  // Prevents the default behavior (important for dropping)

        if (window.innerWidth < 1000) {   // Logic for mobile devices (portrait mode)
            if (dropElement === `drop${dropIndex}`) {   // Check if the dragged element matches the drop area

                // Update the state arrays to track the dragged and dropped elements
                setDraggedArray([...draggedArray, draggedElement])
                setDroppedArray([...droppedArray, `drop${dropIndex}`])

                // Reset the dropElement state
                setDropElement(null);

                // Append the dragged element to the drop area and mark it as dropped
                document.getElementById(`drop${dropIndex}`).appendChild(document.getElementById(draggedElement));
                document.getElementById(draggedElement).className = "dropped"; // Add 'dropped' class that resets the position

                // Check if all items have been moved to the correct drop areas
                if (droppedArray.length === snapshotDetails.subjects.length) {
                    setFinish(true); // Set the finish state to true if all elements are dropped
                }
            }
            
        } else {                                                                // Logic for desktop devices
            if (snapshotDetails.subjects[dragIndex].answer === dropIndex) {     // Check if the answer matches the drop area

                setCount(c => c + 1);  // Increment the count of correctly dropped items
                event.target.appendChild(document.getElementById(draggedElement));   // Append the dragged element to the drop target

                // Check if all items have been correctly moved
                if (count === snapshotDetails.subjects.length - 1) {
                    setFinish(true); // Mark the task as finished if all items are correctly dropped
                }
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

                {/* drop */}
                <div className='drop-divs-container'>
                    {
                        snapshotDetails.subjects.map((subject, index) => {
                            return (
                                <div key={`subject_${index}`} className={`drop-divs-container-${page}`}>
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
                                    onTouchMove={(event) => handleTouchMove(event, index1)}
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
