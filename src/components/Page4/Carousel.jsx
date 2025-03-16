import React, { useEffect, useState } from "react";
import arrowRight from '../../assets/page4-icons/arrow-right.svg'
import arrowLeft from '../../assets/page4-icons/arrow-left.svg'

export const Carousel = (props) => {

    const { ManagersInterfaces, isMobile, setFinish } = props

    const [slide, setSlide] = useState(0);  // Current slide index
    const [count, setCount] = useState(0);  // Counter for slide transitions

    // Function to move to the next slide
    const nextSlide = () => {
        setSlide(slide === ManagersInterfaces.length - 1 ? 0 : slide + 1);      // If it's the last slide, go back to the first one
        setCount((c) => c + 1);                                                 // Increment count after transitioning
    }

    // Function to move to the previous slide
    const prevSlide = () => {
        setSlide(slide === 0 ? ManagersInterfaces.length - 1 : slide - 1);      // If it's the first slide, go to the last one
        setCount((c) => c + 1);                                                 // Increment count after transitioning
    }

    useEffect(() => {
        // useEffect to trigger setFinish when the slide count reaches 3
        if (count === 3) {
            setFinish(true);
        }
    }, [count])

    return (
        <div className={isMobile ? "carousel" : ''}>
            {/* Left arrow button, only visible on mobile */}
            <img
                src={arrowLeft}
                onClick={prevSlide}
                className="arrow1 arrow-left1"
                style={{ display: isMobile ? 'block' : 'none' }}
            />

            {/* Map through the ManagersInterfaces array to display each card */}
            {
                ManagersInterfaces.map((card, index) => {
                    return (
                        <div key={`card_${index}`} className={'card-background-container animation ' + `${isMobile ? slide === index ? "" : "slide-hidden" : ''}`} id={`card_${index}`}>
                            <div className='card-container' style={{ backgroundColor: card.lightColor }}>
                                {/* Section for the card title and description */}
                                <div className='card-section-1' style={{ backgroundColor: card.color }}>
                                    <div className='card-title animation'>{card.title}</div>
                                    <div className='card-description'>{card.description}</div>
                                </div>

                                {/* Section for the list of items */}
                                <div className='section-2-container'>
                                    {
                                        card.list.map((item, index1) => (
                                            <div key={`item_${index1} `} className='item-container' style={{ backgroundColor: card.color }}>
                                                <div className='number-circle-1' style={{ color: card.color }}>
                                                    <div>0{index1 + 1}</div>
                                                </div>
                                                <div className='item-text'>{item}</div>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* Section for the card icon */}
                                <div className='section-3-container'>
                                    <div className='icon-circle'>
                                        <img src={card.icon} className='card-icon' id={`card_icon_${index + 1}`}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* Right arrow button, only visible on mobile */}
            <img src={arrowRight}
                onClick={nextSlide}
                className="arrow1 arrow-right1"
                style={{ display: isMobile ? 'block' : 'none' }}
            />
        </div>
    );
};