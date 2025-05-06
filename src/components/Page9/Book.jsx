
import React, { useEffect, useRef, useState } from 'react'
import './Page9.css'

// Importing assets
import documentIcon from '../../assets/page9-icons/document-icon.svg'
import page1 from '../../assets/page9-icons/1.jpg'
import page2 from '../../assets/page9-icons/2.jpg'
import page3 from '../../assets/page9-icons/3.jpg'
import page4 from '../../assets/page9-icons/4.jpg'
import arrowRight from '../../assets/page9-icons/arrow-right-circle.svg'
import arrowLeft from '../../assets/page9-icons/arrow-left-circle.svg'
import document from '../../assets/page9-icons/document.pdf'
import downloadIcon from '../../assets/page9-icons/download-icon.svg'

// Array containng information of the book pages
const pages = [
    [0, 1, 2, 3], // Page IDs (indexing for front pages)
    [ // Front page details
        {
            id: 7,
            title: "מתי נשתמש ובאיזה שלב?",
            description: "בכל מקרה בו פצוע טופל על ידי צוות רפואי צבאי ומפונה לדרג הבא.",
            info: [
                {
                    title: "בצוות",
                    d: "בשלב ה-C"
                },
                {
                    title: "ביחיד",
                    d: "סקר החייאה"
                }
            ],
            class: "side2-title1",
            table: {
                th: ["", "עמודים", "לאן הטופס מועבר"],
                td: [
                    ["קשיח", "כל העמודים", "נע עם הפצוע בדרגים"],
                    ["רך", "עמודים 1-4", "נשאר ביחידה המטפלת"]
                ]
            },
            side: "front",
        },
        {
            id: 5,
            title: 'מעקב טיפול ופינוי למילוי מט"ב',
            class: "side2-title",
            side: "front",
            image: page4
        },
        {
            id: 3,
            title: "מעקב הוראות טיפול",
            class: "side2-title",
            side: "front",
            image: page2
        },
        {
            id: 1,
            title: "טופס 101",
            class: "side1",
            side: "front",
            icon: documentIcon
        }
    ],
    [ // back page details
        {
            id: 8,
            title: '',
            class: "",
            side: "back",
        },
        {
            id: 6,
            title: "תפקידי הטופס",
            description: [
                "כלי תקשורת בין מטפלים",
                "מכיל מידע רפואי חיוני",
                "דיווח שלישותי",
                "מהווה מסמך משפטי"
            ],
            class: "side2-title1",
            side: "back",
        },
        {
            id: 4,
            title: "מעקב טיפול ומדדים למילוי החובש",
            class: "side2-title",
            side: "back",
            image: page3
        },
        {
            id: 2,
            title: "מעבר על הסכמה",
            class: "side2-title",
            side: "back",
            image: page1
        }
    ]
];

