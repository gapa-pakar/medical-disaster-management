import React from 'react'

export default function Page7Part1(props) {

    const { snapshotDetails } = props

    return (
        <div>
            <div className='snapshot-container'>
                {/* Title section */}
                <div className='snapshot-div-container'>
                    <div className='snapshot-title'>{snapshotDetails.title}</div>
                    <div className='snapshot-description-container'>
                        <ol>
                            {
                                snapshotDetails.description.map((element, index) => (
                                    <li key={`snapshot_${index}`}>{element}</li>
                                ))
                            }
                        </ol>
                        <div>{snapshotDetails.additionalText}</div>
                    </div>
                </div>

                {/* Snapshot subjects section */}
                <div className='snapshot-subjects-container'>
                    {
                        snapshotDetails.subjectsInOrder.map((subject, index1) => {
                            return (
                                <div key={`subject_${index1}`} id={`subject${index1 + 1}`}>
                                    <div className='snapshot-subject-div' style={{ borderColor: subject.color }}>
                                        <div className='snapshot-subject-title' style={{ backgroundColor: subject.color }}>
                                            <div className='snapshot-subject-number' style={{ color: subject.color }}>{subject.id}</div>
                                            <div className='snapshot-text'>{subject.title}</div>
                                        </div>
                                        <div className='snapshot-subject-description'>{subject.description}</div>
                                    </div>

                                    {/* Conditionally renders an arrow only for subjects with an id less than 4 */}
                                    {subject.id < 4 &&
                                        <div className='arrow-point-dashed' id={`dashed${index1 + 1}`} style={{ '--color-before': subject.color, '--color-after': subject.colorAfter }}></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
