
import React from 'react'

export default function Page9Subjects(props) {

    const { info, setShowSubject } = props;

    // Helper function to render bold text between asterisks (*)
    const renderBoldText = (text) => {
        const boldParts = text.split('*');
        return boldParts.map((part, i) => (
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
        ))
    }

    // Helper function to render text with hashtag (#) and line breaks
    const renderLineBreaks = (text) => {
        const parts = text.split('#');
        return parts.map((part, i) => (
            <div key={i}>
                {i > 0 && <br />} {/*add <br /> after the first part*/}
                {renderBoldText(part)} {/* render bold text for each part */}
            </div>
        ))
    }

    return (
        <div className='page9-subjects-container'>
            {/* Displaying the subject title with a dynamic background color */}
            <div className='page9-subjects-title' style={{ backgroundColor: info.color }}>{info.title}</div>
            {/* <button className='page9-subjects-button' onClick={() => setShowSubject(false)}>בחזרה לעמוד הקודם</button> */}

            {/* Rendering a table with dynamic columns and rows */}
            <table className='table'>
                {
                    info.tcol.map((tcol, index) => {
                        return (
                            <tbody key={index}>
                                <tr className='tr'>
                                    {
                                        info.tr.map((tr1, index1) => (
                                            index === 0 ? (
                                                // Rendering table header cells with dynamic background color
                                                <th key={`th_${index1}`} className='th' style={{ backgroundColor: info.color1 }}>{info.th[index1]}</th>
                                            ) : (
                                                // Rendering table data cells with dynamic background color
                                                <td key={`td_${index1}`} className='td' style={{ backgroundColor: index % 2 !== 0 ? info.color2 : info.color3 }}>
                                                    <div className='td-text'>
                                                        <div>
                                                            {
                                                                info.td[index - 1][index1].map((text, index2) => (
                                                                    <div key={index2}>
                                                                        {renderLineBreaks(text)} {/* use helper function to handle the string proccessing */}
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </td>
                                            )
                                        ))
                                    }
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <div className='page9-table-elements'>
                {
                    // Conditionally rendering the second table if 'info.table2' exists
                    info.table2 && (
                        <table className='table1' style={{ width: info.table2.width }}>
                            <tr>
                                <th className='th1' colSpan={info.table2.colSpan} style={{ backgroundColor: info.color1 }}>{info.table2.title}</th>
                            </tr>
                            {
                                info.table2.td.map((td, index) => (
                                    <tr style={{ backgroundColor: index % 2 === 0 ? info.color2 : info.color3 }}>
                                        {
                                            info.table2.td[index].map((td1, i) => (
                                                <td key={i} className='td1'>{td1}</td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </table>
                    )
                }
                {
                    // Conditionally rendering an image if 'info.image' exists
                    info.image && (
                        <img src={info.image} className='page-image'></img>
                    )
                }
            </div>
        </div>
    )
}
