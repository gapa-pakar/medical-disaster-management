
import React, { useEffect, useState } from 'react'

export default function Page3Part2(props) {

    const { medicalPeople, setFinish } = props

    const [clicked, setClicked] = useState(false);  // Track if any of the circles was clicked
    const [count, setCount] = useState(0);          // Track how many roles have been clicked (for e-learning option) 

    // Handle click event on the roles
    const handleClick = () => {
        setClicked(true);   // Set clicked state to true when any of the circles is clicked

        // if (count !== 2) {
        if (count < 1) {
            setCount(c => c + 1);  // Increment the count after the first click
        } else {
            setFinish(true);;  // Once the second click happens, set finish to true (for e-learning option) 
        }
        // }
    }

    // Reset the finish state when the component mounts
    useEffect(() => {
        setFinish(false);
    }, [])

    return (
        <div>
            <div className='medical-container-2'>
                {
                    // Mapping through the medicalPeople array to display each role set
                    medicalPeople.map((element, index) => {
                        return (
                            <div key={`role_${index}`}>
                                <div className='medical-menu' style={{ direction: index === 0 ? 'rtl' : 'ltr' }}>

                                    {/* Hidden checkbox for each role with a label that triggers handleClick */}
                                    <input type='checkbox' id={index === 0 ? 'link1' : 'link2'} name='link' hidden></input>
                                    <label htmlFor={index === 0 ? 'link1' : 'link2'} className='roles-circle-label' onClick={handleClick}>

                                        {/* Circle representing each role title */}
                                        <div className='roles-circle-border' id={index === 0 ? 'border1' : 'border2'}>
                                            <div className='roles-title-circle' style={{ backgroundColor: index === 0 ? '#343233' : 'white' }}>
                                                <div className='roles-title' style={{ color: index === 0 ? 'white' : '#343233' }}>{element.title}</div>
                                            </div>
                                        </div>
                                    </label>

                                    <ul className='medical-text-menu'>
                                        {
                                            // Mapping through roles of each element and displaying related information
                                            element.roles.map((role, index1) => (
                                                <li key={index1} id={index === 0 ? `one${index1 + 1}` : `two${index1 + 1}`}>
                                                    <div className='span' style={{ backgroundColor: element.color }}>

                                                        {/* Displaying the role number */}
                                                        <div className='num-circle' id={index === 0 ? 'orange-text' : 'blue-text'}>
                                                            <div className='num-id'>{`0${index1 + 1}`}</div>
                                                        </div>

                                                        {/* Displaying the role text */}
                                                        <div className='medical-roles-text' style={{ color: index === 0 ? "#343233" : "white" }}>
                                                            <div className='medical-roles-title'>{role}</div>
                                                            <div className='medical-roles-description'>{element.description[index1]}</div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                        {/* Additional text after each role list */}
                                        <div className='text1' id={index === 0 ? 'text1-orange' : 'text1-blue'}>{element.additionalText}</div>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Display an instruction text if no role has been clicked */}
            {
                clicked ? <></> : (
                    <div className='medical-people-text'>
                        <div>לחצו על כל אחד מהעיגולים כדי לחשוף את בעלי התפקידים</div>
                        <div className='medical-people-line'></div>
                    </div>
                )
            }
        </div>
    )
}
