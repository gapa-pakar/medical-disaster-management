
import React, { useEffect, useState } from 'react'

// Importing assets (images)
import image1 from '../../assets/page8-icons/1.jpg'
import image2 from '../../assets/page8-icons/2.jpg'
import image3 from '../../assets/page8-icons/3.jpg'
import image4 from '../../assets/page8-icons/4.jpg'
import image5 from '../../assets/page8-icons/5.jpg'

// Array containing information for the pictures and their paths
const pictures = [
    {
        id: 1,
        title: "נקודת הריכוז נמצאת במקום חשוך",
        image: image1
    },
    {
        id: 2,
        title: "אין גישה נוחה לרכבי הצלה לנקודת הריכוז",
        image: image2
    },
    {
        id: 3,
        title: "מקום מואר ומרווח, משטח נחיתה קרוב וצירי פינוי זמינים",
        image: image3
    },
    {
        id: 4,
        title: "נקודת הריכוז רחוקה מדי ממקום האירוע",
        image: image4
    },
    {
        id: 5,
        title: "נקודת הריכוז חופפת עם ציר פינוי",
        image: image5
    }
]

export default function page8Question({ setFinish }) {

    // State variables to manage the user's selection, check status, and answer correctness
    const [selected, setSelected] = useState("");
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState(false);

    // Function to handle the selection of an answer (image)
    const selectedAnswer = (index) => {
        if (checked === false) {
            setSelected(index);
        }
    }

    // Function to check the answer when the user presses the "check answer" button
    const checkAnswer = () => {
        setChecked(!checked)
        if (selected === 2) {
            setCorrect(true);
            setFinish(true);
        } else {
            setCorrect(false);
        }
    }

    // useEffect hook to initialize the finish state when the component mounts
    useEffect(() => {
        setFinish(false); // Set finish to false initially when the component loads
    }, [])

    return (
        <div>
            <div className='page8-q-container'>
                <div className='page8-q-title'>בחרו את התמונה שבה קביעת נקודות הריכוז נעשתה לפי העקרונות המנחים לכך:</div>
                <div className='page8-q-line'></div>
                <div className='images-container-1'>
                    {
                        // Mapping through the 'pictures' array to render each image with its title
                        pictures.map((picture, index) => {
                            return (
                                <div key={index} className='images-container-2'>
                                    <div className='image-container'
                                        onClick={() => selectedAnswer(index)}
                                        style={{ borderColor: selected === index ? checked === false ? '#2c599d' : correct ? '#548235' : '#ff5757' : 'lightgray' }}>
                                        {/* Displaying the image */}
                                        <img className='page8-q-image' src={picture.image} />
                                    </div>

                                    {/* Display the description of the image when it is selected and after checking */}
                                    {<div className='page8-q-text' style={{ visibility: checked && selected === index ? 'visible' : 'hidden', color: correct ? '#548235' : '#ff5757' }}>{picture.title}</div>}
                                </div>
                            )
                        })
                    }
                </div>
                <div></div>

                {/* Conditional rendering for the button or correct answer message */}
                {correct ?
                    <div className='page8-q-correct'>תשובה נכונה!</div> :
                    <button className='page8-check-button' onClick={checkAnswer}>{checked ? 'לנסות שוב' : 'בדיקה'}</button>
                }
            </div>
        </div>
    )
}
