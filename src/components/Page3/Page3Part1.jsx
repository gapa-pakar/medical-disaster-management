import React from 'react'

export default function Page3Part1(props) {

    const { medicalOrder } = props

    return (
        <div>
            {/* fisrt and second section the "נפה, חמ"ל ומג"ד" section */}
            <div className='medical-order-container'>
                {
                    medicalOrder[0].map((element) => (
                        <div key={element.color} className='elements-container'>
                            <div className='role-container' style={{ backgroundColor: element.color, width: "70rem" }}>
                                <div className='role-title'>{element.title}</div>
                                <div className='roles' style={{ color: element.color }}>{element.roles}</div>
                            </div>

                            {/* fisrt section arrow */}
                            {
                                element.id === 1 ? <div className='triangle-down' style={{ borderTopColor: element.color }}></div> : <></>
                            }
                        </div>
                    ))
                }

                {/* second section arrows */}
                <div className='section-container' style={{ width: "70rem" }}>
                    {
                        medicalOrder[1][0].title.map((element, index) => (
                            <div key={`triangle_${index}`}>
                                <div className='triangle-down' style={{ borderTopColor: medicalOrder[0][1].color }}></div>
                            </div>
                        ))
                    }
                </div>

                {/* third section the "פלוגות" section */}
                <div className='section-container' style={{ width: "70rem", justifyContent: "space-between" }}>
                    {
                        medicalOrder[1][0].title.map((element, index) => (
                            <div key={`lightblue_${index}`}>
                                <div>
                                    <div className='role-container' style={{ backgroundColor: medicalOrder[1][0].color, width: "22rem", padding: "2rem 0rem" }}>
                                        <div className='role-title'>{element}</div>
                                        <div className='roles' style={{ color: medicalOrder[1][0].color }}>{medicalOrder[1][0].roles[index]}</div>
                                    </div>

                                    {/* third section arrows */}
                                    <div className='section-container-2'>
                                        {
                                            medicalOrder[1][1].title.map((arrow, i) => (
                                                <div className='triangle-down' style={{ borderTopColor: medicalOrder[1][0].color }} key={i}></div>
                                            ))
                                        }
                                    </div>

                                    {/* fourth section the "מחלקות" section */}
                                    <div className='section-container-2'>
                                        {
                                            medicalOrder[1][1].title.map((element1, i1) => (
                                                <div className='role-container' key={i1} style={{ backgroundColor: medicalOrder[1][1].color, width: "6rem", padding: "2rem 0rem" }}>
                                                    <div className='role-title'>{element1}</div>
                                                    <div className='roles' style={{ color: medicalOrder[1][1].color }}>{medicalOrder[1][1].roles}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
