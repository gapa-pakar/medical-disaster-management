
import React, { useEffect, useState } from 'react'

export default function Page3Part2(props) {

    const { medicalPeople, setFinish } = props

    const [clicked, setClicked] = useState(false);
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setClicked(true);

        if (count !== 2) {
            if (count < 1) {
                setCount(c => c + 1);
            } else {
                setFinish(true);
            }
        }
    }

    useEffect(() => {
        setFinish(false);
    }, [])

    return (
        <div>
            <div className='medical-container-2'>
                {
                    medicalPeople.map((element, index) => (
                        <div key={`role_${index}`}>
                            <div className='medical-menu' style={{ direction: index === 0 ? 'rtl' : 'ltr' }}>
                                <input type='checkbox' id={index === 0 ? 'link1' : 'link2'} name='link' hidden></input>
                                <label htmlFor={index === 0 ? 'link1' : 'link2'} className='roles-circle-label' onClick={handleClick}>
                                    <div className='roles-circle-border' id={index === 0 ? 'border1' : 'border2'}>
                                        <div className='roles-title-circle' style={{ backgroundColor: index === 0 ? '#343233' : 'white' }}>
                                            <div className='roles-title' style={{ color: index === 0 ? 'white' : '#343233' }}>{element.title}</div>
                                        </div>
                                    </div>
                                </label>

                                <ul className='medical-text-menu'>
                                    {
                                        element.roles.map((role, index1) => (
                                            <li key={index1} id={index === 0 ? `one${index1 + 1}` : `two${index1 + 1}`}>
                                                <div className='span' style={{ backgroundColor: element.color }}>
                                                    <div className='num-circle' id={index === 0 ? 'orange-text' : 'blue-text'}>
                                                        <div className='num-id'>{`0${index1 + 1}`}</div>
                                                    </div>
                                                    <div className='medical-roles-text' style={{ color: index === 0 ? "#343233" : "white" }}>
                                                        <div className='medical-roles-title'>{role}</div>
                                                        <div className='medical-roles-description'>{element.description[index1]}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }

                                    <div className='text1' id={index === 0 ? 'text1-orange' : 'text1-blue'}>{element.additionalText}</div>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* explaining text */}
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
