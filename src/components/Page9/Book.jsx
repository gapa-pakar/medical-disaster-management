
import React, { useEffect, useRef, useState } from 'react'
import './Page9.css'

import document from '../../assets/page9-icons/document.svg'
import page1 from '../../assets/page9-icons/1.jpg'
import page2 from '../../assets/page9-icons/2.jpg'
import page3 from '../../assets/page9-icons/3.jpg'
import page4 from '../../assets/page9-icons/4.jpg'
import arrowRight from '../../assets/page9-icons/arrow-right-circle.svg'
import arrowLeft from '../../assets/page9-icons/arrow-left-circle.svg'

const pages = [
    [0, 1, 2, 3],
    [
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
            icon: document
        }
    ],
    [
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

    const containerRef = useRef(null)
    const [elementsRight, setElementsRight] = useState([]);
    const [length, setLength] = useState(0);
    const [z, setZ] = useState(1);
    const [hasUpdated, setHasUpdated] = useState((false));
    const [count, setCount] = useState(0);

    useEffect(() => {
        const elements = containerRef.current.getElementsByClassName('right');
        setElementsRight([...elements]);
        setLength(elementsRight.length);
        setHasUpdated(true);

        // if (hasUpdated) {
        //     turnRight();
        // }
    }, [hasUpdated])

    useEffect(() => {
        setFinish(false)
    }, [])

    const turnRight = () => {
        if (hasUpdated) {
            if (length >= 0) {
                setLength(l => l - 1);
                if (length === 0) {
                    setFinish(true);
                }
            } else {
                setLength(elementsRight.length - 1);
                function sttmot(i) {
                    setTimeout(() => {
                        elementsRight[i].style.zIndex = "auto";
                    }, 300);
                }

                for (var i = 0; i < elementsRight.length; i++) {
                    elementsRight[i].className = "right";
                    sttmot(i);
                    setZ(1);
                }
            }

            elementsRight[length].classList.add("flip");
            setZ(c => c + 1);
            elementsRight[length].style.zIndex = z;
        }
    }

    function turnLeft() {
        if (length < elementsRight.length + 1) {
            setLength(l => l + 1);
        }
        else {
            setLength(1);
            for (var i = elementsRight.length - 1; i > 0; i--) {
                elementsRight[i].classList.add("flip");
                elementsRight[i].style.zIndex = elementsRight.length + 1 - i;
            }
        }
        elementsRight[length - 1].className = "right";
        setTimeout(() => {
            elementsRight[length - 1].style.zIndex = "auto";
        }, 350);
    }

    return (
        <div className='page9-subtopic-container'>
            <div className="book-section" ref={containerRef}>
                <div className="book-container">
                    {
                        pages[0].map((page, index) => {
                            return (
                                // book page
                                <div className="right" key={`page_${index}`}>
                                    {/* pages on the left */}
                                    <figure className="front" id={index === 3 ? 'cover' : ''}>
                                        {/* page content */}
                                        <div className='fb-page'>
                                            <h1 className={pages[1][index].class}>{pages[1][index].title}</h1>
                                            <img src={pages[1][index].icon ? pages[1][index].icon : pages[1][index].image} className={pages[1][index].icon ? 'front-icon' : 'fb-image'}></img>

                                            {/* מתי נשתמש בכל שלב page content */}
                                            {
                                                index === 0 ? (
                                                    <div className='front-roles'>
                                                        <div className='stage-d'>{pages[1][index].description}</div>
                                                        <div>
                                                            {
                                                                pages[1][index].info.map((d1, index2) => {
                                                                    return (
                                                                        <div key={`d1_${index2}`} className='d-container'>
                                                                            <div className='d-number'>{d1.title}</div>
                                                                            <div className='d-text'>{d1.d}</div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        {/* table section */}
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
                                                ) : <></>
                                            }
                                        </div>
                                        <button onClick={turnRight} className='next'><img src={arrowLeft}></img></button>
                                    </figure>
                                    {/* pages on the right */}
                                    <figure className="back" id={index === 0 ? 'back-cover' : ''}>
                                        {/* page content */}
                                        <div className='fb-page'>
                                            <h1 className={pages[2][index].class}>{pages[2][index].title}</h1>
                                            <img src={pages[2][index].icon ? pages[2][index].icon : pages[2][index].image} className={pages[2][index].icon ? 'front-icon' : 'fb-image'}></img>

                                            {/* תפקידי הטופס page content */}
                                            {
                                                index === 1 ? (
                                                    <div className='back-roles'>
                                                        {
                                                            pages[2][index].description.map((d, index1) => {
                                                                return (
                                                                    <div key={`d_${index1}`} className='d-container'>
                                                                        <div className='d-number'>{`0${index1 + 1}`}</div>
                                                                        <div className='d-text'>{d}</div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                ) : <></>
                                            }
                                        </div>
                                        <button onClick={turnLeft} className='previous'><img src={arrowRight}></img></button>
                                    </figure>
                                </div>
                            )
                        })
                    }
                </div>

                {/* <div className='buttons-container'>
                    <button onClick={turnLeft} className='previous' style={{visibility: length === elementsRight.length + 1 ? 'hidden' : 'visible'}}><img src={arrowRight}></img></button>
                    <button onClick={turnRight} className='next' style={{visibility: length === -1 ? 'hidden' : 'visible'}}><img src={arrowLeft}></img></button>
                </div> */}
                <br />
            </div>
        </div>
    )
}