export default function Book({ setFinish }) {

    const containerRef = useRef(null);                        // Ref for the container holding the pages
    const [elementsRight, setElementsRight] = useState([]);   // To track the right-side pages
    const [length, setLength] = useState(0);                  // Current page index
    const [z, setZ] = useState(1);                            // z-index for flipping effect
    const [hasUpdated, setHasUpdated] = useState((false));    // To track if pages have been updated

    // useEffect hook to get elements from the container and update state
    useEffect(() => {
        const elements = containerRef.current.getElementsByClassName('right');
        setElementsRight([...elements]);    // Update the state with right page elements
        setLength(elementsRight.length);    // Set the length of the pages
        setHasUpdated(true);                // Indicate that updates have happened
    }, [hasUpdated])

    // useEffect hook to reset finish state on mount
    useEffect(() => {
        setFinish(false)
    }, [])

    // Function to turn pages to the right (next page)
    const turnRight = () => {
        if (hasUpdated) {
            if (length >= 0) {
                setLength(l => l - 1); // Decrease length to turn the page
                if (length === 0) {
                    setFinish(true); // If on the last page, set finish to true
                }
            } else {
                setLength(elementsRight.length - 1); // Reset length to the last page if it's out of bounds
                function sttmot(i) {
                    setTimeout(() => {
                        elementsRight[i].style.zIndex = "auto"; // Reset z-index after the flip animation
                    }, 300);
                }

                for (var i = 0; i < elementsRight.length; i++) {
                    elementsRight[i].className = "right"; // Reset the class of each page
                    sttmot(i);
                    setZ(1); // Reset z-index
                }
            }

            elementsRight[length - 1].classList.add("flip");    // Add flip class to the current page for animation
            setZ(c => c + 1);                               // Increase z-index to ensure proper layer stacking
            elementsRight[length - 1].style.zIndex = z;         // Set the new z-index for the flipped page
        }
    }

    // Function to turn pages to the left (previous page)
    function turnLeft() {
        if (length < elementsRight.length + 1) {
            setLength(l => l + 1); // Increase length to turn to the next page
        }
        else {
            setLength(1); // Reset to the first page if we've exceeded the bounds
            for (var i = elementsRight.length - 1; i > 0; i--) {
                elementsRight[i].classList.add("flip"); // Flip the pages in reverse order
                elementsRight[i].style.zIndex = elementsRight.length + 1 - i;
            }
        }
        elementsRight[length].className = "right"; // Reset the class for the last page
        setTimeout(() => {
            elementsRight[length].style.zIndex = "auto"; // Reset z-index after flip animation
        }, 350);
    }

    return (
        <div className='page9-subtopic-container'>
            <div className="book-section" ref={containerRef}>
                <div className="book-container">
                    {
                        // Loop through pages array and render each page
                        pages[0].map((page, index) => {
                            return (
                                // Book page element
                                <div className="right" key={`page_${index}`}>
                                    {/* Front page (page on the left) */}
                                    <figure className="front" id={index === 3 ? 'cover' : ''}>
                                        {/* Page content */}
                                        <div className='fb-page'>
                                            <h1 className={pages[1][index].class}>{pages[1][index].title}</h1>
                                            <img src={pages[1][index].icon ? pages[1][index].icon : pages[1][index].image} className={pages[1][index].icon ? 'front-icon' : 'fb-image'}></img>

                                            {/* Page content for the last page */}
                                            {
                                                index === 0 && (
                                                    <div className='front-roles'>
                                                        <div className='stage-d'>{pages[1][index].description}</div>
                                                        <div>
                                                            {
                                                                pages[1][index].info.map((d1, index2) => (
                                                                    <div key={`d1_${index2}`} className='d-container'>
                                                                        <div className='d-number'>{d1.title}</div>
                                                                        <div className='d-text'>{d1.d}</div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                        {/* Table section */}
                                                        <div className="side2-title1">עותק קשיח ועותק רך</div>
                                                        <table id='table'>
                                                            {
                                                                pages[1][index].table.th.map((t, index3) => {
                                                                    return (
                                                                        <tbody key={`t_${index3}`}>
                                                                            <tr id='tr'>
                                                                                {
                                                                                    pages[1][index].table.th.map((t1, index4) => {
                                                                                        return (
                                                                                            index3 === 0 ? (
                                                                                                <th key={`th_${index4}`} id='th'>{t1}</th>
                                                                                            ) : (
                                                                                                <td key={`td_${index4}`} id='td'>{pages[1][index].table.td[index3 - 1][index4]}</td>
                                                                                            )
                                                                                        )
                                                                                    })

                                                                                }
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                })
                                                            }
                                                        </table>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <button onClick={turnRight} className='next'><img src={arrowLeft}></img></button>
                                    </figure>

                                    {/* Back page (pages on the right) */}
                                    <figure className="back" id={index === 0 ? 'back-cover' : ''}>
                                        {/* Page content */}
                                        <div className='fb-page'>
                                            <h1 className={pages[2][index].class}>{pages[2][index].title}</h1>
                                            <img src={pages[2][index].icon ? pages[2][index].icon : pages[2][index].image} className={pages[2][index].icon ? 'front-icon' : 'fb-image'}></img>

                                            {/* Page content for the last page */}
                                            {
                                                index === 1 && (
                                                    <div className='back-roles'>
                                                        {
                                                            pages[2][index].description.map((d, index1) => (
                                                                <div key={`d_${index1}`} className='d-container'>
                                                                    <div className='d-number'>{`0${index1 + 1}`}</div>
                                                                    <div className='d-text'>{d}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <button onClick={turnLeft} className='previous'><img src={arrowRight}></img></button>
                                    </figure>
                                </div>
                            )
                        })
                    }
                </div>
                <br />
            </div>

            <div className='download-document'>
                <a href={document} download='טופס 101' className='download-container'>
                    <img src={downloadIcon} alt='download' className='download-icon'/>
                </a>
                <p>להורדת הטופס</p>
            </div>
        </div>
    )
}
